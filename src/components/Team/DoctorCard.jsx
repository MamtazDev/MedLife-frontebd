import React from "react";
import "./DoctorCard.css";
import doctor from "../../assets/images/doctor1.png";
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import mail from "../../assets/icons/mail.png";
import roundedSquare from "../../assets/images/rounded-rectangle.png";

const DoctorCard = ({ item }) => {
  return (
    <div className="border-[1.5px] cursor-pointer border-[#D2EFFF] rounded-r-[25px] rounded-tl-[25px] rounded-bl-[131px]">
      <div className="relative">
        <img
          src={item?.image}
          alt=""
          className="w-full pb-[21px] rounded-r-[25px] rounded-tl-[25px] rounded-bl-[131px]"
        />
        <img
          src={roundedSquare}
          alt=""
          className="w-full absolute bottom-0 -z-50 rounded-r-[25px] rounded-tl-[25px]"
        />
      </div>
      <div className="px-[84px]">
        <h6 className="font-[600] text-[20px] text-[#20226A] mt-[25px] mb-[8px]">
          {item?.name}
        </h6>
        <h6 className="font-[500] text-[20px] text-[#00B3AD]">
          {item?.specalitis}s
        </h6>
        <p className="font-[400] text-[16px] text-[#656765] mt-[20px] mb-[25px]">
          {item?.details}
        </p>
      </div>
      <div className="flex justify-center pb-[38px]">
        <div className="flex gap-[20px]">
          <img src={twitter} alt="" className="w-[16px] h-[13px]" />
          <img src={facebook} alt="" className="w-[16px] h-[13px]" />
          <img src={linkedin} alt="" className="w-[16px] h-[13px]" />
          <img src={mail} alt="" className="w-[16px] h-[13px]" />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
