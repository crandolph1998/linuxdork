---
title: 'SSH-Standardwerte, die ich zuerst ändere'
description: 'Eine minimale SSH-Härtungs-Checkliste, die ich auf jeden frischen Linux-Server anwende.'
pubDate: 'Mar 14 2026'
---

Frische Server-Installationen sind meist unsicher durch Auslassung, nicht durch Fehler. Meine ersten zehn Minuten umfassen immer diese Anpassungen.

## 1) Passwort-Login deaktivieren

In `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Root ausschließen

```text
PermitRootLogin no
```

Normalen Benutzer mit `sudo` verwenden und alles protokollieren.

## 3) Brute-Force-Lärm reduzieren

```text
MaxAuthTries 3
LoginGraceTime 30
```

Dann sauber neu laden:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Immer eine aktive SSH-Sitzung offen halten, während neue Einstellungen getestet werden. Sich selbst auszusperren ist nach wie vor der klassische Linux-Initiationsritus.
