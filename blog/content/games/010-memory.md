---
title: "010 - 记忆翻牌"
date: 2026-08-03
draft: false
tags: ["游戏", "DOM", "记忆翻牌", "CSS动画"]
categories: ["游戏"]
---

## 🃏 记忆翻牌 — #010

翻牌配对记忆游戏！找到所有相同的 emoji 配对。

### 🎮 玩法

- 点击卡片翻开
- 每次翻开两张
- 两张相同 → 配对成功，保持翻开
- 两张不同 → 0.7 秒后自动翻回
- 全部配对完成即获胜

### ✨ 特色

- 8 对随机 emoji（共 16 张卡片，4×4 网格）
- CSS 3D flip 翻转动画（perspective + rotateY）
- 配对成功卡片变绿色
- 步数 + 计时器统计
- 最佳记录 localStorage 保存
- 新纪录提示

### 🛠 技术栈

- DOM + CSS Grid
- CSS 3D Transform（perspective, rotateY, backface-visibility）
- localStorage 最佳记录

---

[🎮 开始玩](/joy-game-study/play/010-memory/)
