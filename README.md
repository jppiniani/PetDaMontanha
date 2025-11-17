PASSO A PASSO  : 

1- Instalando e inicializando as bibliotecas python

    Precisa ter instalado o node e o python no seu computador.

    Ao acessar o arquivo, digite através do prompt de comando (ctrl+shift+') : cd backend. = > Para entrar na pasta do backend.

    Em seguida, já na pasta backend, crie o ambiente virtual venv através do comando : python -m venv venv . Logo em seguida, digite : .\venv\Scripts\activate , para ativar o ambiente virtual. Importante: Você saberá que funcionou porque o nome (venv) aparecerá no início da linha do seu terminal.

    Agora, para finalmente instalar as bibliotecas python, escreva : pip install -r requirements.txt

    Rode o projeto com os comandos : 
    set FLASK_APP=app.py
    flask run

2- Iniciando o Node

    Para visualizar a aplicação Web com o backend já funcionando, é necessário que você tenha o node corretamente instalado

    Entre no 'cmd' no terminal do vscode e digite npm --version. Caso aparecer 'npm: '10.9.2' ou maior' Significa que está correto.

    Ainda no cmd, entre na pasta prj01 através do comando : cd prj01

    Instale  o Node Package Manager com o comando 'npm install' e em seguida digite 'npm run dev' para inicializar o website em um localhost.
