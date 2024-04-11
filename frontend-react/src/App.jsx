import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ArticleTemplate from './pages/ArticleTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path='/emmanuelsch19/mi-primer-articulo' element={<ArticleTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
