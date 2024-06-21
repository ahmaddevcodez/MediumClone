import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
