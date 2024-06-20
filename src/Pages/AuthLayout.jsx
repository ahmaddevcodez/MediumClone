import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
      alert("Sign up or login");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  ) : (
    <>{children}</>
  );
}

export default AuthLayout;
