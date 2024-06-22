import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChevronUp, LogIn } from "lucide-react";

import authService from "../../supabase/auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../Components/ui/dialog.jsx";

import SignUp from "../Common/SignUp";

const SignIn = () => {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = async () => {
    setError("");
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const result = await authService.SignIn({ email });
      setHide1(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderContent = () => {
    if (hide) {
      return (
        <div>
          {/* Title of the SignIn page */}
          <div className="text-center text-[28px] ">Join Medium.</div>
          {/* Container for the SignIn buttons */}
          <div className="flex justify-center items-center flex-col">
            {/* Google SignIn button */}
            <div className="pt-9">
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3"
              >
                <Icons.Google className="w-6 h-6 text-start"></Icons.Google>
                <span className="second-font text-[16px] text-center ml-10">
                  Sign in with Google
                </span>
              </Button>
            </div>

            {/* Facebook SignIn button */}
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3"
              >
                <Icons.Facebook className="w-6 h-6 text-start"></Icons.Facebook>
                <span className="second-font text-[16px] text-center ml-8">
                  Sign in with Facebook
                </span>
              </Button>
            </div>
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3"
              >
                <Icons.Apple className="w-6 h-6 text-start"></Icons.Apple>
                <span className="second-font text-[16px] text-center ml-10">
                  Sign in with Apple
                </span>
              </Button>
            </div>
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3 text-center"
              >
                <Icons.X className="w-6 h-6 text-start"></Icons.X>
                <span className="second-font text-[16px] text-center ml-14">
                  Sign in with X
                </span>
              </Button>
            </div>

            {/* Email SignIn button */}
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-10"
                onClick={() => setHide(false)}
              >
                <Icons.Mail className="w-6 h-6 text-start"></Icons.Mail>
                <span className="second-font text-[16px] text-center ml-10">
                  Sign in with email
                </span>
              </Button>
            </div>

            {/* Sign in link for existing users */}
            <div className="pb-24">
              <h1 className="second-font">
                Don't have an account?
                <Dialog className="shadow-xl">
                  <DialogTrigger asChild>
                    <span className="text-primaryextradarkgreen ml-1 cursor-pointer hover:text-primarydarkgreen font-semibold">
                      Sign up
                    </span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[670px] ">
                    <DialogHeader>
                      <SignUp />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </h1>
            </div>

            {/* Terms of Service and Privacy Policy notice */}
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink">
                Click “Sign in” to agree to Medium’s
                <a href="#" className="underline">
                  Terms of Service
                </a>
                and acknowledge that <br /> Medium’s
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                applies to you.
              </h1>
            </div>
          </div>
        </div>
      );
    } else if (hide1) {
      return (
        <div>
          {/* Title of the SignIn page */}
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[30px]">
            Sign in with email
          </div>

          {/* Main container for SignIn form, centered and column-oriented */}
          <div className="flex justify-center items-center flex-col">
            {/* Subtitle with instructions for the user */}
            <div className="mb-[25px]">
              <h1 className="font-medium text-base text-primaryblack second-font text-center">
                Enter the email address associated with <br /> your account, and
                we’ll send a magic link to <br /> your inbox.{" "}
              </h1>
            </div>

            {/* Email input container */}
            <div className="mb-[10px]">
              <div className="second-font text-center text-[14px] leading-[32px] pt-[35px] pb-[30px]">
                <div className="grid w-[270px] max-w-sm items-center gap-1.5">
                  {/* Label for the email input field */}
                  <Label htmlFor="email" className="text-center">
                    Your Email
                  </Label>
                  {/* Email input field */}
                  <Input
                    className="bg-primarygray95"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="text-red-600">{error}</p>}
                </div>{" "}
              </div>
            </div>

            {/* Continue button */}
            <div className="mb-10">
              <Button
                className="bg-primaryblack second-font rounded-full py-2 h-[40px] w-[100%]"
                variant="mybutton"
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>

            {/* Option to view all SignIn options */}
            <div className="mb-10">
              <span
                className="second-font text-sm text-primarydarkgreen flex cursor-pointer"
                onClick={() => setHide(true)}
              >
                <ChevronUp className="-rotate-90 w-5 h-5 font-thin text-primarygreen" />{" "}
                All Sign in options
              </span>
            </div>

            {/* Footer with reCAPTCHA and policy information */}
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink leading-5">
                This site is protected by reCAPTCHA Enterprise and the <br />
                <a href="#" className="underline">
                  Google Privacy Policy
                </a>
                and
                <a href="#" className="underline">
                  Terms of Service
                </a>
                apply.
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[30px]">
            Check your inbox.
          </div>
          <div className="flex justify-center items-center flex-col">
            {/* Subtitle with instructions for the user */}
            <div className="mb-[25px]">
              <h1 className="font-medium text-base text-primaryblack second-font text-center">
                Click the link we sent to <br /> ahmadTahir1399@gmail.com to
                Sign in.{" "}
              </h1>
            </div>
            <a href="/">
              <Button
                className="bg-primaryblack second-font rounded-full py-2 h-[40px] "
                variant="mybutton"
              >
                ok
              </Button>
            </a>
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default SignIn;
