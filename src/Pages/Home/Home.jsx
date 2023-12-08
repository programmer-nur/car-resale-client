import React from "react";
import Banner from "./Banner";
import Contract from "./Contract";
import Review from "./Review";
import SiteSummary from "./SiteSummary";
import Supports from "./Supports";
import Started from "./Started";
import LatestCategory from "./LatestCategory";
const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Supports />
        <LatestCategory />
        <Started />
      </div>
      <SiteSummary />
      <div className="py-5 relative sm:py-10 z-20">
        <Review />
        <Contract />
      </div>
    </div>
  );
};

export default Home;
