import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black p-12 border-t border-gray-200 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-wide">
      <div className=" mb-12">
        <p className="uppercase text-sm tracking-wider mb-4">
          Join the Conversation
        </p>
        <form className="inline-flex  border-b border-black pb-1">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="bg-transparent outline-none uppercase tracking-widest text-sm px-2 w-56 placeholder-black/70"
          />
          <button
            type="submit"
            className="text-xl font-light hover:opacity-70 transition-opacity"
          >
            →
          </button>
        </form>
      </div>

      

        <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {/* Bottom Section */}
        <select className="bg-transparent outline-none cursor-pointer text-sm border-none focus:ring-0">
          <option>IN (INR ₹)</option>
          <option>USA  (USD $)</option>
          <option>UK (GBP £)</option>
          <option>EU (EUR €)</option>
        </select>
          <a href="#" className="hover:opacity-60 transition-opacity hover:underline">
            Contact
          </a>
         
          <a href="/privacypolicy&termsconditions" className="hover:opacity-60 transition-opacity hover:underline">
          Legal Notices
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity hover:underline">
            Social
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
