import React from "react";
import logo from "./../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto mt-[50px]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:bg-inherit">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex gap-[2rem]">
          <li className="navitem">
            <a className="font-[500] text-[20px] text-[#20226A] hover:bg-inherit hover:text-[#00b3ad]">
              Home
            </a>
          </li>
          <li className=" navitem">
            <a className="hover:bg-inherit font-[500] text-[20px] text-[#20226A] hover:text-[#00b3ad]">
              Service
            </a>
          </li>
          <li className="navitem">
            <a className="hover:bg-inherit font-[500] text-[20px] text-[#20226A] hover:text-[#00b3ad]">
              About Us
            </a>
          </li>
          <li className=" navitem">
            <a className="hover:bg-inherit font-[500] text-[20px] text-[#20226A] hover:text-[#00b3ad]">
              Contact
            </a>
          </li>
          <li>
            <a
              className="
             bg-[#00B3AD] px-[40px] py-[14px] font-[500] text-[20px] text-white read-more-btn hover:bg-[#03928d]"
            >
              Read More
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
