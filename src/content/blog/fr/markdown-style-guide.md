---
title: "Mon Bootstrap Linux en 20 Minutes"
description: "La sÃ©quence exacte que j'exÃ©cute aprÃ¨s une installation fraÃ®che de Linux pour Ãªtre productif rapidement."
pubDate: 'Mar 09 2026'
---

Une nouvelle installation de Linux est fantastique pendant environ dix minutes, puis on rÃ©alise que rien n'est configurÃ©. Voici mon bootstrap de base.

## 1) Installer les essentiels

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) Cloner les dotfiles

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) Configurer les paramÃ¨tres SSH

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Puis ajouter des alias d'hÃ´tes pour que les connexions courantes soient faciles et sÃ©curisÃ©es.

## 4) VÃ©rifications rapides

- Confirmer que le prompt et les alias se chargent.
- VÃ©rifier que la destination de sauvegarde est accessible.
- S'assurer que le pare-feu est activÃ©.

Cela fait passer ma machine de Â« nouvelle installation Â» Ã  Â« vrai travail Â» sans perdre tout un aprÃ¨s-midi.

