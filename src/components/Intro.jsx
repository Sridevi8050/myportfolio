import React from "react";
import profile from "../assets/myprofile.jpg"
 function Intro(){
    return(
<div className="pl-14 pt-10">
    <h1 className="text-5xl pl-12">
       Who am I?
    </h1>
    <div className="flex pt-10">
    <div>
    <img  
        src={profile} alt="profile" 
        className="mx- mt-4 rounded-3xl shadow-lg w-6xl h-[300px] object-cover inline " />
    </div>
    <div className="pl-20 pt-10">
        <h1 className="text-xl">SRIDEVI-<span className=" font-normal">Full Stack Developer</span></h1>
        <p>A self-motivated, passionate, and hardworking fresher seeking
             an opportunity to work in a challenging organization. I
              aim to utilize my skills and knowledge to contribute 
              to the growth of the organization, and I am always open
               to learning new skills to enhance my knowledge.</p>
               </div>
    </div>
</div>
    )
 }
  export  default Intro;