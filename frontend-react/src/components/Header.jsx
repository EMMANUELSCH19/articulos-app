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
          <li className="me-3">
            <a href={`/${getRole()}`}>Panel {getRole()}</a>
          </li>
          <li className="me-3">
            <a href="#" onClick={logoutUser}>Logout</a>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="me-6">
            <a href="/login" className="py-3 px-5 rounded-lg text-white font-bold">Login</a>
          </li>
          <li className="">
            <a href="/register" className="py-3 px-5 rounded-lg text-white font-bold">Register</a>
          </li>
        </>
      )
    }
  }

  return (
    <header className="bg-[#758BFD]/80 fixed top-0 w-full px-4 py-5 z-50 backdrop-blur-sm">
      <div className="container flex">

        <div className="w-1/5 flex justify-between">
          <div className="text-white font-bold">
            Articulos App
          </div>
          {/* <div className="btn lg:hidden">
            menu
          </div> */}
        </div>
        <nav className="w-3/5 hidden lg:visible lg:flex">
          <ul className="w-full flex justify-center">
            <li className="me-3">
              <a href="/" className="py-3 px-5 rounded-lg bgd-[#FF8600] text-white font-bold drop-shadowdrop-shadow-[0_35px_35px_rgba(0,,0,0.25)]">Home</a>
            </li>
            <li className="me-3">
              <a href="/categorias" className="py-3 px-5 rounded-lg text-white font-bold">Categorias</a>
            </li>
            <li className="">
              <a href="" className="py-3 px-5 rounded-lg text-white font-bold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ul className="w-1/5 flex">
          {renderLinks()}
        </ul>
      </div>
    </header>
  );
}

export default Header;