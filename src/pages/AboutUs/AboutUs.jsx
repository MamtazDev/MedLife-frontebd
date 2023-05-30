import React from "react";
import videoFrame from "../../assets/images/operation.png";
import square from "../../assets/images/blueRectangle.png";
import circle from "../../assets/images/brownRectangle.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="container custom-container  mx-auto mb-[150px]">
      <div className="flex flex-col lg:flex-row aboutus_container mb-[35px]">
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[455px] video-frame">
          <img src={videoFrame} alt="" className="w-[600px] h-[384px]" />
        </div>
        <div className="w-full lg:w-1/2 px-[20px] lg:px-0 flex justify-center items-center h-[455px]">
          <div>
            <p className="font-[500] text-[20px] text-[#00B3AD]">About Us</p>
            <h3 className="font-[600] text-[40px] text-[#20226A]">Our Story</h3>
            <p className="font-[500] text-[20px] text-[#656765] mb-[20px]">
              A great place to receive care
            </p>
            <p className="font-[400] text-[16px] text-[#656765] mb-[30px]">
              Massa interdum sit lacus dolor ac mattis nunc pellentesque ipsum,
              sit interdum aenean risus quam consequat dolor convallis urna,
              dictum in sed arcu aliquam amet Massa interdum sit lacus dolor ac
              mattis nunc pellentesque ipsum, sit interdum aenean risus quam
              consequat dolor convallis urna.
            </p>
            <button className="py-[14px] px-[54px] bg-[#00B3AD] hover:bg-[#03928d] text-white rounded-[45px] font-[500] text-[20px] ">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1213px] mx-auto grid grid-cols-2 lg:grid-cols-4 py-[40px] px-[50px] justify-between bg-[#f1f7fb] rounded-[25px]">
        <div>
          <h1 className="font-[500] text-[64px] text-[#20226A]">
            200<span className="text-[#00B3AD]">+</span>
          </h1>
          <p className="font-[500] text-[24px] text-[#656765]">Doctor</p>
        </div>
        <div>
          {" "}
          <h1 className="font-[500] text-[64px] text-[#20226A]">
            65<span className="text-[#00B3AD]">+</span>
          </h1>
          <p className="font-[500] text-[24px] text-[#656765]">Specialist</p>
        </div>
        <div>
          <h1 className="font-[500] text-[64px] text-[#20226A]">
            800<span className="text-[#00B3AD]">+</span>
          </h1>
          <p className="font-[500] text-[24px] text-[#656765]">Medical Bed</p>
        </div>
        <div>
          <h1 className="font-[500] text-[64px] text-[#20226A]">
            35<span className="text-[#00B3AD]">+</span>
          </h1>
          <p className="font-[500] text-[24px] text-[#656765]">Award Winner</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
