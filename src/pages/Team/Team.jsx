import React from "react";
import DoctorCard from "../../components/Team/DoctorCard";
import doctor1 from "../../assets/images/doctor1.png";
import doctor2 from "../../assets/images/doctor2.png";
import doctor3 from "../../assets/images/doctor3.png";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Mark Falworth",
    specalitis: "Orthopaedic Surgeon",
    details:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: doctor2,
    name: "Freda T. Lopez",
    specalitis: "Orthopaedic Surgeon",
    details:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
  {
    image: doctor3,
    name: "Perry J. Cox",
    specalitis: "Orthopaedic Surgeon",
    details:
      "Eleifend enim, natoque bulum, nibh dui mi adipiscing dui ndum ultrices tincidunt",
  },
];

const Team = () => {
  return (
    <section className="container custom-container mx-auto text-center mb-[150px]">
      <p className="font-[500] text-[20px] text-[#00B3AD]">Our Team</p>
      <h4 className="mb-[70px] font-[600] text-[40px] text-[#20226A]">
        Meet Our Consultants & Medical Specialists
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {doctors.map((item, idx) => (
          <DoctorCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default Team;
