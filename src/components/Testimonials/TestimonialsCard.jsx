import React from "react";
import sliderDoctor from "../../assets/images/sliderDoctor.png";
import icon from "../../assets/icons/squareIcon.png";
import frame from "../../assets/images/frame.png";
import "./TestimonialsCard.css";

const TestimonialsCard = () => {
  return (
    <div className="flex testimonial-box justify-between">
      <div className="lg:w-1/2">
        <h3 className="font-[600] text-xl lg:text-[36px] text-[#20226A] mb-[30px]">
          Inventore vel alias tel consequatur nihil vel maiores voluptate enim
          ea deleniti.
        </h3>
        <div className="flex items-center gap-2 mb-[40px]">
          <img src={icon} alt="" />
          <div>
            <h6 className="font-[700] text-[18px] text-[#00B3AD]">
              Sherri Cronin
            </h6>
            <p className="font-[600] text-[14px] text-[#656765]">
              Dynamic Doctor
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <img src={sliderDoctor} alt="" className="ml-auto" />
      </div>
    </div>
  );
};

export default TestimonialsCard;
