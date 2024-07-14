import React from "react";
import DashNavbar from "../Navbar/DashNavbar";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="">
      <DashNavbar></DashNavbar>
      <div className="my-container">
        <div className="lg:text-[42px] md:text-[34px] text-[28px]  text-primarygrey second-font font-medium mt-[30px]">
          <h1>Recent searches</h1>
        </div>
        <div className="relative ml-auto flex-1 md:grow-0 lg:hidden blockq mt-10 ">
          <Search className="stroke-[1.2] font-thin absolute left-4 top-2.5 h-5 w-5 text-muted-foreground lg:hidden block" />
          <Input
            type="search"
            placeholder="Search"
            className="outline-none ml-1 border-none second-font w-full rounded-lg bg-primarylightergrey pl-11 "
          />
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
