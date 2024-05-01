import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../auth_pages/AuthUser";
import Header from "../components/Header";

function LayoutClient() {
  const { getRole } = AuthUser();
  const { navigate } = useNavigate();

  useEffect(() => {
    if (getRole() != "client") {
      navigate("/");
    }
  }, []);

  return (
    <div className='bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100'>
      <div className="container m-auto">
        <Header />

        <h1>LayoutClient</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutClient;