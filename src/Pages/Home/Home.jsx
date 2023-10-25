import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Contract from "./Contract";
import OurWork from "./OurWork";
import Review from "./Review";
import SiteSummary from "./SiteSummary";
import Supports from "./Supports";
import Cover from "../../assets/carcover.png";
import Started from "./Started";
const Home = () => {
  return (
    <div>
      <Banner />
      <div
        style={{
          background: `url(${Cover})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5 sm:py-10"
      >
        <hr className="mx-9" />
        <Categories />
        <Started />
      </div>
      <SiteSummary />
      <div className="py-5 bg-[#BBC6C8] relative sm:py-10 z-20">    
        <Review />   
      </div>
    </div>
  );
};

export default Home;
