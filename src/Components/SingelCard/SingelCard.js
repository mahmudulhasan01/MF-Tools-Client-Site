import React from "react";

const SingelCard = ({ product }) => {
  console.log(product);
  return (
    <div className="card py-0 my-0 w-96 bg-base-100 shadow-xl animate__animated animate__zoomIn">
      <figure className="px-4 pt-2">
        <img src={product.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body p-0 py-5 items-center text-center">
        <div className="rating rating-sm space-x-1.5">
          <input type="radio" name="rating-9" className="rating-hidden" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input
            type="radio"
            name="rating-9"
            className="mask mask-star-2"
            checked
          />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
        </div>
        <h2 className="text-md font-bold">{product.name}</h2>

        <div className="flex gap-2">
          <p>$30.00</p> <p>$32.00</p>
        </div>
      </div>
    </div>
  );
};

export default SingelCard;
