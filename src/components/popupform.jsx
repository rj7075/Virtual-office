import { useState } from "react";

const CustomPopupForm = ({ formActionUrl, entries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openForm}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Form
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            {/* Custom Form */}
            <form
              action={formActionUrl}
              method="POST"
              target="_blank"
              className="space-y-4"
            >
              <div>
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name={entries.name}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold">City</label>
                <input
                  type="text"
                  name={entries.city}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold">Phone Number</label>
                <input
                  type="tel"
                  name={entries.phone}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomPopupForm;
