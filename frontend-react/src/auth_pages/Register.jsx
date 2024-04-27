import React, { useEffect, useState } from "react";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";



function Register() {
  const { getToken } = AuthUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    Config.GetRegister({ name, email, password, password_confirmation })
      .then(({ data }) => {
        if (data.success) {
          navigate("/login");
        }
      })
  };

  return (
    <form onSubmit={handleSubmit} className="w-screen h-screen bg-green-400 lg:flex">
      <div className="bg-slate-100 h-full flex flex-col justify-center items-center gap-4 lg:w-2/3">
        <h1 className="text-2xl font-bold">Formulario de Registro</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">¿Cuál es tu nombre?</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre" className="form-control w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="form-control w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="form-control w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password_confirmation">Confirmar Password</label>
          <input type="password" id="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} required placeholder="password_confirmation" className="form-control w-80" />
        </div>
        <button type="submit" className="btn">
          Registrarse
        </button>

        {/* TERMINOS Y CODICIONES */}
        <div className="text-center">
          <p className="text-sm">Al registrarte, aceptas nuestros <a href="#" className="text-blue-500">Términos y Condiciones</a> y nuestra <a href="#" className="text-blue-500">Política de Privacidad</a></p>
          <p className="text-sm">¿Ya tienes una cuenta? <a href="/login" className="text-blue-500">Inicia Sesión</a></p>
        </div>
      </div>
      <div className="bg-blue-400 hidden lg:block lg:w-1/3">
        Imagen
      </div>
    </form>
  );
}

export default Register;