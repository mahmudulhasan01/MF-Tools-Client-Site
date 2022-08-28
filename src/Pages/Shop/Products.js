import React from "react";
import Product from "./Product";

const Products = ({ tools }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Our All Products</h1>

      <div className="grid grid-cols-1 gap-3">
        {tools.map((tool) => (
          <Product key={tool._id} tool={tool}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
