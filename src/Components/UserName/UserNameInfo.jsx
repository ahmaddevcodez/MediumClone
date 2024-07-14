import React, { useEffect, useState } from "react";
import Logo from "../Common/Logo";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import authService from "../../supabase/auth";
import service from "../../supabase/config";
import { useNavigate } from "react-router-dom";

const UserNameInfo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setMessage("User ID not found.");
      return;
    }
    const { data, error } = await service.UserName(userId, fullName);r6
    if (error) {
      setMessage(`Error updating user: ${error.message}`);
    } else {
      setMessage("User name is submitted");
      setFullName("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getUser();
      if (user) {
        setEmail(user.email);
        setUserId(user.id); // Store user ID
      }
    };

    fetchUser();
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
            <h1 className="font-medium text-[16px] mt-3 text-primarygrey second-font text-center tracking-wide">
              Finish creating your account for the full Medium experience.
            </h1>
          </div>
          <div className="mb-4">
            <div className="flex justify-center text-primarygrey mb-2">
              <Label
                htmlFor="fullName"
                className="text-primarylightgrey font-medium text-[12px] second-font"
              >
                Your full name
              </Label>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="outline-none p-1 border-b-2 w-full border-primarygray95 rounded text-primarygrey"
              />
              <div className="flex justify-center items-center flex-col mt-4">
                <Label
                  htmlFor="email"
                  className="text-primarylightgrey font-medium text-[12px] mb-5 second-font"
                >
                  Your email
                </Label>
                <p className="second-font">{email}</p>
                <Button
                  type="submit"
                  className="bg-primarydarkgreen hover:bg-primarydarkergreen mt-7 rounded-full second-font transition-all duration-900 ease-in-out px-5"
                  variant="mybutton"
                >
                  Create account
                </Button>
              </div>
            </form>
            {message && (
              <div className="text-red-700 text-sm flex justify-center items-center mt-4">
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameInfo;
