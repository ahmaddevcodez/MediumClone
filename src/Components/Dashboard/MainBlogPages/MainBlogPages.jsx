import React from "react";
import DashSwiper from "../Swiper/DashSwiper";
import Blog from "../Blog/Blog";
import SideInfo from "../SideInfo/SideInfo";

const MainBlogPages = () => {
  return (
    <div className="my-container">
      <div className="lg:grid lg:grid-cols-3 lg:gap-3">
        <div className="lg:col-span-2 xl:pr-10 lg:pr-10 lg:border-r-[1px] lg:border-primarygray95">
          <div className="mt-10 ">
            <DashSwiper />
            <Blog />
          </div>
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <div className="app-container">
            <SideInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogPages;
