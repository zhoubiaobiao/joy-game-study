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
│   └── 060-magnet/         ← 🧲 磁力迷宫
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

## 🎮 游戏列表（60/100）

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
| 016 | ⚡ 反应测试 | 反应 | 计时、统计、多模式 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/016-reaction/) |
| 017 | ⌨️ 打字游戏 | 打字 | 单词消除、WPM统计 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/017-typing/) |
| 018 | 🏛️ 迷宫探索 | 算法 | DFS迷宫、战争迷雾 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/018-maze/) |
| 019 | 🔨 打地鼠 | 反应 | 随机弹出、计时 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/019-whack/) |
| 020 | 💎 消消乐 | 益智 | 三消、连锁消除 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/020-match3/) |
| 021 | 🎨 涂鸦画板 | 创意 | Canvas绘图、触屏 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/021-draw/) |
| 022 | 🏀 投篮高手 | 体育 | 蓄力抛物线、物理 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/022-basketball/) |
| 023 | 💡 关灯谜题 | 逻辑 | 邻接翻转、保证有解 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/023-lightsout/) |
| 024 | 🧮 口算大挑战 | 教育 | 限时心算、连击系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/024-math/) |
| 025 | 🏃 跑酷 | 动作 | 卷轴、二段跳 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/025-runner/) |
| 026 | 🎣 钓鱼大师 | 模拟 | 时机判断、5种鱼类 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/026-fishing/) |
| 027 | 🔫 泡泡射击 | 益智 | 碰撞反弹、消除匹配 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/027-bubble/) |
| 028 | 🎯 飞镖 | 体育 | 瞄准抖动、仿真靶盘 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/028-darts/) |
| 029 | 🧲 连连看 | 益智 | 2折路径算法 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/029-link/) |
| 030 | 🎪 平衡球 | 物理 | 倾斜控制、陷阱机制 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/030-balance/) |
| 031 | 🎹 钢琴块 | 音乐 | 节奏反应、速度递增 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/031-piano/) |
| 032 | 🧩 拼图 | 益智 | 数字华容道 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/032-puzzle/) |
| 033 | 🌧️ 躲雨 | 反应 | 粒子系统、躲避 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/033-rain/) |
| 034 | 🎱 台球 | 体育 | 拖拽瞄准、碰撞反弹 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/034-pool/) |
| 035 | 🚁 直升机 | 动作 | 洞穴飞行、重力 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/035-heli/) |
| 036 | 🎳 保龄球 | 体育 | 蓄力投掷、10帧计分 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/036-bowling/) |
| 037 | 🔤 单词拼写 | 教育 | 60词库、双模式输入 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/037-word/) |
| 038 | 🎪 套圈 | 体育 | 拖拽瞄准、重力轨迹 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/038-ring/) |
| 039 | 🏹 弹弓 | 射击 | 拖拽蓄力、抛物线 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/039-slingshot/) |
| 040 | 🎡 幸运转盘 | 休闲 | 旋转减速、金币管理 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/040-wheel/) |
| 041 | 🪙 黄金矿工 | 街机 | 摆锤物理、矿物系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/041-gold-miner/) |
| 042 | ✈️ 飞机大战 | 射击 | 武器升级、Boss战 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/042-shooter/) |
| 043 | 🏎️ 极速飞车 | 竞速 | 三车道、速度递增 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/043-racing/) |
| 044 | 🔫 坦克大战 | 对战 | 双人对战、弹射物理 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/044-tanks/) |
| 045 | 📚 叠塔高手 | 街机 | 偏差切割、3D视觉 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/045-stack/) |
| 046 | 🧺 接水果 | 反应 | 篮子物理、生命系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/046-catch/) |
| 047 | 🚀 火箭着陆 | 物理 | 重力模拟、推力控制 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/047-lander/) |
| 048 | 🏒 冰球对战 | 对战 | 碰撞反弹、先7分胜 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/048-airhockey/) |
| 049 | 🟢 球球大作战 | io | 大地图、吞噬机制 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/049-blob/) |
| 050 | 🐍 贪吃蛇对决 | 对战 | 双人对战、3局制 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/050-snakeduel/) |
| 051 | 🦘 跳一跳 | 动作 | 蓄力跳跃、连击系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/051-jump/) |
| 052 | 👟 下100层 | 动作 | 平台下落、弹跳机制 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/052-down100/) |
| 053 | 🎵 节奏大师 | 音乐 | 节奏判定、4轨道 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/053-rhythm/) |
| 054 | 🧷 抽针解谜 | 逻辑 | 安全/危险针、5关 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/054-pinpull/) |
| 055 | 🎯 纸上投篮 | 体育 | 拖拽瞄准、风力系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/055-papertoss/) |
| 056 | 🏹 射箭大师 | 射击 | 旋转靶心、10箭挑战 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/056-archery/) |
| 057 | 🚲 平衡单车 | 物理 | 平衡角度、障碍躲避 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/057-bike/) |
| 058 | 🌊 冲浪达人 | 动作 | 波浪物理、特技跳跃 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/058-surf/) |
| 059 | ⚖️ 走钢丝 | 物理 | 平衡杆、风力系统 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/059-tightrope/) |
| 060 | 🧲 磁力迷宫 | 物理 | 磁铁放置、S/N极 | [▶](https://zhoubiaobiao.github.io/joy-game-study/play/060-magnet/) |

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

> 进度：60 / 100 | 更新于 2026-08-04
