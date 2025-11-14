from flask import Flask
from flask_cors import CORS
from src.db import init_db
from src.auth import auth

app = Flask(__name__)
CORS(app)

# inicializa banco ao iniciar servidor
init_db()

# registra rotas do Blueprint under /api
app.register_blueprint(auth, url_prefix="/api")

@app.route("/api/test")
def test():
    return {"message": "Backend funcionando!"}

if __name__ == "__main__":
    app.run(debug=True)


# from flask import Blueprint, request, jsonify
# from src.models import criar_usuario, buscar_usuario
# import bcrypt
# import jwt
# import datetime
# import os
# import psycopg2.errors  # Importar erros do Postgres

# auth = Blueprint("auth", __name__)

# SECRET = os.getenv(
#     "SECRET",
#     "988c88300c41c934c7d7ff3162a280afef2c1976df9b3a12d879d8eee36cd097"
# )

# # CADASTRO
# @auth.route("/register", methods=["POST"])
# def register():
#     data = request.json
#     usuario = data.get("usuario")
#     senha = data.get("senha")

#     if not usuario or not senha:
#         return jsonify({"error": "Preencha todos os campos"}), 400

#     senha_hash = bcrypt.hashpw(senha.encode(), bcrypt.gensalt())

#     try:
#         criar_usuario(usuario, senha_hash)
#         return jsonify({"message": "Usuário cadastrado"}), 201
#     except psycopg2.errors.UniqueViolation:
#         return jsonify({"error": "Usuário já existe"}), 400
#     except Exception as e:
#         print(f"Erro inesperado no registro: {e}")
#         return jsonify({"error": "Erro interno no servidor"}), 500


# # LOGIN
# @auth.route("/login", methods=["POST"])
# def login():
#     data = request.json
#     usuario = data.get("usuario")
#     senha = data.get("senha")

#     if not usuario or not senha:
#         return jsonify({"error": "Usuário ou senha não preenchidos"}), 400

#     # --- ESTA É A LINHA QUE FALTAVA ---
#     row = buscar_usuario(usuario)
#     # ---------------------------------

#     if not row:
#         return jsonify({"error": "Usuário não encontrado"}), 404

#     senha_hash = row[0] # Agora 'row' existe

#     if bcrypt.checkpw(senha.encode(), senha_hash):
#         token = jwt.encode({
#             "usuario": usuario,
#             "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=3)
#         }, SECRET, algorithm="HS256")

#         return jsonify({"token": token})

#     return jsonify({"error": "Senha incorreta"}), 401