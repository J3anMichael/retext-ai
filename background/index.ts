export {}

chrome.runtime.onInstalled.addListener(() => {
  console.log("[ReText AI] Extensão instalada.")
})

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "PING") {
    sendResponse({ type: "PONG" })
  }
  return true
})
