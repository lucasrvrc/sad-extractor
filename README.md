SAD Extractor - Frontend
Sistema frontend desenvolvido em React para a extração, validação e gestão de dados imobiliários a partir de laudos em PDF. O projeto é uma parceira da Secretaria de Administração de Pernambuco com a Poli/UPE.

__________________________
Siga estas instruções para configurar o projeto na sua máquina local para fins de desenvolvimento e teste.

Pré-requisitos
Antes de começar, você precisa ter as seguintes ferramentas instaladas na sua máquina:

Node.js (Versão 16 ou superior) - Inclui o gerenciador de pacotes npm.

Git - Para clonar o repositório.

Instalação e Configuração
Clone o repositório Abra o seu terminal e rode o comando:

    git clone https://github.com/SEU-USUARIO/meu-sad-app.git
    cd meu-sad-app


Instale as dependências Este comando vai ler o arquivo package.json e baixar todas as bibliotecas necessárias (como React, Tailwind, Vite, etc.) para a pasta node_modules:

    npm install

Execute o projeto Para iniciar o servidor de desenvolvimento local:

    npm run dev


Após rodar este comando, o terminal mostrará um link (geralmente http://localhost:5173/). Clique nele para abrir o sistema no seu navegador.

Estrutura Importante de Arquivos
Para garantir o funcionamento correto das imagens e do código:

/public: Contém as imagens estáticas como sadpe logo.png e polilogo.png. Estas imagens não passam pelo processo de build e são servidas diretamente.

/src: Contém todo o código-fonte da aplicação (Componentes, Lógica, Estilos).

App.jsx: Componente principal que gerencia as rotas e telas.

Comandos uteis
    npm run dev: Inicia o servidor de desenvolvimento.

    npm run build: Gera a versão otimizada para produção na pasta dist.

    pm run preview: Visualiza localmente a versão de produção gerada pelo build.

Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.

Vite: Ferramenta de build rápida e moderna.

Tailwind CSS: Framework de utilitários CSS para estilização.

Lucide React: Biblioteca de ícones.