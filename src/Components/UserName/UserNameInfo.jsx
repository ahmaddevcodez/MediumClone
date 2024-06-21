import React, { useEffect, useState } from "react";
import Logo from "../Common/Logo";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import authService from "../../supabase/auth";

const UserNameInfo = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const user = await authService.getUser();
      if (user) {
        setEmail(user.email);
      }
    };

    fetchEmail();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-3 mb-24">
        <Logo />
      </div>
      <div className="flex justify-center items-center">
        <div>
          <div className="text-center text-[32px] leading-[32px] pt-[35px] pb-[30px]">
            <h1>Almost there!</h1>
            <h1 className="font-medium text-[16px] mt-3 text-primarygrey second-font text-center tracking-wide ">
              Finish creating your account for the full Medium experience.
            </h1>
          </div>
          <div className="mb-4">
            <div className="flex justify-center text-primarygrey mb-2">
              <Label
                for="fullName"
                class="text-primarylightgrey font-medium text-[12px]  second-font"
              >
                Your full name
              </Label>
            </div>
            <input
              id="fullName"
              type="text"
              class="outline-none p-1 border-b-2 w-full border-primarygray95 rounded text-primarygrey"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <Label
              for="fullName"
              class="text-primarylightgrey font-medium text-[12px] mb-5  second-font"
            >
              Your email
            </Label>
            {email}
            <Button
              className="bg-primarydarkgreen hover:bg-primarydarkergreen mt-7 rounded-full second-font transition-all duration-900 ease-in-sout px-5"
              variant="mybutton"
            >
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameInfo;
