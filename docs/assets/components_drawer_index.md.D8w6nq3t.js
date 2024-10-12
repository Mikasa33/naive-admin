import{_ as t,M as n,aw as i,a6 as h,a3 as l,L as e}from"./chunks/framework.BzEVrRrt.js";const D=JSON.parse('{"title":"抽屉 Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md","lastUpdated":1728472647000}'),k={name:"components/drawer/index.md"};function p(r,s,d,o,g,y){const a=l("DrawerBasic");return e(),n("div",null,[s[0]||(s[0]=i('<h1 id="抽屉-drawer" tabindex="-1">抽屉 Drawer <a class="header-anchor" href="#抽屉-drawer" aria-label="Permalink to &quot;抽屉 Drawer&quot;">​</a></h1><p>我感觉和 Modal 功能差不太多，位置有点差别。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><p>基础抽屉用法。</p>',5)),h(a),s[1]||(s[1]=i(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> setup</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> lang</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">ts</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> type</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> DrawerProps</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@a4v/components</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> ADrawer</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@a4v/components</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">naive-ui</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> ref</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">vue</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">const </span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">show</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#80A665;--shiki-light:#59873A;"> ref</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">(</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">false</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">const </span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">drawerProps</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#5DA994;--shiki-light:#2E8F82;">DrawerProps</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">  title</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">标题信息</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> @click</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">show = true</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">    打开抽屉</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NButton</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">ADrawer</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> v-bind</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">drawerProps</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> v-model:show</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">show</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#DBD7CAEE;--shiki-light:#393A34;">    123</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">ADrawer</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="drawer-props" tabindex="-1">Drawer Props <a class="header-anchor" href="#drawer-props" aria-label="Permalink to &quot;Drawer Props&quot;">​</a></h3><p>支持 <a href="https://www.naiveui.com/zh-CN/light/components/drawer#Drawer-Props" target="_blank" rel="noreferrer">NDrawer</a> 和 <a href="https://www.naiveui.com/zh-CN/light/components/card#Card-Props" target="_blank" rel="noreferrer">NCard</a> 所有属性。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>auto-focus</td><td>是否自动聚焦 Drawer 第一个可聚焦的元素</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>是否显示卡片边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>fullscreenable</td><td>是否允许全屏</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>width</td><td>抽屉的宽度，在位置是 <code>left</code> 和 <code>right</code> 时生效</td><td><code>number | string</code></td><td><code>300</code></td></tr></tbody></table>`,5))])}const B=t(k,[["render",p]]);export{D as __pageData,B as default};
