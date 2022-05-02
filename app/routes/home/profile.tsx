import { Modal } from '~/components/modal';

export default function ProfileSettings() {
  return (
    <Modal isOpen={true} className="w-1/3">
      <div className="p-3">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4">
          Your Profile
        </h2>
        <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2">
          {/* form error goes here */}
        </div>
        <div className="flex">
          <div className="w-1/3">{/* image uploader goes here */}</div>
          <div className="flex-1">
            <form
              method="post"
              onSubmit={(e) =>
                !confirm('Are you sure?') ? e.preventDefault() : true
              }
            >
              {/* form field goes here */}
              {/* select box goes here */}

              <button
                name="_action"
                value="delete"
                className="rounded-xl w-full bg-red-300 font-semibold text-white mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1"
              >
                Delete Account
              </button>
              <div className="w-full text-right mt-4">
                <button
                  name="_action"
                  value="save"
                  className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
