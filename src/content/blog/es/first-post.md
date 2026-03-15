---
title: 'Logs de Linux Sin Sufrimiento'
description: 'Un flujo de trabajo práctico para leer la salida de journalctl sin ahogarse en el ruido.'
pubDate: 'Mar 10 2026'
---

Cuando una máquina Linux empieza a comportarse de forma extraña, los logs son el camino más rápido hacia la verdad. El truco está en filtrar la señal del ruido.

## Empieza con un alcance reducido

```bash
journalctl -u ssh -n 200 --no-pager
```

Esto devuelve las últimas 200 líneas de un solo servicio y evita abrir un paginador por defecto.

## Añade una ventana de tiempo

```bash
journalctl --since "30 min ago" -p warning
```

Úsalo cuando sabes aproximadamente cuándo se rompió algo.

## Sigue la salida en tiempo real

```bash
journalctl -fu nginx
```

`-f` sigue el stream y `-u` mantiene la salida enfocada en una sola unit.

Cuando un comando devuelve demasiado texto, reduzco un eje a la vez: servicio, tiempo o prioridad. Eso mantiene la depuración rápida y repetible.
