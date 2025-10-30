import React, { useState } from "react";

const ContactUs = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white ">
      {/* GRID SECTION */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2  pr-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col text-center justify-center px-12 py-12">
          <h1 className="text-5xl font-bold mb-6 text-black">Contact</h1>

          <p className="text-gray-700 leading-relaxed">
            If you have any questions about your order or need further assistance, you can always contact us at
          </p>

          <p className="text-red-600 font-semibold mb-6">info@inkphyous.com</p>

          <p className="text-gray-700 leading-relaxed">
            Alternatively, please complete the form by selecting a subject and entering your question or comment.
            A member of our Customer Service team will review your message and respond as soon as possible.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative px-12  py-12 border-l border-red-500 flex flex-col justify-center">
          <form className="flex flex-col text-right space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border text-right border-gray-400 px-4 py-2 text-sm text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-0"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border text-right border-gray-400 px-4 py-2 text-sm text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-0"
            />

            <input
              type="email"
              placeholder="Email"
              className="border text-right border-gray-400 px-4 py-2 text-sm text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-0"
            />

            <textarea
              rows="5"
              placeholder="Description"
              className="border text-right border-gray-400 px-4 py-2 text-sm text-gray-700 placeholder-gray-600 resize-none focus:outline-none focus:ring-0"
            ></textarea>

            {/* FILE INPUT */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="truncate">{file ? file.name : "No File Selected"}</span>
              <label className="border border-gray-400 px-3 py-1 cursor-pointer hover:bg-gray-100 transition-all">
                Attach File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* SUBMIT BUTTON CENTERED BELOW BOTH SIDES */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className=" w-[1800px] text-center border border-gray-400 py-2 px-8 text-gray-800 bg-transparent hover:bg-red-500 hover:text-white transition-all duration-300 rounded text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
