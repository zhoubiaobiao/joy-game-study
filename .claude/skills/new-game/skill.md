---
name: new-game
description: 创建一个新游戏的模板文件，自动编号，更新进度。
---

## 目标

在 `games/` 目录下创建新游戏，自动生成编号（下一个可用编号），初始化基础 HTML 模板。

## 命名规则

- 格式: `NNN-game-name`（如 `001-snake-game`, `002-tetris`）
- NNN 是三位数编号，自动递增

## 流程

1. 读取 `.claude/memory/progress.md` 获取当前游戏计数
2. 确定下一个编号（当前计数 + 1）
3. 在 `games/` 目录下创建 `NNN-game-name/` 目录
4. 写入游戏模板 `index.html`
5. 更新 `.claude/memory/progress.md`，游戏计数 +1
6. 更新 `blog/content/games/` 目录，添加对应游戏的 markdown 页面

## 游戏模板

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{游戏编号} - {游戏名称}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #1a1a2e; color: #eee; 
            font-family: 'Segoe UI', sans-serif;
            display: flex; flex-direction: column; align-items: center; 
            min-height: 100vh; padding: 20px;
        }
        h1 { margin-bottom: 20px; color: #00d4ff; }
        canvas { border: 2px solid #333; background: #16213e; }
        .info { margin-top: 15px; color: #888; font-size: 14px; }
    </style>
</head>
<body>
    <h1>{游戏编号} - {游戏名称}</h1>
    <canvas id="game" width="800" height="500"></canvas>
    <div class="info">🕹 使用方向键 / WASD 控制</div>
    <script>
        const canvas = document.getElementById('game');
        const ctx = canvas.getContext('2d');
        // TODO: 在此编写游戏逻辑
    </script>
</body>
</html>
```
