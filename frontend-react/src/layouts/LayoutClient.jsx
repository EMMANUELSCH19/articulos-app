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
    <div>
      <Header />

      <h1>LayoutClient</h1>
      <Outlet />
    </div>
  );
}

export default LayoutClient;