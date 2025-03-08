import React from "react";

const Timeline = () => {
  const events = [
    { year: "2018", description: "Completed my Secondary education in Bala Yesu CBSE School, Raichur" },
    { year: "2020", description: "Completed my Pre-university in Dr.Thimmareddy PU College, Davangere" },
    { year: "2024", description: "Completed my BE Computer Science in Acharya Institute Of Technology, Bangalore" },
  ];

  return (
    <div className="pt-12 px-5 sm:px-20">
      <h1 className="text-3xl font-bold">Timeline</h1>
      <div className="max-w-lg mx-auto mt-6">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-green-400 pb-6 last:pb-0">
            <div className="absolute -left-[9px] w-4 h-4 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-black">{event.year}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
