import React from "react";
import "animate.css";
import bnimg from "../../assets/bannarImg.png";

const Header = () => {
  return (
    <section>
      <div className="flex lg:flex-row-reverse justify-between">
        <div className="animate__animated animate__bounceInRight">
          <img src={bnimg} alt="" />
        </div>
        <div className="animate__animated animate__bounceInLeft">
          <h4 className="text-4xl font-bold mb-5">
            <span>Big Sale </span>
            <br /> Hand Tools Power <br /> Saw Machine
          </h4>
          <button class="btn btn-primary text-secondary">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Header;

{
  /* <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */
}
