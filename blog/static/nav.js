// ⚠️ 此文件由 scripts/build.js 自动生成，请勿手动编辑
// 修改游戏数据请编辑 games/manifest.json，然后运行 node scripts/build.js
// 共享导航栏 - 所有游戏页面引用此脚本
// 在页面底部自动注入玩法说明 + 首页/上下翻页导航

(function() {
    // 游戏列表（从 manifest.json 自动生成）
    var games = [
        {
                "id": "001-snake",
                "name": "🐍 贪吃蛇",
                "short": "贪吃蛇",
                "how": "控制蛇吃红色食物，每吃一个 +10 分。撞墙或撞到自己游戏结束。随着得分增高速度越来越快。<br><b>桌面</b>：方向键/WASD 移动 | 空格暂停 | R 重来<br><b>手机</b>：滑动屏幕 或 使用下方方向按钮"
        },
        {
                "id": "002-sudoku",
                "name": "🧩 数独",
                "short": "数独",
                "how": "在 9×9 格子中填入 1-9，使每行、每列、每个 3×3 宫格内数字不重复。<br>填完后点击 <b>「提交检查」</b> 查看结果（绿色正确，红色错误），共 3 次提交机会。<br>修改任意格子后判定自动清除，可重新提交。"
        },
        {
                "id": "003-2048",
                "name": "🔢 2048",
                "short": "2048",
                "how": "方向键滑动方块，相同数字碰撞后合并相加。每次滑动出现新方块。<br>合成 <b>2048</b> 通关！可继续挑战 4096、8192...<br>Ctrl+Z 撤销（最多10步）。"
        },
        {
                "id": "004-tetris",
                "name": "🧱 俄罗斯方块",
                "short": "俄罗斯方块",
                "how": "移动和旋转下落的方块，填满整行即可消除得分。<br>⬅➡ 移动 | ⬆ 旋转 | ⬇ 加速 | 空格 直接落底<br>同时消多行有额外加分，每 10 行升一级加速。"
        },
        {
                "id": "005-breakout",
                "name": "🧱 打砖块",
                "short": "打砖块",
                "how": "移动挡板反弹小球，消除所有砖块即可通关。<br>球击中挡板的位置决定反弹角度（左边向左弹，右边向右弹）。<br><b>桌面</b>：鼠标移动挡板 | 点击/空格发射球 | 方向键左右微调<br><b>手机</b>：触摸滑动控制挡板 | 点击发射球"
        },
        {
                "id": "006-pinball",
                "name": "🦾 弹球",
                "short": "弹球",
                "how": "经典弹球游戏！用左右挡板将球弹回，击中弹球柱得分。<br>连续击中弹球柱可累积连击倍数，最高 x10 倍得分。<br><b>桌面</b>：A/← 左挡板 | D/→ 右挡板 | 空格发射<br><b>手机</b>：点击下方左右挡板按钮"
        },
        {
                "id": "007-flappy",
                "name": "🐤 Flappy Bird",
                "short": "Flappy",
                "how": "点击屏幕让小鸟飞起来，穿过管道缝隙得分。<br>撞到管道、天花板或地面则游戏结束。<br><b>桌面</b>：空格键/点击 | P 暂停<br><b>手机</b>：点击屏幕"
        },
        {
                "id": "008-tictactoe",
                "name": "⭕ 井字棋 AI",
                "short": "井字棋",
                "how": "经典井字棋对战 AI！你是 ❌ 先手，AI 是 ⭕ 后手。<br>AI 使用 Minimax 算法，理论上无法被击败。<br>点击空格落子，统计胜负平局记录。"
        },
        {
                "id": "009-minesweeper",
                "name": "💣 扫雷",
                "short": "扫雷",
                "how": "经典扫雷游戏！点击格子揭示，右键/长按标旗。<br>数字代表周围 3×3 范围内有多少颗雷。<br>三级难度：初级 9×9（10雷）、中级 12×12（20雷）、高级 16×16（40雷）。"
        },
        {
                "id": "010-memory",
                "name": "🃏 记忆翻牌",
                "short": "记忆翻牌",
                "how": "翻牌配对记忆游戏！点击卡片翻开，找到两张相同的即配对。<br>8 对 emoji 卡片随机排列，尽量用最少步数完成。<br>最佳记录保存在本地。"
        },
        {
                "id": "011-pong",
                "name": "🏓 Pong 对战",
                "short": "Pong",
                "how": "经典乒乓对战！可单人打 AI 或双人同屏对战。<br>球击中挡板的位置决定反弹角度，先得 7 分者获胜。<br><b>1P</b>：W/S 控制左挡板 | <b>2P</b>：玩家1用W/S，玩家2用↑/↓"
        },
        {
                "id": "012-invaders",
                "name": "🚀 太空侵略者",
                "short": "太空侵略者",
                "how": "经典街机射击游戏！消灭外星人军团，防止它们降落。<br>⬅➡ 移动 | 空格射击 | 敌人会越来越快。<br>消灭全部敌人进入下一波，波次越高难度越大。"
        },
        {
                "id": "013-sokoban",
                "name": "📦 推箱子",
                "short": "推箱子",
                "how": "经典逻辑游戏！把箱子推到目标点。<br>只能推不能拉，需要仔细规划路线。<br>10 个精心设计的关卡，支持撤销操作。"
        },
        {
                "id": "014-fruit",
                "name": "🔪 水果忍者",
                "short": "水果忍者",
                "how": "滑动屏幕切割水果！一次切多个水果获得连击加分。<br>⚫ 黑色炸弹绝对不能切！<br><b>手机</b>：手指滑动切割 | <b>桌面</b>：鼠标拖拽切割"
        },
        {
                "id": "015-td",
                "name": "🏰 塔防",
                "short": "塔防",
                "how": "策略塔防！在路径旁建造防御塔阻止敌人到达终点。<br>三种塔：🏹箭塔(快/单攻) ❄️冰塔(减速) 💣炮塔(范围伤害)<br>点击已有塔升级，15波敌人越来越强。"
        },
        {
                "id": "016-reaction",
                "name": "⚡ 反应测试",
                "short": "反应测试",
                "how": "测试你的反应速度！三种模式：<b>简单</b>（等绿色点击）、<b>选择</b>（看准颜色点击）、<b>连击</b>（10秒内尽可能多点）。<br>统计最佳/平均/最近反应时间，可视化历史记录条。"
        },
        {
                "id": "017-typing",
                "name": "⌨️ 打字游戏",
                "short": "打字",
                "how": "单词从天而降，在它们落地前输入正确单词消除！<br>输入后按空格提交，WPM 实时统计。<br>速度随得分递增，5条命用完即结束。"
        },
        {
                "id": "018-maze",
                "name": "🏛️ 迷宫探索",
                "short": "迷宫",
                "how": "DFS 算法生成随机迷宫，从🟢走到🔴出口。<br>方向键/WASD 移动，三步难度：15×15 / 21×21 / 31×31。<br>可选迷雾模式（仅显示周围3格）。"
        },
        {
                "id": "019-whack",
                "name": "🔨 打地鼠",
                "short": "打地鼠",
                "how": "经典打地鼠！30秒内尽可能多地击中冒出的地鼠。<br>金色⭐地鼠值3分，普通🐹地鼠值1分。<br>连击不中断可保持 combo 加成。"
        },
        {
                "id": "020-match3",
                "name": "💎 消消乐",
                "short": "消消乐",
                "how": "经典三消游戏！点击两个相邻宝石交换位置。<br>三个或以上相同宝石连成一线即消除，<br>消除后上方宝石下落填充，可能触发连续消除。"
        },
        {
                "id": "021-draw",
                "name": "🎨 涂鸦画板",
                "short": "涂鸦画板",
                "how": "自由涂鸦绘画！8种颜色、3种画笔粗细、橡皮擦模式。<br><b>桌面</b>：鼠标拖拽绘画<br><b>手机</b>：手指触摸绘画<br>可保存画作为 PNG 图片下载。"
        },
        {
                "id": "022-basketball",
                "name": "🏀 投篮高手",
                "short": "投篮高手",
                "how": "45秒限时投篮挑战！按住鼠标/手指蓄力，松开投篮。<br>篮筐左右移动，空心入网额外加分。<br><b>桌面</b>：鼠标按住蓄力<br><b>手机</b>：手指按住蓄力"
        },
        {
                "id": "023-lightsout",
                "name": "💡 关灯谜题",
                "short": "关灯谜题",
                "how": "点击格子翻转自身和上下左右相邻格子的亮灭状态。<br>目标是让所有格子都熄灭！三种难度。<br><b>3×3</b> 入门 | <b>5×5</b> 进阶 | <b>7×7</b> 挑战<br>支持撤销操作，记录每关最佳步数。"
        },
        {
                "id": "024-math",
                "name": "🧮 口算大挑战",
                "short": "口算挑战",
                "how": "限时心算答题！加减乘混合，每题10秒。<br>输入答案按回车提交，答对越快得分越高。<br>连击加倍得分，3次答错游戏结束。<br>挑战你的心算速度和准确度！"
        },
        {
                "id": "025-runner",
                "name": "🏃 跑酷",
                "short": "跑酷",
                "how": "横向卷轴跑酷！躲避障碍物跑得更远。<br>支持二段跳，速度随距离递增。<br><b>桌面</b>：空格/↑/W 跳跃 | P 暂停<br><b>手机</b>：点击屏幕跳跃"
        },
        {
                "id": "026-fishing",
                "name": "🎣 钓鱼大师",
                "short": "钓鱼大师",
                "how": "60秒限时钓鱼！点击水面选择位置扔竿。<br>鱼漂下沉时看准时机点击收线！<br>5种鱼类（小鱼→鲸鱼），越稀有分越高。<br>空心出钩可获得双倍加分。"
        },
        {
                "id": "027-bubble",
                "name": "🔫 泡泡射击",
                "short": "泡泡射击",
                "how": "经典泡泡龙玩法！移动鼠标/手指瞄准，点击发射。<br>3个同色泡泡相连即消除，悬浮泡泡自动掉落。<br><b>桌面</b>：鼠标移动瞄准 | 点击发射<br><b>手机</b>：手指滑动瞄准 | 点击发射"
        },
        {
                "id": "028-darts",
                "name": "🎯 飞镖",
                "short": "飞镖",
                "how": "10回合飞镖挑战！移动鼠标/手指瞄准靶心。<br>离靶心越远抖动越大，命中靶心得50分！<br>包含双倍区和三倍区，策略与运气并存。<br><b>桌面</b>：鼠标移动瞄准 | 点击投掷<br><b>手机</b>：手指移动瞄准 | 点击投掷"
        },
        {
                "id": "029-link",
                "name": "🧲 连连看",
                "short": "连连看",
                "how": "经典连连看！点击两个相同图标消除。<br>连接路径最多允许拐2个弯（0/1/2折连接）。<br>支持提示和洗牌功能，全部消除即通关。<br>24种可爱emoji图标，6×8棋盘。"
        },
        {
                "id": "030-balance",
                "name": "🎪 平衡球",
                "short": "平衡球",
                "how": "倾斜平台让球滚到绿色洞口！<br>避开黑色陷阱洞和墙壁障碍。<br><b>桌面</b>：方向键/WASD 倾斜平台<br><b>手机</b>：手指滑动倾斜平台<br>5个精心设计的关卡，记录死亡次数和用时。"
        },
        {
                "id": "031-piano",
                "name": "🎹 钢琴块",
                "short": "钢琴块",
                "how": "别踩白块！4列方块向下滚动，点击黑色方块得分。<br>错过黑块或误点白块游戏立即结束。<br>速度随得分递增，挑战你的反应极限！<br><b>桌面</b>：鼠标点击黑色方块<br><b>手机</b>：手指点击黑色方块"
        },
        {
                "id": "032-puzzle",
                "name": "🧩 拼图",
                "short": "拼图",
                "how": "经典数字华容道！点击与空格相邻的方块滑动。<br>将所有数字按顺序排列即完成。<br>三种尺寸：3×3 / 4×4 / 5×5。<br>统计步数和用时，最佳记录本地保存。"
        },
        {
                "id": "033-rain",
                "name": "🌧️ 躲雨",
                "short": "躲雨",
                "how": "控制撑伞小人躲避天上掉落的雨滴！<br>存活时间越长得分越高，雨速逐渐加快。<br><b>桌面</b>：←→/AD 移动 | P 暂停<br><b>手机</b>：手指滑动控制位置"
        },
        {
                "id": "034-pool",
                "name": "🎱 台球",
                "short": "台球",
                "how": "简易台球！从白球位置拖拽瞄准，松开击球。<br>将15颗彩球打进6个袋口得分。<br>白球进袋扣20分并重置位置。<br><b>桌面</b>：鼠标拖拽瞄准<br><b>手机</b>：手指拖拽瞄准"
        },
        {
                "id": "035-heli",
                "name": "🚁 直升机",
                "short": "直升机",
                "how": "经典洞穴飞行！按住屏幕/空格上升，松开下降。<br>穿过洞穴缝隙飞得更远，撞墙或天花板即坠毁。<br><b>桌面</b>：按住空格键上升<br><b>手机</b>：按住屏幕上升"
        }
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
        html += '<span class="hnav-disabled"><span class="hnav-full">下一个 ▶</span><span class="hnav-short">◀</span></span>';
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
