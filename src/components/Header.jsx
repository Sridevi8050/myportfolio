import React from "react";

function Header() {
  return (
    <div className="w-full p-5">
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl">SRIDEVI</h1>
        
        <ul className="hidden md:flex justify-evenly space-x-6 lg:space-x-14">
          <li className="cursor-pointer hover:text-blue-500">Projects</li>
          <li className="cursor-pointer hover:text-blue-500">Achievements</li>
          <li className="cursor-pointer hover:text-blue-500">Blogs</li>
        </ul>
        
        <button className="rounded shadow-sm text-black bg-white hover:bg-blue-500 px-6 py-2 md:ml-10">
          Connect
        </button>
      </div>
    </div>
  );
}

export default Header;
