import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authService from "./supabase/auth";
import { SignOut, SignIn } from "./store/authSlice";
import Loader from "./Components/Common/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(SignIn({ userData }));
        } else {
          dispatch(SignOut());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
