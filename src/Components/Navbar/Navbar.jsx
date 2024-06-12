import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Logo from "../Common/Logo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
    { id: uuidv4(), name: "Write", link: "/" },
  ];

  return (
    <div className="relative">
      <div
        className={cn(
          `border-b-[1px] border-primarygrey fixed top-0 z-50 transition backdrop-filter w-[100vw]`,
          scrolled
            ? "backdrop-blur-md bg-opacity-50 bg-primarywhite"
            : "bg-opacity-100"
        )}
      >
        <div className="flex justify-between items-center text-center mt-5 my-container mb-4">
          <Logo />
          <div className="flex items-center gap-6">
            <ul className="flex gap-5">
              {links.map(({ link, id, name }) => (
                <li key={id} className="lg:flex hidden">
                  <a
                    href={link}
                    className="navbar-font cursor-pointer text-sm font-semibold text-primarynav"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="lg:flex md:flex hidden">
                <a
                  href="/"
                  className="navbar-font cursor-pointer text-sm font-semibold text-primarynav"
                >
                  Sign in
                </a>
              </li>
            </ul>
            <Button
              className={`rounded-full navbar-font ${
                scrolled
                  ? "bg-primarygreen transition-all duration-300 ease-in-out"
                  : ""
              }`}
              variant="mybutton"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
