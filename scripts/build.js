/**
 * 游戏博客自动构建脚本
 *
 * 从 games/manifest.json 读取游戏元数据，自动生成：
 *   1. blog/static/nav.js           — 共享导航栏
 *   2. blog/content/games/_index.md — 游戏列表页
 *   3. blog/content/games/NNN-name.md — 每个游戏的博客文章
 *   4. blog/static/play/NNN-name/   — 同步游戏 HTML 文件
 *
 * 用法: node scripts/build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'games', 'manifest.json');
const GAMES_DIR = path.join(ROOT, 'games');
const BLOG_STATIC = path.join(ROOT, 'blog', 'static');
const BLOG_CONTENT = path.join(ROOT, 'blog', 'content', 'games');

// ─── 读取清单 ───────────────────────────────────────────
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
const games = manifest.games;

console.log(`📋 读取清单: ${games.length} 个游戏`);

// ─── 1. 生成 nav.js ─────────────────────────────────────
function buildNavJs() {
  const gamesJson = JSON.stringify(games.map(g => ({
    id: g.id,
    name: g.name,
    short: g.short,
    how: g.how,
  })), null, 8);

  const navJs = `// ⚠️ 此文件由 scripts/build.js 自动生成，请勿手动编辑
// 修改游戏数据请编辑 games/manifest.json，然后运行 node scripts/build.js
// 共享导航栏 - 所有游戏页面引用此脚本
// 在页面底部自动注入玩法说明 + 首页/上下翻页导航

(function() {
    // 游戏列表（从 manifest.json 自动生成）
    var games = ${gamesJson};

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
`;

  const dest = path.join(BLOG_STATIC, 'nav.js');
  fs.writeFileSync(dest, navJs, 'utf-8');
  console.log('✅ nav.js 已生成');
}

// ─── 2. 生成 _index.md ──────────────────────────────────
function buildIndex() {
  // 将游戏分成3列，计算每列数量
  const COLS = 3;
  const perCol = Math.ceil(games.length / COLS);
  const cols = [[], [], []];
  games.forEach((g, i) => {
    const num = g.id.split('-')[0];
    cols[Math.floor(i / perCol)].push(
      `<a href="/joy-game-study/play/${g.id}/" style="color:#ccc;text-decoration:none;line-height:2.1;">${num} ${g.name}</a><br>`
    );
  });

  const lines = [
    '---',
    'title: "游戏列表"',
    'description: "所有已开发的小游戏"',
    'menu: main',
    '---',
    '',
    '## 🎮 已完成游戏',
    '',
    '<table style="width:100%;border:none;font-size:0.92em;"><tr style="vertical-align:top;">',
  ];

  for (const col of cols) {
    lines.push('<td style="border:none;padding:0 6px 0 0;width:33.3%;">');
    for (const item of col) {
      lines.push(item);
    }
    lines.push('</td>');
  }

  lines.push('</tr></table>');
  lines.push('');
  lines.push(`> 进度：${games.length} / 100 🎉`);

  const dest = path.join(BLOG_CONTENT, '_index.md');
  fs.writeFileSync(dest, lines.join('\n') + '\n', 'utf-8');
  console.log('✅ _index.md 已生成');
}

// ─── 3. 生成各游戏博客文章 ─────────────────────────────
function buildGamePosts() {
  let count = 0;
  for (const g of games) {
    const num = g.id.split('-')[0];
    const slug = g.id.substring(g.id.indexOf('-') + 1);

    const content = [
      '---',
      `title: "${num} - ${g.short}"`,
      'date: 2026-07-31',
      'draft: false',
      '---',
      '',
      `## ${g.name} — ${g.desc.split('。')[0]}`,
      '',
      '### 操作方式',
      '',
      ...g.how.split('<br>').map(s => {
        const cleaned = s.replace(/<[^>]+>/g, '');
        return cleaned.trim() ? `- ${cleaned.trim()}` : null;
      }).filter(Boolean),
      '',
      `> 🎮 [点击试玩](/joy-game-study/play/${g.id}/)`,
    ].join('\n') + '\n';

    const dest = path.join(BLOG_CONTENT, `${g.id}.md`);
    fs.writeFileSync(dest, content, 'utf-8');
    count++;
  }
  console.log(`✅ ${count} 个游戏博客文章已生成`);
}

// ─── 4. 同步游戏 HTML 到 static/play/ ──────────────────
function syncGameFiles() {
  let count = 0;
  for (const g of games) {
    const src = path.join(GAMES_DIR, g.id, 'index.html');
    const destDir = path.join(BLOG_STATIC, 'play', g.id);
    const dest = path.join(destDir, 'index.html');

    if (!fs.existsSync(src)) {
      console.warn(`⚠️  跳过 ${g.id}: 源文件不存在 (${src})`);
      continue;
    }

    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dest);
    count++;
  }
  console.log(`✅ ${count} 个游戏文件已同步到 static/play/`);
}

// ─── 主流程 ─────────────────────────────────────────────
console.log('🔧 开始构建...\n');

buildNavJs();
buildIndex();
buildGamePosts();
syncGameFiles();

console.log(`\n🎉 构建完成！${games.length} 个游戏已处理。`);
