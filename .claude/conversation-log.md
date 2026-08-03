---
name: conversation-log
description: 对话记录——每次关键讨论和决策的摘要，方便随时回顾
type: project
---

# 对话记录

---

## 2026-07-31 — 项目启动 & 阶段一完成

### 决定事项

1. **托管方案**：选择 **GitHub Pages（免费）**，不买域名和服务器。理由：学习用途，够用，零成本。
2. **GitHub 用户**：`zhoubiaobiao`，仓库：`joy-game-study`
3. **博客框架**：Hugo + PaperMod 主题，静态博客
4. **游戏技术栈**：纯 HTML/CSS/JS（待阶段二再最终确认）
5. **换电脑继续方案**：通过 Git 仓库 + CLAUDE.md + 自定义 Skill + progress.md 实现

### 已完成工作

- GitHub 仓库创建并推送（3 个 commit）
- Hugo 博客上线：https://zhoubiaobiao.github.io/joy-game-study/
- 创建 3 个自定义 Skill：
  - `resume` — 说"继续"恢复工作进度
  - `new-game` — 说"创建新游戏"自动生成模板
  - `deploy` — 说"部署"推送到 GitHub Pages
- GitHub Actions CI/CD：`git push` 自动触发部署
- 进度文件：`.claude/memory/progress.md`
- 本文件：`.claude/conversation-log.md`

### 仓库结构

```
joy-game-study/
├── blog/                  ← Hugo 博客
├── games/                 ← 游戏源码（待填充）
├── .claude/               ← Skill + 进度 + 对话记录
│   ├── skills/resume/
│   ├── skills/new-game/
│   ├── skills/deploy/
│   ├── memory/progress.md
│   └── conversation-log.md
├── .github/workflows/     ← CI/CD
├── CLAUDE.md              ← 项目指令
└── .gitignore
```

### 项目路线图

- [x] 阶段一：基础设施 ✅
- [ ] 阶段二：前 10 个游戏
- [ ] 阶段三：CI/CD 自动化
- [ ] 阶段四：完成剩余 90 个游戏

### 下一步

**阶段二**：开发第一个游戏（编号 001）。说"创建新游戏"即可开始。

---

## 2026-07-31 — 001 贪吃蛇完成

### 决定事项

- 第一个游戏：贪吃蛇（选项 A），经典入门
- 游戏文件存放：源码在 `games/`，运行版本复制到 `blog/static/games/`

### 完成内容

- 贪吃蛇游戏：`games/001-snake/index.html`
- 游戏特性：WASD/方向键控制，空格暂停，R 重开，触屏滑动，吃食物加速，渐变色蛇身
- 博客文章：`blog/content/games/001-snake.md`
- 游戏列表页已更新：`blog/content/games/_index.md`
- 进度：1 / 100

### 下一步

开发第二个游戏（编号 002）。

---

## 2026-07-31 — 002 数独完成

### 决定事项

- 第二个游戏：数独，三个难度级别
- 小学(简单)：40 个提示数字；中学(中等)：31 个；成年人(困难)：24 个（保证唯一解）
- 修复了 `/games/` vs `/play/` 路径冲突问题

### 完成内容

- 数独游戏：`games/002-sudoku/index.html`
- 核心算法：回溯法生成完整解答 + 唯一解验证的挖空算法
- 功能：三级难度、错误追踪(上限3次)、提示、计时器、数字统计、冲突高亮
- 博客文章：`blog/content/games/002-sudoku.md`
- 进度：2 / 100

### 技术要点

- 数独生成器使用对角线填充 + 回溯求解
- 挖空时验证唯一解（countSolutions 限 2 计数）
- 路径修复：游戏文件放 `blog/static/play/` 避免与 Hugo 内容页冲突

### 下一步

开发第三个游戏（编号 003）。

---

## 2026-08-03 — 阶段三自动化完成

### 决定事项

- 创建 `games/manifest.json` 作为游戏数据的**唯一来源**
- 构建脚本 `scripts/build.js` 自动生成所有派生文件
- CI/CD 流程中集成 build 脚本，无需手动同步

### 新增文件

| 文件 | 用途 |
|------|------|
| `games/manifest.json` | 所有游戏的元数据（id, name, short, how, desc） |
| `scripts/build.js` | 读取 manifest，自动生成 nav.js / 博客文章 / 游戏列表 / 静态同步 |

### 自动化覆盖

| 之前（手动） | 之后（自动） |
|-------------|-------------|
| 手动编辑 `nav.js` 添加游戏 | `build.js` 从 manifest 生成 |
| 手动写 `_index.md` 游戏列表 | `build.js` 从 manifest 生成 |
| 手动写 `NNN-name.md` 博客文章 | `build.js` 从 manifest 生成 |
| 手动复制 HTML 到 `static/play/` | `build.js` 自动同步 |
| CI 只构建 Hugo | CI 先运行 build.js 再构建 Hugo |

### 修改文件

- `.github/workflows/hugo.yml` — 添加 Node.js setup + build script 步骤
- `.claude/skills/new-game/skill.md` — 适配 manifest.json 工作流
- `.claude/skills/deploy/skill.md` — 添加 build script 步骤
- `.claude/memory/progress.md` — 阶段三标记完成

### 下一步

阶段三完成，可以继续开发游戏 021+。
