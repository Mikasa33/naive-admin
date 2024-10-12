import{_ as i,M as a,aw as t,L as e}from"./chunks/framework.CzXSTpVB.js";const c=JSON.parse('{"title":"基础概念","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/concept.md","filePath":"guide/essentials/concept.md","lastUpdated":1728628671000}'),n={name:"guide/essentials/concept.md"};function h(p,s,l,k,d,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h1><p>请务必先阅读这一部分，以便于你更好的理解整个文档。</p><h2 id="大仓" tabindex="-1">大仓 <a class="header-anchor" href="#大仓" aria-label="Permalink to &quot;大仓&quot;">​</a></h2><p>大仓指的是整个项目的仓库，包含了所有的代码、包、应用、规范、文档、配置等，也就是一整个 <code>Monorepo</code> 目录的所有内容。</p><h2 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h2><p>应用指的是一个完整的项目，一个项目可以包含多个应用，这些项目可以复用大仓内的代码、包、规范等。应用都被放置在 <code>apps</code> 目录下。每个应用都是独立的，可以单独运行、构建、测试、部署，可以引入不同的组件库等等。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>应用不限于前端应用，也可以是后端应用、移动端应用等，例如 <code>apps/mock</code>就是一个后端服务。</p></div><h2 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h2><p>包指的是一个独立的模块，可以是一个组件、一个工具、一个库等。包可以被多个应用引用，也可以被其他包引用。包都被放置在 <code>packages</code> 目录下。</p><p>对于这些包，你可以把它看作是一个独立的 <code>npm</code> 包，使用方式与 <code>npm</code> 包一样。</p><h3 id="包引入" tabindex="-1">包引入 <a class="header-anchor" href="#包引入" aria-label="Permalink to &quot;包引入&quot;">​</a></h3><p>在 <code>package.json</code> 中引入包：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">{</span></span>
<span class="line"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">  &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">dependencies</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line highlighted"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">@a4v/utils</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">workspace:*</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span></code></pre></div><h3 id="包使用" tabindex="-1">包使用 <a class="header-anchor" href="#包使用" aria-label="Permalink to &quot;包使用&quot;">​</a></h3><p>在代码中引入包：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#BD976A;--shiki-light:#B07D48;"> renderIcon</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#4D9375;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">@a4v/utils</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&#39;</span></span></code></pre></div><h2 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h2><p>在项目中，你可以看到一些 <code>#</code> 开头的路径，例如： <code>#/api</code>、<code>#/views</code>, 这些路径都是别名，用于快速定位到某个目录。它不是通过 <code>vite</code> 的 <code>alias</code> 实现的，而是通过 <code>Node.js</code> 本身的 <a href="https://nodejs.org/api/packages.html#subpath-imports" target="_blank" rel="noreferrer">subpath imports</a> 原理。只需要在 <code>package.json</code> 中配置 <code>imports</code> 字段即可。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">{</span></span>
<span class="line"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">  &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">imports</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line highlighted"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">#/*</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">./src/*</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span></code></pre></div><p>为了 IDE 能够识别这些别名，我们还需要在 <code>tsconfig.json</code> 内配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-dark vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">{</span></span>
<span class="line"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">  &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">compilerOptions</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">baseUrl</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">.</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">paths</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> {</span></span>
<span class="line highlighted"><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">      &quot;</span><span style="--shiki-dark:#B8A965;--shiki-light:#998418;">#/*</span><span style="--shiki-dark:#B8A96577;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">:</span><span style="--shiki-dark:#666666;--shiki-light:#999999;"> [</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#C98A7D;--shiki-light:#B56959;">src/*</span><span style="--shiki-dark:#C98A7D77;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#666666;--shiki-light:#999999;">]</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">    }</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#666666;--shiki-light:#999999;">}</span></span></code></pre></div><p>这样，你就可以在代码中使用别名了。</p>`,22)]))}const g=i(n,[["render",h]]);export{c as __pageData,g as default};