import { improveText } from "~lib/gemini"
import { getApiKey } from "~lib/storage"

console.log("ReText AI: Background Service Worker iniciado");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("ReText AI: Mensagem recebida no background:", message);
  
  if (message.type === "GENERATE_IMPROVEMENT") {
    handleImprovement(message.text, message.mode, sendResponse)
    return true 
  }
})

async function handleImprovement(text: string, mode: any, sendResponse: (res: any) => void) {
  try {
    const apiKey = await getApiKey()
    if (!apiKey) {
      console.error("ReText AI: Erro - API Key não encontrada no storage");
      sendResponse({ success: false, error: "API Key não configurada no popup" })
      return
    }

    console.log("ReText AI: Chamando API do Gemini para texto de", text.length, "chars");
    const result = await improveText(text, mode, apiKey)
    console.log("ReText AI: Resultado da API recebido com sucesso");
    sendResponse(result)
  } catch (error: any) {
    console.error("ReText AI: Erro fatal no background:", error);
    sendResponse({ success: false, error: error.message || "Erro no Background" })
  }
}
