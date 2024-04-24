import React from "react";
import { useNavigate } from "react-router-dom";

function AuthUser() {

  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const token = JSON.parse(tokenString);
    return token;
  }

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    return user;
  }

  const getRole = () => {
    const rolString = sessionStorage.getItem("role");
    const role = JSON.parse(rolString);
    return role;
  }

  const [token, setToken] = React.useState(getToken());
  const [user, setUser] = React.useState(getUser());
  const [role, setRole] = React.useState(getRole());

  const saveToken = (user, token, role) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("role", JSON.stringify(role));
    setUser(user);
    setToken(token);
    setRole(role);

    if (getRole() === "admin") {
      navigate("/admin");
    }

    if (getRole() === "client") {
      navigate("/client");
    }
  }

  const getLogout = () => {
    sessionStorage.clear();
    navigate("/");
  }


  return {
    setToken: saveToken,
    user, token, role,
    getUser, getToken, getRole, getLogout
  };
}

export default AuthUser;