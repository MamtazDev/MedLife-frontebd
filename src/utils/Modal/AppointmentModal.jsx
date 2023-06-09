import React from "react";

const slots = [
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
];

const AppointmentModal = ({ showModal, setShowModal, name }) => {
  const date = new Date();
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={showModal}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            className="grid grid-cols-1 gap-3 mt-10"
            onSubmit={handleSubmit}
          >
            <input
              type="date"
              placeholder="Type here"
              className="input w-full input-bordered"
              min={today}
              required
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

export default AppointmentModal;
