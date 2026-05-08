import { useState, useEffect } from "react"
import { getApiKey, setApiKey, clearApiKey } from "~lib/storage"

interface SettingsProps {
  onBack: () => void
}

function Settings({ onBack }: SettingsProps) {
  const [key, setKey] = useState("")
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle")

  useEffect(() => {
    async function load() {
      const savedKey = await getApiKey()
      if (savedKey) setKey(savedKey)
    }
    load()
  }, [])

  const handleSave = async () => {
    if (key.trim().length < 10) {
      setStatus("error")
      return
    }
    await setApiKey(key.trim())
    setStatus("saved")
    setTimeout(() => {
      setStatus("idle")
      onBack()
    }, 1000)
  }

  const handleClear = async () => {
    await clearApiKey()
    setKey("")
    setStatus("idle")
  }

  return (
    <div className="w-[400px] min-h-[500px] p-5 flex flex-col gap-6 animate-fade-in bg-dark-900 border-none">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1.5 hover:bg-dark-700 rounded-lg transition-colors text-slate-400 hover:text-teal-400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-200">Configurações</h1>
      </div>

      <div className="flex flex-col gap-5">
        {/* Gemini API Key Section */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            Gemini Flash API Key
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          </label>
          <p className="text-xs text-slate-500 leading-relaxed">
            Sua chave é salva localmente no navegador e nunca é enviada para nossos servidores.
          </p>
          <div className="relative group">
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Cole sua chave aqui..."
              className="input-field pr-10"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className={`flex-1 btn-primary py-2 text-sm ${status === "saved" ? "from-teal-600/50 to-teal-700/50" : ""}`}
            >
              {status === "saved" ? "Salvo com sucesso!" : "Salvar Configuração"}
            </button>
            <button
              onClick={handleClear}
              className="p-2.5 bg-dark-700 hover:bg-rose-900/20 border border-teal-900/40 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 rounded-lg transition-all"
              title="Limpar chave"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          {status === "error" && (
            <p className="text-[10px] text-rose-400 font-bold uppercase animate-pulse-soft">
              Chave inválida. Deve ter pelo menos 10 caracteres.
            </p>
          )}
        </div>

        {/* Instructions */}
        <div className="glass-card p-4 bg-teal-900/5 border-teal-500/10">
          <h3 className="text-xs font-bold text-teal-400 mb-2 uppercase tracking-wider">Como obter uma chave grátis?</h3>
          <ol className="text-xs text-slate-400 space-y-2 list-decimal list-outside ml-3">
            <li>Acesse o <a href="https://aistudio.google.com/app/apikey" target="_blank" className="text-teal-400 hover:underline font-bold">Google AI Studio</a></li>
            <li>Faça login com sua conta Google</li>
            <li>Clique em "Create API Key"</li>
            <li>Copie a chave e cole no campo acima</li>
          </ol>
        </div>
      </div>

      {/* About */}
      <div className="mt-auto border-t border-teal-900/30 pt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-500 uppercase font-medium">Versão</span>
          <span className="text-[10px] text-teal-500 font-bold">0.3.0 (V3)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-500 uppercase font-medium">Desenvolvido por</span>
          <span className="text-[10px] text-slate-400 hover:text-teal-400 cursor-help transition-colors">Equipe Fluently</span>
        </div>
      </div>
    </div>
  )
}

export default Settings
