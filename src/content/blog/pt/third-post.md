---
title: 'Configurações SSH Que Mudo Primeiro'
description: 'Um checklist mínimo de hardening SSH que aplico a cada servidor Linux recém-instalado.'
pubDate: 'Mar 14 2026'
---

Instalações novas de servidor são geralmente inseguras por omissão, não por falhas. Meus primeiros dez minutos sempre incluem essas edições.

## 1) Desabilitar login por senha

Em `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Manter o root de fora

```text
PermitRootLogin no
```

Use um usuário normal com `sudo` e registre tudo.

## 3) Reduzir ruído de força bruta

```text
MaxAuthTries 3
LoginGraceTime 30
```

Depois recarregue com cuidado:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Sempre mantenha uma sessão SSH ativa enquanto testa novas configurações. Trancar-se por fora ainda é o clássico rito de passagem do Linux.
