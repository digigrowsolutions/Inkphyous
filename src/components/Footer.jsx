import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black p-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs  tracking-wide">
      <div className=" mb-12">
       
      </div>

      

        <div className="flex flex-wrap justify-center md:justify-end gap-18 text-lg">
            {/* Bottom Section */}
        <select className="bg-transparent outline-none cursor-pointer text-lg border-none focus:ring-0">
          <option>India (INR ₹)</option>
          <option>EAE (EUR €)</option>
        </select>
          <a href="contact" className="hover:opacity-60 transition-opacity hover:underline">
            Contact
          </a>
         
          <a href="/legal" className="hover:opacity-60 transition-opacity hover:underline">
          Legalities
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
