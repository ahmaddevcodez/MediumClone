import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Common/Logo";
import authService from "../../../supabase/auth";
import { Input } from "../../ui/input";
import {
  Search,
  SquarePen,
  Bell,
  UserRound,
  BookMarked,
  ScrollText,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { SignOut } from "../../../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
import md5 from "md5";

const menuItems = [
  { label: "Profile", icon: UserRound, link: "#" },
  { label: "Library", icon: BookMarked, link: "#" },
  { label: "Story", icon: ScrollText, link: "#" },
];

const DashNavbar = () => {
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

  const gravatarUrl = email
    ? `https://www.gravatar.com/avatar/${md5(
        email.trim().toLowerCase()
      )}?d=identicon`
    : "";

  return (
    <div className="border-b-[1px] border-primarygray95">
      <div className="my-container-2 pt-3 pb-3 ">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Logo className="mr-4 lg:w-[160px] md:w-[160px]  w-[120px]" />
            <form className="form relative">
              <div className="relative ml-auto flex-1 md:grow-0 lg:block hidden">
                <Search className="stroke-[1.2] font-thin absolute left-4 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="outline-none ml-1 border-none second-font w-full rounded-full bg-primarylightergrey pl-11 md:w-[200px] lg:w-[230px]"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center gap-7">
            <Link
              to="/Search"
              className="relative ml-auto flex-1 md:grow-0 lg:hidden block"
            >
              <Search className="stroke-[1.2] font-thin absolute left-4 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                className="px-0 outline-none ml-1 border-none second-font rounded-full bg-primarylightergrey pl-11 w-[10px]"
              />
            </Link>
            <div className="second-font text-primarylink hover:text-black group lg:flex hidden">
              <SquarePen className="font-thin stroke-[1.2] mr-2 group-hover:text-black" />
              <h1 className="group-hover:text-black">Write</h1>
            </div>
            <div className="hover:text-black ">
              <Bell strokeWidth={1.1} className="hover:text-black" />
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      className="cursor-pointer"
                      src={gravatarUrl}
                      alt="User Avatar"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-[320px]">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer second-font pb-2 pt-4 pl-4 pr-4 hover:text-black group"
                    >
                      <item.icon
                        strokeWidth={0.8}
                        className="text-primarylink group-hover:text-black"
                      />
                      <h1 className="text-sm font-light text-primarygrey ml-6 group-hover:text-black">
                        {item.label}
                      </h1>
                    </div>
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
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
