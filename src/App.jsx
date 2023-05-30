import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import Team from "./pages/Team/Team";
import Testimonials from "./pages/Testimonials/Testimonials";
import FAQ from "./pages/FAQ/FAQ";
import Appoinment from "./pages/Appoinment/Appoinment";
import Footer from "./pages/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Services />
      <AboutUs />
      <Team />
      <Testimonials />
      {/* <FAQ /> */}
      <Appoinment />
      <Footer />
    </>
  );
}

export default App;
