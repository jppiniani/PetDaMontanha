from src.db import get_connection

def criar_usuario(usuario, senha_hash):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO usuarios (usuario, senha) VALUES (?, ?)",
        (usuario, senha_hash)
    )
    conn.commit()
    conn.close()

def buscar_usuario(usuario):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT senha FROM usuarios WHERE usuario = ?",
        (usuario,)
    )
    row = cursor.fetchone()
    conn.close()
    return row
