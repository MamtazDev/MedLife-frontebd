import React from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import ServicesCard from "../../components/Services/ServicesCard";
import siring from "../../assets/icons/siringe.png";
import lung from "../../assets/icons/lung.png";
import capsule from "../../assets/icons/capsule.png";
import head from "../../assets/icons/head.png";
import pen from "../../assets/icons/pen.png";
import bottle from "../../assets/icons/bottole.png";
import hand from "../../assets/icons/hand.png";
import heart from "../../assets/icons/heart.png";
import "./Services.css";

const specialist = [
  {
    image: siring,
    title: "Covid-19 Test",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: lung,
    title: "Heart Lungs",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: capsule,
    title: "Vitamin & Suplement",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: head,
    title: "Mental Health",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: pen,
    title: "General Surgery",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: bottle,
    title: "Pharmacy",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: hand,
    title: "Sports Injury",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: heart,
    title: "Heart Diseases",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
];

const Services = () => {
  return (
    <section className="container custom-container mx-auto mt-[146px] mb-[150px] px-[20px] lg:px-0">
      <h4 className="font-[500] text-[#00B3AD] text-[20px]">Our Services</h4>
      <h3 className="mb-[70px] font-[600] text-[#20226A] text-[40px]">
        Our Consulting Specialist
      </h3>
      <p className="font-[400] text-[16px] text-[#00B3AD] text-end mb-[30px] cursor-pointer">
        View all{" "}
        <img src={rightArrow} alt="" className="inline h-[20px] w-[20px]" />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {specialist.map((item, idx) => (
          <ServicesCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
