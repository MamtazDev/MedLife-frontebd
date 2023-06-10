import React, { useState } from "react";
import logo from "./../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <section className="w-full bg-[#E5F4FC] pb-5">
      <div className="navbar  container mx-auto pt-[50px]">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:bg-inherit"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* <Menubar /> */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1 flex gap-[2rem]">
            <li className="navitem">
              <Link
                to="/"
                className="font-[500] text-[20px] text-[#20226A] hover:bg-inherit hover:text-[#00b3ad]"
              >
                Home
              </Link>
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
            <li className=" navitem">
              <Link
                to="/appointment"
                className="hover:bg-inherit font-[500] text-[20px] text-[#20226A] hover:text-[#00b3ad]"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="
             bg-[#00B3AD] px-[40px] py-[14px] font-[500] text-[20px] text-white read-more-btn hover:bg-[#03928d]"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <HiMenu className="text-3xl" onClick={() => setMenuBar(true)} />
        </div>
      </div>

      <section className={`mobile__menu ${menuBar && "open"}`}>
        <div className="flex justify-end">
          <div>
            <HiX className="text-3xl" onClick={() => setMenuBar(false)} />
          </div>
        </div>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li class="">
            <a href="#">Contact</a>
          </li>
          <li className=" navitem">
            <a className="hover:bg-inherit font-[500] text-[20px] text-[#20226A] hover:text-[#00b3ad]">
              Contact
            </a>
          </li>
          <li>
            <Link
              to="/login"
              className="
             bg-[#00B3AD] px-[40px] py-[14px] font-[500] text-[20px] text-white read-more-btn hover:bg-[#03928d]"
            >
              Login
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Header;
