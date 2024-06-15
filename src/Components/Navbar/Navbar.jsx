import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Logo from "../Common/Logo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import SignIn from "../Common/SignIn";
import SignUp from "../Common/SignUp";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 390);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { id: uuidv4(), name: "Our story", link: "/" },
    { id: uuidv4(), name: "Membership", link: "/" },
  ];

  return (
    <div className="relative">
      <div
        className={cn(
          `border-b-[1px] border-primarygrey duration-900 ease-in-out fixed top-0 z-50 transition-all backdrop-filter w-full bg-primarybody`,
          scrolled
            ? "bg-primarywhite transition-all duration-900 ease-in-out"
            : " transition-all duration-900 ease-in-out"
        )}
      >
        <div className="flex justify-between items-center text-center pt-5 my-container pb-4">
          <Logo />
          <div className="flex items-center gap-6">
            <ul className="flex gap-5">
              {links.map(({ link, id, name }) => (
                <li key={id} className="lg:flex hidden">
                  <a
                    href={link}
                    className="second-font cursor-pointer text-sm font-medium text-primarynav"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <Dialog className="shadow-xl">
                <DialogTrigger asChild>
                  <li className="lg:flex md:flex hidden">
                    <span className="second-font cursor-pointer text-sm font-medium text-primarynav">
                      Write
                    </span>
                  </li>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[670px] ">
                  <DialogHeader>
                    <SignUp />
                  </DialogHeader>
                </DialogContent>
              </Dialog>{" "}
              <Dialog className="shadow-xl">
                <DialogTrigger asChild>
                  <li className="lg:flex md:flex hidden">
                    <span className="second-font cursor-pointer text-sm font-medium text-primarynav">
                      Sign in
                    </span>
                  </li>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[670px] ">
                  <DialogHeader>
                    <SignIn />
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </ul>
            <Dialog className="shadow-xl">
              <DialogTrigger asChild>
                <Button
                  className={cn(
                    "rounded-full second-font transition-all duration-900 ease-in-sout",
                    scrolled ? "bg-primarygreen hover:bg-primarydarkgreen" : ""
                  )}
                  variant="mybutton"
                >
                  Get started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[670px] ">
                <DialogHeader>
                  <SignUp />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
