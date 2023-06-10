import React from "react";
import { useParams } from "react-router-dom";
import heart from "../../assets/icons/heart.png";

const SingleService = () => {
  const { id } = useParams();
  return (
    <section className="container mx-auto my-[100px] ">
      <div className="flex flex-col items-center w-full gap-8 p-5 lg:p-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2491/2491418.png"
          className="w-[200px]"
        />
        <h1 className="text-[#081830] text-5xl font-semibold">{id}</h1>
        <p className="max-w-[100ch] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          officia error. Inventore facere quia odit corrupti commodi quasi,
          ducimus, modi quibusdam nihil animi suscipit? Suscipit inventore
          ducimus corrupti deleniti odit ex dolor velit aut repudiandae id. Ut
          omnis, minus suscipit rem porro et consequuntur debitis nobis vitae
          qui repellat, alias illum? Provident deleniti, facilis alias, sed ipsa
          sit ipsum ad saepe est illum inventore? Excepturi, aliquam dolorum
          velit voluptates minus exercitationem perspiciatis pariatur adipisci
          ut quo deleniti est quod illum. Debitis aliquid maiores harum quam.
          Quaerat, temporibus unde? Facere reprehenderit ullam corporis ea quo
          esse nostrum voluptas perferendis aperiam dolor. In dolores debitis,
          iusto suscipit veniam autem velit optio odio quasi! Distinctio,
          facere. Maiores aut nemo alias est dignissimos iusto architecto quod
          facere praesentium, rerum vero soluta ipsam, vitae blanditiis cum
          corrupti, quae quo quibusdam ipsa suscipit accusamus neque. Aperiam
          ratione laudantium vitae sequi et officiis quam, voluptatem deleniti
          exercitationem. Ratione alias sequi vitae, itaque non est, blanditiis
          harum laudantium eligendi corporis repellendus facilis! Aliquid
          molestias possimus ex obcaecati in deleniti ipsam impedit unde beatae
          velit cum aliquam assumenda incidunt totam, ullam saepe. Rem optio,
          voluptas suscipit laudantium, voluptates tempora aliquam dignissimos
          veritatis, minus hic voluptatem sunt placeat asperiores aut!
        </p>
      </div>
    </section>
  );
};

export default SingleService;
