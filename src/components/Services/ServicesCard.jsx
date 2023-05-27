import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ item }) => {
  const { image, title, content } = item;
  return (
    <div className="p-[35px] border-[2px] border-[#D2EFFF] rounded-[25px] hover:bg-[#1379B1] cursor-pointer services ">
      <img src={image} alt="" className="bg-[#E3EFF6] p-[19px] rounded-full " />
      <h3 className="font-[500] text-[24px] text-[#20226A] mt-[30px] mb-[15px]">
        {title}
      </h3>
      <p className="font-[400] text-[16px] text-[#656765]">{content}</p>
    </div>
  );
};

export default ServicesCard;
