import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../supabase/auth";
import { SignOut } from "../../store/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { UserRound, BookMarked, ScrollText } from "lucide-react";

const menuItems = [
  { label: "Profile", icon: UserRound, link: "#" },
  { label: "Library", icon: BookMarked, link: "#" },
  { label: "Story", icon: ScrollText, link: "#" },
];

const DashPopover = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getUser();
      if (user) {
        setEmail(user.email);
      } else {
        navigate("/");
      }
    };

    if (authStatus) {
      fetchUser();
    } else {
      navigate("/");
    }
  }, [authStatus, navigate]);

  const signOut = async () => {
    await authService.signOut();
    dispatch(SignOut());
    navigate("/");
  };

  return (
    <div className="border-b-[1px] border-primarygray95">
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage
                className="cursor-pointer "
                src="../../../assets/images/Avatar/avatar.png"
                alt="User Avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-[320px]">
            {menuItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <div className="flex items-center cursor-pointer second-font pb-2 pt-4 pl-4 pr-4 hover:text-black group">
                  <item.icon
                    strokeWidth={0.8}
                    className="text-primarylink group-hover:text-black"
                  />
                  <h1 className="text-sm font-light text-primarygrey ml-6 group-hover:text-black">
                    {item.label}
                  </h1>
                </div>
              </Link>
            ))}
            <div className="border-t-[1px] pb border-primarygray95 w-full">
              <div className="second-font">
                <h1
                  className="text-sm font-light cursor-pointer text-primarylink ml-4 block pt-4 hover:text-black"
                  onClick={signOut}
                >
                  Sign out
                </h1>
                <p className="text-sm font-light cursor-pointer text-primarylink ml-4 block pb-4 hover:text-black">
                  {email}
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DashPopover;
