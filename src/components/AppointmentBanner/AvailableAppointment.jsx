import React, { useState } from "react";
import { format } from "date-fns";
import AvailableAppointmentOptions from "./AvailableAppointmentOptions";
import BookingModal from "../../utils/Modal/BookingModal";

const appointmentOptions = [
  {
    id: 1,
    name: "Doctor 0",
    slots: [
      "8.00am-9.00am",
      "9.00am-10.00am",
      "10.00am-11.00am",
      "11.00am-12.00pm",
      "1.00pm-2.00pm",
      "2.00pm-3.00pm",
      "3.00pm-4.00pm",
      "4.00pm-5.00pm",
      "5.00pm-6.00pm",
      "6.00pm-7.00pm",
    ],
    price: "100",
  },
  {
    id: 2,
    name: "Doctor 1",
    slots: [
      "8.00am-9.00am",
      "9.00am-10.00am",
      "10.00am-11.00am",
      "11.00am-12.00pm",
      "1.00pm-2.00pm",
      "2.00pm-3.00pm",
      "3.00pm-4.00pm",
      "4.00pm-5.00pm",
      "5.00pm-6.00pm",
      "6.00pm-7.00pm",
    ],
    price: "120",
  },
  {
    id: 3,
    name: "Doctor 2",
    slots: [
      "8.00am-9.00am",
      "9.00am-10.00am",
      "10.00am-11.00am",
      "11.00am-12.00pm",
      "1.00pm-2.00pm",
      "2.00pm-3.00pm",
      "3.00pm-4.00pm",
      "4.00pm-5.00pm",
      "5.00pm-6.00pm",
      "6.00pm-7.00pm",
    ],
    price: "170",
  },
  {
    id: 4,
    name: "Doctor 3",
    slots: [
      "8.00am-9.00am",
      "9.00am-10.00am",
      "10.00am-11.00am",
      "11.00am-12.00pm",
      "1.00pm-2.00pm",
      "2.00pm-3.00pm",
      "3.00pm-4.00pm",
      "4.00pm-5.00pm",
      "5.00pm-6.00pm",
      "6.00pm-7.00pm",
    ],
    price: "230",
  },
];

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const [bookinModal, setBookingModal] = useState(false);
  return (
    <section className="my-16">
      <p className="text-center font-[600] text-[35px] text-[#20226A]">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10">
        {appointmentOptions.map((option) => (
          <AvailableAppointmentOptions
            key={option.id}
            appointmentOption={option}
            setTreatment={setTreatment}
            setBookingModal={setBookingModal}
          ></AvailableAppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          bookinModal={bookinModal}
          setBookingModal={setBookingModal}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
