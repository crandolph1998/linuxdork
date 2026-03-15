---
title: "Il Mio Bootstrap Linux da Laptop in 20 Minuti"
description: "La sequenza esatta che eseguo dopo una nuova installazione di Linux per essere produttivo rapidamente."
pubDate: 'Mar 09 2026'
---

Una nuova installazione di Linux sembra fantastica per circa dieci minuti, poi ci si rende conto che nulla Ã¨ configurato. Questo Ã¨ il mio bootstrap di base.

## 1) Installare gli essenziali

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) Clonare i dotfiles

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) Configurare le impostazioni SSH predefinite

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Poi aggiungere alias di host per rendere le connessioni di routine facili e sicure.

## 4) Verifiche rapide

- Confermare che il prompt della shell e gli alias si carichino.
- Verificare che la destinazione di backup sia raggiungibile.
- Assicurarsi che il firewall sia abilitato.

Questo porta la mia macchina da "nuova installazione" a "lavoro vero" senza perdere un intero pomeriggio.

