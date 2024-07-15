import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChevronUp, LogIn } from "lucide-react";
import authService from "../../supabase/auth";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

import SignIn from "../Common/SignIn";

const SignUp = () => {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    handleContinue();
  }, []);

  const handleContinue = async () => {
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const result = await authService.createAccount({ email });
      setHide1(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderContent = () => {
    if (hide) {
      return (
        <div>
          {/* Title of the signup page */}
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[39px]">
            Join Medium.
          </div>
          {/* Container for the signup buttons */}
          <div className="flex justify-center items-center flex-col">
            {/* Google signup button */}
            <div className="pt-9">
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3"
              >
                <Icons.Google className="w-6 h-6 text-start"></Icons.Google>
                <span className="second-font text-[16px] text-center ml-10">
                  Sign up with Google
                </span>
              </Button>
            </div>

            {/* Facebook signup button */}
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-3"
              >
                <Icons.Facebook className="w-6 h-6 text-start"></Icons.Facebook>
                <span className="second-font text-[16px] text-center ml-8">
                  Sign up with Facebook
                </span>
              </Button>
            </div>

            {/* Email signup button */}
            <div>
              <Button
                variant="authbutton"
                className="border transition duration-150 flex justify-start py-[22px] mb-10"
                onClick={() => setHide(false)}
              >
                <Icons.Mail className="w-6 h-6 text-start"></Icons.Mail>
                <span className="second-font text-[16px] text-center ml-10">
                  Sign up with email
                </span>
              </Button>
            </div>

            {/* Sign in link for existing users */}
            <div className="pb-36">
              <h1 className="second-font">
                Already have an account?
                <Dialog className="shadow-xl">
                  <DialogTrigger asChild>
                    <sapn className="text-primaryextradarkgreen ml-1 cursor-pointer hover:text-primarydarkgreen font-semibold">
                      Sign in
                    </sapn>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[670px] ">
                    <DialogHeader>
                      <SignIn />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </h1>
            </div>

            {/* Terms of Service and Privacy Policy notice */}
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink">
                Click “Sign up” to agree to Medium’s
                <Link to="#" className="underline">
                  Terms of Service
                </Link>
                and acknowledge that <br /> Medium’s
                <Link to="#" className="underline">
                  Privacy Policy
                </Link>
                applies to you.
              </h1>
            </div>
          </div>
        </div>
      );
    } else if (hide1) {
      return (
        <div>
          {/* Title of the signup page */}
          <div className="text-center text-[28px] leading-[32px] pt-[35px] pb-[30px]">
            Sign up with email
          </div>

          {/* Main container for signup form, centered and column-oriented */}
          <div className="flex justify-center items-center flex-col">
            {/* Subtitle with instructions for the user */}
            <div className="mb-[25px]">
              <h1 className="font-medium text-base text-primaryblack second-font text-center">
                Enter your email address to create an <br /> account.
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
            </div>
            {/* Option to view all signup options */}
            <div className="mb-10">
              <span
                className="second-font text-sm text-primarydarkgreen flex cursor-pointer"
                onClick={() => setHide(true)}
              >
                <ChevronUp className="-rotate-90 w-5 h-5 font-thin text-primarygreen" />{" "}
                All sign up options
              </span>
            </div>

            {/* Footer with reCAPTCHA and policy information */}
            <div className="flex justify-center items-center">
              <h1 className="second-font text-xs text-center text-primarylink leading-5">
                This site is protected by reCAPTCHA Enterprise and the <br />
                <Link
                  to="https://policies.google.com/privacy?source=register--------------------------lo_home_nav-----------"
                  className="underline"
                >
                  Google Privacy Policy
                </Link>
                and
                <Link
                  to="https://policies.google.com/terms?source=register--------------------------lo_home_nav-----------"
                  className="underline"
                >
                  Terms of Service
                </Link>
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
                Click the link we sent to <br /> {email} to sign up.
              </h1>
            </div>
            <Link to="/">
              <Button
                className="bg-primaryblack second-font rounded-full py-2 h-[40px] "
                variant="mybutton"
              >
                ok
              </Button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default SignUp;
