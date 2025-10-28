import React, { useState } from "react";

const ContactUs = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 border border-gray-300">
        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold mb-6 text-black">Contact</h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about your order or need further
            assistance, you can always contact us at
          </p>
          <p className="text-red-600 font-medium mb-6">info@inkphyous.com</p>

          <p className="text-gray-700 leading-relaxed">
            Alternatively, please complete the form by selecting a subject and
            entering your question or comment. A member of our Customer Service
            team will review your message and respond as soon as possible.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative p-10 border-l border-red-500">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-400 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
            />

            <textarea
              rows="5"
              placeholder="Description"
              className="border border-gray-400 px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-0"
            ></textarea>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {file ? file.name : "No File Selected"}
              </span>
              <label className="border border-gray-400 px-3 py-1 cursor-pointer hover:bg-gray-100">
                Attach File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

          <button
  type="submit"
  className=" hover:border-none border border-gray-400 py-2 mt-2 text-gray-800 bg-transparent hover:bg-red-500 hover:text-white transition-all duration-300 px-4 rounded"
>
  Submit
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
