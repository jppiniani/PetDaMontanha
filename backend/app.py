from flask import Flask
from flask_cors import CORS
from src.db import init_db
from src.auth import auth
from src.produtos import produtos_bp # <-- 1. Importar o novo blueprint
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")

CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:5173", frontend_url]}},
    supports_credentials=True,
    allow_headers=["Content-Type", "Authorization"]
)

init_db()

# Registrar rotas de autenticação
app.register_blueprint(auth)

# <-- 2. Registrar rotas de produtos -->
app.register_blueprint(produtos_bp) 

@app.get("/me")
def me():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(port=5000, debug=True)