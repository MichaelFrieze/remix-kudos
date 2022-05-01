import { json, redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Modal } from '~/components/modal';
import { getUserById } from '~/utils/user.server';
import { useLoaderData } from '@remix-run/react';
import { UserCircle } from '~/components/user-circle';
import { useState } from 'react';

export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = params;
  if (typeof userId !== 'string') {
    return redirect('/home');
  }

  const recipient = await getUserById(userId);

  return json({ recipient });
};

export default function KudoModal() {
  const { recipient } = useLoaderData();
  const [formData, setFormData] = useState({
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: e.target.value }));
  };

  return (
    <Modal isOpen={true} className="w-2/3 p-10">
      <form method="post">
        <input type="hidden" value={recipient.id} name="recipientId" />
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0">
          <div className="text-center flex flex-col items-center gap-y-2 pr-8">
            <UserCircle profile={recipient.profile} className="h-24 w-24" />
            <p className="text-blue-300">
              {recipient.profile.firstName} {recipient.profile.lastName}
            </p>
            {recipient.profile.department && (
              <span className="px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto">
                {recipient.profile.department[0].toUpperCase() +
                  recipient.profile.department.toLowerCase().slice(1)}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <textarea
              name="message"
              className="w-full rounded-xl h-40 p-4"
              value={formData.message}
              onChange={(e) => handleChange(e, 'message')}
              placeholder={`Say something nice about ${recipient.profile.firstName}...`}
            />
            <div className="flex flex-col items-center md:flex-row md:justify-start gap-x-4">
              {/* Select Boxes Go Here */}
            </div>
          </div>
        </div>
        <br />
        <p className="text-blue-600 font-semibold mb-2">Preview</p>
        <div className="flex flex-col items-center md:flex-row gap-x-24 gap-y-2 md:gap-y-0">
          {/* The Preview Goes Here */}
          <div className="flex-1" />
          <button
            type="submit"
            className="rounded-xl bg-yellow-300 font-semibold text-blue-600 w-80 h-12 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
          >
            Send
          </button>
        </div>
      </form>
    </Modal>
  );
}
