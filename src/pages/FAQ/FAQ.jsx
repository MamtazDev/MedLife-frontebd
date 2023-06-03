import React from "react";

import blueSquare from "../../assets/images/blue_square.png";
import faqDoctor from "../../assets/images/faqDoctor.png";

import "./FAQ.css";

const FAQ = () => {
  const items = [
    {
      uuid: "1",
      heading: "fkljfklsjfd",
      content: "lkfjlkjflksfj",
    },
  ];
  return (
    <section className="container mx-auto ">
      <h6 className="text-center font-[500] text-[20px] text-[#00B3AD]">FAQ</h6>
      <h3 className="text-center font-[600] text-[40px] text-[#20226A]">
        Frequently Asked Questions
      </h3>

      {/* <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>

        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row mt-[70px]">
        <div className="w-2/5 faqDoctorImg hidden lg:block">
          <img src={faqDoctor} alt="" />
        </div>
        <div className="w-full lg:w-3/5">
          <div className="collapse collapse-plus bg-base-200 bg-inherit border-b border-[#D9DBE9]">
            <input type="checkbox" />
            <div className="collapse-title  font-[500] text-[20px] text-[#20226A] ">
              What does telemedicine means?
            </div>
            <div className="collapse-content">
              <p className="font-[400] text-[16px] text-[#656765]">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-inherit border-b border-[#D9DBE9]">
            <input type="checkbox" />
            <div className="collapse-title  font-[500] text-[20px] text-[#20226A]">
              What is telemedicine used for?
            </div>
            <div className="collapse-content">
              <p className="font-[400] text-[16px] text-[#656765]">hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-inherit border-b border-[#D9DBE9]">
            <input type="checkbox" />
            <div className="collapse-title font-[500] text-[20px] text-[#20226A]">
              What equipment do you require for telemedicine?
            </div>
            <div className="collapse-content">
              <p className="font-[400] text-[16px] text-[#656765]">hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 bg-inherit ">
            <input type="checkbox" />
            <div className="collapse-title font-[500] text-[20px] text-[#20226A]">
              What are the props and cons of telemedicine?
            </div>
            <div className="collapse-content">
              <p className="font-[400] text-[16px] text-[#656765]">hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
