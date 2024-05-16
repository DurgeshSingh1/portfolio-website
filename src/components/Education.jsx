const Education = () => {
  return (
    <div
      name="education"
      className="h-screen w-full bg-gradient-to-b from-gray-800 via-gray to-black text-white py-8 w-full h-screen content-center"
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
          <div class="border-b-4 border-gray-00 inline-block mb-10">
            Education
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-9 px-2">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              {/* <h1 className="text-white text-xl font-medium py-2">2018-2022</h1> */}
              <h1 className="text-white text-xl font-medium py-2">
                Bachelor of Engineering (BE)
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Government Engineering College Modasa
              </p>
              <p className="text-gray-100 sm:text-sm text-xs">CGPA : 8.79</p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-gray-800 to-black z-10 text-white  text-sm pt-1">
              2022
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-gray-800 to-black z-10 text-white text-sm text-center pt-1">
              2018
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Higher Secondary Certificate (HSC) / 12<sup>th</sup>
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Sacred Flower School
              </p>
              <p className="text-gray-100 sm:text-sm text-xs">
                Percentage : 62.15%
              </p>
            </div>
          </div>

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Secondary School Certificate (SSC) / 10<sup>th</sup>
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Sacred Flower School
              </p>
              <p className="text-gray-100 sm:text-sm text-xs">
                Percentage : 74.33%
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-400 text-white"></div>
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-black to-gray-800 z-10 text-white text-center text-sm pt-1">
              2015
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Education;
