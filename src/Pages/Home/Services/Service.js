import React from "react";

const Service = ({ service }) => {
  return (
    <div className="flex min-h-16 p-3 shadow-xl items-center">
      <div className=" mr-4">
        <img src={service.img} alt="" />
      </div>
      <div className="">
        <h2 className="font-bold">{service.name}</h2>
        <small>
          <p>{service.description}</p>
        </small>
      </div>
    </div>
  );
};

export default Service;
