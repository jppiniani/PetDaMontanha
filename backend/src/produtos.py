from flask import Blueprint, jsonify, request
from src.models import (
    get_todos_produtos, 
    get_produto_por_id, 
    criar_produto_db, 
    atualizar_produto_db, 
    deletar_produto_db
)
from src.decorators import token_required

# Define o "blueprint" com um prefixo /api
produtos_bp = Blueprint("produtos", __name__, url_prefix="/api/produtos")

# --- Rota Pública (GET) ---
# Qualquer um pode ver os produtos
@produtos_bp.route("/", methods=["GET"])
def get_produtos():
    try:
        produtos = get_todos_produtos()
        return jsonify(produtos), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Rota Pública (GET por ID) ---
# Qualquer um pode ver um produto específico
@produtos_bp.route("/<int:id>", methods=["GET"])
def get_produto(id):
    try:
        produto = get_produto_por_id(id)
        if not produto:
            return jsonify({"error": "Produto não encontrado"}), 404
        return jsonify(produto), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Rota de Admin (POST) ---
# Apenas usuários com role 'admin' podem criar
@produtos_bp.route("/", methods=["POST"])
@token_required(role="admin")
def create_produto(current_user_data): # Recebe os dados do usuário do decorador
    try:
        data = request.json
        if not data or not data.get('nome') or not data.get('preco'):
             return jsonify({"error": "Nome e Preço são obrigatórios"}), 400
        
        novo_produto = criar_produto_db(data)
        return jsonify(novo_produto), 201 # 201 Created
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Rota de Admin (PUT) ---
# Apenas 'admin' pode atualizar
@produtos_bp.route("/<int:id>", methods=["PUT"])
@token_required(role="admin")
def update_produto(current_user_data, id):
    try:
        data = request.json
        produto_atualizado = atualizar_produto_db(id, data)
        if not produto_atualizado:
            return jsonify({"error": "Produto não encontrado para atualizar"}), 404
        return jsonify(produto_atualizado), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Rota de Admin (DELETE) ---
# Apenas 'admin' pode deletar
@produtos_bp.route("/<int:id>", methods=["DELETE"])
@token_required(role="admin")
def delete_produto(current_user_data, id):
    try:
        # Verificar se o produto existe antes de deletar (opcional, mas bom)
        produto = get_produto_por_id(id)
        if not produto:
             return jsonify({"error": "Produto não encontrado"}), 404
            
        deletar_produto_db(id)
        return jsonify({"message": "Produto deletado com sucesso"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500