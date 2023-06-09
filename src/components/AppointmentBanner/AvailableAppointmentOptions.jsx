import React from "react";

const AvailableAppointmentOptions = ({
  appointmentOption,
  setTreatment,
  setBookingModal,
}) => {
  const { name, slots, price } = appointmentOption;
  const handleClick = () => {
    setBookingModal(true);
    setTreatment(appointmentOption);
  };
  return (
    <div className="card  shadow-lg">
      <div className="card-body text-center">
        <h2 className="text-2xl font-[600]  text-[#20226A] text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="bookingModal"
            className="btn bg-[#00b3ad] border-0 text-white"
            onClick={handleClick}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointmentOptions;
