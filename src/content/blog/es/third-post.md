---
title: 'Configuraciones SSH Que Cambio Primero'
description: 'Un checklist mínimo de hardening SSH que aplico a cada servidor Linux recién instalado.'
pubDate: 'Mar 14 2026'
---

Las instalaciones nuevas de servidor suelen ser inseguras por omisión, no por errores. Mis primeros diez minutos siempre incluyen estos cambios.

## 1) Deshabilitar el inicio de sesión con contraseña

En `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Mantener root fuera

```text
PermitRootLogin no
```

Usa un usuario normal con `sudo` y registra todo.

## 3) Reducir el ruido de fuerza bruta

```text
MaxAuthTries 3
LoginGraceTime 30
```

Luego recarga con cuidado:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Mantén siempre una sesión SSH activa mientras pruebas nuevas configuraciones. Quedar fuera sigue siendo el rito de iniciación clásico de Linux.
