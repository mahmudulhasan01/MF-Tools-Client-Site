import React from "react";
import SingelCard from "../../Components/SingelCard/SingelCard";
import products1 from "../../assets/products1.png";
import products2 from "../../assets/products2.png";
import products3 from "../../assets/products3.png";
import products4 from "../../assets/products4.png";

const products = [
  {
    id: 1,
    name: "hammer",
    img: products1,
  },
  {
    id: 2,
    name: "hammer",
    img: products2,
  },
  {
    id: 3,
    name: "hammer",
    img: products3,
  },
  {
    id: 4,
    name: "hammer",
    img: products4,
  },
];

const FeatureProduct = () => {
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mb-6">Feature Products</h1>
      {/* <img src={products1} alt="" /> */}
      <div className="flex gap-3">
        {products.map((product) => (
          <SingelCard
            className=""
            key={product.id}
            product={product}
          ></SingelCard>
        ))}
      </div>
    </section>
  );
};

export default FeatureProduct;
