import React from "react";
const OpenMobileMenu = () => {
  return (
    <>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#homeSection"
            className="openMenuOptions"
            aria-current="page"
          >
            Home
          </a>
          <a href="#servicesSection" className="openMenuOptions">
            Services
          </a>
          <a href="#contactUsSection" className="openMenuOptions">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};


export default OpenMobileMenu;
