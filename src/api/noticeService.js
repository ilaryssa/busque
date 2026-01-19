// src/api/noticeService.js
const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // troca pelo seu IP

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

export async function deleteNotice(busId) {
  const res = await fetch(`${BASE_URL}/notices?busId=${busId}&_sort=createdAt&_order=desc&_limit=1`);
  const data = await res.json();

  if (!data.length) return false;

  const lastNotice = data[0];

  const now = Date.now();
  const diff = now - lastNotice.createdAt;

  // 2 minutos = 120000 ms
  if (diff > 120000) return false;

  await fetch(`${BASE_URL}/notices/${lastNotice.id}`, {
    method: "DELETE",
  });

  return true;
}