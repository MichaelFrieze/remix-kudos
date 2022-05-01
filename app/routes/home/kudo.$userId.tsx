import { json, redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Modal } from '~/components/modal';
import { getUserById } from '~/utils/user.server';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = params;
  if (typeof userId !== 'string') {
    return redirect('/home');
  }

  const user = await getUserById(userId);

  return json({ user });
};

export default function KudoModal() {
  const { user } = useLoaderData();

  return (
    <Modal isOpen={true}>
      <h2>This is a modal</h2>
      <h2>{user.profile.firstName}</h2>
    </Modal>
  );
}
