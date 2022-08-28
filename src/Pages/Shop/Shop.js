import React, { useEffect, useState } from "react";
import Products from "./Products";

const Shop = () => {
  const [tools, setTools] = useState([]);
  console.log("There is shop Data", tools);

  useEffect(() => {
    fetch(`http://localhost:5000/shop`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <div className="bg-gray-100 pl-5 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
          </ul>
        </div>
      </div>
      <Products tools={tools}></Products>
    </div>
  );
};

export default Shop;
