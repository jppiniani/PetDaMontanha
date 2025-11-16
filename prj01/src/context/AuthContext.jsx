import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importar o decoder
import { api } from '../api'; // Importar a api para o interceptor de logout

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null); // Estado para o objeto do usuário ({usuario, role})
    const [loading, setLoading] = useState(true); // Para saber se já verificamos o token

    useEffect(() => {
        // Quando o app carrega, verifica se há um token válido
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            try {
                const decodedUser = jwtDecode(storedToken);
                
                // Verifica se o token expirou
                if (decodedUser.exp * 1000 > Date.now()) {
                    setToken(storedToken);
                    setUser(decodedUser); // Salva os dados do usuário (incluindo a role)
                } else {
                    // Token expirado
                    logout();
                }
            } catch (error) {
                console.error("Token inválido:", error);
                logout(); // Limpa o token inválido
            }
        }
        setLoading(false); // Terminamos de carregar
    }, []);

    const login = (newToken) => {
        try {
            const decodedUser = jwtDecode(newToken); // Decodifica o novo token
            localStorage.setItem('token', newToken);
            setToken(newToken);
            setUser(decodedUser); // Salva o usuário no login
        } catch (error) {
            console.error("Erro ao decodificar token no login:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null); // Limpa o usuário no logout
    };

    // Adiciona um interceptor de resposta para deslogar se a API retornar 401
    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // Token inválido, expirado ou usuário sem permissão (403)
                    // Para 401 (não autorizado), deslogamos
                    if (error.response.status === 401) {
                         console.log("Interceptor 401: Token inválido ou expirado. Deslogando.");
                         logout();
                    }
                    // Para 403 (proibido), não deslogamos, mas a requisição falha
                }
                return Promise.reject(error);
            }
        );

        // Limpa o interceptor quando o componente desmontar
        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, []); // Executa apenas uma vez


    const value = {
        token,
        user, // Expõe o usuário (ex: { usuario: 'admin', role: 'admin' })
        isAuthenticated: !!token,
        isAdmin: user && user.role === 'admin', // Helper para 'admin'
        loading,
        login,
        logout,
    };

    // Não renderiza nada até terminarmos de verificar o token inicial
    if (loading) {
        // Você pode substituir isso por um componente de spinner/loading
        return <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            fontSize: '1.5rem' 
        }}>
            Carregando...
        </div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};