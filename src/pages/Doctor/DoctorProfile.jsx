import React, { useState } from "react";
import { useParams } from "react-router-dom";
import doctor from "../../assets/images/sliderDoctor.png";
import AppointmentModal from "../../utils/Modal/AppointmentModal";

const DoctorProfile = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container mx-auto flex items-center gap-[50px] my-[100px]">
      <div className="w-1/2">
        <img src={doctor} alt="" className="w-full" />
      </div>
      <div className="w-1/2">
        <h2 className="font-bold text-5xl mb-[20px]">{id}</h2>
        <h4>
          <span className="font-bold">Speciality:</span> Thoracic and
          Cardiovascular
        </h4>
        <h6>
          <span className="font-bold">Fee:</span> $100
        </h6>
        <h6>
          <span className="font-bold">Languages:</span> English
        </h6>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#00B3AD] my-[20px] px-10 py-4 rounded-[5px] text-white font-bold text-lg"
        >
          Take Appoinment
        </button>
      </div>

      <AppointmentModal
        showModal={showModal}
        setShowModal={setShowModal}
        name={id}
      />
    </section>
  );
};

export default DoctorProfile;
