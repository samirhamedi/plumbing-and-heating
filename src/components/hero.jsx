import React from "react";
const Hero = () => {
  return (
    <>
      <div id="homeSection" className="home drop-shadow-sm">
        <section className="">
          <div className="container flex flex-col sm:flex-row justify-center p-5 items-center sm:py-12  mx-auto sm:justify-between ">
            <div className="flex items-center justify-center sm:mr-3 sm:my-8 h-72 sm:h-80 lg:h-96  ">
              <img
                src="assets/boiler-02.png"
                alt=""
                className="object-contain  h-72 sm:h-96 lg:h-96 xl:h-[450px] xl: 2xl:h-128"
              />
            </div>
            <div className="flex flex-col  justify-center sm:justify-center  text-center rounded-sm  sm:text-left ">
              <h1 className="text-3xl mb-1 font-bold leadi text-[#061e45] sm:mb-5 sm:text-4xl  sm:font-extrabold">
                Giants
              </h1>
              <h1 className="text-3xl font-bold leadi text-[#ff8c00] sm:4xl md:text-5xl">
                plumbing <br /> and heating
              </h1>
              <p className="mt-6 mb-8  text-lg sm:text-2xl sm:mb-12">
                Installation, Repair & Maintenance
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
                <a
                  rel="noopener noreferrer"
                  href="tel:07532612126"
                  className="px-8 py-3 text-lg font-semibold sm:px-28  xl:py-3 bg-[#061e45] rounded-3xl   hover:bg-[#ffae00] text-white  "
                >
                  <span>Call Us Now</span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
