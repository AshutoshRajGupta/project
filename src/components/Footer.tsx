import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center px-4 text-sm font-light border-t-[5px] border-t-purple-500">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <nav className="flex gap-4">
          <Link
            href="https://github.com/AshutoshRajGupta"
            target="_blank"
            className="text-black font-semibold font-mono bg-white px-2 py-1 rounded hover:bg-purple-700 transition-colors duration-200"
          >
            Github
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/ashutosh-raj-gupta-18230820b/"
            target="_blank"
            className="text-black font-semibold font-mono bg-white px-2 py-1 rounded hover:bg-purple-700 transition-colors duration-200"
          >
            LinkedIn
          </Link>
        </nav>
        <div className="text-gray-100 px-2 py-1 rounded md:mr-4 lg:mr-8 font-mono">
          Ashutosh Raj Gupta @ 2024. All rights reserved
        </div>
        <div className="text-gray-100  px-2 py-1 rounded md:mr-4 lg:mr-8 font-mono">
          Siksha Nagar Baner Pune
        </div>
        <div className="text-gray-100 px-2 py-1 rounded md:mr-4 lg:mr-8 font-mono">
          ag2364443@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
