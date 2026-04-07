# 🚀 Portfólio — Renato

Portfólio pessoal desenvolvido com **React** (Create React App).

---

## 📁 Estrutura do projeto

```
portfolio/
├── public/
│   ├── index.html
│   └── images/          ← coloque as fotos dos projetos aqui
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── Projects.jsx / Projects.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx / App.css
│   ├── index.js
│   └── index.css
└── package.json
```

---

## ▶️ Como rodar

```bash
# 1. Entre na pasta do projeto
cd portfolio

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm start
```

O projeto abrirá em `http://localhost:3000`.

---

## ✏️ O que personalizar

### Home (`src/pages/Home.jsx`)
- Troque `[Sobrenome]` pelo seu sobrenome
- Troque o curso se necessário
- Atualize o link do GitHub

### About (`src/pages/About.jsx`)
- Preencha a bio pessoal
- Atualize formação, habilidades e idiomas

### Projects (`src/pages/Projects.jsx`)
- No array `PROJECTS`, preencha `github` e `demo` com seus links reais
- Para adicionar imagem do projeto:
  1. Coloque a imagem em `public/images/nome.png`
  2. No projeto, mude `image: null` para `image: '/images/nome.png'`
- Edite `fullDesc` com uma descrição mais detalhada

### Contact (`src/pages/Contact.jsx`)
- Troque e-mail, LinkedIn e GitHub pelos seus dados reais

---

## 🌐 Deploy (Vercel — recomendado)

```bash
# 1. Instale a CLI da Vercel
npm install -g vercel

# 2. Faça o deploy
vercel
```

Ou faça deploy pelo site da [Vercel](https://vercel.com) conectando ao seu repositório GitHub.

---

## 📦 Tecnologias usadas
- React 18
- JavaScript (ES6+)
- CSS com variáveis customizadas
- Create React App
