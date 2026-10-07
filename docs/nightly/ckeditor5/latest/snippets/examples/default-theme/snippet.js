import{Plugin as E,Command as W,ClassicEditor as $,CloudServices as X,PictureEditing as J,CKBox as Y,CKBoxImageEdit as Z,ImageUpload as ee,FindAndReplace as te,CodeBlock as oe}from"ckeditor5";var c="https://api.ckbox.io/token/demo";import{Plugin as S}from"@ckeditor/ckeditor5-core";import{Essentials as I}from"@ckeditor/ckeditor5-essentials";import{Autoformat as L}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as C}from"@ckeditor/ckeditor5-block-quote";import{Bold as w,Italic as _}from"@ckeditor/ckeditor5-basic-styles";import{Heading as B}from"@ckeditor/ckeditor5-heading";import{Image as P,ImageCaption as M,ImageStyle as O,ImageToolbar as A}from"@ckeditor/ckeditor5-image";import{Indent as R}from"@ckeditor/ckeditor5-indent";import{Link as N}from"@ckeditor/ckeditor5-link";import{List as U}from"@ckeditor/ckeditor5-list";import{MediaEmbed as F}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as K}from"@ckeditor/ckeditor5-paragraph";import{Table as Q,TableToolbar as D}from"@ckeditor/ckeditor5-table";var l=class extends S{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[I,L,C,w,B,P,M,O,A,R,_,N,U,F,K,Q,D]}};function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function m(e,t){customElements.get(e)||customElements.define(e,t)}function u(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function s(e,t){return Object.assign(document.createElement(e),t)}function x(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function p(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var g=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=u().then(()=>H(this.shadowRoot,t))}};m("snippet-shadow-root",g);async function H(e,t){let o=q(t),a=s("style",{textContent:":host { display: block; }"}),r=Array.from(document.styleSheets).filter(V).map(z);e.prepend(a,...r),await Promise.all(r.map(async n=>{await x(n),y(n.sheet,o)}))}function q(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function V(e){return e.ownerNode instanceof HTMLElement&&p(e).length>0}function z(e){let t=e.href?s("link",{rel:"stylesheet",href:e.href}):s("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function y(e,t){let o=p(e);for(let a=o.length-1;a>=0;a--){let r=o[a];r instanceof CSSImportRule&&r.layerName===null?y(r.styleSheet,t):j(r,t)||e.deleteRule(a)}}function j(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as we,Essentials as _e,Autoformat as Be,BlockToolbar as Pe,Bold as Me,Italic as Oe,BlockQuote as Ae,CKBox as Re,Heading as Ne,Image as Ue,ImageCaption as Fe,ImageStyle as Ke,ImageToolbar as Qe,ImageUpload as De,PictureEditing as He,Indent as qe,IndentBlock as Ve,Link as ze,List as je,MediaEmbed as Ge,Paragraph as We,PasteFromOffice as $e,Table as Xe,TableToolbar as Je,TextTransformation as Ye,CloudServices as Ze}from"ckeditor5";import{BalloonEditor as at,Essentials as rt,Autoformat as it,Bold as nt,Italic as lt,BlockQuote as st,CKBox as ct,Heading as dt,Image as mt,ImageCaption as ut,ImageStyle as pt,ImageToolbar as gt,ImageUpload as ft,PictureEditing as bt,Indent as ht,IndentBlock as kt,Link as xt,List as yt,MediaEmbed as Tt,Paragraph as Et,PasteFromOffice as vt,Table as St,TableToolbar as It,TextTransformation as Lt,CloudServices as Ct}from"ckeditor5";import{ClassicEditor as Pt,Essentials as Mt,Autoformat as Ot,Bold as At,Italic as Rt,BlockQuote as Nt,CKBox as Ut,Heading as Ft,Image as Kt,ImageCaption as Qt,ImageStyle as Dt,ImageToolbar as Ht,ImageUpload as qt,PictureEditing as Vt,Indent as zt,IndentBlock as jt,Link as Gt,List as Wt,MediaEmbed as $t,Paragraph as Xt,PasteFromOffice as Jt,Table as Yt,TableToolbar as Zt,TextTransformation as eo,CloudServices as to,AutoImage as oo,ImageInsert as ao,Bookmark as ro}from"ckeditor5";import{DecoupledEditor as so,Essentials as co,Alignment as mo,FontSize as uo,FontFamily as po,FontColor as go,FontBackgroundColor as fo,Autoformat as bo,Bold as ho,Italic as ko,Strikethrough as xo,Underline as yo,BlockQuote as To,CKBox as Eo,Heading as vo,Image as So,ImageCaption as Io,ImageResize as Lo,ImageStyle as Co,ImageToolbar as wo,ImageUpload as _o,PictureEditing as Bo,Indent as Po,IndentBlock as Mo,Link as Oo,List as Ao,ListProperties as Ro,MediaEmbed as No,Paragraph as Uo,PasteFromOffice as Fo,Table as Ko,TableToolbar as Qo,TextTransformation as Do,CloudServices as Ho}from"ckeditor5";import{InlineEditor as jo,Essentials as Go,Autoformat as Wo,Bold as $o,Italic as Xo,BlockQuote as Jo,CKBox as Yo,Heading as Zo,Image as ea,ImageCaption as ta,ImageStyle as oa,ImageToolbar as aa,ImageUpload as ra,PictureEditing as ia,Indent as na,IndentBlock as la,Link as sa,List as ca,MediaEmbed as da,Paragraph as ma,PasteFromOffice as ua,Table as pa,TableToolbar as ga,TextTransformation as fa,CloudServices as ba}from"ckeditor5";import{MultiRootEditor as ya,Essentials as Ta,Autoformat as Ea,Bold as va,Italic as Sa,BlockQuote as Ia,CKBox as La,Heading as Ca,Image as wa,ImageCaption as _a,ImageStyle as Ba,ImageToolbar as Pa,ImageUpload as Ma,PictureEditing as Oa,Indent as Aa,IndentBlock as Ra,Link as Na,List as Ua,MediaEmbed as Fa,Paragraph as Ka,PasteFromOffice as Qa,Table as Da,TableToolbar as Ha,TextTransformation as qa,CloudServices as Va}from"ckeditor5";var T=`/*
 * @license Copyright (c) 2003-2026, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

:root {
	/* Optional app palette helpers (outside CKEditor token layers). */
	--app-surface-1: hsl(255, 3%, 18%);
	--app-surface-2: hsl(255, 4%, 16%);
	--app-surface-3: hsl(240, 4%, 24%);
	--app-text-1: hsl(0, 0%, 98%);
	--app-text-2: hsl(0, 0%, 78%);
	--app-focus-hsl: 208, 90%, 62%;
	--app-brand: hsl(168, 76%, 42%);
	--app-brand-hover: hsl(168, 76%, 38%);
	--app-brand-contrast: hsl(0, 0%, 100%);

	/* -----------------------------------------------------------------
	 * 1) FOUNDATION TOKENS
	 * ----------------------------------------------------------------- */
	--ck-font-size-base: 14px;
	--ck-spacing-base: 0.65em;
	--ck-radius-base: 6px;

	--ck-color-base-background: var(--app-surface-1);
	--ck-color-base-border: var(--app-surface-3);
	--ck-color-base-text: var(--app-text-1);
	--ck-color-base-action: var(--app-brand);
	--ck-color-base-error: hsl(10, 90%, 62%);
	--ck-focus-border-color: hsl(var(--app-focus-hsl));

	/* -----------------------------------------------------------------
	 * 2) SEMANTIC TOKENS
	 * ----------------------------------------------------------------- */
	--ck-color-surface-canvas: var(--app-surface-1);
	--ck-color-surface-control: var(--app-surface-1);
	--ck-color-surface-container: var(--app-surface-1);
	--ck-color-surface-inverse: hsl(252, 7%, 14%);

	--ck-color-border-control: var(--app-surface-3);
	--ck-color-border-container: var(--app-surface-3);
	--ck-color-divider: var(--app-surface-3);

	--ck-color-text-primary: var(--app-text-1);
	--ck-color-text-secondary: hsl(0, 0%, 86%);
	--ck-color-text-disabled: var(--app-text-2);
	--ck-color-text-inverse: var(--app-brand-contrast);

	--ck-color-interactive-focus-border-coordinates: var(--app-focus-hsl);
	--ck-color-interactive-focus-shadow: hsla(208, 90%, 62%, .4);
	--ck-color-interactive-hover-surface: var(--app-surface-2);
	--ck-color-interactive-active-surface: hsl(255, 4%, 14%);
	--ck-color-interactive-selected-surface: hsl(208, 40%, 20%);
	--ck-color-interactive-selected-surface-hover: hsl(208, 42%, 24%);
	--ck-color-interactive-selected-text: hsl(205, 100%, 74%);
	--ck-color-interactive-primary-surface: var(--app-brand);
	--ck-color-interactive-primary-surface-hover: var(--app-brand-hover);
	--ck-color-interactive-primary-text: var(--app-brand-contrast);

	--ck-border-radius-control: 6px;
	--ck-border-radius-surface: 8px;
	--ck-shadow-surface-floating: 0 6px 18px 2px hsla(0, 0%, 0%, .35);

	/* -----------------------------------------------------------------
	 * 3) COMPONENT TOKENS
	 * ----------------------------------------------------------------- */
	--ck-button-border-radius: var(--ck-border-radius-control);
	--ck-input-border-radius: var(--ck-border-radius-control);
	--ck-input-disabled-background-color: hsl(255, 4%, 21%);
	--ck-toolbar-border-radius: var(--ck-border-radius-surface);
	--ck-dialog-border-radius: var(--ck-border-radius-surface);
	--ck-dialog-background-color: var(--app-surface-1);
	--ck-dialog-drop-shadow: 0 10px 24px 2px hsla(0, 0%, 0%, .35);
}

/* Optional: feature-specific content tokens (outside @ckeditor/ckeditor5-ui theme layers). */
:root {
	/* Editable (and published) content text \u2014 light on the dark background. */
	--ck-content-font-color: var(--app-text-1);

	--ck-content-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-content-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 68%);
	--ck-color-widget-editable-focus-background: hsl(0, 0%, 100%);
	--ck-color-link-default: hsl(190, 100%, 75%);
}

/* Improve displaying links. */
.ck.ck-editor__editable a {
	color: hsl(210, 100%, 63%);
}

/* Improve displaying code blocks. */
.ck-content pre {
	color: hsl(0, 0%, 91%);
	border-color: hsl(0, 0%, 77%);
}
`;var f=class extends E{static get pluginName(){return"DarkModeCKBoxIntegration"}afterInit(){let t=this.editor;if(!t.plugins.has("CKBoxEditing"))return;this._ckboxLinkElement=document.createElement("link"),this._ckboxLinkElement.rel="stylesheet",this._ckboxLinkElement.href="https://cdn.ckbox.io/ckbox/2.13.1/styles/themes/dark.css",document.head.appendChild(this._ckboxLinkElement);let o=t.config.get("ckbox.theme"),a=t.commands.get("darkModeToggle");this.listenTo(a,"execute",()=>{let{value:r}=a;t.config.set("ckbox.theme",r==="dark"?"dark":o)},{priority:"low"})}destroy(){return this._ckboxLinkElement&&this._ckboxLinkElement.remove(),super.destroy()}},b=class extends E{static get pluginName(){return"DarkModeToggle"}init(){let t=this.editor;t.config.define("darkMode",{mode:"auto"});let o=new h(t);t.commands.add("darkModeToggle",o),t.once("ready",()=>{this._shouldSwitchToDarkMode()&&t.execute("darkModeToggle","dark"),t.config.get("darkMode.mode")==="auto"&&this._detectColorSchemaChange()})}destroy(){return this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),super.destroy()}_detectColorSchemaChange(){this._mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQueryListener=t=>{this.editor.execute("darkModeToggle",t.matches?"dark":"light")},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}_shouldSwitchToDarkMode(){return this.editor.config.get("darkMode.mode")==="dark"?!0:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},h=class extends W{constructor(t){super(t),this.affectsData=!1,this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this.value=""}destroy(){return this.styleElement.remove(),super.destroy()}execute(t=void 0){t==="dark"||!t&&this.value==="light"?this.styleElement.innerHTML=T:this.styleElement.innerHTML="",this.refresh()}refresh(){this.isEnabled=!0,this.value=this.styleElement.innerText.length!==0?"dark":"light"}};$.create({attachTo:document.querySelector("#snippet-classic-editor"),plugins:[l,J,Y,Z,ee,X,te,oe,b,f],toolbar:{items:["undo","redo","findAndReplace","|","heading","|","bold","italic","|","link","insertImage","insertTable","mediaEmbed","codeBlock","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:d()}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},darkMode:{mode:"dark"},ckbox:{tokenUrl:c,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},list:{enableSkipLevelLists:!0}}).then(e=>{window.editor=e;let t=document.getElementById("theme-mode-light").querySelector("input"),o=document.getElementById("theme-mode-dark").querySelector("input");t.addEventListener("change",a),o.addEventListener("change",a);function a(n){let k=n.target.value==="dark"?"dark":"light";e.execute("darkModeToggle",k)}let r=e.commands.get("darkModeToggle");r.value==="dark"?o.checked=!0:t.checked=!0,r.on("change:value",(n,k,v)=>{v==="dark"?o.checked=!0:t.checked=!0})}).catch(e=>{console.error(e.stack)});
