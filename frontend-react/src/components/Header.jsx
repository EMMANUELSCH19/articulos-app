import React from "react";
import AuthUser from "../auth_pages/AuthUser";
import Config from "../Config";

function Header() {
  const { getRole, getLogout, getToken } = AuthUser();



  const logoutUser = () => {
    Config.GetLogout()
      .then(({ data }) => {
        if (data.success) {
          getLogout();
        } else {
          console.log(data.message)
        }
      })
  }

  const renderLinks = () => {
    if (getToken()) {
      return (
        <>
          <li className="mx-6">
            <a href={`/${getRole()}`}>Panel {getRole()}</a>
          </li>
          <li className="mx-6">
            <a href="#" onClick={logoutUser}>Logout</a>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="mx-6">
            <a href="/login">Login</a>
          </li>
          <li className="mx-6">
            <a href="/register">Register</a>
          </li>
        </>
      )
    }
  }

  return (
    <header className="flex justify-between p-2 bg-neutral-100">
      <div className="">
        Logo
      </div>
      <nav className="flex">
        <ul className="flex me-14">
          <li className="mx-6">
            <a href="/">Home</a>
          </li>
          <li className="mx-6">
            <a href="/categorias">Categorias</a>
          </li>
          <li className="mx-6">Contact</li>
        </ul>
        <ul className="flex">
          {renderLinks()}
        </ul>
      </nav>
    </header>
  );
}

export default Header;