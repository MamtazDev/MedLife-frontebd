import React from "react";
import Home from "../../Home/Home";
import Services from "../../Services/Services";
import AboutUs from "../../AboutUs/AboutUs";
import Team from "../../Team/Team";
import Testimonials from "../../Testimonials/Testimonials";
import Appoinment from "../../Appoinment/Appoinment";

const MainHome = () => {
  return (
    <>
      <Home />
      <Services />
      <AboutUs />
      <Team />
      <Testimonials />
      <Appoinment />
    </>
  );
};

export default MainHome;
