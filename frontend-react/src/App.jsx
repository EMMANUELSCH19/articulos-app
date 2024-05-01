import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./auth_pages/ProtectedRoutes";

import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";

import HomePage from "./public_pages/HomePage";

import Login from "./auth_pages/Login";
import Register from "./auth_pages/Register";
import PanelAdmin from "./admin_pages/PanelAdmin";
import PanelClient from "./client_pages/PanelClient";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPublic />} >
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
          <Route path="/admin" element={<LayoutAdmin />} >
            <Route index element={<PanelAdmin />} />
          </Route>
          <Route path="/client" element={<LayoutClient />} >
            <Route index element={<PanelClient />} />
          </Route>
        </Route>
      </Routes>
    </Router>)
}

export default App
