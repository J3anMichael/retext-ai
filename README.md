# ReText AI — IA para Escrita ✍️✨

O **ReText AI** é uma extensão para navegador (Chrome, Edge, Brave) projetada para transformar sua experiência de escrita online. Utilizando o poder do modelo **Gemini 3 Flash**, ela permite corrigir, melhorar e humanizar seus textos diretamente em qualquer campo de entrada na web, sem precisar trocar de aba.

---

## 🔥 Funcionalidades principais

- **Botão Flutuante Inteligente:** Um botão discreto ("R") aparece automaticamente ao lado de campos de texto (WhatsApp Web, LinkedIn, Gmail, etc).
- **6 Modos de Transformação:**
    - ✅ **Corrigir:** Gramática, ortografia e pontuação.
    - 💼 **Profissional:** Linguagem corporativa ideal para o trabalho.
    - ❤️ **Humanizar:** Torna o texto mais natural e menos "robótico".
    - 🎩 **Mais Educado:** Suaviza o tom e adiciona cortesia.
    - ⚙️ **Mais Técnico:** Precisão e terminologia específica.
    - 🎯 **Mais Objetivo:** Direto ao ponto, sem redundâncias.
- **Substituição Inline:** O texto melhorado substitui o original instantaneamente.
- **Atalho de Teclado:** Abra a interface rapidamente com `Alt + R` (ou `Cmd + Shift + R` no Mac).

---

## 🚀 Como usar

1. **Configuração Inicial:**
   - Clique no ícone da extensão no menu do Chrome.
   - Insira sua **API Key do Google Gemini** (obtenha uma gratuitamente em [Google AI Studio](https://aistudio.google.com/)).
   - Clique em "Salvar Configurações".

2. **No dia a dia:**
   - Digite seu texto em qualquer site.
   - Clique no botão flutuante **"R"** que aparece no canto do campo.
   - Escolha o modo desejado (ex: Profissional).
   - Aguarde a mágica! O texto será substituído pela versão melhorada pela IA.

---

## 🛠️ Instalação (Desenvolvimento)

Este projeto foi construído utilizando o framework [Plasmo](https://www.plasmo.com/).

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/retext-ai.git
   cd retext-ai
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. No Chrome:
   - Vá para `chrome://extensions/`.
   - Ative o "Modo do desenvolvedor".
   - Clique em "Carregar sem compactação".
   - Selecione a pasta `build/chrome-mv3-dev` dentro do projeto.

---

## 🎨 Tecnologias Utilizadas

- **[Plasmo](https://www.plasmo.com/):** Framework para extensões de navegador.
- **[React](https://reactjs.org/):** UI Components.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilização moderna e responsiva.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança.
- **[Google Gemini API](https://ai.google.dev/):** O motor de inteligência artificial.

---

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

Feito com ❤️ por [Jean](https://github.com/jeanm)
