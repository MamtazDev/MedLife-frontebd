import React from "react";
import doctor1 from "../../assets/images/doctor1.png";
import doctor2 from "../../assets/images/doctor2.png";
import doctor3 from "../../assets/images/doctor3.png";
import DoctorCard from "../../components/Team/DoctorCard";
import { Link } from "react-router-dom";

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

const Doctor = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {doctors.map((item, idx) => (
          <Link to={`/doctor/${item?.name}`}>
            <DoctorCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Doctor;
