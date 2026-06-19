/**
 * 页面提示工具 - 使用原生 JavaScript 实现
 * 生成访问提示、关键词徽章和说明信息
 */
(function() {
    'use strict';

    // ===== 配置数据 =====
    var CONFIG = {
        siteUrl: 'https://web-app-i-game.com.cn',
        keyword: '爱游戏',
        seed: 'e511cd0202f17873'
    };

    // ===== 工具函数 =====
    function createElement(tag, className, innerHTML) {
        var el = document.createElement(tag);
        if (className) {
            el.className = className;
        }
        if (innerHTML) {
            el.innerHTML = innerHTML;
        }
        return el;
    }

    // ===== 提示卡片生成 =====
    function buildTipCard() {
        var card = createElement('div', 'tip-card');
        var header = createElement('div', 'tip-card-header', '💡 访问提示');
        var body = createElement('div', 'tip-card-body');
        
        var lines = [
            '欢迎来到 ' + CONFIG.siteUrl,
            '本站专注于' + CONFIG.keyword + '相关内容',
            '使用现代浏览器可获得最佳体验'
        ];
        
        var list = document.createElement('ul');
        lines.forEach(function(text) {
            var item = document.createElement('li');
            item.textContent = text;
            list.appendChild(item);
        });
        
        body.appendChild(list);
        card.appendChild(header);
        card.appendChild(body);
        return card;
    }

    // ===== 关键词徽章 =====
    function buildBadge(text) {
        var badge = createElement('span', 'badge', text);
        badge.setAttribute('data-badge-type', 'keyword');
        return badge;
    }

    function buildBadgeGroup() {
        var group = createElement('div', 'badge-group');
        var keywords = [CONFIG.keyword, '游戏', '娱乐', '互动', '探索'];
        keywords.forEach(function(kw) {
            group.appendChild(buildBadge(kw));
        });
        return group;
    }

    // ===== 访问说明 =====
    function buildAccessInfo() {
        var wrapper = createElement('div', 'access-info');
        var title = createElement('h3', 'access-info-title', '📋 使用说明');
        var content = createElement('div', 'access-info-content');
        
        var steps = [
            '1. 确认网络连接正常',
            '2. 直接打开浏览器访问 ' + CONFIG.siteUrl,
            '3. 在页面中寻找' + CONFIG.keyword + '相关内容',
            '4. 点击交互元素获取更多信息'
        ];
        
        var stepList = document.createElement('ol');
        steps.forEach(function(step) {
            var li = document.createElement('li');
            li.textContent = step;
            stepList.appendChild(li);
        });
        
        content.appendChild(stepList);
        wrapper.appendChild(title);
        wrapper.appendChild(content);
        return wrapper;
    }

    // ===== 注入样式 =====
    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = 
            '.tip-card {' +
            '  border: 1px solid #ddd;' +
            '  border-radius: 8px;' +
            '  padding: 16px;' +
            '  margin: 12px 0;' +
            '  background: #f9f9f9;' +
            '  font-family: sans-serif;' +
            '}' +
            '.tip-card-header {' +
            '  font-size: 1.1em;' +
            '  font-weight: bold;' +
            '  margin-bottom: 8px;' +
            '  color: #333;' +
            '}' +
            '.tip-card-body ul {' +
            '  margin: 0;' +
            '  padding-left: 20px;' +
            '  list-style: disc;' +
            '}' +
            '.tip-card-body li {' +
            '  margin: 4px 0;' +
            '  line-height: 1.5;' +
            '  color: #555;' +
            '}' +
            '.badge-group {' +
            '  display: flex;' +
            '  flex-wrap: wrap;' +
            '  gap: 8px;' +
            '  padding: 12px 0;' +
            '}' +
            '.badge {' +
            '  display: inline-block;' +
            '  padding: 4px 12px;' +
            '  border-radius: 12px;' +
            '  background: #007bff;' +
            '  color: #fff;' +
            '  font-size: 0.85em;' +
            '  font-weight: 500;' +
            '}' +
            '.access-info {' +
            '  border-left: 4px solid #28a745;' +
            '  padding-left: 16px;' +
            '  margin: 16px 0;' +
            '}' +
            '.access-info-title {' +
            '  margin: 0 0 8px 0;' +
            '  color: #333;' +
            '}' +
            '.access-info-content ol {' +
            '  margin: 0;' +
            '  padding-left: 20px;' +
            '}' +
            '.access-info-content li {' +
            '  margin: 4px 0;' +
            '  line-height: 1.5;' +
            '  color: #555;' +
            '}';
        document.head.appendChild(style);
    }

    // ===== 初始化 =====
    function init() {
        injectStyles();
        
        // 创建容器
        var container = createElement('div', 'site-helper-container');
        
        // 组装内容
        container.appendChild(buildTipCard());
        container.appendChild(buildBadgeGroup());
        container.appendChild(buildAccessInfo());
        
        // 追加到 body
        var target = document.body;
        if (target) {
            target.appendChild(container);
        } else {
            window.addEventListener('DOMContentLoaded', function() {
                document.body.appendChild(container);
            });
        }
    }

    // 启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();