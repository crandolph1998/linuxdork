---
title: "Le Impostazioni SSH Che Cambio per Prime"
description: "Una checklist minima di hardening SSH che applico a ogni nuovo server Linux."
pubDate: 'Mar 14 2026'
---

Le nuove installazioni di server sono solitamente insicure per omissione, non per bug. I miei primi dieci minuti includono sempre queste modifiche.

## 1) Disabilitare il login con password

In `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Tenere root fuori

```text
PermitRootLogin no
```

Usa un utente normale con `sudo` e registra tutto.

## 3) Ridurre il rumore degli attacchi brute-force

```text
MaxAuthTries 3
LoginGraceTime 30
```

Poi ricarica in modo pulito:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Tieni sempre una sessione SSH attiva mentre testi le nuove impostazioni. Bloccarsi fuori Ã¨ ancora il classico rito di passaggio di Linux.

