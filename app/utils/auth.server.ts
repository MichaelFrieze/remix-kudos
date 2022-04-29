import { json } from '@remix-run/node';
import { prisma } from './prisma.server';
import type { RegisterForm } from './types.server';
import { createUser } from './users.server';

export const register = async (form: RegisterForm) => {
  const exists = await prisma.user.count({ where: { email: form.email } });

  if (exists) {
    return json(
      { error: 'User already exists with that email' },
      { status: 400 }
    );
  }

  const newUser = await createUser(form);

  if (!newUser) {
    return json(
      {
        error: 'Something went wrong trying to create a new user.',
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

  return null;
};
