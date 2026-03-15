---
title: 'SSH Defaults I Change First'
description: 'A minimal SSH hardening checklist I apply to every fresh Linux server.'
pubDate: 'Mar 14 2026'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

Fresh server installs are usually insecure by omission, not by bugs. My first 10 minutes always include these edits.

## 1) Disable password login

In `/etc/ssh/sshd_config`:

```text
PasswordAuthentication no
PubkeyAuthentication yes
```

## 2) Keep root out

```text
PermitRootLogin no
```

Use a normal user plus `sudo` and log everything.

## 3) Reduce brute-force noise

```text
MaxAuthTries 3
LoginGraceTime 30
```

Then reload cleanly:

```bash
sudo sshd -t
sudo systemctl reload sshd
```

Always keep one active SSH session open while testing new settings. Locking yourself out is still the classic Linux rite of passage.
