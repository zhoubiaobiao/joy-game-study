# 🎮 joy-game-study

通过开发 100 个小游戏来学习编程和游戏开发。

## 🔗 项目地址

- **GitHub 仓库**：[zhoubiaobiao/joy-game-study](https://github.com/zhoubiaobiao/joy-game-study)
- **博客首页**：[zhoubiaobiao.github.io/joy-game-study](https://zhoubiaobiao.github.io/joy-game-study/)
- **游戏列表**：[zhoubiaobiao.github.io/joy-game-study/games](https://zhoubiaobiao.github.io/joy-game-study/games/)

## 🎯 项目目标

开发 100 个纯前端浏览器小游戏，托管在 GitHub Pages 上，通过 Hugo 博客展示进度和成果。

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 游戏开发 | HTML5 Canvas / DOM / CSS 3D |
| 博客系统 | Hugo + PaperMod 主题 |
| 部署平台 | GitHub Pages |
| CI/CD | GitHub Actions |

## 📂 项目结构

```
./
├── games/                  ← 游戏源码（每个游戏一个目录）
│   ├── 001-snake/          ← 🐍 贪吃蛇
│   ├── 002-sudoku/         ← 🧩 数独
│   ├── ...
│   └── 015-td/             ← 🏰 塔防
├── blog/                   ← Hugo 静态博客
│   ├── content/games/      ← 游戏展示文章
│   ├── static/play/        ← 游戏部署文件
│   └── static/nav.js       ← 共享导航栏
├── .github/workflows/      ← CI/CD 自动部署
├── .claude/                ← Claude Code 配置
│   ├── skills/             ← 自定义 Skill
│   └── memory/             ← 进度追踪
├── CLAUDE.md               ← 项目指令（AI 助手自动加载）
└── README.md               ← 本文件
```

## 🎮 游戏列表（15/100）

| # | 游戏 | 类型 | 技术点 | 试玩 |
|---|------|------|--------|------|
| 001 | 🐍 贪吃蛇 | 街机 | Canvas、网格系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/001-snake/) |
| 002 | 🧩 数独 | 益智 | 回溯算法、唯一解 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/002-sudoku/) |
| 003 | 🔢 2048 | 益智 | CSS Grid、合并逻辑 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/003-2048/) |
| 004 | 🧱 俄罗斯方块 | 街机 | 旋转碰撞、等级系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/004-tetris/) |
| 005 | 🧱 打砖块 | 街机 | AABB碰撞、角度反射 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/005-breakout/) |
| 006 | 🦾 弹球 | 街机 | 线段碰撞、重力模拟 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/006-pinball/) |
| 007 | 🐤 Flappy Bird | 动作 | 重力+管道生成 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/007-flappy/) |
| 008 | ⭕ 井字棋 AI | AI | Minimax、α-β剪枝 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/008-tictactoe/) |
| 009 | 💣 扫雷 | 益智 | 递归洪水填充 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/009-minesweeper/) |
| 010 | 🃏 记忆翻牌 | 记忆 | CSS 3D翻转动画 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/010-memory/) |
| 011 | 🏓 Pong 对战 | 街机 | AI追踪、双人对战 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/011-pong/) |
| 012 | 🚀 太空侵略者 | 射击 | 敌人阵列、波次系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/012-invaders/) |
| 013 | 📦 推箱子 | 逻辑 | 关卡设计、撤销栈 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/013-sokoban/) |
| 014 | 🔪 水果忍者 | 动作 | 手势识别、粒子特效 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/014-fruit/) |
| 015 | 🏰 塔防 | 策略 | 寻路、波次生成 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/015-td/) |

## 🚀 本地运行

```bash
# 克隆仓库
git clone git@github.com:zhoubiaobiao/joy-game-study.git
cd joy-game-study

# 启动 Hugo 博客（需要安装 Hugo）
cd blog
hugo server

# 访问 http://localhost:1313/joy-game-study/

# 游戏文件可以直接用浏览器打开
# 例如：open games/001-snake/index.html
```

## 📝 开发约束

- 所有游戏运行在浏览器中（纯前端，无后端）
- 部署目标：GitHub Pages（免费）
- 一个游戏一个 HTML 文件

---

> 进度：15 / 100 | 更新于 2026-08-03
