---
title: "Les ParamÃ¨tres SSH Que Je Change en Premier"
description: "Un checklist minimal de durcissement SSH que j'applique Ã  chaque nouveau serveur Linux."
pubDate: 'Mar 14 2026'
---

Les nouvelles installations de serveur sont gÃ©nÃ©ralement peu sÃ©curisÃ©es par omission, pas par des bugs. Mes dix premiÃ¨res minutes incluent toujours ces modifications.

## 1) DÃ©sactiver la connexion par mot de passe

Dans `/etc/ssh/sshd_config` :

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Garder root dehors

```text
PermitRootLogin no
```

Utilisez un utilisateur normal avec `sudo` et journalisez tout.

## 3) RÃ©duire le bruit des attaques par force brute

```text
MaxAuthTries 3
LoginGraceTime 30
```

Puis rechargez proprement :

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Gardez toujours une session SSH active pendant le test des nouveaux paramÃ¨tres. Se bloquer soi-mÃªme reste le rite de passage classique de Linux.

