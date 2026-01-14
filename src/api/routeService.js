// src/api/noticeService.js
import { notices, currentTrip } from "./mockData";

export function createNotice(text, busOverride) {
  const now = new Date();

  const bus = busOverride || currentTrip.bus || 'A';

  notices.unshift({
    id: String(Date.now()),
    text,
    bus,
    hour: now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: now.toLocaleDateString("pt-BR"),
  });
}

export function getNotices() {
  return notices;
}
