import React from "react";
import profile from "../assets/myprofile.jpg";

function Intro() {
  return (
    <div className="px-5 sm:pl-14 pt-10">
      <h1 className="text-4xl sm:text-5xl text-center sm:text-left">Who am I?</h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-start pt-10">
        <div>
          <img  
            src={profile} 
            alt="profile" 
            className="rounded-3xl shadow-lg w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] object-cover"
          />
        </div>
        <div className="pt-6 sm:pt-10 sm:pl-20 text-center sm:text-left">
          <h1 className="text-lg sm:text-xl font-semibold">
            SRIDEVI - <span className="font-normal">Full Stack Developer</span>
          </h1>
          <p className="text-sm sm:text-base max-w-lg leading-relaxed">
            A self-motivated, passionate, and hardworking fresher seeking
            an opportunity to work in a challenging organization. I aim to
            utilize my skills and knowledge to contribute to the growth of 
            the organization, and I am always open to learning new skills 
            to enhance my knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
