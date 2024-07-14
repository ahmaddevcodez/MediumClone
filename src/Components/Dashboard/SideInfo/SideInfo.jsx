import React from "react";
import StaffPicks from "./StaffPicks/StaffPicks";
import RecommendedTopics from "./RecommendedTopics/RecommendedTopics";
import WhoToFollow from "./WhoToFollow/WhoToFollow";
import SideFooter from "./SideFooter/SideFooter";

const SideInfo = () => {
  return (
    <div className="side-info p-4 max-w-xl mx-auto">
      <StaffPicks />
      <RecommendedTopics />
      <WhoToFollow />
      <SideFooter />
    </div>
  );
};

export default SideInfo;
