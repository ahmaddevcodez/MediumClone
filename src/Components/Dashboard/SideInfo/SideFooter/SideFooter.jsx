import React from "react";
import { Link } from "react-router-dom";

const links = [
  "Help",
  "Status",
  "About",
  "Careers",
  "Press",
  "Blog",
  "Privacy",
  "Terms",
  "Text to speech",
  "Teams",
];

const SideFooter = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto second-font">
        <div>
          <h1 className="text-primarygrey text-[16px]  font-bold leading-[20px] second-font mb-6">
            Reading list
          </h1>
        </div>{" "}
        <div className="flex items-center">
          <p className="text-primarylink mb-4 text-[14px] ">
            Click the{" "}
            <span className="inline-block align-text-bottom ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>{" "}
            on any story to easily add it to your reading list or a custom list
            that you can share.
          </p>
        </div>
        <div className="flex flex-wrap text-xs text-gray-500">
          {links.map((link, index) => (
            <Link
              key={index}
              // to={`/${link.toLowerCase().replace(" ", "-")}`}
              to="#a"
              className="mr-4 hover:underline"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideFooter;
