---
title: "我最先修改的 SSH 默认设置"
description: "一份精简的 SSH 加固清单，适用于每台全新的 Linux 服务器。"
pubDate: 'Mar 14 2026'
---

新服务器的安全隐患通常来自默认配置的疏漏，而非软件缺陷。我的前十分钟总会包含以下这些修改。

## 1) 禁用密码登录

在 `/etc/ssh/sshd_config` 中：

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) 禁止 root 直接登录

```text
PermitRootLogin no
```

使用普通用户加 `sudo`，并记录所有操作。

## 3) 降低暴力破解噪音

```text
MaxAuthTries 3
LoginGraceTime 30
```

然后干净地重新加载：

```bash
sudo sshd -t
sudo systemctl reload sshd
```

测试新配置时，务必保持一个活跃的 SSH 会话。把自己锁在门外，依然是 Linux 最经典的“入门仪式”。

