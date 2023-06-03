import React from "react";
import "./Banner.css";
import doctor from "../../assets/icons/findUser.png";
import location from "../../assets/icons/location.png";
import searchIcon from "../../assets/icons/searchicon.png";
import girlDoctor from "../../assets/images/banner-doctor.png";
import bigStar from "../../assets/images/big-star.png";
import smallStar from "../../assets/images/mini-star.png";

const Banner = () => {
  // console.log(findDoctor, "doctorsss");
  return (
    <section className="banner relative">
      <div className="container mx-auto mb-[131px] pt-5 custom-container px-[25px] lg:px-0">
        <div className="max-w-[756px]">
          <h1 className="mt-[138px] font-[600] text-[64px] text-[#20226A]">
            <span>Find And Search</span> <br />
            <span>
              Your <span className="text-[#1379B1]">Favorite Doctor's</span>
            </span>
          </h1>
          <p className="font-[400] text-[16px] text-[#656765] max-w-[68ch] mt-[20px] banner-text">
            Massa interdum sit lacus dolor ac mattis nunc pellentesque ipsum,
            sit interdum aenean risus quam consequat dolor convallis urna,
            dictum in sed arcu .
          </p>

          <div className="flex flex-col lg:flex-row mt-[60px] p-[11px] bg-white rounded-[8px] max-w-[550px] justify-between items-center">
            {/* find doctor */}
            <div className="flex gap-[5px] items-center ml-[30px]">
              <img src={doctor} alt="" className="w-[24px] h-[24px]" />
              <select className="select select-ghost max-w-[200px] font-[400] text-[#A3A4A3] text-[16px] ">
                <option disabled selected>
                  Find a doctor
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>

            {/* location */}
            <div className="flex gap-[5px] items-center">
              <img src={location} alt="" className="w-[19px] h-[24px]" />
              <select className="select select-ghost max-w-[150px] font-[400] text-[#A3A4A3] text-[16px]">
                <option disabled selected>
                  Location
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>
            <div className="cursor-pointer">
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* online support start */}
      <div className="bg-[#1379B1] online-support">
        <div className="container mx-auto flex py-[40px] online-support-container">
          <div className="px-4 lg:px-[70px]  online-support-content1">
            <h3 className="font-[600] text-xl lg:text-[40px] text-white">
              24/7
            </h3>
            <p className="font-[400] text-[20px] text-white">Online Support</p>
          </div>
          <div className="px-4 lg:px-[70px] border-x online-support-content2">
            <h3 className="font-[600]  text-xl lg:text-[40px] text-white">
              100+
            </h3>
            <p className="font-[400] text-[20px] text-white">Doctor Online</p>
          </div>
          <div className="px-4 lg:px-[70px] online-support-content3">
            <h3 className="font-[600]   text-xl lg:text-[40px] text-white">
              1M+
            </h3>
            <p className="font-[400] text-[20px] text-white">Customer Active</p>
          </div>
        </div>
      </div>
      {/* online support end */}

      <img
        src={girlDoctor}
        alt=""
        className="absolute bottom-0 right-[317px] banner-doctor hidden lg:block"
      />
      <img
        src={bigStar}
        alt=""
        className="absolute top-[157px] right-[716px] hidden lg:block"
      />
      <img
        src={smallStar}
        alt=""
        className="absolute top-[586px] left-[806px] hidden lg:block"
      />
    </section>
  );
};

export default Banner;
