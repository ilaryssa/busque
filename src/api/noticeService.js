// api/noticeService.js
import { notices, currentTrip } from "./mockData"

export function createNotice(text) {
  const now = new Date()

  notices.unshift({
    id: String(Date.now()),
    text,
    bus: currentTrip.bus,
    hour: now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: now.toLocaleDateString("pt-BR"),
  })
}

export function getNotices() {
  return notices
}
