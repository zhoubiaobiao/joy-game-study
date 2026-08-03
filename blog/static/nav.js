// 共享导航栏 - 所有游戏页面引用此脚本
// 在页面底部自动注入玩法说明 + 首页/上下翻页导航

(function() {
    // 游戏列表（按顺序），新增游戏只需在这里加一行
    var games = [
        { id: '001-snake',   name: '🐍 贪吃蛇',     short: '贪吃蛇',   how: '控制蛇吃红色食物，每吃一个 +10 分。撞墙或撞到自己游戏结束。随着得分增高速度越来越快。<br><b>桌面</b>：方向键/WASD 移动 | 空格暂停 | R 重来<br><b>手机</b>：滑动屏幕 或 使用下方方向按钮' },
        { id: '002-sudoku',  name: '🧩 数独',       short: '数独',     how: '在 9×9 格子中填入 1-9，使每行、每列、每个 3×3 宫格内数字不重复。<br>填完后点击 <b>「提交检查」</b> 查看结果（绿色正确，红色错误），共 3 次提交机会。<br>修改任意格子后判定自动清除，可重新提交。' },
        { id: '003-2048',    name: '🔢 2048',       short: '2048',     how: '方向键滑动方块，相同数字碰撞后合并相加。每次滑动出现新方块。<br>合成 <b>2048</b> 通关！可继续挑战 4096、8192...<br>Ctrl+Z 撤销（最多10步）。' },
        { id: '004-tetris',  name: '🧱 俄罗斯方块',  short: '俄罗斯方块', how: '移动和旋转下落的方块，填满整行即可消除得分。<br>⬅➡ 移动 | ⬆ 旋转 | ⬇ 加速 | 空格 直接落底<br>同时消多行有额外加分，每 10 行升一级加速。' },
        { id: '005-breakout', name: '🧱 打砖块',     short: '打砖块',   how: '移动挡板反弹小球，消除所有砖块即可通关。<br>球击中挡板的位置决定反弹角度（左边向左弹，右边向右弹）。<br><b>桌面</b>：鼠标移动挡板 | 点击/空格发射球 | 方向键左右微调<br><b>手机</b>：触摸滑动控制挡板 | 点击发射球' },
        { id: '006-pinball',  name: '🦾 弹球',       short: '弹球',     how: '经典弹球游戏！用左右挡板将球弹回，击中弹球柱得分。<br>连续击中弹球柱可累积连击倍数，最高 x10 倍得分。<br><b>桌面</b>：A/← 左挡板 | D/→ 右挡板 | 空格发射<br><b>手机</b>：点击下方左右挡板按钮' },
        { id: '007-flappy',    name: '🐤 Flappy Bird', short: 'Flappy',  how: '点击屏幕让小鸟飞起来，穿过管道缝隙得分。<br>撞到管道、天花板或地面则游戏结束。<br><b>桌面</b>：空格键/点击 | P 暂停<br><b>手机</b>：点击屏幕' },
        { id: '008-tictactoe', name: '⭕ 井字棋 AI',   short: '井字棋',   how: '经典井字棋对战 AI！你是 ❌ 先手，AI 是 ⭕ 后手。<br>AI 使用 Minimax 算法，理论上无法被击败。<br>点击空格落子，统计胜负平局记录。' },
        { id: '009-minesweeper', name: '💣 扫雷',      short: '扫雷',     how: '经典扫雷游戏！点击格子揭示，右键/长按标旗。<br>数字代表周围 3×3 范围内有多少颗雷。<br>三级难度：初级 9×9（10雷）、中级 12×12（20雷）、高级 16×16（40雷）。' },
        { id: '010-memory',     name: '🃏 记忆翻牌',   short: '记忆翻牌', how: '翻牌配对记忆游戏！点击卡片翻开，找到两张相同的即配对。<br>8 对 emoji 卡片随机排列，尽量用最少步数完成。<br>最佳记录保存在本地。' },
    ];

    var path = window.location.pathname;
    var curIdx = -1;
    for (var i = 0; i < games.length; i++) {
        var id = games[i].id;
        // 精确匹配完整路径段：/play/001-snake/ 或 /play/001-snake（末尾无斜杠）
        if (path.indexOf('/play/' + id + '/') !== -1 ||
            path.lastIndexOf('/play/' + id) === path.length - ('/play/' + id).length) {
            curIdx = i; break;
        }
    }

    var html = '';

    // 玩法说明
    if (curIdx >= 0) {
        html += '<div class="hnav-howto">';
        html += '<h3>📖 玩法说明</h3>';
        html += '<p>' + games[curIdx].how + '</p>';
        html += '</div>';
    }

    // 导航栏 - 使用两套文本：桌面端完整版 + 移动端简短版
    html += '<div class="hnav-nav">';

    // 上一个按钮
    if (curIdx > 0) {
        var prev = games[curIdx - 1];
        html += '<a href="/joy-game-study/play/' + prev.id + '/">';
        html += '<span class="hnav-full">◀ ' + prev.name + '</span>';
        html += '<span class="hnav-short">◀ ' + prev.short + '</span>';
        html += '</a>';
    } else if (curIdx === 0) {
        html += '<span class="hnav-disabled"><span class="hnav-full">◀ 没有了</span><span class="hnav-short">◀</span></span>';
    } else {
        html += '<span class="hnav-disabled"><span class="hnav-full">◀ 上一个</span><span class="hnav-short">◀</span></span>';
    }

    // 首页按钮
    html += '<a href="/joy-game-study/" class="hnav-home"><span class="hnav-full">🏠 首页</span><span class="hnav-short">🏠</span></a>';

    // 下一个按钮
    if (curIdx >= 0 && curIdx < games.length - 1) {
        var next = games[curIdx + 1];
        html += '<a href="/joy-game-study/play/' + next.id + '/">';
        html += '<span class="hnav-full">' + next.name + ' ▶</span>';
        html += '<span class="hnav-short">' + next.short + ' ▶</span>';
        html += '</a>';
    } else if (curIdx === games.length - 1) {
        html += '<span class="hnav-disabled"><span class="hnav-full">待开发 ▶</span><span class="hnav-short">▶</span></span>';
    } else {
        html += '<span class="hnav-disabled"><span class="hnav-full">下一个 ▶</span><span class="hnav-short">▶</span></span>';
    }

    html += '</div>';

    // 注入样式
    var style = document.createElement('style');
    style.textContent = '' +
        '.hnav-howto { background:#16213e; border:1px solid #333; border-radius:10px; padding:12px 18px; margin-top:14px; width:100%; max-width:500px; }' +
        '.hnav-howto h3 { color:#00d4ff; font-size:0.95em; margin-bottom:6px; }' +
        '.hnav-howto p { color:#aaa; font-size:0.8em; line-height:1.8; }' +
        '.hnav-nav { display:flex; gap:6px; margin-top:14px; width:100%; max-width:500px; justify-content:space-between; flex-wrap:wrap; }' +
        '.hnav-nav a { padding:10px 16px; border:2px solid #444; border-radius:8px; color:#ccc; text-decoration:none; font-size:0.9em; white-space:nowrap; transition:all 0.15s; text-align:center; }' +
        '.hnav-nav a:hover { border-color:#00d4ff; color:#00d4ff; }' +
        '.hnav-nav a.hnav-home { border-color:#ffd70044; color:#ffd700; flex-shrink:0; }' +
        '.hnav-nav a.hnav-home:hover { border-color:#ffd700; }' +
        '.hnav-nav .hnav-disabled { padding:10px 14px; border:2px solid #222; border-radius:8px; color:#444; font-size:0.9em; white-space:nowrap; text-align:center; }' +
        // 默认显示完整版
        '.hnav-short { display:none; }' +
        '.hnav-full { display:inline; }' +
        // 窄屏切换为简短版
        '@media (max-width:420px) {' +
            '.hnav-nav { gap:4px; }' +
            '.hnav-nav a { padding:8px 10px; font-size:0.82em; }' +
            '.hnav-nav .hnav-disabled { padding:8px 8px; font-size:0.82em; }' +
            '.hnav-full { display:none; }' +
            '.hnav-short { display:inline; }' +
        '}' +
        // 极窄屏进一步压缩
        '@media (max-width:340px) {' +
            '.hnav-nav a { padding:8px 6px; font-size:0.75em; }' +
            '.hnav-nav .hnav-disabled { padding:8px 4px; font-size:0.75em; }' +
        '}' +
        '';

    document.head.appendChild(style);

    // 插入到 body 末尾
    var container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
})();
