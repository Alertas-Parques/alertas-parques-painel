# Painel dos Parques — guia para o Claude

Página única (`index.html`, sem build) publicada pelo GitHub Pages em
https://alertas-parques.github.io/alertas-parques-painel/ — vai ao ar sozinha 1–2 min depois de um push na `main`.
O dono **não é programador** e escreve em pt-BR: responda em pt-BR e em linguagem simples.

- Mostra filas/LL ao vivo (API ThemeParks.wiki) e edita o `alertas.yaml` do repositório **privado**
  `Alertas-Parques/alertas-parques` pela API do GitHub, com um token que fica só no `localStorage` do celular.
- O monitor (Cloudflare Worker) e a lógica dos avisos ficam no repositório privado (veja o CLAUDE.md de lá).
- Tabela própria `INFO_ATRACOES` (tipo e altura mínima) para Hollywood Studios, Magic Kingdom e Epic Universe.
- Link das notificações: `?data=AAAA-MM-DD&parque=<id>&atracao=<id>` abre o dia/parque e destaca a atração.

## Regras
- **Este repositório é público.** Nunca coloque aqui tokens, o tópico do ntfy, nomes ou alturas das crianças
  (essas ficam no ⚙️ do aparelho, chave `painel.criancas`).
- O YAML gerado precisa continuar válido para o Worker e para o `monitor.py` (strings entre aspas, datas `AAAA-MM-DD`).
- Teste local: sirva a pasta com qualquer servidor estático e substitua a função `github()` por um simulado no console.
