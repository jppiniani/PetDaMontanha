import axios from 'axios';

// Define a URL base da sua API Flask
export const api = axios.create({
    baseURL: 'http://localhost:5000', // Ou sua URL de produção
});

// --- Interceptor de Requisição ---
// Isso "intercepta" CADA requisição antes de ela ser enviada
// e anexa o token de autenticação, se ele existir.
api.interceptors.request.use(
    (config) => {
        // Pega o token do localStorage (onde o AuthContext vai salvar)
        const token = localStorage.getItem('token');
        
        if (token) {
            // Se o token existe, adiciona ao cabeçalho 'Authorization'
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);