import React from "react";
const ContactUs = () => {
  return (
    <>
      <div
        id="contactUsSection"
        className="contactUs md:w-screen drop-shadow-lg"
      >
        <section className="bg-[#061e45] ">
          <div className="container px-6 py-12 mx-auto">
            <div className="flex flex-col items-start">
              <p className="font-extrabold text-3xl text-[#c3e3eb] ">
                Contact us
              </p>

              <h1 className="mt-2 text-sm font-medium text-[#c3e3eb] md:text-xl ">
                Get in touch
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <span className="contactUsIconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#061e45]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 className="contactUsTitle ">Email</h2>
                  <p className="contactUsDescription ">
                    I'm here to help you with anything you need.
                  </p>
                  <a
                    className="contactUsLink"
                    href="mailto: Arashsaboori7@gmail.com"
                  >
                    Arashsaboori7@gmail.com
                  </a>
                </div>

                <div>
                  <span className="contactUsIconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#061e45]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 className="contactUsTitle">Phone</h2>
                  <p className="contactUsDescription">
                    24/7
                  </p>

                  <a className="contactUsLink" href="tel:07532612126">
                    07532612126
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe
                  width="100%"
                  height="100%"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=51.43588768584092, -0.37684908650512505&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
