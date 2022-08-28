import React from "react";
import "animate.css";
import bnimg from "../../assets/bannarImg.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import bannerBG from "../../assets/bannerbg.png";

const Header = () => {
  return (
    <header style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <div className="flex lg:flex-row-reverse justify-between">
        <div className="">
          <div className="">
            <img src={banner2} alt="" />
          </div>
          <div className="">
            <img src={banner3} alt="" />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${bannerBG})`, width: "60%" }}
          className="flex lg:flex-row-reverse justify-between items-center p-8"
        >
          <div className="animate__animated animate__bounceInDown">
            <img src={bnimg} alt="" />
          </div>
          <div className="animate__animated animate__bounceInLeft">
            <h4 className="text-4xl font-bold mb-5">
              <span>Big Sale </span>
              <br /> Hand Tools Power <br /> Saw Machine
            </h4>
            <button className="btn btn-secondary text-dark">Order Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */
}
