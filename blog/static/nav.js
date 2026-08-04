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
        },
        {
                "id": "036-bowling",
                "name": "🎳 保龄球",
                "short": "保龄球",
                "how": "经典保龄球！10回合制，每回合2次投球机会。<br>点击左右移动球，按住蓄力松手投球。<br>三角形排列的球瓶，连锁撞倒得分。<br><b>桌面</b>：鼠标移动 + 按住蓄力<br><b>手机</b>：触摸移动 + 按住蓄力"
        },
        {
                "id": "037-word",
                "name": "🔤 单词拼写",
                "short": "单词拼写",
                "how": "60秒限时单词拼写挑战！看中文提示拼出英文单词。<br>点击乱序字母排列，或直接键盘输入单词。<br>连击加倍得分，答对增加时间奖励。<br>60个常用英语单词，含水果/动物/自然等分类。"
        },
        {
                "id": "038-ring",
                "name": "🎪 套圈",
                "short": "套圈",
                "how": "经典套圈游戏！10个圈投掷套桩得分。<br>从底部拖拽瞄准，松手抛出套圈。<br>三排桩不同分值（50/30/20/15/10），越远越高。<br><b>桌面</b>：鼠标拖拽瞄准<br><b>手机</b>：手指拖拽瞄准"
        },
        {
                "id": "039-slingshot",
                "name": "🏹 弹弓",
                "short": "弹弓",
                "how": "弹弓射击游戏！从弹弓皮兜拖拽瞄准，松开发射。<br>击中9个靶子得分，越远分值越高。<br>8发弹药，策略选择目标获取最高分。<br><b>桌面</b>：鼠标拖拽瞄准<br><b>手机</b>：手指拖拽瞄准"
        },
        {
                "id": "040-wheel",
                "name": "🎡 幸运转盘",
                "short": "幸运转盘",
                "how": "幸运转盘抽奖！每次花费10金币转动转盘。<br>8个区域包含金币奖励（500/200/100/50/20）和炸弹。<br>炸弹区域无奖励，金币耗尽游戏结束。<br>初始100金币，看看你能赢多少！"
        },
        {
                "id": "041-gold-miner",
                "name": "🪙 黄金矿工",
                "short": "黄金矿工",
                "how": "经典黄金矿工！摆动钩子，看准时机放钩抓取金矿。<br>大金块重拉得慢但价值高，钻石轻快最值钱。<br>每关限时，抓完所有矿进入下一关，速度递增。<br><b>桌面</b>：点击/空格放钩<br><b>手机</b>：点击屏幕放钩"
        },
        {
                "id": "042-shooter",
                "name": "✈️ 飞机大战",
                "short": "飞机大战",
                "how": "竖版卷轴射击！鼠标/触摸移动飞机，自动射击。<br>3种武器等级升级，收集道具获得散弹/速射/护盾。<br>每500分出现Boss，击败获得武器升级。<br><b>桌面</b>：鼠标移动<br><b>手机</b>：手指滑动"
        },
        {
                "id": "043-racing",
                "name": "🏎️ 极速飞车",
                "short": "极速飞车",
                "how": "三车道极速躲避！切换车道躲避来往车辆。<br>收集金币获得加分，速度随距离不断递增。<br>擦边超越车辆获额外加分，撞车游戏结束。<br><b>桌面</b>：←→/AD 切换车道<br><b>手机</b>：左右滑动切换"
        },
        {
                "id": "044-tanks",
                "name": "🔫 坦克大战",
                "short": "坦克大战",
                "how": "双人同屏坦克对战！各自操控坦克移动和射击。<br>子弹遇墙反弹3次，拾取速度/速射/多重道具。<br>先击杀对方5次获胜。<br><b>P1</b>：WASD移动/Q射击<br><b>P2</b>：方向键移动/M射击"
        },
        {
                "id": "045-stack",
                "name": "📚 叠塔高手",
                "short": "叠塔高手",
                "how": "精准叠塔游戏！方块左右移动，点击停止放置。<br>与下层对齐越完美方块越大，偏差部分被切掉。<br>完美对齐触发连击加分，方块越来越小直到失败。<br><b>桌面</b>：点击/空格放置<br><b>手机</b>：点击屏幕放置"
        },
        {
                "id": "046-catch",
                "name": "🧺 接水果",
                "short": "接水果",
                "how": "用篮子接住掉落的水果！移动篮子收集各种水果。<br>水果分值不同（🍎10 🍊15 🍇20 🍉25 💰50）。<br>⭐加命 💣炸弹扣命，3条命用完游戏结束。<br><b>桌面</b>：鼠标移动<br><b>手机</b>：手指滑动"
        },
        {
                "id": "047-lander",
                "name": "🚀 火箭着陆",
                "short": "火箭着陆",
                "how": "月面软着陆挑战！控制火箭推力平稳降落在绿色平台。<br>按住空格/点击启动推进器消耗燃料减速。<br>垂直速度<1.5才能安全着陆，<0.5完美着陆！<br><b>桌面</b>：←→/AD左右移动｜空格推进<br><b>手机</b>：按住屏幕推进"
        },
        {
                "id": "048-airhockey",
                "name": "🏒 冰球对战",
                "short": "冰球对战",
                "how": "双人桌面冰球对战！各自控制球拍击打球。<br>把球打进对方球门得分，先得7分获胜。<br>物理碰撞反弹，球有惯性摩擦减速。<br><b>P1</b>：WASD移动<br><b>P2</b>：方向键移动"
        },
        {
                "id": "049-blob",
                "name": "🟢 球球大作战",
                "short": "球球大作战",
                "how": "io风格生存竞技！移动你的球吃食物变大。<br>可以吞噬比自己小的球，被比自己大的碰到则死亡。<br>越大约移动越慢，1200×900大地图探索。<br><b>桌面</b>：鼠标移动<br><b>手机</b>：手指滑动"
        },
        {
                "id": "050-snakeduel",
                "name": "🐍 贪吃蛇对决",
                "short": "贪吃蛇对决",
                "how": "双人贪吃蛇对决！各自操控蛇吃食物变长。<br>撞墙、撞自己或撞对方蛇身即死亡。<br>头对头碰撞双方同时死亡。<br>先赢3局者获胜！<br><b>P1</b>：WASD移动<br><b>P2</b>：方向键移动"
        },
        {
                "id": "051-jump",
                "name": "🦘 跳一跳",
                "short": "跳一跳",
                "how": "蓄力跳跃平台游戏！按住屏幕蓄力，松开跳到下一个平台。<br>落在平台中心得2分+连击，落偏得1分，掉落游戏结束。<br>连击3次以上显示🔥特效。<br><b>桌面</b>：点击/按住蓄力<br><b>手机</b>：触摸按住蓄力"
        },
        {
                "id": "052-down100",
                "name": "👟 下100层",
                "short": "下100层",
                "how": "无尽下落平台游戏！控制角色踩踏平台向下掉落。<br>蓝色平台=弹跳、红色平台=踩一次即碎、金色=加速。<br>掉出屏幕底部游戏结束。<br><b>桌面</b>：←→/AD 移动<br><b>手机</b>：触摸左右半屏移动"
        },
        {
                "id": "053-rhythm",
                "name": "🎵 节奏大师",
                "short": "节奏大师",
                "how": "4轨道节奏音乐游戏！音符下落，在判定线按下对应按键。<br>距离判定线越近得分越高：Perfect+30、Great+20、Good+10、Miss断连击。<br>10连击以上火力全开！<br><b>桌面</b>：D/F/J/K 键<br><b>手机</b>：点击下方轨道按钮"
        },
        {
                "id": "054-pinpull",
                "name": "🧷 抽针解谜",
                "short": "抽针解谜",
                "how": "逻辑解谜游戏！按正确顺序拔出安全针，让球落入目标区域。<br>绿色针=安全可拔，红色针=危险拔出即失败。<br>5个精心设计的关卡，难度递增。<br><b>操作</b>：点击针拔出"
        },
        {
                "id": "055-papertoss",
                "name": "🎯 纸上投篮",
                "short": "纸上投篮",
                "how": "办公室投篮模拟！从纸团拖拽瞄准垃圾桶，松开发射。<br>风力影响轨迹（微风/中风/大风），10次投篮挑战。<br>连续命中有额外加分。<br><b>桌面</b>：鼠标拖拽瞄准<br><b>手机</b>：手指拖拽瞄准"
        },
        {
                "id": "056-archery",
                "name": "🏹 射箭大师",
                "short": "射箭大师",
                "how": "靶场射箭挑战！拖拽弓弦瞄准旋转靶心，松开发射。<br>靶心共6环，命中中心10分，10支箭挑战最高分。<br>靶心持续旋转增加难度。<br><b>桌面</b>：鼠标拖拽弓弦<br><b>手机</b>：手指拖拽弓弦"
        },
        {
                "id": "057-bike",
                "name": "🚲 平衡单车",
                "short": "平衡单车",
                "how": "平衡自行车骑行挑战！保持车身平衡不被摔倒。<br>收集散落的金币，避开石头和坑洞。<br>倾斜角度过大会摔倒，速度随距离递增。<br><b>桌面</b>：←→/AD 保持平衡<br><b>手机</b>：触摸左右半屏控制"
        },
        {
                "id": "058-surf",
                "name": "🌊 冲浪达人",
                "short": "冲浪达人",
                "how": "海洋冲浪冒险！在波浪间移动冲浪板，避开礁石。<br>按上键跳跃做特技，在浪尖翻转得分。<br>波浪动态起伏，礁石随机分布。<br><b>桌面</b>：←→/AD 移动 | ↑/W 跳跃<br><b>手机</b>：触摸左右+上方跳跃"
        },
        {
                "id": "059-tightrope",
                "name": "⚖️ 走钢丝",
                "short": "走钢丝",
                "how": "高空走钢丝挑战！用平衡杆保持身体平衡。<br>风力随机变化影响平衡，收集沿途金币。<br>走完全程到达终点获得额外加分。<br><b>桌面</b>：←→/AD 保持平衡<br><b>手机</b>：触摸左右半屏控制"
        },
        {
                "id": "060-magnet",
                "name": "🧲 磁力迷宫",
                "short": "磁力迷宫",
                "how": "磁力物理迷宫！点击放置磁铁引导小球到达目标。<br>S极=吸引小球，N极=推开小球。<br>5个精心设计的迷宫关卡。<br><b>桌面</b>：点击放置磁铁 | 右键/空格切换磁极<br><b>手机</b>：触摸放置磁铁"
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
