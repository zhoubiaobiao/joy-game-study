---
name: deploy
description: 提交所有变更并推送到 GitHub，触发 GitHub Pages 自动部署。
---

## 目标

一键构建博客并推送到 GitHub，Actions 自动部署到 GitHub Pages。

## 流程

1. 确认所有变更已提交
2. 运行 `hugo --minify` 构建博客到 `blog/public/`
3. 提交并推送到 `origin main`
4. GitHub Actions 自动构建 Hugo 并部署到 `gh-pages` 分支
5. 等待约 1-2 分钟后，访问 `https://zhoubiaobiao.github.io/joy-game-study/` 查看

## 注意事项

- 如果 `git push` 失败，先 `git pull --rebase` 再推送
- GitHub Actions 部署状态可在仓库的 Actions 页面查看
