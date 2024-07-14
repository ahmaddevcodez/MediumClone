import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Search, SquarePen, Bell } from "lucide-react";
import Logo2 from "../../Common/Logo2";
import DashPopover from "../../Common/DashPopover";
import authService from "../../../supabase/auth";

const DashNavbar = () => {
  const [email, setEmail] = useState("");
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

  return (
    <div className="border-b-[1px] border-primarygray95">
      <div className="my-container-2 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo2 className="mr-4 w-[120px] md:w-[160px] lg:w-[160px]" />
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
            <Link
              to="/NewStory"
              className="second-font text-primarylink hover:text-black group lg:flex hidden"
            >
              <SquarePen className="font-thin stroke-[1.2] mr-2 group-hover:text-black" />
              <h1 className="group-hover:text-black">Write</h1>
            </Link>
            <div className="hover:text-black">
              <Bell strokeWidth={1.1} className="hover:text-black" />
            </div>
            <DashPopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
