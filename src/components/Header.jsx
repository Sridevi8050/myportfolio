    import React from "react";

    function Header(){


    return (
    <div>
      <div className="flex pt-7 pl-24 sm:space-x-72">
        <h1 className="font-bold text-bold text-2xl pl-7">SRIDEVI</h1>
        <ul className="flex justify-evenly align-middle pl-48 space-x-14">
            <li>
            Projects
            </li>
            <li>
            Achievments
            </li>
            <li>
            Blogs 
            </li>
        </ul>
        <button className="rounded shadow-sm text-black bg-white  hover:bg-blue-500 ml-60 px-2 py-2 pr-10 pl-10" >Connect</button>
      </div>
    </div>

    )

    }

    export default Header; 