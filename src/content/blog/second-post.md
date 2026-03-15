---
title: 'Package Managers I Actually Trust'
description: 'How I handle package installs across Debian, Arch, and Fedora without confusion.'
pubDate: 'Mar 12 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

I use one rule for Linux package management: always know which tool owns a package.

## Debian and Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

For desktop software, I keep Flatpak separate from `apt` to avoid mystery versions.

## Arch and derivatives

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

I treat AUR helpers as convenience layers, not as replacements for understanding `pacman`.

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

If you jump between distros, save your core install list in a dotfiles repo and map names per distro. It cuts setup time dramatically.
