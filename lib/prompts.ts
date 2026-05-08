export type Mode =
  | "corrigir"
  | "profissional"
  | "humanizar"
  | "educado"
  | "tecnico"
  | "objetivo"

export interface ModeConfig {
  id: Mode
  label: string
  emoji: string
  description: string
  color: string
}

export const MODES: ModeConfig[] = [
  {
    id: "corrigir",
    label: "Corrigir",
    emoji: "✅",
    description: "Corrige gramática, ortografia e pontuação",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: "profissional",
    label: "Profissional",
    emoji: "💼",
    description: "Reescreve com linguagem corporativa formal",
    color: "from-teal-600 to-teal-700"
  },
  {
    id: "humanizar",
    label: "Humanizar",
    emoji: "❤️",
    description: "Torna o texto mais natural e caloroso",
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "educado",
    label: "Mais Educado",
    emoji: "🎩",
    description: "Suaviza o tom e adiciona cortesia",
    color: "from-teal-500 to-teal-700"
  },
  {
    id: "tecnico",
    label: "Mais Técnico",
    emoji: "⚙️",
    description: "Usa terminologia precisa e estrutura lógica",
    color: "from-teal-600 to-teal-800"
  },
  {
    id: "objetivo",
    label: "Mais Objetivo",
    emoji: "🎯",
    description: "Remove redundâncias, vai direto ao ponto",
    color: "from-teal-400 to-teal-500"
  }
]

export const SYSTEM_INSTRUCTION = `Você é o ReText AI, um assistente especializado em melhorar textos em português brasileiro.
Você é preciso, natural e inteligente. Sempre retorne APENAS o texto melhorado, sem explicações, sem aspas, sem comentários adicionais.
Mantenha o significado original e adapte apenas conforme o modo solicitado.`

export const PROMPTS: Record<Mode, string> = {
  corrigir: `Corrija gramática, ortografia e pontuação do texto a seguir. Mantenha o estilo e tom originais. Retorne apenas o texto corrigido:

{texto}`,

  profissional: `Reescreva o texto a seguir com linguagem corporativa, formal e profissional, adequada para ambientes de trabalho, como e-mails corporativos, LinkedIn ou reuniões executivas. Mantenha o significado. Retorne apenas o texto reescrito:

{texto}`,

  humanizar: `Reescreva o texto a seguir de forma mais natural, humana e calorosa. Elimine qualquer sensação de texto gerado por IA. Deixe fluido como se fosse escrito por uma pessoa real. Retorne apenas o texto reescrito:

{texto}`,

  educado: `Reescreva o texto a seguir de forma mais educada, gentil e respeitosa. Suavize o tom sem perder o significado. Adicione cortesia onde apropriado. Retorne apenas o texto reescrito:

{texto}`,

  tecnico: `Reescreva o texto a seguir de forma mais técnica, precisa e estruturada. Use terminologia adequada, seja mais específico e lógico. Retorne apenas o texto reescrito:

{texto}`,

  objetivo: `Reescreva o texto a seguir de forma mais objetiva e direta. Elimine redundâncias, palavras desnecessárias e rodeios. Vá direto ao ponto sem perder a essência. Retorne apenas o texto reescrito:

{texto}`
}
