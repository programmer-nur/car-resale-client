import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Contract from "./Contract";
import OurWork from "./OurWork";
import Review from "./Review";
import SiteSummary from "./SiteSummary";
import Supports from "./Supports";
import Cover from "../../assets/carcover.png";
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
        <Supports />
        <hr className="mx-9" />
        <Categories />
      </div>
      <SiteSummary />
      <div className="py-5 bg-[#BBC6C8] relative sm:py-10 z-20">
        <div className="absolute bg-gradient-to-r from-[#78c0c5] to-[#6c4371] w-[10rem] md:w-[18rem] h-[5rem] md:h-[10rem] top-[10%] left-[10%] rounded-3xl -z-10 blur-[89px]"></div>
        <div className="absolute bg-gradient-to-r from-[#6ab5ba] to-[#9f6fa5] w-[10rem] md:w-[18rem] h-[5rem] md:h-[10rem] top-[30%] right-[10%] rounded-3xl -z-10 blur-[95px]"></div>
        <div className="absolute bg-gradient-to-r from-[#c4dcdd] to-[#d096d7] w-[10rem] md:w-[18rem] h-[5rem] md:h-[10rem] top-[55%] left-[7%] rounded-3xl -z-10 blur-[95px]"></div>
        <Review />
        <OurWork />
        <Contract />
      </div>
    </div>
  );
};

export default Home;
