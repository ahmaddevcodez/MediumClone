import React from "react";
import { Button } from "../../../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../../ui/avatar";

const WhoToFollow = () => {
  return (
    <div>
      <div>
        <h1 className="text-primarygrey text-[16px]  font-bold leading-[20px] second-font mb-6">
          Who to follow
        </h1>
      </div>
      <div>
        <div className="flex items-center space-x-3 max-w-md mx-auto mb-16 bg-white">
          <Avatar className="w-12 h-12">
            <AvatarImage
              src="/path-to-profile-image.jpg"
              alt="Dr. Ashish Bamania"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex items-center">
              <h2 className="text-[15px] text-primarygrey font-bold mr-1 second-font ">
                Dr. Ashish Bamania
              </h2>
              <svg
                className="w-4 h-4 text-[#1DA1F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
            <p className="text-sm text-primarylink leading-tight second-font">
              Self- Taught Software Engineer 👨‍💻 | Emergency...
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full text-primarylink border-primarylink px-3 py-2 h-auto text-sm font-semibold second-font"
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
