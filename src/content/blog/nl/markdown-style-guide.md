---
title: "Mijn 20-Minuten Linux Laptop Bootstrap"
description: "De exacte volgorde die ik uitvoer na een verse Linux-installatie om snel productief te zijn."
pubDate: 'Mar 09 2026'
---

Een verse Linux-installatie voelt ongeveer tien minuten geweldig aan, dan realiseer je je dat niets geconfigureerd is. Dit is mijn basisbootstrap.

## 1) Essentials installeren

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

## 3) SSH-standaarden configureren

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Voeg daarna host-aliassen toe zodat routineverbindingen gemakkelijk en veilig zijn.

## 4) Snelle controles

- Bevestigen dat shell-prompt en aliassen laden.
- Controleren of de back-upbestemming bereikbaar is.
- Zorgen dat de firewall ingeschakeld is.

Dit brengt mijn machine van "verse installatie" naar "echt werk" zonder een hele middag te verliezen.

