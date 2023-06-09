import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, isBefore, isFriday } from "date-fns";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const isDayDisabled = (day) => {
    return isBefore(day, new Date()) || isFriday(day);
  };
  return (
    <section className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" /> */}
          <div></div>
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={isDayDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
