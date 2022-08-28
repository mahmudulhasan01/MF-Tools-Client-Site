import React from "react";
import Footer from "../Shared/Footer";
import FeatureProduct from "./FeatureProduct";
import Header from "./Header";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <FeatureProduct></FeatureProduct>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
