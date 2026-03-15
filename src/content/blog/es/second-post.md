---
title: 'Gestores de Paquetes en los Que Confío'
description: 'Cómo gestiono instalaciones de paquetes en Debian, Arch y Fedora sin confusión.'
pubDate: 'Mar 12 2026'
---

Tengo una regla para la gestión de paquetes en Linux: siempre saber qué herramienta es responsable de un paquete.

## Debian y Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

Para software de escritorio, mantengo Flatpak separado de `apt` para evitar versiones misteriosas.

## Arch y derivados

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

Trato los helpers de AUR como capas de conveniencia, no como sustitutos para entender `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

Si saltas entre distros, guarda tu lista de instalación principal en un repositorio de dotfiles y mapea los nombres por distribución. Eso reduce drásticamente el tiempo de configuración.
