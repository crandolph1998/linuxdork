---
title: "我的 20 分钟 Linux 笔记本初始化"
description: "全新 Linux 安装后，快速上手所需执行的精确步骤。"
pubDate: 'Mar 09 2026'
---

全新的 Linux 安装大约只有十分钟的美好感觉，然后你就会发现什么都没配置好。这是我的基础初始化流程。

## 1) 安装必备工具

```bash
sudo apt update
sudo apt install git curl ripgrep fd-find zsh tmux
```

## 2) 拉取 dotfiles

```bash
git clone https://github.com/you/dotfiles ~/.dotfiles
cd ~/.dotfiles
./install.sh
```

## 3) 配置 SSH 默认设置

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

然后添加主机别名，让日常连接既方便又安全。

## 4) 快速检查

- 确认 shell 提示符和别名正常加载。
- 验证备份目标可达。
- 确保防火墙已启用。

这套流程能让我的机器从“全新安装”直接进入“正式工作”，而不会浪费整个下午。

