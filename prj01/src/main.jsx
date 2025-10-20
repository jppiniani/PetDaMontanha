import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// importações do router-dom ('-')-b
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App.jsx';

// Importação das páginas
import Inicio from './pages/Inicio/index.jsx';
import Sobre from './pages/Sobre/index.jsx'
import Funcionarios from './pages/Funcionarios/index.jsx';
import Servicos from './pages/Servicos/index.jsx';
import Fotos from './pages/Fotos/index.jsx';
import Padaria from './pages/Padaria/index.jsx';
import Contato from './pages/Contato/index.jsx';
import Entrar from './pages/Entrar/index.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "sobre", 
        element: <Sobre />,
      },
      {
        path: "funcionarios", 
        element: <Funcionarios />,
      },
      {
        path: "servicos", 
        element: <Servicos />,
      },
      {
        path: "fotos", 
        element: <Fotos />,
      },
      {
        path: "padaria", 
        element: <Padaria />,
      },
      {
        path: "contato", 
        element: <Contato />,
      },
      {
        path: "entrar", 
        element: <Entrar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);