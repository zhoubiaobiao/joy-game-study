# joy-game-study

## 项目目标

通过开发 100 个小游戏来学习编程和游戏开发。所有游戏托管在 GitHub Pages 上，博客展示进度和成果。

## 仓库结构

```
./
├── blog/                  ← Hugo 静态博客
│   └── content/games/     ← 游戏展示页面（自动生成）
├── games/                 ← 游戏源码
│   ├── 001-xxx/           ← 第1个游戏
│   └── ...
├── .claude/               ← Claude Code 自定义 skill + 进度文件
│   ├── skills/
│   │   ├── resume/        ← "继续" — 恢复工作进度
│   │   ├── new-game/      ← "新建游戏" — 创建游戏模板
│   │   └── deploy/        ← "部署" — 推送并触发部署
│   └── memory/
│       └── progress.md    ← 进度追踪
├── .github/workflows/     ← CI/CD 自动部署
└── CLAUDE.md              ← 本文件（项目指令）
```

## 自定义 Skill

说以下关键词触发对应 skill：
- **"继续" / "继续上次的工作"** → resume skill — 读取 CLAUDE.md 和进度文件，汇报当前状态
- **"创建游戏" / "新游戏"** → new-game skill — 自动编号、生成 HTML 模板、更新进度
- **"部署" / "发布"** → deploy skill — 提交推送、触发 GitHub Actions 部署

## 进度路线

- [x] 阶段一：基础设施 — GitHub 仓库 + Hugo 博客 + 自定义 Skill + GitHub Pages
- [ ] 阶段二：内容 — 开发前 10 个小游戏
- [ ] 阶段三：自动化 — CI/CD 自动部署，博客自动更新
- [ ] 阶段四：迭代 — 完成剩余 90 个游戏

## 当前进度
**位置：阶段一（基础设施），即将完成**

> 详细进度见 `.claude/memory/progress.md`。

## 如何继续工作

不管在哪台电脑，执行：

```
git clone git@github.com:zhoubiaobiao/joy-game-study.git
cd joy-game-study
# 打开 Claude Code，说"继续开发"或"继续上次的工作"
```

本文件会自动加载，Claude Code 会读取 `.claude/` 下的 skill 和进度文件恢复上下文。

## 约束

- 所有游戏运行在浏览器中（纯前端，无后端）
- 部署目标：GitHub Pages（免费）
- 使用简体中文交流
