---
title: "Linux 日志不再烦人"
description: "一套实用的 journalctl 输出阅读流程，让你不再被噪音淹没。"
pubDate: 'Mar 10 2026'
---

当 Linux 机器开始表现异常时，日志是通向真相最快的路径。关键在于从噪音中过滤出信号。

## 从缩小范围开始

```bash
journalctl -u ssh -n 200 --no-pager
```

这会返回单个服务最近的 200 行日志，并默认不打开分页器。

## 添加时间过滤

```bash
journalctl --since "30 min ago" -p warning
```

当你大致知道问题发生的时间时，这个命令非常有用。

## 实时跟踪输出

```bash
journalctl -fu nginx
```

`-f` 跟踪日志流，`-u` 将输出限定在单个 unit。

当一条命令返回太多文本时，我会逐次收紧一个维度：服务、时间或优先级。这样能保持调试过程快速且可重复。

