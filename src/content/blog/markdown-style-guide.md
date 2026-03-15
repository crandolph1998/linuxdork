---
title: 'My 20-Minute Linux Laptop Bootstrap'
description: 'The exact sequence I run after a fresh Linux install to feel productive fast.'
pubDate: 'Mar 09 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

A fresh Linux install feels amazing for about ten minutes, then you realize nothing is configured. This is my baseline bootstrap.

## 1) Install essentials

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) Pull dotfiles

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) Configure SSH defaults

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Then add host aliases so routine connections are easy and safe.

## 4) Sanity checks

- Confirm shell prompt and aliases load.
- Verify backups target exists.
- Ensure firewall is enabled.

This gets my machine from "fresh install" to "real work" without losing a whole afternoon.
