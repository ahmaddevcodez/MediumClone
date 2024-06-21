import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  }, []);

  return !loading ? (
    <div className="w-full">
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
