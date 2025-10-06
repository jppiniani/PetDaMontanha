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
import Funcionarios from './pages/funcionarios/index.jsx';
import Servicos from './pages/servicos/index.jsx';
import Fotos from './pages/fotos/index.jsx';
import Padaria from './pages/Padaria/index.jsx';
import Contato from './pages/contato/index.jsx';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);