---
title: Bash Aliases That Actually Help
description: Reduce repetitive typing with a practical alias setup.
pubDate: 2026-02-18
updatedDate: 2026-02-20
tags: [bash, productivity, shell]
---

Add these aliases to your `~/.bashrc`:

```bash
alias gs='git status -sb'
alias ll='ls -lah --color=auto'
alias update='sudo apt update && sudo apt upgrade -y'
```

After saving, reload with:

```bash
source ~/.bashrc
```

Keep aliases memorable so they speed you up instead of confusing you.
