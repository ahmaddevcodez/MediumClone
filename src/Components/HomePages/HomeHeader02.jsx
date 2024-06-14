import React from "react";

const HomeHeader02 = () => {
  return (
    <div className="border-b-[1px] border-primarygrey">
      <div className="grid grid-cols-3 my-container ">
        <div className="col-span-1 ">
          <h1 className="light font-thin second-font text-primarygreen 2xl:text-[350px] xl:text-[300px] lg:text-[250px]  text-center">
            02.
          </h1>
        </div>
        <div className="col-span-2 ml-32">
          <h1 className="xl:text-[85px] lg:text-[75px] md:text-[105px] text-[90px] tracking-tight leading-[80px] text-primarygrey font-medium mb-5 mt-[6.5rem]">
            A network of communities
          </h1>
          <p className="2xl:text-[27px] xl:text-[21px] lg:text-[19px] md:text-[105px] text-[90px] tracking-tight  text-primarygrey font-medium mb-5 ">
            Medium is home to thousands of publications, topics, and stories
            covering everything from programming to poetry. Find your
            community—or build your own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader02;
