import{HtmlEmbed as W,CodeBlock as V,CKBox as $,CKBoxImageEdit as J,PictureEditing as X,ImageInsert as Y,ImageResize as Z,AutoImage as ee,LinkImage as te}from"ckeditor5";var f="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",h="https://33333.cke-cs.com/easyimage/upload/",k="33333.cke-cs.com/ws",d={tokenUrl:f,uploadUrl:h,webSocketUrl:k};var c="https://api.ckbox.io/token/demo";import{Plugin as ce}from"@ckeditor/ckeditor5-core";import{Essentials as ge}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ue}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as fe}from"@ckeditor/ckeditor5-block-quote";import{Bold as ke,Italic as Te}from"@ckeditor/ckeditor5-basic-styles";import{Heading as xe}from"@ckeditor/ckeditor5-heading";import{Image as ye,ImageCaption as Ce,ImageStyle as we,ImageToolbar as Se}from"@ckeditor/ckeditor5-image";import{Indent as ve}from"@ckeditor/ckeditor5-indent";import{Link as _e}from"@ckeditor/ckeditor5-link";import{List as Ae}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Oe}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ke}from"@ckeditor/ckeditor5-paragraph";import{Table as Me,TableToolbar as Re}from"@ckeditor/ckeditor5-table";function m({target:e,text:t,editor:a,tippyOptions:i}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let s=`
		<div class="tippy-content__message">${t}</div>
		<button class="ck ck-button tippy-content__close-button ck-off" title="Close"></button>
	`,l=Object.assign({},{placement:"bottom",trigger:"manual",hideOnClick:!1,allowHTML:!0,maxWidth:280,showOnCreate:!0,interactive:!0,theme:"light-border",zIndex:1,appendTo:()=>document.body},i),n=window.umberto.createTooltip(e,s,l);for(let u of a.editing.view.document.roots)u.once("change:isFocused",(ie,ae,b)=>{b&&n.hide()});return n}function g(e,t){let a=e.items,i;return typeof t=="function"?i=a.find(t):i=a.get(t),i?i.element:void 0}function p(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as ze,Essentials as Ge,CKFinderUploadAdapter as We,Autoformat as Ve,BlockToolbar as $e,Bold as Je,Italic as Xe,BlockQuote as Ye,CKBox as Ze,CKFinder as et,EasyImage as tt,Heading as ot,Image as it,ImageCaption as at,ImageStyle as rt,ImageToolbar as lt,ImageUpload as nt,PictureEditing as st,Indent as dt,Link as ct,List as mt,MediaEmbed as gt,Paragraph as pt,PasteFromOffice as ut,Table as bt,TableToolbar as ft,TextTransformation as ht,CloudServices as kt}from"ckeditor5";import{BalloonEditor as Et,Essentials as yt,CKFinderUploadAdapter as Ct,Autoformat as wt,Bold as St,Italic as Lt,BlockQuote as vt,CKBox as Bt,CKFinder as _t,EasyImage as Pt,Heading as At,Image as Ft,ImageCaption as Ot,ImageStyle as Ut,ImageToolbar as Kt,ImageUpload as jt,PictureEditing as Mt,Indent as Rt,Link as Dt,List as Ht,MediaEmbed as Nt,Paragraph as qt,PasteFromOffice as Qt,Table as zt,TableToolbar as Gt,TextTransformation as Wt,CloudServices as Vt}from"ckeditor5";import{ClassicEditor as T,Essentials as I,Autoformat as x,Bold as E,Italic as y,BlockQuote as C,CKBox as w,EasyImage as S,Heading as L,Image as v,ImageCaption as B,ImageStyle as _,ImageToolbar as P,ImageUpload as A,PictureEditing as F,Indent as O,Link as U,List as K,MediaEmbed as j,Paragraph as M,PasteFromOffice as R,Table as D,TableToolbar as H,TextTransformation as N,CloudServices as q,AutoImage as Q,ImageInsert as z,Bookmark as G}from"ckeditor5";var r=class extends T{static builtinPlugins=[I,x,E,y,C,q,S,L,v,B,_,P,A,w,O,U,K,j,M,R,F,D,H,N,Q,z,G];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as to,Essentials as oo,Alignment as io,FontSize as ao,FontFamily as ro,FontColor as lo,FontBackgroundColor as no,Autoformat as so,Bold as co,Italic as mo,Strikethrough as go,Underline as po,BlockQuote as uo,CKBox as bo,EasyImage as fo,Heading as ho,Image as ko,ImageCaption as To,ImageResize as Io,ImageStyle as xo,ImageToolbar as Eo,ImageUpload as yo,PictureEditing as Co,Indent as wo,IndentBlock as So,Link as Lo,List as vo,ListProperties as Bo,MediaEmbed as _o,Paragraph as Po,PasteFromOffice as Ao,Table as Fo,TableToolbar as Oo,TextTransformation as Uo,CloudServices as Ko}from"ckeditor5";import{InlineEditor as Do,Essentials as Ho,CKFinderUploadAdapter as No,Autoformat as qo,Bold as Qo,Italic as zo,BlockQuote as Go,CKBox as Wo,CKFinder as Vo,EasyImage as $o,Heading as Jo,Image as Xo,ImageCaption as Yo,ImageStyle as Zo,ImageToolbar as ei,ImageUpload as ti,PictureEditing as oi,Indent as ii,Link as ai,List as ri,MediaEmbed as li,Paragraph as ni,PasteFromOffice as si,Table as di,TableToolbar as ci,TextTransformation as mi,CloudServices as gi}from"ckeditor5";import{MultiRootEditor as fi,Essentials as hi,CKFinderUploadAdapter as ki,Autoformat as Ti,Bold as Ii,Italic as xi,BlockQuote as Ei,CKBox as yi,CKFinder as Ci,EasyImage as wi,Heading as Si,Image as Li,ImageCaption as vi,ImageStyle as Bi,ImageToolbar as _i,ImageUpload as Pi,PictureEditing as Ai,Indent as Fi,Link as Oi,List as Ui,MediaEmbed as Ki,Paragraph as ji,PasteFromOffice as Mi,Table as Ri,TableToolbar as Di,TextTransformation as Hi,CloudServices as Ni}from"ckeditor5";r.builtinPlugins.push(W,V,X,Y,Z,ee,te,$,J);var oe=`
<h2>CKEditor 5 classic editor build</h2>
<div class="raw-html-embed">
	<p><a href="https://www.npmjs.com/package/ckeditor5"><img alt="npm version" src="https://badge.fury.io/js/ckeditor5.svg" /></a>&nbsp;<a href="https://coveralls.io/github/ckeditor/ckeditor5?branch=master"><img alt="Coverage Status" src="https://coveralls.io/repos/github/ckeditor/ckeditor5/badge.svg?branch=master" /></a>&nbsp;<a href="https://app.travis-ci.com/github/ckeditor/ckeditor5"><img alt="Build Status" src="https://travis-ci.org/ckeditor/ckeditor5.svg?branch=master" /></a>&nbsp;<img alt="Dependency Status" src="https://img.shields.io/librariesio/release/npm/ckeditor5.svg" /></p>

	<p><a href="http://eepurl.com/c3zRPr"><img alt="Join newsletter" src="https://img.shields.io/badge/join-newsletter-00cc99.svg" /></a>&nbsp;<a href="https://twitter.com/ckeditor"><img alt="Follow twitter" src="https://img.shields.io/badge/follow-twitter-00cc99.svg" /></a></p>
</div>

<p>The classic editor type for CKEditor 5. See a <a href="https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html"><strong>classic editor example demo</strong></a>.</p>

<figure class="image"><img src="https://c.cksource.com/a/1/img/npm/ckeditor5-build-classic.png" alt="CKEditor 5 classic editor type screenshot"></figure>

<h2>Documentation</h2>
<p>See:</p>
<ul>
	<li><a href="https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/cloud/quick-start.html">Installation</a> for how to install this package and what it contains.</li>
	<li><a href="https://ckeditor.com/docs/ckeditor5/latest/getting-started/setup/editor-lifecycle.html">Editor lifecycle</a> for how to create an editor and interact with it.</li>
	<li><a href="https://ckeditor.com/docs/ckeditor5/latest/getting-started/setup/configuration.html">Configuration</a> for how to configure the editor.</li>
</ul>

<h2>Quick start</h2>
<p>First, install the build from npm:</p>
<pre><code class="language-plaintext">npm&nbsp;install&nbsp;ckeditor5</code></pre>

<h2>License</h2>
<p>Licensed under the terms of <a href="http://www.gnu.org/licenses/gpl.html" rel="nofollow">GNU General Public License Version 2 or later</a>. For full details about the license, please check the <code>LICENSE.md</code> file or <a href="https://ckeditor.com/legal/ckeditor-oss-license" rel="nofollow">https://ckeditor.com/legal/ckeditor-oss-license</a>.</p>

<div class="raw-html-embed"><script>
	window.emojicsOpts = {
		widget: '50c7737f072dfd100f3dad0411f02e',
		position: 'inline'
	};
	( function( d, s, id ) {
		var js, fjs = d.getElementsByTagName( s )[ 0 ];
		js = d.createElement( s );
		js.id = id;
		js.src = '//connect.emojics.com/dist/sdk.js';
		fjs.parentNode.insertBefore( js, fjs );
	} )( document, 'script', 'emojics-js' );
<\/script>
<div id="emojics-root"></div>
<\/script></div>
`;r.create(document.querySelector("#snippet-html-embed"),{initialData:oe,toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","insertImage","insertTable","mediaEmbed","htmlEmbed","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:p()}},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},cloudServices:d}).then(e=>{window.editor=e,document.querySelector("#preview-data-action").addEventListener("click",()=>{let t=["css/styles.css","ckeditor5.css","ckeditor5-premium-features.css"],a=Array.from(document.querySelectorAll("link")).filter(l=>t.some(n=>l.href.endsWith(n))),i=document.querySelector("#preview-data-container"),s=`<!DOCTYPE html><html><head><meta charset="utf-8"><base href="${location.href}"><title>${document.title}</title>`+a.map(l=>`<link rel="stylesheet" href="${l.href}">`).join("")+`<style>
						body {
							padding: 20px;
						}
						.formatted p img {
							display: inline;
							margin: 0;
						}
					</style></head><body class="formatted ck-content">`+e.getData()+"</body></html>";i.contentWindow.document.open(),i.contentWindow.document.write(s),i.contentWindow.document.close()}),m({target:g(e.ui.view.toolbar,t=>t.label&&t.label==="Insert HTML"),text:"Click to embed a new HTML snippet.",editor:e})}).catch(e=>{console.error(e.stack)});
