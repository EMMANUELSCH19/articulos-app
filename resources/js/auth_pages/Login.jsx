import React, { useEffect, useState } from "react";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

function Login() {
  const { setToken, getToken } = AuthUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.get('/sanctum/csrf-cookie').then(response => {
      Config.GetLogin({ email, password })
        .then(({ data }) => {
          if (data.success) {
            setToken(
              data.token,
              data.user,
              data.user.roles[0].name
            );

          } else {
            console.log(data.message)
          }
        })
    })

  };

  return (
    <form onSubmit={handleSubmit} className="w-screen h-screen bg-green-400 lg:flex">
      <div className="bg-slate-100 h-full flex flex-col justify-center items-center gap-4 lg:w-2/3">
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="form-control w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="form-control w-80" />
        </div>
        <button type="submit" className="btn">
          Iniciar Sesión
        </button>

        <div className="text-center">
          <a href="/register" className="text-blue-500">¿No tienes cuenta? Regístrate</a>
        </div>
      </div>
      <div className="bg-blue-400 hidden lg:block lg:w-1/3">
        Imagen
      </div>
    </form>
  );
}

export default Login;