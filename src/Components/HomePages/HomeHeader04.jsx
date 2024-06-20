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
          <div className="div-animate hover-arrow flex justify-center items-center text-center h-[240px] bg-primarygreen hover:bg-secondarygreen hover:rounded-full cursor-pointer hover:transition-all duration-300 ease-in-out">
            <div className="flex items-center">
              <h1 className="text-primarywhite text-7xl tracking-tighter">
                Unlock a world of wisdom
              </h1>
              <img
                src=" /assets/images/home-page/arrow.png"
                className="arrow ml-10 mt-3 w-[100px]"
                alt=""
              />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[670px] ">
          <DialogHeader>
            <SignUp />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeHeader04;
