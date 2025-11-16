from functools import wraps
from flask import request, jsonify
import jwt
import os
from src.auth import SECRET # Importa o mesmo segredo usado no auth.py

def token_required(role="user"):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            token = None
            if "Authorization" in request.headers:
                # Espera o formato "Bearer <token>"
                token = request.headers["Authorization"].split(" ")[1]

            if not token:
                return jsonify({"error": "Token de autenticação é necessário"}), 401

            try:
                # Decodifica o token para pegar os dados (payload)
                data = jwt.decode(token, SECRET, algorithms=["HS256"])
                current_user_role = data.get("role")
                
                # Verifica se o usuário tem a permissão (role) necessária
                if role == "admin" and current_user_role != "admin":
                    return jsonify({"error": "Permissão de administrador necessária"}), 403 # 403 Forbidden

                # Passa o usuário decodificado para a rota
                kwargs["current_user_data"] = data 
                
            except jwt.ExpiredSignatureError:
                return jsonify({"error": "Token expirou"}), 401
            except jwt.InvalidTokenError:
                return jsonify({"error": "Token inválido"}), 401

            return f(*args, **kwargs)
        return decorated_function
    return decorator