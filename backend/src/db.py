import sqlite3
import bcrypt
import os

# --- Construção do Caminho Absoluto (sem alterações) ---
current_file_path = os.path.abspath(__file__)
src_dir = os.path.dirname(current_file_path)
backend_dir = os.path.dirname(src_dir)
DB_PATH = os.path.join(backend_dir, "database.db")

print(f"--- Caminho do Banco de Dados: {DB_PATH} ---")

# ----------------------------------------

def get_connection():
    return sqlite3.connect(DB_PATH)

# --- Função para Semear os Dados Iniciais dos Produtos ---
def seed_data():
    # Lista dos seus produtos estáticos (convertidos para tuplas)
    # IMPORTANTE: Note que as imagens são apenas os NOMES DOS ARQUIVOS (ex: 'Femur.png')
    # O React vai usar um "mapa" para encontrar a imagem importada correspondente.
    produtos_iniciais = [
        (1, 'Femur.png', "Fêmur", "R$20,00", None, 2, 0, 'Femur.png', "Fêmur suíno natural, delicioso para seus cães. Combate o estresse e certamente promoverá uma atividade divertida para seu cão!", 10),
        (2, 'Sorvete1.png', "Sorvete para cães e gatos", "R$7,00", None, 5, 0, 'Sorvete2.png', "Sabor fondue de chocolate sem adição de açúcar. Melhora a digestibilidade e fortalece as articulações. Perfeito para agradar seu pet!", 12),
        (3, 'MolhoRacao2.png', "Molho ração para gatos", "R$11,00", None, 0, 0, 'MolhoRacao2.png', "Aprimore a ração do seu gato com o saboroso molho com sabor costelinha!", 8),
        (4, 'Cerveja.png', "Cerveja para cachorros", "R$10,00", None, 5, 0, 'Cerveja.png', "Sem álcool e rica em fibras, vitaminas e minerais. Sabor carne!", 5),
        (5, 'TirasCarne.png', "Tiras de Carne", "R$6,70", None, 0, 0, 'TirasCarne.png', "Bifinhos em tiras deliciosos com sabor picanha com açafrão e linhaça. Feito com proteína bovina e rico em fibras. Sem adição de corantes e aromatizantes artificiais!", 18),
        (6, 'Ossinhos.png', "Ossinhos", "R$16,00", None, 0, 0, 'Ossinhos.png', "Ossinhos deliciosos e seguros com sabor chocolate para divertir seu pet!", 17),
        (7, 'Caolorado.png', "Cãolorado", "R$16,50", None, 5, 0, 'Caolorado.png', "Cerveja para cães da cervejaria Colorado. Bebida não alcoólica nos sabores carne e frango!", 14),
        (8, 'Muffin.png', "Muffin", "R$7,00", None, 5, 0, 'Muffin.png', "Muffins para cães e gatos nos sabores vegano (com linhaça), picanha com açafrão, banana com aveia e beijinho com hortelã. Todos com ações específicas e benéficas para seus pets!", 9),
        (9, 'BoloAniversario.png', "Bolo de aniversário para gatos e cachorros", "R$24,50", None, 5, 0, 'BoloAniversario.png', "Comemore o aniversário do seu amor com os bolos de aniversário nos sabores salmão com camomila (gatos) e chocolate com hortelã (cachorros). Os produtos acompanham uma vela de patinha. Alivia o estresse do seu gato e melhora a saúde bucal do seu cão!", 11),
        (10, 'BiscoitoPet.png', "Biscoito pet", "R$14,30 - R$15,00", None, 5, 0, 'BiscoitoPet.png', "Seu pet merece o melhor. Apresentamos o Biscoito Pet de 80 gramas no irresistível sabor Carne e Frango, a recompensa que une prazer e saúde. Oferecemos opções adaptadas a cada fase e necessidade: Super Premium, Idoso e Diet. Formulado com 8 tipos de cereais, este biscoito garante fácil digestão e é rico em proteínas e vitaminas, maximizando a vitalidade e o bem-estar. É o agrado perfeito e nutritivo para o seu companheiro.", 21),
        (11, 'PatePremium.png', "Patê Premium", "R$12,00", None, 5, 0, 'PatePremium.png', "Alimento completo para cães e gatos feitos à base de batata doce. Nos sabores frango, carne bovina e cordeiro e carne de panela com legumes!", 15),
        (12, 'PipocasDoce.png', "Pipocas Doces e Nuts", "R$12,00-13,00", None, 5, 0, 'PipocasDoce.png', "50 gramas de petiscos nos sabores leite e nutty bavarian!", 16),
        (13, 'MolhoRacao1.png', "Molho ração para cães", "R$11,00", None, 0, 0, 'MolhoRacao1.png', "Aprimore a ração do seu cão com o saboroso molho sabor frango com açafrão e mandioquinha. Ajuda no apetite, combate o tártaro, melhora a digestibilidade, articulações fortalecidas, rico em vitaminas e minerais e apenas 9 kcal por pote!", 12)
    ]

    try:
        conn = get_connection()
        cursor = conn.cursor()
        
        # Usar INSERT OR IGNORE para não inserir dados duplicados se o servidor reiniciar
        cursor.executemany("""
            INSERT OR IGNORE INTO produtos (id, imagem, nome, preco, precoOriginal, rating, sale, imagemDetalhe, descricaoLonga, estoque)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, produtos_iniciais)
        
        conn.commit()
        print(f"--- {cursor.rowcount} produtos semeados no banco de dados. ---")
            
    except Exception as e:
        print(f"Erro ao semear produtos: {e}")
    finally:
        if conn:
            conn.close()


def init_db():
    conn = get_connection()
    cursor = conn.cursor()
    
    # Criar tabela de usuários (MODIFICADA: adicionada coluna 'role')
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            usuario TEXT UNIQUE,
            senha TEXT,
            role TEXT NOT NULL DEFAULT 'user' 
        )
    """)
    
    # Criar tabela de produtos (NOVA)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imagem TEXT,
            nome TEXT NOT NULL,
            preco TEXT,
            precoOriginal TEXT,
            rating INTEGER,
            sale INTEGER DEFAULT 0,
            imagemDetalhe TEXT,
            descricaoLonga TEXT,
            estoque INTEGER
        )
    """)
    
    # --- Adicionar usuário admin padrão (MODIFICADO: define a 'role') ---
    try:
        admin_user = "admin"
        admin_pass_hashed = bcrypt.hashpw("admin".encode(), bcrypt.gensalt())
        
        # Inserir admin
        cursor.execute("""
            INSERT OR IGNORE INTO usuarios (usuario, senha, role) 
            VALUES (?, ?, 'user')
        """, (admin_user, admin_pass_hashed))
        
        # Garantir que o usuário 'admin' tenha a role 'admin'
        cursor.execute("""
            UPDATE usuarios SET role = 'admin' WHERE usuario = 'admin'
        """)
        
        print("Banco de dados inicializado e usuário 'admin' verificado/atualizado.")
        
    except Exception as e:
        print(f"Erro ao criar usuário admin: {e}")
    
    conn.commit()
    conn.close()

    # Chamar a função de semear dados DEPOIS de criar a tabela
    seed_data()