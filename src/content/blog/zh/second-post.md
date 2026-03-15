---
title: "我真正信任的包管理器"
description: "如何在 Debian、Arch 和 Fedora 上管理包安装，避免混乱。"
pubDate: 'Mar 12 2026'
---

我对 Linux 包管理有一条原则：始终清楚哪个工具负责管理哪个包。

## Debian 和 Ubuntu

```bash
sudo apt update
sudo apt install ripgrep fd-find
```

对于桌面软件，我将 Flatpak 与 `apt` 分开管理，避免版本来源不明的问题。

## Arch 及其衍生版

```bash
sudo pacman -Syu
sudo pacman -S ripgrep fd
```

我将 AUR 辅助工具视为便捷层，而非理解 `pacman` 的替代品。

## Fedora

```bash
sudo dnf upgrade --refresh
sudo dnf install ripgrep fd-find
```

如果你经常在不同发行版之间切换，把你的核心安装列表保存在 dotfiles 仓库中，并按发行版映射包名。这能大幅缩短配置时间。

