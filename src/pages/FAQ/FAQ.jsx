import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQ = () => {
  const items = [
    {
      uuid: "1",
      heading: "fkljfklsjfd",
      content: "lkfjlkjflksfj",
    },
  ];
  return (
    <section className="container mx-auto">
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

      <div>
        <Accordion allowZeroExpanded>
          {items.map((item) => (
            <AccordionItem key={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
