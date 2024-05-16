// Timeline.js

import React from "react";

const experiences = [
  {
    title: "Job Title 1",
    company: "Company 1",
    date: "June 2018 - Present",
    description: "Description of experience 1.",
  },
  {
    title: "Job Title 2",
    company: "Company 2",
    date: "March 2016 - May 2018",
    description: "Description of experience 2.",
  },
  // Add more experiences as needed
];

const Timeline = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
            >
              <div
                className={`order-1 w-5/12 ${
                  index % 2 === 0 ? "pl-4" : "pr-4"
                }`}
              ></div>
              <div
                className={`z-10 order-1 w-5/12 px-4 py-8 bg-white rounded-lg shadow-lg relative ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}
              >
                <div
                  className={`h-full w-6 absolute top-0 ${
                    index % 2 === 0 ? "left-4" : "right-4"
                  }`}
                >
                  <div className="h-3 w-3 bg-gray-700 rounded-full"></div>
                </div>
                <h3 className="mb-1 font-bold text-gray-800 text-lg">
                  {experience.title}
                </h3>
                <p className="mb-1 text-gray-600">{experience.company}</p>
                <p className="mb-1 text-gray-600">{experience.date}</p>
                <p className="text-sm leading-snug tracking-wide text-gray-500">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
