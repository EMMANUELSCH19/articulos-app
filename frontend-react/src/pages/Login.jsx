import React from "react";

function Login() {
  return (
    <div className="w-screen h-screen bg-green-400 lg:flex">
      <div className="bg-slate-100 h-full flex flex-col justify-center items-center gap-4 lg:w-2/3">
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>

        <div className="flex flex-col gap-2">
          <label>¿Cuál es tu correo electrónico?</label>
          <input type="text" placeholder="Email" className="form-control w-80" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input type="password" placeholder="Password" className="form-control w-80" />
        </div>
        <button className="btn">
          Iniciar Sesión
        </button>
      </div>
      <div className="bg-blue-400 hidden lg:block lg:w-1/3">
        Imagen
      </div>
    </div>
  );
}

export default Login;