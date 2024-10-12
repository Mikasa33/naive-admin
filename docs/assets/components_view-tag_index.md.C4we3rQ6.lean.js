import{_ as t,M as n,aw as i,a6 as h,a3 as l,L as k}from"./chunks/framework.CzXSTpVB.js";const D=JSON.parse('{"title":"展示标签 View Tag","description":"","frontmatter":{},"headers":[],"relativePath":"components/view-tag/index.md","filePath":"components/view-tag/index.md","lastUpdated":1728472647000}'),e={name:"components/view-tag/index.md"};function p(d,s,r,g,o,y){const a=l("ViewTagBasic");return k(),n("div",null,[s[0]||(s[0]=i('<h1 id="展示标签-view-tag" tabindex="-1">展示标签 View Tag <a class="header-anchor" href="#展示标签-view-tag" aria-label="Permalink to &quot;展示标签 View Tag&quot;">​</a></h1><p>一个格式化并展示标签的小组件。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><p>格式化并展示标签。</p>',5)),h(a),s[1]||(s[1]=i(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> lang</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">ts</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> setup</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> AViewTag</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@a4v/components</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">naive-ui</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">const </span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">male</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#CB7676;--shiki-light:#AB5959;">const </span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;">options</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> [</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  { </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">label</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">男 male</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">, </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">value</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">male</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> },</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  { </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">label</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">女 female</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">, </span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">value</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">: </span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">female</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> },</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">]</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">AViewTag</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> :value</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> :options</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> round</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> type</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">=</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">success</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    &lt;</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">AViewTag</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> :value</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  &lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">NFlex</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">template</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="viewtag-props" tabindex="-1">ViewTag Props <a class="header-anchor" href="#viewtag-props" aria-label="Permalink to &quot;ViewTag Props&quot;">​</a></h3><p>支持 <a href="https://www.naiveui.com/zh-CN/light/components/tag#Tag-Props" target="_blank" rel="noreferrer">NTag</a> 所有属性。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>选项，不配置则显示 <code>value</code></td><td><code>NSelectOption</code></td><td><code>[]</code></td></tr><tr><td>value</td><td>标签值</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,5))])}const B=t(e,[["render",p]]);export{D as __pageData,B as default};