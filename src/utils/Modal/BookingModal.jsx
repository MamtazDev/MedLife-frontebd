import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  treatment,
  selectedDate,
  setTreatment,
  bookinModal,
  setBookingModal,
}) => {
  const { name, slots, price } = treatment;
  const date = format(selectedDate, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingModal(false);
  };
  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={bookinModal}
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            className="grid grid-cols-1 gap-3 mt-10"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              defaultValue={date}
              readOnly
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue="your name"
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="email"
              type="email"
              defaultValue="your email"
              disabled
              placeholder="Your Email Address"
              className="input w-full input-bordered"
              readOnly
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full  btn btn-accent text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
