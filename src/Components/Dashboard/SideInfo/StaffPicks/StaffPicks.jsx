import React from "react";

const StaffPicks = () => {
  return (
    <div>
      <div className="mb-16">
        <div>
          <h1 className="text-[#242424] text-[16px]  font-bold leading-[20px] second-font mb-6">
            Staff Picks
          </h1>
        </div>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="second-font text-xs mb-1 text-primaryblack font-semibold">
            Nigel Stanley
          </span>
        </div>
        <p className="text-[#242424] text-[15px]  font-bold leading-[20px] second-font w-[90%]">
          How in 2024 Labour won a big majority on a similar share of the vote
          that brought defeat in 2019
        </p>
      </div>
    </div>
  );
};

export default StaffPicks;
