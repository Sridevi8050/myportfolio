import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contacts(){
    return(
<div className="pt-12 flex sm:space-x-72 space-x-10">
<h1 className="text-3xl inline pl-20">Contact</h1>
<div className="w-180">
    <h1 className="font-bold">Let's Connect</h1>
<p>Whether you're a fellow student,educator, or someone interested in technology and innovation.I'm always open to 
    discussing new ideas and opportunities.Please use the form below to get in touch! </p>
    <br></br>
    <span>Available for work</span>
    <div className="flex gap-6 mt-4 text-2xl pl-0">
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
 )
}
export default Contacts