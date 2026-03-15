---
title: 'Mi Bootstrap de Laptop Linux en 20 Minutos'
description: 'La secuencia exacta que ejecuto tras una instalación nueva de Linux para ser productivo rápidamente.'
pubDate: 'Mar 09 2026'
---

Una instalación nueva de Linux se siente increíble durante unos diez minutos, hasta que te das cuenta de que nada está configurado. Este es mi bootstrap básico.

## 1) Instalar lo esencial

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

## 3) Configurar SSH

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Luego añadir alias de host para que las conexiones rutinarias sean fáciles y seguras.

## 4) Verificaciones rápidas

- Confirmar que el prompt y los aliases cargan.
- Verificar que el destino de backup es accesible.
- Asegurarse de que el firewall está habilitado.

Esto lleva mi máquina de "instalación nueva" a "trabajo real" sin perder toda una tarde.
