import React from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { id } = useParams();
  return <section>{id} service</section>;
};

export default SingleService;
