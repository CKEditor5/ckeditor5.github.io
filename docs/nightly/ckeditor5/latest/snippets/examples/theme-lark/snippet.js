import{Plugin as p,Command as R,ClassicEditor as H,CloudServices as q,PictureEditing as N,CKBox as V,CKBoxImageEdit as z,ImageUpload as G,FindAndReplace as j,CodeBlock as W}from"ckeditor5";var f="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",x="https://33333.cke-cs.com/easyimage/upload/",T="33333.cke-cs.com/ws",n={tokenUrl:f,uploadUrl:x,webSocketUrl:T};var s="https://api.ckbox.io/token/demo";import{Plugin as y}from"@ckeditor/ckeditor5-core";import{Essentials as I}from"@ckeditor/ckeditor5-essentials";import{Autoformat as E}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as v}from"@ckeditor/ckeditor5-block-quote";import{Bold as C,Italic as S}from"@ckeditor/ckeditor5-basic-styles";import{Heading as w}from"@ckeditor/ckeditor5-heading";import{Image as L,ImageCaption as _,ImageStyle as B,ImageToolbar as O}from"@ckeditor/ckeditor5-image";import{Indent as M}from"@ckeditor/ckeditor5-indent";import{Link as P}from"@ckeditor/ckeditor5-link";import{List as A}from"@ckeditor/ckeditor5-list";import{MediaEmbed as F}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as U}from"@ckeditor/ckeditor5-paragraph";import{Table as K,TableToolbar as Q}from"@ckeditor/ckeditor5-table";var i=class extends y{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[I,E,v,C,w,L,_,B,O,M,S,P,A,F,U,K,Q]}};function c(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as he,Essentials as fe,CKFinderUploadAdapter as xe,Autoformat as Te,BlockToolbar as ye,Bold as Ie,Italic as Ee,BlockQuote as ve,CKBox as Ce,CKFinder as Se,EasyImage as we,Heading as Le,Image as _e,ImageCaption as Be,ImageStyle as Oe,ImageToolbar as Me,ImageUpload as Pe,PictureEditing as Ae,Indent as Fe,Link as Ue,List as Ke,MediaEmbed as Qe,Paragraph as De,PasteFromOffice as Re,Table as He,TableToolbar as qe,TextTransformation as Ne,CloudServices as Ve}from"ckeditor5";import{BalloonEditor as We,Essentials as Xe,CKFinderUploadAdapter as Je,Autoformat as Ye,Bold as $e,Italic as Ze,BlockQuote as et,CKBox as tt,CKFinder as ot,EasyImage as rt,Heading as at,Image as it,ImageCaption as lt,ImageStyle as nt,ImageToolbar as st,ImageUpload as ct,PictureEditing as dt,Indent as mt,Link as ut,List as gt,MediaEmbed as bt,Paragraph as kt,PasteFromOffice as pt,Table as ht,TableToolbar as ft,TextTransformation as xt,CloudServices as Tt}from"ckeditor5";import{ClassicEditor as vt,Essentials as Ct,Autoformat as St,Bold as wt,Italic as Lt,BlockQuote as _t,CKBox as Bt,EasyImage as Ot,Heading as Mt,Image as Pt,ImageCaption as At,ImageStyle as Ft,ImageToolbar as Ut,ImageUpload as Kt,PictureEditing as Qt,Indent as Dt,Link as Rt,List as Ht,MediaEmbed as qt,Paragraph as Nt,PasteFromOffice as Vt,Table as zt,TableToolbar as Gt,TextTransformation as jt,CloudServices as Wt,AutoImage as Xt,ImageInsert as Jt,Bookmark as Yt}from"ckeditor5";import{DecoupledEditor as to,Essentials as oo,Alignment as ro,FontSize as ao,FontFamily as io,FontColor as lo,FontBackgroundColor as no,Autoformat as so,Bold as co,Italic as mo,Strikethrough as uo,Underline as go,BlockQuote as bo,CKBox as ko,EasyImage as po,Heading as ho,Image as fo,ImageCaption as xo,ImageResize as To,ImageStyle as yo,ImageToolbar as Io,ImageUpload as Eo,PictureEditing as vo,Indent as Co,IndentBlock as So,Link as wo,List as Lo,ListProperties as _o,MediaEmbed as Bo,Paragraph as Oo,PasteFromOffice as Mo,Table as Po,TableToolbar as Ao,TextTransformation as Fo,CloudServices as Uo}from"ckeditor5";import{InlineEditor as Ro,Essentials as Ho,CKFinderUploadAdapter as qo,Autoformat as No,Bold as Vo,Italic as zo,BlockQuote as Go,CKBox as jo,CKFinder as Wo,EasyImage as Xo,Heading as Jo,Image as Yo,ImageCaption as $o,ImageStyle as Zo,ImageToolbar as er,ImageUpload as tr,PictureEditing as or,Indent as rr,Link as ar,List as ir,MediaEmbed as lr,Paragraph as nr,PasteFromOffice as sr,Table as cr,TableToolbar as dr,TextTransformation as mr,CloudServices as ur}from"ckeditor5";import{MultiRootEditor as pr,Essentials as hr,CKFinderUploadAdapter as fr,Autoformat as xr,Bold as Tr,Italic as yr,BlockQuote as Ir,CKBox as Er,CKFinder as vr,EasyImage as Cr,Heading as Sr,Image as wr,ImageCaption as Lr,ImageStyle as _r,ImageToolbar as Br,ImageUpload as Or,PictureEditing as Mr,Indent as Pr,Link as Ar,List as Fr,MediaEmbed as Ur,Paragraph as Kr,PasteFromOffice as Qr,Table as Dr,TableToolbar as Rr,TextTransformation as Hr,CloudServices as qr}from"ckeditor5";var k=`/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

:root {
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
`;var d=class extends p{static get pluginName(){return"DarkModeCKBoxIntegration"}afterInit(){let e=this.editor;if(!e.plugins.has("CKBoxEditing"))return;this._ckboxLinkElement=document.createElement("link"),this._ckboxLinkElement.rel="stylesheet",this._ckboxLinkElement.href="https://cdn.ckbox.io/ckbox/2.4.0/styles/themes/dark.css",document.head.appendChild(this._ckboxLinkElement);let r=e.config.get("ckbox.theme"),a=e.commands.get("darkModeToggle");this.listenTo(a,"execute",()=>{let{value:l}=a;e.config.set("ckbox.theme",l==="dark"?"dark":r)},{priority:"low"})}destroy(){return this._ckboxLinkElement&&this._ckboxLinkElement.remove(),super.destroy()}},m=class extends p{static get pluginName(){return"DarkModeToggle"}init(){let e=this.editor;e.config.define("darkMode",{mode:"auto"});let r=new u(e);e.commands.add("darkModeToggle",r),e.once("ready",()=>{this._shouldSwitchToDarkMode()&&e.execute("darkModeToggle","dark"),e.config.get("darkMode.mode")==="auto"&&this._detectColorSchemaChange()})}destroy(){return this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),super.destroy()}_detectColorSchemaChange(){this._mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaQueryListener=e=>{this.editor.execute("darkModeToggle",e.matches?"dark":"light")},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}_shouldSwitchToDarkMode(){return this.editor.config.get("darkMode.mode")==="dark"?!0:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},u=class extends R{constructor(e){super(e),this.affectsData=!1,this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this.value=""}destroy(){return this.styleElement.remove(),super.destroy()}execute(e=void 0){e==="dark"||!e&&this.value==="light"?this.styleElement.innerHTML=k:this.styleElement.innerHTML="",this.refresh()}refresh(){this.isEnabled=!0,this.value=this.styleElement.innerText.length!==0?"dark":"light"}};H.create(document.querySelector("#snippet-classic-editor"),{plugins:[i,N,V,z,G,q,j,W,m,d],toolbar:{items:["undo","redo","findAndReplace","|","heading","|","bold","italic","|","link","insertImage","insertTable","mediaEmbed","codeBlock","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:c()}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},darkMode:{mode:"dark"},ckbox:{tokenUrl:s,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},cloudServices:n}).then(t=>{window.editor=t;let e=document.getElementById("theme-mode-light").querySelector("input"),r=document.getElementById("theme-mode-dark").querySelector("input");e.addEventListener("change",a),r.addEventListener("change",a);function a(g){let b=g.target.value==="dark"?"dark":"light";t.execute("darkModeToggle",b)}let l=t.commands.get("darkModeToggle");l.value==="dark"?r.checked=!0:e.checked=!0,l.on("change:value",(g,b,h)=>{h==="dark"?r.checked=!0:e.checked=!0})}).catch(t=>{console.error(t.stack)});
