import { PROMPTS, SYSTEM_INSTRUCTION, type Mode } from "./prompts"

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"

const MAX_TEXT_LENGTH = 3000
const REQUEST_TIMEOUT_MS = 20000

export interface GeminiResult {
  success: boolean
  text?: string
  error?: string
}

export async function improveText(
  text: string,
  mode: Mode,
  apiKey: string
): Promise<GeminiResult> {
  if (!text.trim()) {
    return { success: false, error: "O texto está vazio." }
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return {
      success: false,
      error: `Texto muito longo. Máximo: ${MAX_TEXT_LENGTH} caracteres.`
    }
  }

  if (!apiKey || apiKey.trim().length < 10) {
    return {
      success: false,
      error: "Chave de API inválida. Configure nas configurações."
    }
  }

  const prompt = PROMPTS[mode].replace("{texto}", text.trim())

  const body = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 2048,
      responseMimeType: "text/plain"
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
    ]
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal
    })

    clearTimeout(timeout)

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}))

      if (response.status === 400) {
        return { success: false, error: "Chave de API inválida ou requisição incorreta." }
      }
      if (response.status === 429) {
        return { success: false, error: "Limite de uso atingido. Aguarde alguns segundos e tente novamente." }
      }
      if (response.status === 403) {
        return { success: false, error: "Acesso negado. Verifique sua chave de API." }
      }

      const msg = errData?.error?.message ?? "Erro desconhecido na API."
      return { success: false, error: `Erro ${response.status}: ${msg}` }
    }

    const data = await response.json()
    const resultText: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ""

    if (!resultText.trim()) {
      return { success: false, error: "A IA não retornou um resultado. Tente novamente." }
    }

    return { success: true, text: resultText.trim() }
  } catch (err: any) {
    clearTimeout(timeout)

    if (err?.name === "AbortError") {
      return { success: false, error: "Tempo limite excedido. Verifique sua conexão." }
    }

    return {
      success: false,
      error: "Erro ao conectar com a IA. Verifique sua conexão com a internet."
    }
  }
}
