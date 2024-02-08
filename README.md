Teste Técnico Front-End Júnior - Grupo Carvalho Gestão

Projeto organizado seguindo o padrão MVC (Model-View-Controller)

teste-gpcarvalho/
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── styles.css
│   ├── img/
│   │   ├── banner.png
│   │   ├── favicon.png
│   │   └── whatsapp.png
│   └── js/
│       ├── callComponents.png
│       ├── script.png
│       ├── valid.png
│       └── validCPF.js
│
├── components/
│       ├── back-to-top.html
│       ├── navbar.html
│       └── whatsapp.html
│
├── controllers/
│   └── appControllers.js
│
├── models/
│   └── userModel.js
│
├── views/
│   ├── index.html
│   ├── login.html
│   └── cadastro.html
│
├── readme.md
└── index.html


assets/: Nesta pasta, estão os arquivos estáticos como CSS e JavaScript.
css/: Contém o arquivo styles.css.
js/: Contém o arquivo script.js.
views/: Aqui estão os arquivos HTML que representam as diferentes visualizações da aplicação.
    login.html: Página de login.
    register.html: Página de cadastro.
components/: Nesta pasta estão os componentes html a serem reaproveitados entre as páginas.
controllers/: Nesta pasta, colocamos os controladores responsáveis por controlar o fluxo de dados e as interações do usuário.
    appController.js: Controlador principal que gerencia as ações da aplicação.
index.html: Página inicial que exibe os dados do usuário logado.

Essa estrutura separa claramente a camada de visualização (HTML), a camada de controle (JavaScript) e a camada de modelo (dados). Isso facilita a manutenção e o desenvolvimento da aplicação, pois cada parte tem uma responsabilidade bem definida.

Para executar basta abrir a página index.html no navegador.
