---
title: 'Mein 20-Minuten-Linux-Laptop-Bootstrap'
description: 'Die genaue Sequenz, die ich nach einer frischen Linux-Installation durchführe, um schnell produktiv zu werden.'
pubDate: 'Mar 09 2026'
---

Eine frische Linux-Installation fühlt sich etwa zehn Minuten lang fantastisch an. Dann merkt man, dass nichts konfiguriert ist. Das ist mein Basis-Bootstrap.

## 1) Essentials installieren

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) Dotfiles klonen

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) SSH-Standardwerte konfigurieren

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Dann Host-Aliase hinzufügen, damit Routineverbindungen einfach und sicher sind.

## 4) Schnelltests

- Shell-Prompt und Aliase überprüfen.
- Sicherstellen, dass das Backup-Ziel erreichbar ist.
- Firewall-Status prüfen.

Das bringt mein Gerät von „frische Installation" zu „echte Arbeit", ohne einen ganzen Nachmittag zu verlieren.
