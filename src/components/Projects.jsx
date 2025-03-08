import React from "react";
import proje from "../assets/proje.jpg";

function Projects(){
    return(
<div>
<h1 className="text-3xl inline pl-20">Projects</h1>
<p className="pl-20 pt-2">Explore my selected projects,showcasing my dedication to innovative and heartfelt design.</p>
<div className="w-500 inline">
<div className="pl-20 ">
    <img  
            src={proje} alt="profile" 
            className="mx- mt-4 rounded-3xl shadow-lg w-96 h-[200px] object-cover inline  " />
        </div>
        <h1 className="font-bold pl-20 pt-2">Smoke And Fire Detection Using YoloV5 Algorithm</h1>
        <p className="pl-20 pt-2 inline">An AI-powered smoke and fire detection system using YOLOv5, highlighting hazards in real-time with bounding boxes.</p>
        </div>
</div>


    )
}
export default Projects;