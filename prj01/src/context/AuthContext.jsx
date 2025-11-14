import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
// Assumindo que seu 'api' está em /src/api.js ou /src/api/index.js
// Se o caminho for outro, ajuste o 'import { api }'
import { api } from '../api'; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Inicializa o token direto do localStorage
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  // Este 'effect' roda sempre que o 'token' mudar (login/logout)
  // e também na primeira vez que o app carregar
  useEffect(() => {
    if (token) {
      try {
        // 1. Decodifica o token
        const decodedUser = jwtDecode(token);
        // 2. Seta o nome do usuário no estado
        setUser(decodedUser.usuario);
        // 3. Adiciona o token em todas as futuras requisições da 'api'
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        // Se o token for inválido
        console.error("Falha ao decodificar o token:", error);
        localStorage.removeItem('token');
        setToken(null);
      }
    } else {
      // Se não há token (logout)
      setUser(null);
      delete api.defaults.headers.common['Authorization'];
    }
  }, [token]); // A mágica: só roda quando o 'token' muda

  // Função que a página de Login vai chamar
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken); // Atualiza o estado, o que dispara o 'useEffect'
  };

  // Função que o Navbar vai chamar
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null); // Atualiza o estado, o que dispara o 'useEffect'
  };

  // Disponibiliza os valores para os componentes "filhos"
  const value = { token, user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook customizado para facilitar o uso
export function useAuth() {
  return useContext(AuthContext);
}