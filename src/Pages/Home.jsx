import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import HomeHeader from "@/Components/HomePages/HomeHeader";
import HomeHeader01 from "@/Components/HomePages/HomeHeader01";
import HomeHeader02 from "@/Components/HomePages/HomeHeader02";
import HomeHeader03 from "@/Components/HomePages/HomeHeader03";
import HomeHeader04 from "@/Components/HomePages/HomeHeader04";
import Footer from "@/Components/Footer/Footer";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.status);

  return isLoggedIn ? (
    <div className="dashboard">
      <Dashboard />
    </div>
  ) : (
    <div className="main-home">
      <div className="mb-[0px]">
        <Navbar className="bg-primarybody" />
      </div>
      <HomeHeader />
      <div className="2xl:block xl:block lg:block md:hidden hidden">
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
}

export default Home;
