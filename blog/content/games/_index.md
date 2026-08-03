---
title: "游戏列表"
description: "所有已开发的小游戏"
menu: main
---

<style>
    .gc-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 8px;
        margin: 12px 0;
    }
    .gc-card {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        background: #16213e;
        border: 1px solid #2a2a4a;
        border-radius: 8px;
        text-decoration: none;
        transition: border-color 0.15s, background 0.15s;
    }
    .gc-card:hover {
        border-color: #00d4ff;
        background: #1a2a4a;
    }
    .gc-num {
        color: #666;
        font-size: 0.8em;
        font-family: monospace;
        min-width: 36px;
    }
    .gc-name {
        color: #eee;
        font-size: 0.95em;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .gc-play {
        color: #00d4ff;
        font-size: 0.75em;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.15s;
    }
    .gc-card:hover .gc-play {
        opacity: 1;
    }
    @media (max-width: 500px) {
        .gc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
        }
        .gc-card {
            padding: 8px 10px;
            gap: 4px;
        }
        .gc-name { font-size: 0.82em; }
        .gc-num { font-size: 0.7em; min-width: 28px; }
        .gc-play { display: none; }
    }
</style>

## 🎮 已完成游戏

<div class="gc-grid">
        <a href="/joy-game-study/play/001-snake/" class="gc-card">
            <span class="gc-num">#001</span>
            <span class="gc-name">🐍 贪吃蛇</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/002-sudoku/" class="gc-card">
            <span class="gc-num">#002</span>
            <span class="gc-name">🧩 数独</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/003-2048/" class="gc-card">
            <span class="gc-num">#003</span>
            <span class="gc-name">🔢 2048</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/004-tetris/" class="gc-card">
            <span class="gc-num">#004</span>
            <span class="gc-name">🧱 俄罗斯方块</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/005-breakout/" class="gc-card">
            <span class="gc-num">#005</span>
            <span class="gc-name">🧱 打砖块</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/006-pinball/" class="gc-card">
            <span class="gc-num">#006</span>
            <span class="gc-name">🦾 弹球</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/007-flappy/" class="gc-card">
            <span class="gc-num">#007</span>
            <span class="gc-name">🐤 Flappy Bird</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/008-tictactoe/" class="gc-card">
            <span class="gc-num">#008</span>
            <span class="gc-name">⭕ 井字棋 AI</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/009-minesweeper/" class="gc-card">
            <span class="gc-num">#009</span>
            <span class="gc-name">💣 扫雷</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/010-memory/" class="gc-card">
            <span class="gc-num">#010</span>
            <span class="gc-name">🃏 记忆翻牌</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/011-pong/" class="gc-card">
            <span class="gc-num">#011</span>
            <span class="gc-name">🏓 Pong 对战</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/012-invaders/" class="gc-card">
            <span class="gc-num">#012</span>
            <span class="gc-name">🚀 太空侵略者</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/013-sokoban/" class="gc-card">
            <span class="gc-num">#013</span>
            <span class="gc-name">📦 推箱子</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/014-fruit/" class="gc-card">
            <span class="gc-num">#014</span>
            <span class="gc-name">🔪 水果忍者</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/015-td/" class="gc-card">
            <span class="gc-num">#015</span>
            <span class="gc-name">🏰 塔防</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/016-reaction/" class="gc-card">
            <span class="gc-num">#016</span>
            <span class="gc-name">⚡ 反应测试</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/017-typing/" class="gc-card">
            <span class="gc-num">#017</span>
            <span class="gc-name">⌨️ 打字游戏</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/018-maze/" class="gc-card">
            <span class="gc-num">#018</span>
            <span class="gc-name">🏛️ 迷宫探索</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/019-whack/" class="gc-card">
            <span class="gc-num">#019</span>
            <span class="gc-name">🔨 打地鼠</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/020-match3/" class="gc-card">
            <span class="gc-num">#020</span>
            <span class="gc-name">💎 消消乐</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/021-draw/" class="gc-card">
            <span class="gc-num">#021</span>
            <span class="gc-name">🎨 涂鸦画板</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/022-basketball/" class="gc-card">
            <span class="gc-num">#022</span>
            <span class="gc-name">🏀 投篮高手</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/023-lightsout/" class="gc-card">
            <span class="gc-num">#023</span>
            <span class="gc-name">💡 关灯谜题</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/024-math/" class="gc-card">
            <span class="gc-num">#024</span>
            <span class="gc-name">🧮 口算大挑战</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/025-runner/" class="gc-card">
            <span class="gc-num">#025</span>
            <span class="gc-name">🏃 跑酷</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/026-fishing/" class="gc-card">
            <span class="gc-num">#026</span>
            <span class="gc-name">🎣 钓鱼大师</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/027-bubble/" class="gc-card">
            <span class="gc-num">#027</span>
            <span class="gc-name">🔫 泡泡射击</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/028-darts/" class="gc-card">
            <span class="gc-num">#028</span>
            <span class="gc-name">🎯 飞镖</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/029-link/" class="gc-card">
            <span class="gc-num">#029</span>
            <span class="gc-name">🧲 连连看</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/030-balance/" class="gc-card">
            <span class="gc-num">#030</span>
            <span class="gc-name">🎪 平衡球</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/031-piano/" class="gc-card">
            <span class="gc-num">#031</span>
            <span class="gc-name">🎹 钢琴块</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/032-puzzle/" class="gc-card">
            <span class="gc-num">#032</span>
            <span class="gc-name">🧩 拼图</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/033-rain/" class="gc-card">
            <span class="gc-num">#033</span>
            <span class="gc-name">🌧️ 躲雨</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/034-pool/" class="gc-card">
            <span class="gc-num">#034</span>
            <span class="gc-name">🎱 台球</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/035-heli/" class="gc-card">
            <span class="gc-num">#035</span>
            <span class="gc-name">🚁 直升机</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/036-bowling/" class="gc-card">
            <span class="gc-num">#036</span>
            <span class="gc-name">🎳 保龄球</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/037-word/" class="gc-card">
            <span class="gc-num">#037</span>
            <span class="gc-name">🔤 单词拼写</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/038-ring/" class="gc-card">
            <span class="gc-num">#038</span>
            <span class="gc-name">🎪 套圈</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/039-slingshot/" class="gc-card">
            <span class="gc-num">#039</span>
            <span class="gc-name">🏹 弹弓</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
        <a href="/joy-game-study/play/040-wheel/" class="gc-card">
            <span class="gc-num">#040</span>
            <span class="gc-name">🎡 幸运转盘</span>
            <span class="gc-play">开始游戏 ▶</span>
        </a>
</div>

> 进度：40 / 100 🎉
