import React, { useState } from "react";
import OpenMobileMenu from "./open MobileMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#061e45] ">
        <div className="navbar mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center ">
            <div className="button">
              <button
                onClick={() => {
                  setOpen(!open);
                  // console.log(open, "open");
                }}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="block h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="menu">
              <div className="hidden sm:ml-6 sm:block">
                <a
                  href="#homeSection"
                  className=" menuOptions"
                  aria-current="page"
                >
                  Home
                </a>
                <a href="#servicesSection" className="menuOptions">
                  Services
                </a>
                <a href="#contactUsSection" className="menuOptions">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="centerContent">
              <span className="self-center text-base font-semibold whitespace-nowrap text-[#c3e3eb] ">
                Plumbing & Heating
              </span>
              <div className="flex  items-center mt-2">
                <img src="public\assets\2.PNG" className="h-4 mr-1" alt="" />
                <span className="text-sm text-[#c3e3eb] ">London</span>
              </div>
            </div>
            <div className="logos">
              <img
                src="public/assets/Layer 1.png"
                className="h-8 mr-5"
                alt=""
              />
              <img
                src="public/assets/Layer 2.png"
                className="h-8 mr-5"
                alt=""
              />
              <img src="public/assets/Layer 3.png" className="h-8 " alt="" />
            </div>
          </div>
        </div>
        {open ? <OpenMobileMenu open={open}></OpenMobileMenu> : null}
      </nav>
    </>
  );
};

export default Navbar;
