import React from "react";
function Skills(){
return(

<div className="pt-12 flex sm:space-x-72 space-x-10">
<h1 className="text-3xl inline pl-20">Skills</h1>
 <div className="flex flex-col pl-8">
      {/* Row 1 */}
      <div className="flex space-x-6 text-gray-300">
        <span className="font-normal">Core java</span>
        <span className="text-yellow-400">✦</span>
        <span className="text-black">SQL</span>
        <span className="text-yellow-400">✦</span>
        <span className="font-normal">PostgreSQL</span>
      </div>

      {/* Row 2 */}
      <div className="flex space-x-6 mt-2 text-gray-400">
        <span className="opacity-75">HTML</span>
        <span className="text-yellow-400">✦</span>
        <span className="text-black">CSS</span>
        <span className="text-yellow-400">✦</span>
        <span className="opacity-75">JavaScript</span>
      </div>

      {/* Row 3 */}
      <div className="flex space-x-6 mt-2">
        <span className="font-normal">React</span>
        <span className="text-yellow-400">✦</span>
        <span className="font-normal">Nodejs</span>
        </div>
      
    </div>
    </div>
  );
};

export default Skills