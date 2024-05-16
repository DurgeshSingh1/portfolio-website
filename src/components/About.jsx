import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Durgesh Singh. Aspiring Software Developer | Certified in
          Google Analytics, SEM & SEO | Passionate About Leveraging Data to
          Drive Campaign Success | Seeking Opportunities to apply Academic
          Knowledge in Real-World Problems
        </p>
        <br />
        <p className="text-xl">
          I had 6 months of Industry experince.I had made many projects and gain
          many skills.
        </p>
      </div>
    </div>
  );
};

export default About;
