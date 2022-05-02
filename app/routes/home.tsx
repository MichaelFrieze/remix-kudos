import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData, Outlet } from '@remix-run/react';
import { requireUserId } from '~/utils/auth.server';
import { Layout } from '~/components/layout';
import { UserPanel } from '~/components/user-panel';
import { getOtherUsers } from '~/utils/user.server';
import { getFilteredKudos } from '~/utils/kudos.server';
import { Kudo } from '~/components/kudo';
import type { Profile, Kudo as IKudo } from '@prisma/client';

interface KudoWithAuthor extends IKudo {
  author: {
    profile: Profile;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);

  const kudos = await getFilteredKudos(userId, {}, {});

  return json({ users, kudos });
};

export default function Home() {
  const { users, kudos } = useLoaderData();

  return (
    <Layout>
      <Outlet />
      <div className="h-full flex">
        <UserPanel users={users} />
        <div className="flex-1 flex flex-col">
          {/* search bar */}
          <div className="flex-1 flex">
            <div className="w-full p-10 flex flex-col gap-y-4">
              {kudos.map((kudo: KudoWithAuthor) => (
                <Kudo key={kudo.id} kudo={kudo} profile={kudo.author.profile} />
              ))}
            </div>
            {/* recent kudo's */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
