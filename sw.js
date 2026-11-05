// Service worker mínimo do Painel dos Parques.
// Existe só para o celular reconhecer o painel como um app próprio (escopo /alertas-parques-painel/).
// Não guarda nada em cache: filas e alertas precisam vir sempre da internet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
