import React from "react";
import SignUp from "../Common/SignUp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

const HomeHeader04 = () => {
  return (
    <div>
      <Dialog className="shadow-xl">
        <DialogTrigger asChild>
          <div className="hover-arrow  flex justify-center items-center text-center h-[240px] bg-primarygreen cursor-pointer transition-all duration-300 ease-in-out hover:bg-secondarygreen hover:rounded-[120px]">
            <div className="flex items-center transition-transform duration-300 ease-in-out hover:translate-x-4">
              <h1 className="text-primarywhite text-7xl tracking-tighter">
                Unlock a world of wisdom
              </h1>
              <img
                src="/assets/images/home-page/arrow.png"
                className="arrow ml-10 mt-3 w-[100px] transition-transform duration-300 ease-in-out hover:translate-x-2"
                alt=""
              />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[670px]">
          <DialogHeader>
            <SignUp />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeHeader04;
