import React from "react";

const Product = ({ tool }) => {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={tool.img} class="max-w-sm rounded-lg shadow-2xl" />
        <div className="ml-4">
          <h1 class="text-3xl font-bold">{tool.name}</h1>
          <div className="rating rating-sm ml-[-15px] my-2 flex gap-2">
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
          <div className="flex gap-2 my-2">
            <p className="font-semibold">${tool.latestPrice}</p>
            <del>
              <p>${tool.price}</p>
            </del>
          </div>
          <p class="font-semibold">{tool.description}</p>
          <div className="flex items-center gap-2 my-3">
            {/* ================= Add To WishList ========== */}
            <button class="btn-ghost btn-sm rounded-md bg-slate-300 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            {/* ================= End =================== */}

            <button class="btn-ghost font-bold btn-sm rounded-md bg-slate-300 outline-none">
              Order Now
            </button>

            {/* ========================= Add To Card ============= */}

            <button class="btn-ghost font-bold btn-sm rounded-md bg-slate-300 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            {/* ======================== End ================= */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
