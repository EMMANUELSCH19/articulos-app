import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
      </div>
      <div className="bg-blue-400 hidden lg:block lg:w-1/3">
        Imagen
      </div>
    </form>
  );
}

export default Login;