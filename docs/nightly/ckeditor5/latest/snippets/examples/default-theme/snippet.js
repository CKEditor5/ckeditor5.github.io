import{Plugin as k,Command as F,ClassicEditor as Q,CloudServices as D,PictureEditing as K,CKBox as R,CKBoxImageEdit as H,ImageUpload as q,FindAndReplace as N,CodeBlock as V}from"ckeditor5";var n="https://api.ckbox.io/token/demo";import{Plugin as h}from"@ckeditor/ckeditor5-core";import{Essentials as f}from"@ckeditor/ckeditor5-essentials";import{Autoformat as x}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as T}from"@ckeditor/ckeditor5-block-quote";import{Bold as v,Italic as I}from"@ckeditor/ckeditor5-basic-styles";import{Heading as y}from"@ckeditor/ckeditor5-heading";import{Image as E,ImageCaption as L,ImageStyle as S,ImageToolbar as w}from"@ckeditor/ckeditor5-image";import{Indent as C}from"@ckeditor/ckeditor5-indent";import{Link as _}from"@ckeditor/ckeditor5-link";import{List as B}from"@ckeditor/ckeditor5-list";import{MediaEmbed as O}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as M}from"@ckeditor/ckeditor5-paragraph";import{Table as P,TableToolbar as A}from"@ckeditor/ckeditor5-table";var a=class extends h{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[f,x,T,v,y,E,L,S,w,C,I,_,B,O,M,P,A]}};function s(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as ge,Essentials as be,Autoformat as ke,BlockToolbar as pe,Bold as he,Italic as fe,BlockQuote as xe,CKBox as Te,Heading as ve,Image as Ie,ImageCaption as ye,ImageStyle as Ee,ImageToolbar as Le,ImageUpload as Se,PictureEditing as we,Indent as Ce,IndentBlock as _e,Link as Be,List as Oe,MediaEmbed as Me,Paragraph as Pe,PasteFromOffice as Ae,Table as Ue,TableToolbar as Fe,TextTransformation as Qe,CloudServices as De}from"ckeditor5";import{BalloonEditor as qe,Essentials as Ne,Autoformat as Ve,Bold as ze,Italic as Ge,BlockQuote as je,CKBox as We,Heading as Xe,Image as Je,ImageCaption as Ye,ImageStyle as $e,ImageToolbar as Ze,ImageUpload as et,PictureEditing as tt,Indent as ot,IndentBlock as rt,Link as it,List as at,MediaEmbed as lt,Paragraph as nt,PasteFromOffice as st,Table as ct,TableToolbar as dt,TextTransformation as mt,CloudServices as ut}from"ckeditor5";import{ClassicEditor as pt,Essentials as ht,Autoformat as ft,Bold as xt,Italic as Tt,BlockQuote as vt,CKBox as It,Heading as yt,Image as Et,ImageCaption as Lt,ImageStyle as St,ImageToolbar as wt,ImageUpload as Ct,PictureEditing as _t,Indent as Bt,IndentBlock as Ot,Link as Mt,List as Pt,MediaEmbed as At,Paragraph as Ut,PasteFromOffice as Ft,Table as Qt,TableToolbar as Dt,TextTransformation as Kt,CloudServices as Rt,AutoImage as Ht,ImageInsert as qt,Bookmark as Nt}from"ckeditor5";import{DecoupledEditor as jt,Essentials as Wt,Alignment as Xt,FontSize as Jt,FontFamily as Yt,FontColor as $t,FontBackgroundColor as Zt,Autoformat as eo,Bold as to,Italic as oo,Strikethrough as ro,Underline as io,BlockQuote as ao,CKBox as lo,Heading as no,Image as so,ImageCaption as co,ImageResize as mo,ImageStyle as uo,ImageToolbar as go,ImageUpload as bo,PictureEditing as ko,Indent as po,IndentBlock as ho,Link as fo,List as xo,ListProperties as To,MediaEmbed as vo,Paragraph as Io,PasteFromOffice as yo,Table as Eo,TableToolbar as Lo,TextTransformation as So,CloudServices as wo}from"ckeditor5";import{InlineEditor as Oo,Essentials as Mo,Autoformat as Po,Bold as Ao,Italic as Uo,BlockQuote as Fo,CKBox as Qo,Heading as Do,Image as Ko,ImageCaption as Ro,ImageStyle as Ho,ImageToolbar as qo,ImageUpload as No,PictureEditing as Vo,Indent as zo,IndentBlock as Go,Link as jo,List as Wo,MediaEmbed as Xo,Paragraph as Jo,PasteFromOffice as Yo,Table as $o,TableToolbar as Zo,TextTransformation as er,CloudServices as tr}from"ckeditor5";import{MultiRootEditor as ar,Essentials as lr,Autoformat as nr,Bold as sr,Italic as cr,BlockQuote as dr,CKBox as mr,Heading as ur,Image as gr,ImageCaption as br,ImageStyle as kr,ImageToolbar as pr,ImageUpload as hr,PictureEditing as fr,Indent as xr,IndentBlock as Tr,Link as vr,List as Ir,MediaEmbed as yr,Paragraph as Er,PasteFromOffice as Lr,Table as Sr,TableToolbar as wr,TextTransformation as Cr,CloudServices as _r}from"ckeditor5";var b=`/*
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
`;var c=class extends k{static get pluginName(){return"DarkModeCKBoxIntegration"}afterInit(){let e=this.editor;if(!e.plugins.has("CKBoxEditing"))return;this._ckboxLinkElement=document.createElement("link"),this._ckboxLinkElement.rel="stylesheet",this._ckboxLinkElement.href="https://cdn.ckbox.io/ckbox/2.13.1/styles/themes/dark.css",document.head.appendChild(this._ckboxLinkElement);let r=e.config.get("ckbox.theme"),i=e.commands.get("darkModeToggle");this.listenTo(i,"execute",()=>{let{value:l}=i;e.config.set("ckbox.theme",l==="dark"?"dark":r)},{priority:"low"})}destroy(){return this._ckboxLinkElement&&this._ckboxLinkElement.remove(),super.destroy()}},d=class extends k{static get pluginName(){return"DarkModeToggle"}init(){let e=this.editor;e.config.define("darkMode",{mode:"auto"});let r=new m(e);e.commands.add("darkModeToggle",r),e.once("ready",()=>{this._shouldSwitchToDarkMode()&&e.execute("darkModeToggle","dark"),e.config.get("darkMode.mode")==="auto"&&this._detectColorSchemaChange()})}destroy(){return this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),super.destroy()}_detectColorSchemaChange(){this._mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQueryListener=e=>{this.editor.execute("darkModeToggle",e.matches?"dark":"light")},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}_shouldSwitchToDarkMode(){return this.editor.config.get("darkMode.mode")==="dark"?!0:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},m=class extends F{constructor(e){super(e),this.affectsData=!1,this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this.value=""}destroy(){return this.styleElement.remove(),super.destroy()}execute(e=void 0){e==="dark"||!e&&this.value==="light"?this.styleElement.innerHTML=b:this.styleElement.innerHTML="",this.refresh()}refresh(){this.isEnabled=!0,this.value=this.styleElement.innerText.length!==0?"dark":"light"}};Q.create({attachTo:document.querySelector("#snippet-classic-editor"),plugins:[a,K,R,H,q,D,N,V,d,c],toolbar:{items:["undo","redo","findAndReplace","|","heading","|","bold","italic","|","link","insertImage","insertTable","mediaEmbed","codeBlock","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:s()}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},darkMode:{mode:"dark"},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},list:{enableSkipLevelLists:!0}}).then(t=>{window.editor=t;let e=document.getElementById("theme-mode-light").querySelector("input"),r=document.getElementById("theme-mode-dark").querySelector("input");e.addEventListener("change",i),r.addEventListener("change",i);function i(u){let g=u.target.value==="dark"?"dark":"light";t.execute("darkModeToggle",g)}let l=t.commands.get("darkModeToggle");l.value==="dark"?r.checked=!0:e.checked=!0,l.on("change:value",(u,g,p)=>{p==="dark"?r.checked=!0:e.checked=!0})}).catch(t=>{console.error(t.stack)});
