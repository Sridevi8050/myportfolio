import React from "react";

function Skills() {
  return (
    <div className="pt-12 px-5 sm:px-20 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-12">
      {/* Skills Heading */}
      <h1 className="text-3xl font-bold whitespace-nowrap">Skills</h1>

      {/* Skills List */}
      <div className="flex flex-col pl-40" >
        {/* Row 1 */}
        <div className="flex flex-wrap gap-6 text-gray-300">
          <span className="font-normal">Core Java</span>
          <span className="text-yellow-400">✦</span>
          <span className="text-black">SQL</span>
          <span className="text-yellow-400">✦</span>
          <span className="font-normal">PostgreSQL</span>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-6 text-gray-400 mt-2">
          <span className="opacity-75">HTML</span>
          <span className="text-yellow-400">✦</span>
          <span className="text-black">CSS</span>
          <span className="text-yellow-400">✦</span>
          <span className="opacity-75">JavaScript</span>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-6 mt-2">
          <span className="font-normal">React</span>
          <span className="text-yellow-400">✦</span>
          <span className="font-normal">Node.js</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
