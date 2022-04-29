import { json, createCookieSessionStorage, redirect } from '@remix-run/node';
import { prisma } from './prisma.server';
import type { RegisterForm, LoginForm } from './types.server';
import { createUser } from './users.server';
import bcrypt from 'bcryptjs';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'kudos-session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const register = async (form: RegisterForm) => {
  const exists = await prisma.user.count({ where: { email: form.email } });

  if (exists) {
    return json(
      { authError: 'User already exists with that email' },
      { status: 400 }
    );
  }

  const newUser = await createUser(form);

  if (!newUser) {
    return json(
      {
        authError: 'Something went wrong trying to create a new user.',
        fields: {
          email: form.email,
          password: form.password,
        },
      },
      {
        status: 400,
      }
    );
  }

  return createUserSession(newUser.id, '/');
};

export const login = async (form: LoginForm) => {
  const user = await prisma.user.findUnique({
    where: { email: form.email },
  });

  if (!user || !(await bcrypt.compare(form.password, user.password))) {
    return json(
      {
        authError: 'Incorrect login',
      },
      { status: 400 }
    );
  }

  return createUserSession(user.id, '/');
};

export const createUserSession = async (userId: string, redirectTo: string) => {
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
};
