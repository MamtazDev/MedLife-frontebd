import React from "react";
import { Link, useParams } from "react-router-dom";
import Services from "../Services/Services";
import ServicesCard from "../../components/Services/ServicesCard";
import siring from "../../assets/icons/siringe.png";
import lung from "../../assets/icons/lung.png";
import capsule from "../../assets/icons/capsule.png";
import head from "../../assets/icons/head.png";
import pen from "../../assets/icons/pen.png";
import bottle from "../../assets/icons/bottole.png";
import hand from "../../assets/icons/hand.png";
import heart from "../../assets/icons/heart.png";

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
  {
    image: heart,
    title: "Heart Diseases",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: heart,
    title: "Heart Diseases",
    content:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: heart,
    title: "Heart Diseases",
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

const AllServices = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {specialist.map((item, idx) => (
          <Link to={`/services/${item?.title}`}>
            <ServicesCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
