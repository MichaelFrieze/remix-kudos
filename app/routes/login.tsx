import { Layout } from '~/components/layout';

export default function Login() {
  return (
    <Layout>
      <div className="h-full flex justify-center items-center flex-col gap-y-4">
        <h2 className="text-5xl font-extrabold text-yellow-300">
          Welcome to Kudos!
        </h2>
        <p className="font-semibold text-slate-300">
          Log In To Give Some Praise!
        </p>

        <form className="rounded-2xl bg-gray-200 p-6 w-96">
          <label htmlFor="email" className="text-blue-600 font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-2 rounded-xl my-2"
          />

          <label htmlFor="password" className="text-blue-600 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 rounded-xl my-2"
          />

          <div className="w-full text-center">
            <input
              type="submit"
              className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
              value="Sign In"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}
