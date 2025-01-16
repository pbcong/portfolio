import { useState } from "react";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-2 flex items-center justify-between">
      <div className="flex space-x-2 relative">
        <a href="mailto:congphamba2005@gmail.com">
          <img
            src="/icons/gmail.svg"
            alt="gmail"
            className="w-7 h-7 bg-white rounded-md p-0.5 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pbcong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="w-7 h-7 bg-white rounded-md p-1"
          />
        </a>
        <a
          href="https://github.com/pbcong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="w-7 h-7 bg-white rounded-md p-0.5"
          />
        </a>
      </div>
      <p className="text-center flex-grow">Made by Cong Pham © 2025</p>
    </footer>
  );
};

export default Footer;
