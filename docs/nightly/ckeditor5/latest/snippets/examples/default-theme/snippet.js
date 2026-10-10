import{Plugin as E,Command as W,ClassicEditor as $,CloudServices as X,PictureEditing as J,CKBox as Y,CKBoxImageEdit as Z,ImageUpload as ee,FindAndReplace as te,CodeBlock as oe}from"ckeditor5";var c="https://api.ckbox.io/token/demo";import{Plugin as I}from"@ckeditor/ckeditor5-core";import{Essentials as L}from"@ckeditor/ckeditor5-essentials";import{Autoformat as S}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as w}from"@ckeditor/ckeditor5-block-quote";import{Bold as C,Italic as _}from"@ckeditor/ckeditor5-basic-styles";import{Heading as B}from"@ckeditor/ckeditor5-heading";import{Image as P,ImageCaption as O,ImageStyle as M,ImageToolbar as A}from"@ckeditor/ckeditor5-image";import{Indent as R}from"@ckeditor/ckeditor5-indent";import{Link as U}from"@ckeditor/ckeditor5-link";import{List as F}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Q}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as D}from"@ckeditor/ckeditor5-paragraph";import{Table as K,TableToolbar as N}from"@ckeditor/ckeditor5-table";var l=class extends I{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[L,S,w,C,B,P,O,M,A,R,_,U,F,Q,D,K,N]}};function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function u(e,t){customElements.get(e)||customElements.define(e,t)}function m(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function s(e,t){return Object.assign(document.createElement(e),t)}function x(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function g(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var p=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=m().then(()=>H(this.shadowRoot,t))}};u("snippet-shadow-root",p);async function H(e,t){let o=q(t),r=s("style",{textContent:":host { display: block; }"}),a=Array.from(document.styleSheets).filter(V).map(z);e.prepend(r,...a),await Promise.all(a.map(async n=>{await x(n),y(n.sheet,o)}))}function q(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function V(e){return e.ownerNode instanceof HTMLElement&&g(e).length>0}function z(e){let t=e.href?s("link",{rel:"stylesheet",href:e.href}):s("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function y(e,t){let o=g(e);for(let r=o.length-1;r>=0;r--){let a=o[r];a instanceof CSSImportRule&&a.layerName===null?y(a.styleSheet,t):j(a,t)||e.deleteRule(r)}}function j(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Ce,Essentials as _e,Autoformat as Be,BlockToolbar as Pe,Bold as Oe,Italic as Me,BlockQuote as Ae,CKBox as Re,Heading as Ue,Image as Fe,ImageCaption as Qe,ImageStyle as De,ImageToolbar as Ke,ImageUpload as Ne,PictureEditing as He,Indent as qe,IndentBlock as Ve,Link as ze,List as je,MediaEmbed as Ge,Paragraph as We,PasteFromOffice as $e,Table as Xe,TableToolbar as Je,TextTransformation as Ye,CloudServices as Ze}from"ckeditor5";import{BalloonEditor as rt,Essentials as at,Autoformat as it,Bold as nt,Italic as lt,BlockQuote as st,CKBox as ct,Heading as dt,Image as ut,ImageCaption as mt,ImageStyle as gt,ImageToolbar as pt,ImageUpload as bt,PictureEditing as ht,Indent as kt,IndentBlock as ft,Link as xt,List as yt,MediaEmbed as Tt,Paragraph as Et,PasteFromOffice as vt,Table as It,TableToolbar as Lt,TextTransformation as St,CloudServices as wt}from"ckeditor5";import{ClassicEditor as Pt,Essentials as Ot,Autoformat as Mt,Bold as At,Italic as Rt,BlockQuote as Ut,CKBox as Ft,Heading as Qt,Image as Dt,ImageCaption as Kt,ImageStyle as Nt,ImageToolbar as Ht,ImageUpload as qt,PictureEditing as Vt,Indent as zt,IndentBlock as jt,Link as Gt,List as Wt,MediaEmbed as $t,Paragraph as Xt,PasteFromOffice as Jt,Table as Yt,TableToolbar as Zt,TextTransformation as eo,CloudServices as to,AutoImage as oo,ImageInsert as ro,Bookmark as ao}from"ckeditor5";import{DecoupledEditor as so,Essentials as co,Alignment as uo,FontSize as mo,FontFamily as go,FontColor as po,FontBackgroundColor as bo,Autoformat as ho,Bold as ko,Italic as fo,Strikethrough as xo,Underline as yo,BlockQuote as To,CKBox as Eo,Heading as vo,Image as Io,ImageCaption as Lo,ImageResize as So,ImageStyle as wo,ImageToolbar as Co,ImageUpload as _o,PictureEditing as Bo,Indent as Po,IndentBlock as Oo,Link as Mo,List as Ao,ListProperties as Ro,MediaEmbed as Uo,Paragraph as Fo,PasteFromOffice as Qo,Table as Do,TableToolbar as Ko,TextTransformation as No,CloudServices as Ho}from"ckeditor5";import{InlineEditor as jo,Essentials as Go,Autoformat as Wo,Bold as $o,Italic as Xo,BlockQuote as Jo,CKBox as Yo,Heading as Zo,Image as er,ImageCaption as tr,ImageStyle as or,ImageToolbar as rr,ImageUpload as ar,PictureEditing as ir,Indent as nr,IndentBlock as lr,Link as sr,List as cr,MediaEmbed as dr,Paragraph as ur,PasteFromOffice as mr,Table as gr,TableToolbar as pr,TextTransformation as br,CloudServices as hr}from"ckeditor5";import{MultiRootEditor as yr,Essentials as Tr,Autoformat as Er,Bold as vr,Italic as Ir,BlockQuote as Lr,CKBox as Sr,Heading as wr,Image as Cr,ImageCaption as _r,ImageStyle as Br,ImageToolbar as Pr,ImageUpload as Or,PictureEditing as Mr,Indent as Ar,IndentBlock as Rr,Link as Ur,List as Fr,MediaEmbed as Qr,Paragraph as Dr,PasteFromOffice as Kr,Table as Nr,TableToolbar as Hr,TextTransformation as qr,CloudServices as Vr}from"ckeditor5";var T=`/*
 * @license Copyright (c) 2003-2026, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

:root,
:host {
	/* Helper variables to avoid duplication in the colors. */

	--ck-custom-foreground: hsl(255, 3%, 18%);
	--ck-custom-border: hsl(300, 1%, 22%);
	--ck-custom-white: hsl(0, 0%, 100%);

	/* -- Overrides generic colors. ------------------------------------------------------------- */

	--ck-content-font-color: var(--ck-custom-white);

	--ck-color-base-background: hsl(270, 1%, 29%);
	--ck-color-base-border: hsl(240, 4%, 24%);

	--ck-color-focus-border: hsl(208, 90%, 62%);
	--ck-color-text: hsl(0, 0%, 98%);
	--ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

	/* -- Overrides the default .ck-button class colors. ---------------------------------------- */

	--ck-color-button-default-hover-background: hsl(270, 1%, 22%);
	--ck-color-button-default-active-background: hsl(270, 2%, 20%);
	--ck-color-button-default-active-shadow: hsl(270, 2%, 23%);

	--ck-color-button-on-background: var(--ck-custom-foreground);
	--ck-color-button-on-hover-background: hsl(255, 4%, 16%);
	--ck-color-button-on-active-background: hsl(255, 4%, 14%);
	--ck-color-button-on-active-shadow: hsl(240, 3%, 19%);
	--ck-color-button-on-disabled-background: var(--ck-custom-foreground);

	--ck-color-button-action-background: hsl(168, 76%, 42%);
	--ck-color-button-action-hover-background: hsl(168, 76%, 38%);
	--ck-color-button-action-active-background: hsl(168, 76%, 36%);
	--ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
	--ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
	--ck-color-button-action-text: var(--ck-custom-white);

	--ck-color-button-save: hsl(120, 100%, 46%);
	--ck-color-button-cancel: hsl(15, 100%, 56%);

	/* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

	--ck-color-dropdown-panel-border: var(--ck-custom-foreground);

	/* -- Overrides the default .ck-dialog class colors. ----------------------------------- */

	--ck-color-dialog-form-header-border: var(--ck-custom-border);

	/* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

	--ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
	--ck-color-split-button-hover-border: var(--ck-custom-foreground);

	/* -- Overrides the default .ck-input class colors. ----------------------------------------- */

	--ck-color-input-border: hsl(257, 3%, 43%);
	--ck-color-input-text: hsl(0, 0%, 98%);
	--ck-color-input-disabled-background: hsl(255, 4%, 21%);
	--ck-color-input-disabled-border: hsl(250, 3%, 38%);
	--ck-color-input-disabled-text: hsl(0, 0%, 78%);

	/* -- Overrides the default .ck-list class colors. ------------------------------------------ */

	--ck-color-list-button-hover-background: var(--ck-custom-foreground);
	--ck-color-list-button-on-background: hsl(208, 88%, 52%);
	--ck-color-list-button-on-text: var(--ck-custom-white);

	/* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

	--ck-color-panel-border: var(--ck-custom-border);

	/* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

	--ck-color-toolbar-border: var(--ck-custom-border);

	/* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

	--ck-color-tooltip-background: hsl(252, 7%, 14%);
	--ck-color-tooltip-text: hsl(0, 0%, 93%);

	/* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

	--ck-content-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-content-color-image-caption-text: hsl(0, 0%, 20%);

	/* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 68%);
	--ck-color-widget-editable-focus-background: var(--ck-custom-white);

	/* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

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
`;var b=class extends E{static get pluginName(){return"DarkModeCKBoxIntegration"}afterInit(){let t=this.editor;if(!t.plugins.has("CKBoxEditing"))return;this._ckboxLinkElement=document.createElement("link"),this._ckboxLinkElement.rel="stylesheet",this._ckboxLinkElement.href="https://cdn.ckbox.io/ckbox/2.13.1/styles/themes/dark.css",document.head.appendChild(this._ckboxLinkElement);let o=t.config.get("ckbox.theme"),r=t.commands.get("darkModeToggle");this.listenTo(r,"execute",()=>{let{value:a}=r;t.config.set("ckbox.theme",a==="dark"?"dark":o)},{priority:"low"})}destroy(){return this._ckboxLinkElement&&this._ckboxLinkElement.remove(),super.destroy()}},h=class extends E{static get pluginName(){return"DarkModeToggle"}init(){let t=this.editor;t.config.define("darkMode",{mode:"auto"});let o=new k(t);t.commands.add("darkModeToggle",o),t.once("ready",()=>{this._shouldSwitchToDarkMode()&&t.execute("darkModeToggle","dark"),t.config.get("darkMode.mode")==="auto"&&this._detectColorSchemaChange()})}destroy(){return this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),super.destroy()}_detectColorSchemaChange(){this._mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQueryListener=t=>{this.editor.execute("darkModeToggle",t.matches?"dark":"light")},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}_shouldSwitchToDarkMode(){return this.editor.config.get("darkMode.mode")==="dark"?!0:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},k=class extends W{constructor(t){super(t),this.affectsData=!1,this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this.value=""}destroy(){return this.styleElement.remove(),super.destroy()}execute(t=void 0){t==="dark"||!t&&this.value==="light"?this.styleElement.innerHTML=T:this.styleElement.innerHTML="",this.refresh()}refresh(){this.isEnabled=!0,this.value=this.styleElement.innerText.length!==0?"dark":"light"}};$.create({attachTo:document.querySelector("#snippet-classic-editor"),plugins:[l,J,Y,Z,ee,X,te,oe,h,b],toolbar:{items:["undo","redo","findAndReplace","|","heading","|","bold","italic","|","link","insertImage","insertTable","mediaEmbed","codeBlock","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:d()}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},darkMode:{mode:"dark"},ckbox:{tokenUrl:c,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},list:{enableSkipLevelLists:!0}}).then(e=>{window.editor=e;let t=document.getElementById("theme-mode-light").querySelector("input"),o=document.getElementById("theme-mode-dark").querySelector("input");t.addEventListener("change",r),o.addEventListener("change",r);function r(n){let f=n.target.value==="dark"?"dark":"light";e.execute("darkModeToggle",f)}let a=e.commands.get("darkModeToggle");a.value==="dark"?o.checked=!0:t.checked=!0,a.on("change:value",(n,f,v)=>{v==="dark"?o.checked=!0:t.checked=!0})}).catch(e=>{console.error(e.stack)});
