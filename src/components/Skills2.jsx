const Skills = () => {
  return (
    <div
      className=" bg-gradient-to-b from-black via-black to-gray-800 text-white py-8 w-full h-screen"
      id="aboutme"
    >
      <div className="container m-auto px-4">
        {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Experience
        </p> */}
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
            <p>
              Worked as an intern for 6 months in Terminal Trend Technologies. I
              had worked on MERN stack and build some API's and UI Components.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
            <p>
              Worked as a php intern for 1 month in BrainyBeam Technologies Pvt.
              Worked on php, mysql and bootstrap. Ltd
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
            <p>
              Became more interested in IT and decided to try programming.
              Underwent Java course and made a project.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
            <p>
              Worked out in which field I want to build a developer's career and
              started to learn Frontend Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
