import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import CallButton from "./components/callButton";
const App = () => {
  return (
    <>
      <div className="site-container overflow-x-hidden">
        {/* header */}
        <Navbar></Navbar>

        {/* body */}
        <Hero></Hero>
        <Services></Services>
        <ContactUs></ContactUs>
        <CallButton></CallButton>

        {/* footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
