---
name: deploy
description: 提交所有变更并推送到 GitHub，触发 GitHub Pages 自动部署。
---

## 目标

一键构建并推送到 GitHub，Actions 自动部署到 GitHub Pages。

## 流程

1. 运行 `node scripts/build.js` 确保所有自动生成文件最新
2. `git add -A`
3. `git commit -m "<描述>"`
4. `git push origin main`
5. GitHub Actions 自动：运行 build 脚本 → 构建 Hugo → 部署到 Pages
6. 等待约 1-2 分钟后，访问 `https://zhoubiaobiao.github.io/joy-game-study/` 查看

## 注意事项

- 如果 `git push` 失败，先 `git pull --rebase` 再推送
- GitHub Actions 部署状态可在仓库的 Actions 页面查看
- CI 会自动运行 `node scripts/build.js`，本地提交前也建议先运行一次
