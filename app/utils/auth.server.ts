import { json } from '@remix-run/node';
import { prisma } from './prisma.server';
import { RegisterForm } from './types.server';

export const register = async (form: RegisterForm) => {
  const exists = await prisma.user.count({ where: { email: form.email } });

  if (exists) {
    return json(
      { error: 'User already exists with that email' },
      { status: 400 }
    );
  }

  // create user
};
