---
name: new-game
description: 创建一个新游戏的模板文件，自动编号，更新进度。
---

## 目标

在 `games/` 目录下创建新游戏，自动生成编号（下一个可用编号），初始化基础 HTML 模板。

## 命名规则

- 格式: `NNN-game-name`（如 `001-snake`, `002-tetris`）
- NNN 是三位数编号，自动递增

## 流程

1. 读取 `games/manifest.json` 获取当前游戏数量和最大编号
2. 确定下一个编号（当前计数 + 1）
3. 在 `games/` 目录下创建 `NNN-game-name/` 目录
4. 写入游戏文件 `index.html`（使用下面的模板）
5. 在 `games/manifest.json` 的 `games` 数组末尾添加新游戏条目：
   ```json
   {
     "id": "NNN-game-name",
     "name": "🎮 游戏全名",
     "short": "短名",
     "how": "玩法说明...<br><b>桌面</b>：键盘操作<br><b>手机</b>：触屏操作",
     "desc": "一句话描述游戏特点和核心玩法。"
   }
   ```
6. 运行 `node scripts/build.js` 自动生成：
   - `blog/static/nav.js`（导航栏更新）
   - `blog/content/games/_index.md`（游戏列表更新）
   - `blog/content/games/NNN-game-name.md`（博客文章）
   - `blog/static/play/NNN-game-name/`（同步部署文件）
7. 更新 `.claude/memory/progress.md`，游戏计数 +1

## 游戏模板

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>{游戏编号} - {游戏名称}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #1a1a2e; color: #eee;
            font-family: 'Segoe UI', sans-serif;
            display: flex; flex-direction: column; align-items: center;
            min-height: 100vh; min-height: 100dvh; padding: 10px;
            user-select: none; -webkit-user-select: none;
        }
        h1 { color: #00d4ff; font-size: clamp(1.1em, 4vw, 1.6em); margin-bottom: 2px; }

        .top-bar { display: flex; gap: 14px; margin-bottom: 4px; font-size: clamp(0.8em, 2.5vw, 0.9em); color: #aaa; flex-wrap: wrap; justify-content: center; }
        .top-bar span { color: #ffd700; font-weight: bold; }

        canvas { border: 2px solid #333; border-radius: 6px; display: block; max-width: 100%; touch-action: manipulation; }

        .btn-row { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; justify-content: center; }
        .btn {
            padding: 8px 18px; border: 2px solid #444; background: transparent;
            color: #ccc; border-radius: 8px; cursor: pointer;
            font-size: clamp(0.75em, 2.5vw, 0.9em);
            -webkit-tap-highlight-color: transparent;
        }
        .btn:active { border-color: #00d4ff; color: #00d4ff; }
        .btn.primary { background: #00d4ff33; border-color: #00d4ff; color: #00d4ff; }

        .info { color: #555; font-size: 0.7em; margin-top: 4px; text-align: center; }

        .overlay {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.92); padding: 24px 30px; border-radius: 12px;
            text-align: center; display: none; z-index: 10;
        }
        .overlay h2 { font-size: clamp(1.3em, 4vw, 2em); margin-bottom: 8px; color: #ffd700; }
        .overlay p { color: #ccc; margin-bottom: 14px; }
        .overlay button {
            padding: 10px 28px; font-size: 1em;
            background: #00d4ff; color: #1a1a2e; border: none;
            border-radius: 6px; cursor: pointer; font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>{游戏名称} — #{游戏编号}</h1>
    <div class="top-bar">
        <span>得分：<span id="score">0</span></span>
    </div>
    <canvas id="game"></canvas>
    <div class="btn-row">
        <button class="btn primary" id="newBtn">🔄 新游戏</button>
    </div>
    <div class="info">💡 {玩法提示}</div>
    <div class="overlay" id="endOverlay">
        <h2>🎉 游戏结束</h2>
        <p>得分：<strong id="endScore">0</strong></p>
        <button onclick="newGame()">🔄 再来一局</button>
    </div>
    <script>
        const canvas = document.getElementById('game');
        const ctx = canvas.getContext('2d');
        // TODO: 在此编写游戏逻辑
        function newGame() {}
        newGame();
    </script>
    <script src="/joy-game-study/nav.js"></script>
</body>
</html>
```

## 重要提醒

- **必须**同时创建 `index.html` 和更新 `manifest.json`
- **必须**运行 `node scripts/build.js` 让所有生成文件同步
- 游戏 ID 格式严格为 `NNN-name`，NNN 为三位数编号
- nav.js 的引用路径是 `/joy-game-study/nav.js`
