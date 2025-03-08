import React from "react";
import proje from "../assets/proje.jpg";

function Projects() {
  return (
    <div className="pt-12 px-5 sm:px-20">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="pt-2">Explore my selected projects, showcasing my dedication to innovative and heartfelt design.</p>

      {/* Container for Image and Text (Stacked Layout) */}
      <div className="flex flex-col mt-6">
        <img  
          src={proje} 
          alt="project" 
          className="rounded-3xl shadow-lg w-full sm:w-96 h-[200px] object-cover"
        />

        {/* Text Below the Image */}
        <div className="mt-4 text-center sm:text-left">
          <h1 className="font-bold text-lg">Smoke And Fire Detection Using YoloV5 Algorithm</h1>
          <p className="pt-2">
            An AI-powered smoke and fire detection system using YOLOv5, highlighting hazards in real-time with bounding boxes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
