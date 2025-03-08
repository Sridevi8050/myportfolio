import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contacts() {
  return (
    <div className="pt-12 flex flex-col sm:flex-row sm:space-x-20 px-5 md:px-20">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">Contact</h1>
      <div className="max-w-3xl pl-20">
        <h2 className="font-bold">Let's Connect</h2>
        <p className="text-base leading-relaxed">
          Whether you're a fellow student, educator, or someone interested in technology and innovation, I'm always open to 
          discussing new ideas and opportunities. Please use the form below to get in touch!
        </p>
        <br />
        <span className="font-semibold">Available for work</span>
        <div className="flex gap-6 mt-4 text-2xl">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
