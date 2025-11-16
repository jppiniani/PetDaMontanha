import sqlite3  # <-- ESTA É A LINHA QUE FALTAVA
from src.db import get_connection

# --- Funções de Usuário (Modificada) ---

def criar_usuario(usuario, senha_hash):
    conn = get_connection()
    cursor = conn.cursor()
    # Por padrão, novos usuários têm a role 'user'
    cursor.execute(
        "INSERT INTO usuarios (usuario, senha, role) VALUES (?, ?, 'user')",
        (usuario, senha_hash)
    )
    conn.commit()
    conn.close()

def buscar_usuario(usuario):
    conn = get_connection()
    cursor = conn.cursor()
    # Modificado para buscar também a 'role' para o login
    cursor.execute(
        "SELECT senha, role FROM usuarios WHERE usuario = ?",
        (usuario,)
    )
    row = cursor.fetchone()
    conn.close()
    return row

# --- Funções de Produtos (NOVAS) ---

def get_todos_produtos():
    conn = get_connection()
    # Garantir que o resultado seja um dicionário (mais fácil de converter para JSON)
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM produtos")
    rows = cursor.fetchall()
    conn.close()
    # Converte os resultados (Row) para dicionários
    return [dict(row) for row in rows]

def get_produto_por_id(id):
    conn = get_connection()
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM produtos WHERE id = ?", (id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None

def criar_produto_db(data):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO produtos (nome, preco, precoOriginal, rating, sale, imagem, imagemDetalhe, descricaoLonga, estoque)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        data['nome'], data['preco'], data.get('precoOriginal'), data.get('rating', 0), 
        data.get('sale', 0), data.get('imagem'), data.get('imagemDetalhe'), 
        data.get('descricaoLonga'), data.get('estoque', 0)
    ))
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()
    return get_produto_por_id(new_id) # Retorna o produto recém-criado

def atualizar_produto_db(id, data):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE produtos SET
            nome = ?, preco = ?, precoOriginal = ?, rating = ?, sale = ?, 
            imagem = ?, imagemDetalhe = ?, descricaoLonga = ?, estoque = ?
        WHERE id = ?
    """, (
        data['nome'], data['preco'], data.get('precoOriginal'), data.get('rating'), 
        data.get('sale'), data.get('imagem'), data.get('imagemDetalhe'), 
        data.get('descricaoLonga'), data.get('estoque'), id
    ))
    conn.commit()
    conn.close()
    return get_produto_por_id(id) # Retorna o produto atualizado

def deletar_produto_db(id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM produtos WHERE id = ?", (id,))
    conn.commit()
    conn.close()