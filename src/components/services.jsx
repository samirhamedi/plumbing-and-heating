import React from "react";
const Services = () => {
  return (
    <>
      <div id="servicesSection" className="services ">
        <div className="px-4 bg-[#c3e3eb]  py-16 md:px-24 lg:px-8 lg:py-8">
          <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-14">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#061e45] sm:text-4xl md:mx-auto">
              services
            </h2>
            <p className="text-base text-[#36454f] md:text-lg">
              Welcome to <span className="font-bold">ARASH.S</span>, your
              reliable source for expert
              <span className="font-bold"> heating and plumbing </span>
              solutions. As a dedicated heating and plumbing specialist, I take
              pride in offering high-quality services to both residential and
              commercial clients.
            </p>
          </div>
          <div className="grid gap-5 justify-center row-gap-8 lg:grid-cols-3">
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/heating-svgrepo-com.png"
                  alt=""
                  className=" sm:p-3 p-3"
                />
              </div>
              <h6 className="servicesTitles mx-auto">Central heating</h6>
              <p className="serviceDescription">
                Efficient central heating repair ensures cozy warmth throughout
                your home even during the coldest days.
              </p>
            </div>
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/plumbing-pipe-svgrepo-com.png"
                  alt=""
                  className=" sm:p-4 p-6"
                />
              </div>
              <h6 className="servicesTitles">General plumbing</h6>
              <p className="serviceDescription">
                Quick plumbing repairs, big relief! Get your plumbing issues
                fixed in no time with our reliable services.
              </p>
            </div>
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/house-temperature-smart-control.png"
                  alt=""
                  className=" sm:p-8 p-10"
                />
              </div>
              <h6 className="servicesTitles">Smart Heating controlling</h6>
              <p className="serviceDescription">
                Make your home smart and control your heating system with your
                smartphone.
              </p>
            </div>
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/pngtree-gaz-boiler-heating-system-equipment-vector-icon-png-image_1804367.png"
                  alt=""
                  className=" sm:p-6 p-9 "
                />
              </div>
              <h6 className="servicesTitles">Boiler installation & repair</h6>
              <p className="serviceDescription">
                Expert boiler installations for efficient home heating.
              </p>
            </div>
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/bathtub-bathroom-svgrepo-com.png"
                  alt=""
                  className=" sm:p-3 p-4"
                />
              </div>
              <h6 className="servicesTitles">Bathroom installation</h6>
              <p className="serviceDescription">
                Transform your bathroom with expert installation services for a
                modern and inviting sanctuary.
              </p>
            </div>
            <div className="servicesCard">
              <div className="servicesImgContainer">
                <img
                  src="assets/underfloor-heating-svgrepo-com.png"
                  alt=""
                  className=" p-8 sm:p-5"
                />
              </div>
              <h6 className="servicesTitles">Underfloor heating</h6>
              <p className="serviceDescription">
                Install underfloor heating for a warm and inviting atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
