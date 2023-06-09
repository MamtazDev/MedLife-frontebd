import React, { useState } from "react";
import AppointmentBanner from "../../components/AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../../components/AppointmentBanner/AvailableAppointment";

const MainAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className="container mx-auto">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </section>
  );
};

export default MainAppointment;
