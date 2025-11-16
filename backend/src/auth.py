from flask import Blueprint, request, jsonify
from src.models import criar_usuario, buscar_usuario # buscar_usuario agora retorna (senha, role)
import bcrypt
import jwt
import datetime
import os
import sqlite3

auth = Blueprint("auth", __name__)

SECRET = os.getenv(
    "SECRET",
    "988c88300c41c934c7d7ff3162a280afef2c1976df9b3a12d879d8eee36cd097"
)


# CADASTRO (sem alterações, pois models.py já define a role padrão)
@auth.route("/register", methods=["POST"])
def register():
    # ... (código existente) ...
    data = request.json
    usuario = data.get("usuario")
    senha = data.get("senha")

    if not usuario or not senha:
        return jsonify({"error": "Preencha todos os campos"}), 400

    senha_hash = bcrypt.hashpw(senha.encode(), bcrypt.gensalt())

    try:
        criar_usuario(usuario, senha_hash)
        return jsonify({"message": "Usuário cadastrado"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"error": "Usuário já existe"}), 400
    except Exception as e:
        print(f"Erro inesperado no registro: {e}")
        return jsonify({"error": "Erro interno no servidor"}), 500


# LOGIN (MODIFICADO para incluir 'role' no token)
@auth.route("/login", methods=["POST"])
def login():
    data = request.json
    usuario = data.get("usuario")
    senha = data.get("senha")

    if not usuario or not senha:
        return jsonify({"error": "Usuário ou senha não preenchidos"}), 400

    row = buscar_usuario(usuario) # Agora retorna (senha_hash, role)

    if not row:
        return jsonify({"error": "Usuário não encontrado"}), 404

    senha_hash, role = row # Desempacotar a senha e a role

    if bcrypt.checkpw(senha.encode(), senha_hash):
        token = jwt.encode({
            "usuario": usuario,
            "role": role, # <-- ADICIONADO: Coloca a 'role' dentro do token
            "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=3)
        }, SECRET, algorithm="HS256")

        return jsonify({"token": token})

    return jsonify({"error": "Senha incorreta"}), 401