import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import HomeHeader from "@/Components/HomePages/HomeHeader";
import HomeHeader01 from "@/Components/HomePages/HomeHeader01";
import HomeHeader02 from "@/Components/HomePages/HomeHeader02";
import HomeHeader03 from "@/Components/HomePages/HomeHeader03";
import HomeHeader04 from "@/Components/HomePages/HomeHeader04";
import Footer from "@/Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="mb-[100px]">
        <Navbar />
      </div>
      <HomeHeader />
      <div className="2xl:block xl:block lg:block md:hidden hidden ">
        <HomeHeader01 />
        <HomeHeader02 />
        <HomeHeader03 />
        <HomeHeader04 />
      </div>
      <div className="lg:mt-[0px] mt-[20x]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;