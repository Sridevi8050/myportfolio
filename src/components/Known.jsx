import React from "react";

function Known() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center pt-20 px-5">
      <div>
        <h2 className="text-xl font-semibold mb-2">Java</h2>
        <p className="text-gray-700">Java fundamentals, OOPs</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">JavaScript & Web Development</h2>
        <p className="text-gray-700">
          Experienced in backend development using Node.js and frontend technologies like HTML5 and CSS3
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tools and Technologies</h2>
        <p className="text-gray-700">PostgreSQL, API handling, Full Stack Development</p>
      </div>
    </div>
  );
}

export default Known;
