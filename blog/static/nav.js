// 共享导航栏 - 所有游戏页面引用此脚本
// 在页面底部自动注入玩法说明 + 首页/上下翻页导航

(function() {
    // 游戏列表（按顺序），新增游戏只需在这里加一行
    var games = [
        { id: '001-snake',   name: '🐍 贪吃蛇',       how: '控制蛇吃红色食物，每吃一个 +10 分。撞墙或撞到自己游戏结束。随着得分增高速度越来越快。<br><b>桌面</b>：方向键/WASD 移动 | 空格暂停 | R 重来<br><b>手机</b>：滑动屏幕 或 使用下方方向按钮' },
        { id: '002-sudoku',  name: '🧩 数独',         how: '在 9×9 格子中填入 1-9，使每行、每列、每个 3×3 宫格内数字不重复。<br>填完后点击 <b>「提交检查」</b> 查看结果（绿色正确，红色错误），共 3 次提交机会。<br>修改任意格子后判定自动清除，可重新提交。' },
        { id: '003-2048',    name: '🔢 2048',         how: '方向键滑动方块，相同数字碰撞后合并相加。每次滑动出现新方块。<br>合成 <b>2048</b> 通关！可继续挑战 4096、8192...<br>Ctrl+Z 撤销（最多10步）。' },
        { id: '004-tetris',  name: '🧱 俄罗斯方块',    how: '移动和旋转下落的方块，填满整行即可消除得分。<br>⬅➡ 移动 | ⬆ 旋转 | ⬇ 加速 | 空格 直接落底<br>同时消多行有额外加分，每 10 行升一级加速。' },
    ];

    var path = window.location.pathname;
    var curIdx = -1;
    for (var i = 0; i < games.length; i++) {
        if (path.indexOf('/play/' + games[i].id) !== -1) { curIdx = i; break; }
    }

    var html = '';

    // 玩法说明
    if (curIdx >= 0) {
        html += '<div class="hnav-howto">';
        html += '<h3>📖 玩法说明</h3>';
        html += '<p>' + games[curIdx].how + '</p>';
        html += '</div>';
    }

    // 导航栏
    html += '<div class="hnav-nav">';
    if (curIdx > 0) {
        html += '<a href="/joy-game-study/play/' + games[curIdx-1].id + '/">◀ ' + games[curIdx-1].name + '</a>';
    } else if (curIdx === 0) {
        html += '<span class="hnav-disabled">◀ 没有了</span>';
    } else {
        html += '<span class="hnav-disabled">◀ 上一个</span>';
    }
    html += '<a href="/joy-game-study/" class="hnav-home">🏠 首页</a>';
    if (curIdx >= 0 && curIdx < games.length - 1) {
        html += '<a href="/joy-game-study/play/' + games[curIdx+1].id + '/">' + games[curIdx+1].name + ' ▶</a>';
    } else if (curIdx === games.length - 1) {
        html += '<span class="hnav-disabled">待开发 ▶</span>';
    } else {
        html += '<span class="hnav-disabled">下一个 ▶</span>';
    }
    html += '</div>';

    // 注入样式
    var style = document.createElement('style');
    style.textContent = '' +
        '.hnav-howto { background:#16213e; border:1px solid #333; border-radius:10px; padding:12px 18px; margin-top:14px; width:100%; max-width:500px; }' +
        '.hnav-howto h3 { color:#00d4ff; font-size:0.95em; margin-bottom:6px; }' +
        '.hnav-howto p { color:#aaa; font-size:0.8em; line-height:1.8; }' +
        '.hnav-nav { display:flex; gap:8px; margin-top:14px; width:100%; max-width:500px; justify-content:space-between; }' +
        '.hnav-nav a { padding:10px 20px; border:2px solid #444; border-radius:8px; color:#ccc; text-decoration:none; font-size:0.9em; white-space:nowrap; transition:all 0.15s; }' +
        '.hnav-nav a:hover { border-color:#00d4ff; color:#00d4ff; }' +
        '.hnav-nav a.hnav-home { border-color:#ffd70044; color:#ffd700; }' +
        '.hnav-nav a.hnav-home:hover { border-color:#ffd700; }' +
        '.hnav-nav .hnav-disabled { padding:10px 20px; border:2px solid #222; border-radius:8px; color:#444; font-size:0.9em; white-space:nowrap; }' +
        '';

    document.head.appendChild(style);

    // 插入到 body 末尾（在已有内容之后）
    var container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
})();
