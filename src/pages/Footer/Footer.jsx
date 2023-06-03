import React from "react";
import "./Footer.css";
import mail from "../../assets/icons/footerMail.png";
import sendButton from "../../assets/icons/sendbtn.png";
import logo from "../../assets/logo.png";
import facebook from "../../assets/icons/footerFacebook.png";
import instagram from "../../assets/icons/footerInstagram.png";
import linkedIn from "../../assets/icons/footerLinkedIn.png";
import twitter from "../../assets/icons/footerTwitter.png";
import arrow from "../../assets/icons/footerArrow.png";

const Footer = () => {
  return (
    <section className="footer-box">
      <div className="footer_bg">
        <div className="container custom-container mx-auto pt-[132px] pb-[109px]">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between">
            <div className="flex gap-[20px] items-center">
              <img src={mail} alt="" />
              <p className="font-[600] text-[20px] text-white items-center">
                Subscribe to get latest news
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-[30px] max-w-[513px] bg-[#001E3A] rounded-l-[3px] text-white"
              />
              <img src={sendButton} alt="" className="rounded-r-[3px] " />
            </div>
          </div>
          {/* <hr className="mt-[50px] " /> */}
          <p className="hr my-[50px]"></p>
          <div className="grid lg:grid-cols-3 gap-[65px] px-[20px] lg:px-0">
            <div>
              <img src={logo} alt="" />
              <p className="font-[400] text-[400] text-[#9CB4BB] my-[20px]">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
              <div className="flex gap-[20px] items-center">
                <img src={facebook} alt="" />
                <img src={linkedIn} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
            <div>
              <h6 className="font-[600] text-[20px] text-white mb-[30px]">
                Quick Links
              </h6>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[25px]">
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      Hospital
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      Our Services
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      About Us
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      Our Team
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      Make An Appoinment
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">FAQ</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <img src={arrow} alt="" />
                    <p className="font-[400] text-[16px] text-[#9CB4BB]">
                      Terms & Condition
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="font-[600] text-[20px] text-white mb-[30px]">
                Clinic Hours
              </h6>
              <div>
                <div className="flex justify-between font-[400] text-[16px] text-[#9CB4BB] pb-[15px] border-b border-[#9CB4BB]">
                  <p>Mon- Thus-</p>
                  <p>9.00AM-7.00PM</p>
                </div>
                <div className="flex justify-between font-[400] text-[16px] text-[#9CB4BB] py-[15px] border-b border-[#9CB4BB]">
                  <p>Friday-</p>
                  <p>9.00AM-7.00PM</p>
                </div>
                <div className="flex justify-between font-[400] text-[16px] text-[#9CB4BB] py-[15px] border-b border-[#9CB4BB]">
                  <p>Saturday-</p>
                  <p>9.00AM-7.00PM</p>
                </div>
                <div className="flex justify-between font-[400] text-[16px] text-[#9CB4BB] pt-[15px]">
                  <p>Sunday-</p>
                  <p>9.00AM-7.00PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
