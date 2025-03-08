import React from "react";

function Achievements() {
  return (
    <div className="pt-12 flex flex-col sm:flex-row sm:space-x-20 px-5 md:px-20">
      <h1 className="text-3xl font-bold mb-4 sm:mb-0">Achievements</h1>
      <div className="max-w-3xl">
        <p className="text-base leading-relaxed">
          I have successfully completed projects like{" "}
          <span className="font-bold">Fire and Smoke Detection using YOLOv5</span>,{" "}
          <span className="font-bold">Encryption & Decryption</span>,{" "}
          <span className="font-bold">Library Management System</span>, and{" "}
          <span className="font-bold">Radix Sort Implementation</span>. Currently, I am working on an{" "}
          <span className="font-bold">Admin & Student Panel with Theme Toggle</span> using{" "}
          <span className="font-bold">React, Vite, and PostgreSQL</span>, and building a{" "}
          <span className="font-bold">PERN stack project</span> with authentication and{" "}
          <span className="font-bold">CRUD operations</span>. Additionally, I have transitioned a{" "}
          <span className="font-bold">Java Servlets + JSP project to Vite + React</span>.
        </p>
      </div>
    </div>
  );
}

export default Achievements;
