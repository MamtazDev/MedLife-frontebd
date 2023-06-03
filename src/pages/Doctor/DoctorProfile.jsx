import React from "react";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { id } = useParams();
  return <section>{id}</section>;
};

export default DoctorProfile;
