import React from "react";
import MainBlogPages from "../Components/Dashboard/MainBlogPages/MainBlogPages";
import DashNavbar from "../Components/Dashboard/Navbar/DashNavbar";

const Dashboard = () => {
  return (
    <div>
      <DashNavbar />

      <div className="flex justify-center items-center">
        <MainBlogPages />
      </div>
    </div>
  );
};

export default Dashboard;
