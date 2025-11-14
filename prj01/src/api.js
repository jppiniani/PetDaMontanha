import axios from 'axios';

// Detecta se estamos em produção (na Vercel) ou desenvolvimento (local)
// 'import.meta.env.PROD' é uma variável especial do Vite (que você usa)
const isProduction = import.meta.env.PROD;

export const api = axios.create({
  // Se estiver em produção, usa '/api'. 
  // Se não (local), usa 'http://localhost:5000'
  baseURL: isProduction ? '/api' : 'http://localhost:5000'
});