const Experience = () => {
  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b from-black via-gray to-gray-800 text-white py-8 w-full h-screen content-center"
      id="aboutme"
    >
      {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-10 md:ml-[400px]">
        Experience
      </p>
      <div class="text-4xl font-bold border-b-4 border-gray-500 flex justify-center items-center mt-10">
        Experience
      </div> */}
      <div class="flex justify-center items-center">
        <div class="text-4xl font-bold mt-10">
          <div class="border-b-4 border-gray-500 inline-block mb-10">
            Experience
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-9 px-2">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                JavaScript Developer Intern
              </h1>
              <h1 className="text-gray-100 sm:text-sm text-xs">
                Terminal Trend Technologies
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Jan 2022 - May 2022
              </p>
              <p className="text-gray-100 sm:text-sm text-xs">
                Worked on Payroll Management System. Learned basic and advanced
                concepts of MongoDB, React, Node and Express. Learned how to
                build and test REST API's.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-gray-800 to-black z-10 text-white text-center text-sm pt-1">
              2022
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-gray-800 to-black z-10 text-white text-center text-sm pt-1">
              2021
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                PHP Laravel Intern
              </h1>
              <h1 className="text-gray-100 sm:text-sm text-xs">
                BrainyBeam Technologies Pvt. Ltd.
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                June 2021 - July 2021
              </p>
              <p className="text-gray-100 sm:text-sm text-xs">
                Worked on Employee Management System built on PHP Laravel.
                Learnt basic and advanced concepts of PHP and Laravel.
              </p>
            </div>
          </div>

          {/* <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">Title</h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                quas omnis vero totam ullam, reprehenderit ratione pariatur
                accusamus suscipit odit nostrum?
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-to-b from-black to-gray-800 z-10 text-white text-center">
              3
            </div>
          </div> */}
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
