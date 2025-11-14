import sqlite3
import bcrypt
import os  # 1. Importar o módulo OS

# --- Construção do Caminho Absoluto ---

# 2. Pega o caminho absoluto do arquivo atual (db.py)
#    ex: /home/user/projeto/backend/src/db.py
current_file_path = os.path.abspath(__file__)

# 3. Pega o diretório do arquivo atual (a pasta 'src')
#    ex: /home/user/projeto/backend/src
src_dir = os.path.dirname(current_file_path)

# 4. "Sobe" um nível para a pasta 'backend'
#    ex: /home/user/projeto/backend
backend_dir = os.path.dirname(src_dir)

# 5. Define o caminho final do banco de dados
#    ex: /home/user/projeto/backend/database.db
DB_PATH = os.path.join(backend_dir, "database.db")

print(f"--- Caminho do Banco de Dados: {DB_PATH} ---")

# ----------------------------------------

def get_connection():
    # 6. Usar o caminho absoluto
    return sqlite3.connect(DB_PATH)

def init_db():
    conn = get_connection()
    cursor = conn.cursor()
    
    # Criar tabela de usuários
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            usuario TEXT UNIQUE,
            senha TEXT
        )
    """)
    
    # --- Adicionar usuário admin padrão ---
    try:
        admin_user = "admin"
        # Senha padrão 'admin' (você pode mudar)
        admin_pass_hashed = bcrypt.hashpw("admin".encode(), bcrypt.gensalt())
        
        # Usar INSERT OR IGNORE para não dar erro se o 'admin' já existir
        cursor.execute("""
            INSERT OR IGNORE INTO usuarios (usuario, senha) 
            VALUES (?, ?)
        """, (admin_user, admin_pass_hashed))
        
        print("Banco de dados inicializado e usuário 'admin' verificado.")
        
    except Exception as e:
        print(f"Erro ao criar usuário admin: {e}")
    # ------------------------------------
    
    conn.commit()
    conn.close()