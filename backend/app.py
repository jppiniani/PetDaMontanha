from flask import Flask
from flask_cors import CORS
from src.db import init_db
from src.auth import auth
from dotenv import load_dotenv  # Para carregar variáveis de ambiente
import os

# Carrega variáveis de ambiente de um arquivo .env
load_dotenv()

app = Flask(__name__)

# Configuração do CORS mais flexível para dev e produção
# Pegar a URL do frontend do Vercel das variáveis de ambiente
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")

CORS(
    app,
    # Permitir origem do localhost e da Vercel
    resources={r"/*": {"origins": ["http://localhost:5173", frontend_url]}},
    supports_credentials=True,
    
    # --- ESTA É A LINHA MAIS IMPORTANTE PARA CORRIGIR SEU ERRO ---
    # Permite que o navegador envie os cabeçalhos 'Content-Type' (para JSON)
    # e 'Authorization' (para o token JWT no futuro)
    allow_headers=["Content-Type", "Authorization"]
)

# Inicializar o DB (e criar o admin)
init_db()

# Registrar rotas de autenticação
app.register_blueprint(auth)

@app.get("/me")
def me():
    # Idealmente, esta rota deve ser protegida e verificar o token JWT
    return {"status": "ok"}

# Manter isso para rodar localmente com 'python app.py'
if __name__ == "__main__":
    # Adicionar debug=True ajuda a ver erros e recarrega o servidor automaticamente
    app.run(port=5000, debug=True)