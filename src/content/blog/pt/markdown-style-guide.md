---
title: 'Meu Bootstrap de Laptop Linux em 20 Minutos'
description: 'A sequência exata que executo após uma instalação nova do Linux para ser produtivo rapidamente.'
pubDate: 'Mar 09 2026'
---

Uma instalação nova do Linux parece incrível por uns dez minutos, até você perceber que nada está configurado. Este é o meu bootstrap básico.

## 1) Instalar os essenciais

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) Clonar dotfiles

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) Configurar o SSH

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Depois adicione aliases de host para que conexões rotineiras sejam fáceis e seguras.

## 4) Verificações rápidas

- Confirmar que o prompt do shell e os aliases carregam.
- Verificar que o destino de backup está acessível.
- Garantir que o firewall está habilitado.

Isso leva minha máquina de "instalação nova" para "trabalho de verdade" sem perder uma tarde inteira.
