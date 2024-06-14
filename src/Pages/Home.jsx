import React from "react";
import HomeHeader from "@/Components/HomePages/HomeHeader";
import HomeHeader01 from "@/Components/HomePages/HomeHeader01";
import HomeHeader02 from "@/Components/HomePages/HomeHeader02";
import HomeHeader03 from "@/Components/HomePages/HomeHeader03";
import HomeHeader04 from "@/Components/HomePages/HomeHeader04";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="2xl:block xl:block lg:block md:hidden hidden ">
        <HomeHeader01 />
        <HomeHeader02 />
        <HomeHeader03 />
        <HomeHeader04 />
      </div>
    </div>
  );
};

export default Home;
