import React from "react";
import { v4 as uuidv4 } from "uuid";
import Logo from "../Common/Logo";

const Footer = () => {
  const FooterLinks = [
    {
      id: uuidv4(),
      name: "Help",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Status",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "About",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Careers",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Press",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Blog",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Privacy",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Terms",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Text to speech",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Teams",
      link: "/",
    },
  ];
  const FooterLinksforsmallandmedium = [
    {
      id: uuidv4(),
      name: "About",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Help",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Terms",
      link: "/",
    },
    {
      id: uuidv4(),
      name: "Privacy",
      link: "/",
    },
  ];

  return (
    <div className="border-t-[1px] border-primarygrey pt-6 pb-5 lg:bg-primarybody md:bg-primaryblack bg-primaryblack">
      <div className="my-container">
        <Logo className="mb-4 lg:hidden block fill-white" />
        <div>
          <ul className="lg:flex hidden gap-5 justify-center flex-wrap">
            {FooterLinks.map(({ id, name, link }) => (
              <li key={id} className="flex flex-wrap">
                <a
                  href={link}
                  className="second-font cursor-pointer text-sm font-medium text-primarylink"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="lg:hidden flex gap-5 justify-start flex-wrap  ">
            {FooterLinksforsmallandmedium.map(({ id, name, link }) => (
              <li key={id} className="flex flex-wrap">
                <a
                  href={link}
                  className="second-font cursor-pointer text-sm font-medium hover:underline text-primarywhite"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
