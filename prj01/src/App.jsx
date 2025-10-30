import { useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';

import './App.css'

import Footer from './components/Footer/index.jsx'
import NavBar from './components/NavBar/index.jsx'

export default function App() {
  return (
    <>
      <ScrollRestoration />

      <NavBar />
      
      <main>
        {/* O Outlet é um espaço reservado que vai renderizar o componente da rota atual. */}
        <Outlet />
      </main>

      <Footer />
    </>
  )
}