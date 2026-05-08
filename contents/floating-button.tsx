import type { PlasmoCSConfig } from "plasmo"
import { useState, useEffect, useRef } from "react"
import { MODES, type Mode } from "~lib/prompts"
import cssText from "data-text:~style.css"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const FloatingButton = () => {
  const [activeInput, setActiveInput] = useState<HTMLElement | null>(null)
  const [inputButtonPos, setInputButtonPos] = useState({ x: 0, y: 0 })
  const [showMenu, setShowMenu] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    console.log("ReText AI: Content Script carregado");

    const updatePos = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect()
      setInputButtonPos({
        x: rect.right + window.scrollX - 45,
        y: rect.bottom + window.scrollY - 45
      })
    }

    const handleInteract = (e: any) => {
      const el = e.target as HTMLElement
      if (el.closest(".retext-ui")) return

      const isInput = el.tagName === "TEXTAREA" || 
                    (el.tagName === "INPUT" && (el as HTMLInputElement).type === "text") ||
                    el.isContentEditable ||
                    el.closest('[contenteditable="true"]')

      if (isInput) {
        const targetEl = (el.closest('[contenteditable="true"]') as HTMLElement) || el
        setActiveInput(targetEl)
        updatePos(targetEl)
      } else {
        if (!showMenu) setActiveInput(null)
      }
    }

    document.addEventListener("mousedown", handleInteract)
    return () => document.removeEventListener("mousedown", handleInteract)
  }, [showMenu])

  const handleImprove = async (modeId: Mode) => {
    if (!activeInput || isProcessing) return
    console.log("ReText AI: Iniciando melhoria para o modo", modeId);
    
    const text = activeInput.isContentEditable 
      ? activeInput.innerText 
      : (activeInput as any).value

    setIsProcessing(true)
    setShowMenu(false)

    chrome.runtime.sendMessage({
      type: "GENERATE_IMPROVEMENT",
      text,
      mode: modeId
    }, (res) => {
      console.log("ReText AI: Resposta do background:", res);
      if (res?.success) {
        replaceText(res.text)
        setStatus("success")
      } else {
        setStatus("error")
        alert("Erro: " + (res?.error || "Desconhecido"))
      }
      setIsProcessing(false)
      setTimeout(() => setStatus("idle"), 2000)
    })
  }

  const replaceText = (newText: string) => {
    if (!activeInput) return
    activeInput.focus()
    try {
      document.execCommand("selectAll", false, undefined)
      document.execCommand("insertText", false, newText)
    } catch (e) {
      if (activeInput.isContentEditable) activeInput.innerText = newText
      else (activeInput as any).value = newText
    }
    activeInput.dispatchEvent(new Event("input", { bubbles: true }))
  }

  if (!activeInput) return null

  return (
    <div
      style={{
        position: "absolute",
        left: `${inputButtonPos.x}px`,
        top: `${inputButtonPos.y}px`,
        zIndex: 2147483647
      }}
      className="retext-ui"
    >
      {/* Menu com estilos inline para garantir visibilidade */}
      {showMenu && (
        <div style={{
          background: "#1a1a1a",
          border: "1px solid #14b8a6",
          borderRadius: "12px",
          padding: "8px",
          marginBottom: "8px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
        }}>
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleImprove(mode.id)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <span style={{ fontSize: "16px" }}>{mode.emoji}</span>
              <span style={{ fontSize: "8px", color: "#94a3b8", fontWeight: "bold" }}>{mode.label.split(' ').pop()}</span>
            </button>
          ))}
        </div>
      )}

      {/* Botão principal com mousedown triigger */}
      <button
        onMouseDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
          console.log("ReText AI: Botão R clicado")
          setShowMenu(!showMenu)
        }}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: isProcessing ? "#0d9488" : "#1a1a1a",
          border: `2px solid ${status === "success" ? "#10b981" : "#0d9488"}`,
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}
      >
        {isProcessing ? (
          <div style={{width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 1s linear infinite"}}></div>
        ) : status === "success" ? "✓" : "R"}
      </button>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default FloatingButton
