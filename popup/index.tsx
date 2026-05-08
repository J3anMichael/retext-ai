import { useState, useEffect } from "react"
import { getApiKey, addToHistory, incrementDailyUsage, getHistory, type HistoryItem } from "~lib/storage"
import { improveText } from "~lib/gemini"
import { MODES, type Mode } from "~lib/prompts"
import Settings from "./Settings"
import "~style.css"

function IndexPopup() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMode, setSelectedMode] = useState<Mode>("corrigir")
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [view, setView] = useState<"main" | "settings" | "history">("main")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    async function init() {
      const key = await getApiKey()
      setApiKey(key)
      if (!key) {
        setView("settings")
      }

      chrome.storage.local.get(["selected_text"], (res) => {
        const selected = res.selected_text as string | undefined
        if (selected) {
          setText(selected)
          chrome.storage.local.remove("selected_text")
        }
      })

      if (view === "history") {
        const items = await getHistory()
        setHistory(items)
      }
    }
    init()

    // Add keyboard shortcut for Ctrl+Enter
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter" && view === "main") {
        handleImprove()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [view, text, selectedMode, apiKey]) // deps needed for handleImprove access inside effect if not memoized

  const handleImprove = async () => {
    if (!apiKey) {
      setView("settings")
      return
    }

    if (!text.trim() || isLoading) {
      return
    }

    setIsLoading(true)
    setError(null)
    setResult("")

    const res = await improveText(text, selectedMode, apiKey)

    if (res.success && res.text) {
      setResult(res.text)
      await addToHistory({
        original: text,
        result: res.text,
        mode: selectedMode,
        timestamp: Date.now()
      })
      await incrementDailyUsage()
    } else {
      setError(res.error || "Ocorreu um erro inesperado.")
    }

    setIsLoading(false)
  }

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (view === "settings") {
    return <Settings onBack={() => setView("main")} />
  }

  return (
    <div className="w-[400px] min-h-[500px] p-5 flex flex-col gap-4 animate-fade-in bg-dark-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xl glow-teal shadow-teal-500/20">
            R
          </div>
          <h1 className="text-xl font-black bg-gradient-to-r from-teal-400 to-teal-100 bg-clip-text text-transparent tracking-tight">
            ReText AI
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setView(view === "history" ? "main" : "history")}
            className={`p-2 rounded-lg transition-colors ${view === "history" ? "bg-teal-500/10 text-teal-400" : "hover:bg-dark-700 text-slate-400 hover:text-teal-400"}`}
            title="Histórico"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button
            onClick={() => setView("settings")}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors text-slate-400 hover:text-teal-400"
            title="Configurações"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </button>
        </div>
      </div>

      {view === "history" ? (
        <div className="flex flex-col gap-4 animate-fade-in h-[400px] overflow-y-auto pr-1">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-widest">Histórico Recente</h2>
            <span className="text-[10px] text-slate-500 font-bold uppercase">{history.length} itens</span>
          </div>
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-600 gap-2 opacity-50">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <p className="text-xs font-medium">Nenhum texto melhorado ainda.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {history.map((item) => (
                <div key={item.id} className="glass-card p-3 flex flex-col gap-2 hover:border-teal-500/40 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-500 uppercase px-1.5 py-0.5 bg-teal-500/10 rounded">
                      {item.mode}
                    </span>
                    <span className="text-[10px] text-slate-600">
                      {new Date(item.timestamp).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 italic">"{item.original}"</p>
                  <p className="text-xs text-slate-200 line-clamp-3 font-medium bg-dark-700/50 p-2 rounded border border-teal-900/20">{item.result}</p>
                  <button
                    onClick={() => handleCopy(item.result)}
                    className="self-end text-[10px] font-bold text-slate-500 hover:text-teal-400 flex items-center gap-1 transition-colors"
                  >
                    COPIAR RESULTADO
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Mode Selector */}
          <div className="flex flex-wrap gap-2">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`mode-pill ${
                  selectedMode === mode.id ? "mode-pill-active" : "mode-pill-inactive"
                }`}
              >
                <span>{mode.emoji}</span>
                <span>{mode.label}</span>
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex flex-col gap-2">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Digite ou cole aqui o texto que deseja melhorar..."
              className="input-field min-h-[140px] text-sm leading-relaxed"
            />
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                {text.length}/3000 caracteres
              </span>
              {error && (
                <span className="text-xs text-rose-400 font-medium animate-pulse-soft">
                  {error}
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleImprove}
            disabled={isLoading || !text.trim()}
            className="btn-primary w-full flex items-center justify-center gap-2 group relative overflow-hidden h-12"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                <span className="font-bold tracking-wide">MELHORANDO...</span>
              </div>
            ) : (
              <>
                <span className="font-bold tracking-wide uppercase italic">Melhorar Texto</span>
                <span className="text-[10px] bg-black/20 px-1.5 py-1 rounded font-mono hidden group-hover:block transition-all animate-fade-in">CTRL+ENTER</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          {/* Result Area */}
          {result && (
            <div className="flex flex-col gap-3 animate-slide-up">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                  Sugestão Gerada
                </h3>
                <button
                  onClick={() => handleCopy(result)}
                  className={`text-xs font-bold transition-all duration-200 px-2 py-1 rounded flex items-center gap-1.5 ${
                    copied ? "text-teal-400 bg-teal-900/20" : "text-slate-500 hover:text-teal-400"
                  }`}
                >
                  {copied ? "Copiado!" : "Copiar"}
                </button>
              </div>
              <div className="glass-card p-4 text-sm leading-relaxed text-teal-50 bg-teal-900/5 border-teal-500/20 hover:border-teal-500/40 transition-all shadow-inner">
                {result}
              </div>
            </div>
          )}
        </>
      )}

      {/* Footer Text */}
      <div className="mt-auto pt-4 text-center">
        <p className="text-[10px] text-slate-600 font-medium flex items-center justify-center gap-1 opacity-60">
          <span className="w-1 h-1 rounded-full bg-teal-500/30"></span>
          ReText AI 2.0 • IA Inteligente
          <span className="w-1 h-1 rounded-full bg-teal-500/30"></span>
        </p>
      </div>
    </div>
  )
}

export default IndexPopup
