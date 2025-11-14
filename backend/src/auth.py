from flask import Blueprint, request, jsonify
from src.models import criar_usuario, buscar_usuario
import bcrypt
import jwt
import datetime
import os
import sqlite3  # Importar para tratar o erro de usuário único

auth = Blueprint("auth", __name__)

SECRET = os.getenv(
    "SECRET",
    "988c88300c41c934c7d7ff3162a280afef2c1976df9b3a12d879d8eee36cd097"
)


# CADASTRO
@auth.route("/register", methods=["POST"])
def register():
    # REMOVIDO o bloco 'if request.method == "OPTIONS":'
    # A extensão flask-cors gerencia a requisição preflight (OPTIONS)

    data = request.json
    usuario = data.get("usuario")
    senha = data.get("senha")

    if not usuario or not senha:
        return jsonify({"error": "Preencha todos os campos"}), 400

    senha_hash = bcrypt.hashpw(senha.encode(), bcrypt.gensalt())

    try:
        criar_usuario(usuario, senha_hash)
        # 201 Created é semanticamente melhor para um novo recurso
        return jsonify({"message": "Usuário cadastrado"}), 201
    except sqlite3.IntegrityError:  # Ser específico sobre o erro (usuário já existe)
        return jsonify({"error": "Usuário já existe"}), 400
    except Exception as e:
        print(f"Erro inesperado no registro: {e}")
        return jsonify({"error": "Erro interno no servidor"}), 500


# LOGIN
@auth.route("/login", methods=["POST"])
def login():
    # REMOVIDO o bloco 'if request.method == "OPTIONS":'

    data = request.json
    usuario = data.get("usuario")
    senha = data.get("senha")

    if not usuario or not senha:
        return jsonify({"error": "Usuário ou senha não preenchidos"}), 400

    row = buscar_usuario(usuario)

    if not row:
        return jsonify({"error": "Usuário não encontrado"}), 404

    senha_hash = row[0]

    if bcrypt.checkpw(senha.encode(), senha_hash):
        token = jwt.encode({
            "usuario": usuario,
            # Use datetime.datetime.now(datetime.timezone.utc) para compatibilidade
            "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=3)
        }, SECRET, algorithm="HS256")

        return jsonify({"token": token})

    return jsonify({"error": "Senha incorreta"}), 401