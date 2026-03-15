---
title: 'Gerenciadores de Pacotes em Que Confio'
description: 'Como gerencio instalações de pacotes no Debian, Arch e Fedora sem confusão.'
pubDate: 'Mar 12 2026'
---

Tenho uma regra para o gerenciamento de pacotes no Linux: sempre saiba qual ferramenta é responsável por um pacote.

## Debian e Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Para software de desktop, mantenho o Flatpak separado do `apt` para evitar versões misteriosas.

## Arch e derivados

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

Trato os helpers do AUR como camadas de conveniência, não como substitutos para entender o `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Se você alterna entre distribuições, salve sua lista de instalação principal em um repositório de dotfiles e mapeie os nomes por distribuição. Isso reduz drasticamente o tempo de configuração.
