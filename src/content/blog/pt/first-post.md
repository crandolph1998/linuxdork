---
title: 'Logs do Linux Sem Dor'
description: 'Um fluxo de trabalho prático para ler a saída do journalctl sem se perder no ruído.'
pubDate: 'Mar 10 2026'
---

Quando uma máquina Linux começa a se comportar de forma estranha, os logs são o caminho mais rápido para a verdade. O segredo está em filtrar o sinal do ruído.

## Comece com um escopo restrito

```bash
journalctl -u ssh -n 200 --no-pager
```

Isso retorna as últimas 200 linhas de um único serviço e evita abrir um paginador por padrão.

## Adicione um delimitador de tempo

```bash
journalctl --since "30 min ago" -p warning
```

Use isso quando você sabe aproximadamente quando algo quebrou.

## Acompanhe a saída em tempo real

```bash
journalctl -fu nginx
```

`-f` acompanha o stream e `-u` mantém a saída focada em uma única unit.

Quando um comando retorna texto demais, eu aperto um eixo por vez: serviço, tempo ou prioridade. Isso mantém a depuração rápida e repetível.
