import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Contract from "./Contract";
import OurWork from "./OurWork";
import Review from "./Review";
import SiteSummary from "./SiteSummary";
import Supports from "./Supports";
import Started from "./Started";
const Home = () => {
  return (
    <div className="bg-[#dfedf0]">
      <Banner />
      <div
        className="py-5 sm:py-10"
      >
        <Supports />
        <Categories />
        <Started />
      </div>
      <SiteSummary />
      <div className="py-5 bg-[#dfedf0] relative sm:py-10 z-20">  
          <OurWork />  
        <Review />   
        <Contract />
      </div>
    </div>
  );
};

export default Home;
