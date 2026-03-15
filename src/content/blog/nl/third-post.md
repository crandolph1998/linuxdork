---
title: "SSH-Standaardinstellingen Die Ik Als Eerste Verander"
description: "Een minimale SSH-hardening checklist die ik op elke nieuwe Linux-server toepas."
pubDate: 'Mar 14 2026'
---

Nieuwe serverinstallaties zijn doorgaans onveilig door weglating, niet door bugs. Mijn eerste tien minuten bevatten altijd deze aanpassingen.

## 1) Wachtwoordlogin uitschakelen

In `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Root buitenhouden

```text
PermitRootLogin no
```

Gebruik een gewone gebruiker met `sudo` en log alles.

## 3) Brute-force ruis verminderen

```text
MaxAuthTries 3
LoginGraceTime 30
```

Laad daarna netjes opnieuw:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Houd altijd een actieve SSH-sessie open bij het testen van nieuwe instellingen. Jezelf buitensluiten is nog steeds het klassieke Linux-initiatiemysterie.

