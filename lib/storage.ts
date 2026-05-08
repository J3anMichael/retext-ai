const STORAGE_KEY_API_KEY = "retext_api_key"
const STORAGE_KEY_HISTORY = "retext_history"
const STORAGE_KEY_DAILY = "retext_daily"

export interface HistoryItem {
  id: string
  original: string
  result: string
  mode: string
  timestamp: number
}

export interface DailyUsage {
  date: string
  count: number
}

export async function getApiKey(): Promise<string | null> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY_API_KEY], (result) => {
      resolve((result[STORAGE_KEY_API_KEY] as string) ?? null)
    })
  })
}

export async function setApiKey(key: string): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY_API_KEY]: key }, resolve)
  })
}

export async function clearApiKey(): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.remove([STORAGE_KEY_API_KEY], resolve)
  })
}

export async function getHistory(): Promise<HistoryItem[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY_HISTORY], (result) => {
      resolve((result[STORAGE_KEY_HISTORY] as HistoryItem[]) ?? [])
    })
  })
}

export async function addToHistory(item: Omit<HistoryItem, "id">): Promise<void> {
  const history = await getHistory()
  const newItem: HistoryItem = { ...item, id: crypto.randomUUID() }
  const updated = [newItem, ...history].slice(0, 50) // max 50 items
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY_HISTORY]: updated }, resolve)
  })
}

export async function getDailyUsage(): Promise<DailyUsage> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY_DAILY], (result) => {
      const today = new Date().toISOString().split("T")[0]
      const stored = result[STORAGE_KEY_DAILY] as DailyUsage | undefined
      if (stored && stored.date === today) {
        resolve(stored)
      } else {
        resolve({ date: today, count: 0 })
      }
    })
  })
}

export async function incrementDailyUsage(): Promise<number> {
  const usage = await getDailyUsage()
  const updated: DailyUsage = { ...usage, count: usage.count + 1 }
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY_DAILY]: updated }, () => {
      resolve(updated.count)
    })
  })
}
