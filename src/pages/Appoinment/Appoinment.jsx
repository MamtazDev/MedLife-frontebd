import React from "react";
import "./Appoinment.css";

const Appoinment = () => {
  return (
    <section className="appoinment-box my-[150px] grid lg:grid-cols-2 container mx-auto">
      <div></div>
      <div>
        <form className=" -mb-[18px] w-full px-[89px] py-[40px] bg-[#1379B1]">
          <h3 className="font-[400] text-[40px] text-white text-center mb-[20px]">
            Book An Appoinment
          </h3>
          <input
            type="text"
            placeholder="Full name"
            className="w-full h-[54px] px-[30px] rounded-[5px] mb-[20px]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-[54px] px-[30px] rounded-[5px] mb-[20px]"
          />
          <div className="w-full flex justify-between">
            <input
              type="date"
              className="h-[54px] px-[30px] rounded-[5px] mb-[20px] date-input"
            />
            <input
              type="text"
              placeholder="Time"
              className="h-[54px] px-[30px] rounded-[5px] mb-[20px] time-input"
            />
          </div>
          <textarea
            placeholder="Message...."
            className="w-full p-[30px] rounded-[5px] mb-[40px]"
          />
          <div className="flex justify-center">
            <button className="bg-[#00B3AD] text-white rounded-[45px] px-[60px] py-[14px] font-[500] text-[20px] ">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appoinment;
