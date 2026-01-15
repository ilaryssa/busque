// src/api/noticeService.js
const BASE_URL = "http://192.168.100.183:3001"; // troca pelo seu IP

export async function createNotice(notice) {
  const res = await fetch(`${BASE_URL}/notices`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notice),
  });

  if (!res.ok) throw new Error("Falha ao criar aviso");
  return res.json();
}

export async function getNotices() {
  const res = await fetch(`${BASE_URL}/notices`);
  if (!res.ok) throw new Error("Falha ao buscar avisos");
  const data = await res.json();

  // Mais recentes primeiro
  return data.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
}