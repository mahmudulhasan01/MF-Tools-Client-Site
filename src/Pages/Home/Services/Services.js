import React from "react";
import servicelogo1 from "../../../assets/servicelogo1.png";
import servicelogo2 from "../../../assets/servicelogo2.png";
import servicelogo3 from "../../../assets/servicelogo3.png";
import servicelogo4 from "../../../assets/servicelogo4.png";
import Service from "./Service";

const services = [
  {
    id: 1,
    name: "FREE DELIVERY",
    img: servicelogo1,
    description: "Free shipping on all order",
  },
  {
    id: 2,
    name: "ONLINE SUPPORT 24/7",
    img: servicelogo2,
    description: "Support online 24 hours",
  },
  {
    id: 3,
    name: "MONEY RETURN",
    img: servicelogo3,
    description: "Back guarantee under 7 days",
  },
  {
    id: 4,
    name: "MEMBER DISCOUNT",
    img: servicelogo4,
    description: "Onevery order over $30.00",
  },
];

const Services = () => {
  return (
    <section>
      <h1 className="text-center mb-6 text-3xl font-bold">Our Services</h1>
      <div className="flex gap-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
