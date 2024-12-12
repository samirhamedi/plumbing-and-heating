import React from "react";
const Footer = () => {
  return (
    <>
      <footer class="flex flex-col sm:h-auto  justify-center items-center md:w-screen bg-[#c3e3eb]">
        <div class="flex   sm:flex-row  sm:justify-center sm:items-center sm:space-x-5 ">
          <div className="footerImgContainer">
            <img src="assets/safe logo.png" alt="" className="footerImg" />
          </div>
          <div className="footerImgContainer">
            <img
              src="assets/Checkatrade_Logo_2023.svg.png"
              alt=""
              className="footerImg"
            />
          </div>
          <div className="footerImgContainer">
            <img
              src="assets/city-and-guilds-logo-med-300x173.png"
              alt=""
              className="footerImg"
            />
          </div>
        </div>
        <p class="text-center text-gray-700 font-medium mb-2">
          &copy; All rights reservered for ARASH.S
        </p>
      </footer>
    </>
  );
};

export default Footer;
