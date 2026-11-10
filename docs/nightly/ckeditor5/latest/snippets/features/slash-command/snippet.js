import{Bold as ke,Code as we,Italic as Ce,Underline as Be,BlockQuote as Se,CKBox as Te,CKBoxImageEdit as Ie,CodeBlock as Le,Font as Ee,Heading as Ae,HorizontalLine as ve,GeneralHtmlSupport as Re,HtmlEmbed as Fe,ImageInsert as Pe,ImageResize as Oe,ImageUpload as Me,TodoList as Ue,Mention as He,Style as De,TableProperties as Ve,TableCellProperties as Ge}from"ckeditor5";import{SlashCommand as Ke,Template as Ne,TableOfContents as ze}from"ckeditor5-premium-features";var d="https://api.ckbox.io/token/demo";import{Plugin as k}from"@ckeditor/ckeditor5-core";import{Essentials as w}from"@ckeditor/ckeditor5-essentials";import{Autoformat as C}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as B}from"@ckeditor/ckeditor5-block-quote";import{Bold as S,Italic as T}from"@ckeditor/ckeditor5-basic-styles";import{Heading as I}from"@ckeditor/ckeditor5-heading";import{Image as L,ImageCaption as E,ImageStyle as A,ImageToolbar as v}from"@ckeditor/ckeditor5-image";import{Indent as R}from"@ckeditor/ckeditor5-indent";import{Link as F}from"@ckeditor/ckeditor5-link";import{List as P}from"@ckeditor/ckeditor5-list";import{MediaEmbed as O}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as M}from"@ckeditor/ckeditor5-paragraph";import{Table as U,TableToolbar as H}from"@ckeditor/ckeditor5-table";var r=class extends k{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[w,C,B,S,I,L,E,A,v,R,T,F,P,O,M,U,H]}};function c(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function m(e,t){customElements.get(e)||customElements.define(e,t)}function p(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function n(e,t){return Object.assign(document.createElement(e),t)}function h(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function g(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var u=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=p().then(()=>D(this.shadowRoot,t))}};m("snippet-shadow-root",u);async function D(e,t){let l=V(t),a=n("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(G).map(K);e.prepend(a,...i),await Promise.all(i.map(async f=>{await h(f),b(f.sheet,l)}))}function V(e){return t=>!e||e.some(l=>`${t}.`.startsWith(`${l}.`))}function G(e){return e.ownerNode instanceof HTMLElement&&g(e).length>0}function K(e){let t=e.href?n("link",{rel:"stylesheet",href:e.href}):n("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function b(e,t){let l=g(e);for(let a=l.length-1;a>=0;a--){let i=l[a];i instanceof CSSImportRule&&i.layerName===null?b(i.styleSheet,t):N(i,t)||e.deleteRule(a)}}function N(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as ht,Essentials as bt,Autoformat as xt,BlockToolbar as yt,Bold as _t,Italic as kt,BlockQuote as wt,CKBox as Ct,Heading as Bt,Image as St,ImageCaption as Tt,ImageStyle as It,ImageToolbar as Lt,ImageUpload as Et,PictureEditing as At,Indent as vt,IndentBlock as Rt,Link as Ft,List as Pt,MediaEmbed as Ot,Paragraph as Mt,PasteFromOffice as Ut,Table as Ht,TableToolbar as Dt,TextTransformation as Vt,CloudServices as Gt}from"ckeditor5";import{BalloonEditor as Qt,Essentials as qt,Autoformat as jt,Bold as Zt,Italic as Wt,BlockQuote as $t,CKBox as Xt,Heading as Jt,Image as Yt,ImageCaption as eo,ImageStyle as to,ImageToolbar as oo,ImageUpload as io,PictureEditing as lo,Indent as ao,IndentBlock as ro,Link as no,List as so,MediaEmbed as co,Paragraph as mo,PasteFromOffice as po,Table as go,TableToolbar as uo,TextTransformation as fo,CloudServices as ho}from"ckeditor5";import{ClassicEditor as z,Essentials as Q,Autoformat as q,Bold as j,Italic as Z,BlockQuote as W,CKBox as $,Heading as X,Image as J,ImageCaption as Y,ImageStyle as ee,ImageToolbar as te,ImageUpload as oe,PictureEditing as ie,Indent as le,IndentBlock as ae,Link as re,List as ne,MediaEmbed as se,Paragraph as de,PasteFromOffice as ce,Table as me,TableToolbar as pe,TextTransformation as ge,CloudServices as ue,AutoImage as fe,ImageInsert as he,Bookmark as be}from"ckeditor5";var s=class extends z{static builtinPlugins=[Q,q,j,Z,W,ue,X,J,Y,ee,te,oe,$,le,ae,re,ne,se,de,ce,ie,me,pe,ge,fe,he,be];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},list:{enableSkipLevelLists:!0},language:"en"}};import{DecoupledEditor as Co,Essentials as Bo,Alignment as So,FontSize as To,FontFamily as Io,FontColor as Lo,FontBackgroundColor as Eo,Autoformat as Ao,Bold as vo,Italic as Ro,Strikethrough as Fo,Underline as Po,BlockQuote as Oo,CKBox as Mo,Heading as Uo,Image as Ho,ImageCaption as Do,ImageResize as Vo,ImageStyle as Go,ImageToolbar as Ko,ImageUpload as No,PictureEditing as zo,Indent as Qo,IndentBlock as qo,Link as jo,List as Zo,ListProperties as Wo,MediaEmbed as $o,Paragraph as Xo,PasteFromOffice as Jo,Table as Yo,TableToolbar as ei,TextTransformation as ti,CloudServices as oi}from"ckeditor5";import{InlineEditor as ri,Essentials as ni,Autoformat as si,Bold as di,Italic as ci,BlockQuote as mi,CKBox as pi,Heading as gi,Image as ui,ImageCaption as fi,ImageStyle as hi,ImageToolbar as bi,ImageUpload as xi,PictureEditing as yi,Indent as _i,IndentBlock as ki,Link as wi,List as Ci,MediaEmbed as Bi,Paragraph as Si,PasteFromOffice as Ti,Table as Ii,TableToolbar as Li,TextTransformation as Ei,CloudServices as Ai}from"ckeditor5";import{MultiRootEditor as Pi,Essentials as Oi,Autoformat as Mi,Bold as Ui,Italic as Hi,BlockQuote as Di,CKBox as Vi,Heading as Gi,Image as Ki,ImageCaption as Ni,ImageStyle as zi,ImageToolbar as Qi,ImageUpload as qi,PictureEditing as ji,Indent as Zi,IndentBlock as Wi,Link as $i,List as Xi,MediaEmbed as Ji,Paragraph as Yi,PasteFromOffice as el,Table as tl,TableToolbar as ol,TextTransformation as il,CloudServices as ll}from"ckeditor5";var x=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/article-image-right">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_507)">
<path d="M9 41H36V12L28 5H9V41Z" fill="white"/>
<path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>
</g>
<g id="image">
<path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>
<path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>
<circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>
</g>
<rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>
</g>
<defs>
<filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>
</filter>
</defs>
</svg>
`;var y=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/rich-table">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/>
<g id="table-border" filter="url(#filter0_d_1_775)">
<path d="M8 40H37C38.1046 40 39 39.1046 39 38V8C39 6.89543 38.1046 6 37 6H31H7.9994C6.89484 6 6 6.89543 6 8V38C6 39.1046 6.89543 40 8 40Z" fill="white"/>
<path d="M37 39.25H8C7.30964 39.25 6.75 38.6904 6.75 38V8C6.75 7.30935 7.30934 6.75 7.9994 6.75H31H37C37.6904 6.75 38.25 7.30964 38.25 8V38C38.25 38.6904 37.6904 39.25 37 39.25Z" stroke="black" stroke-width="1.5"/>
</g>
<rect id="Rectangle 29" x="17" y="8" width="1" height="30" fill="#A8A8A8"/>
<rect id="Rectangle 35" x="37" y="19" width="1" height="29" transform="rotate(90 37 19)" fill="#A8A8A8"/>
<rect id="Rectangle 36" x="37" y="25" width="1" height="29" transform="rotate(90 37 25)" fill="#A8A8A8"/>
<rect id="Rectangle 37" x="37" y="31" width="1" height="29" transform="rotate(90 37 31)" fill="#A8A8A8"/>
<rect id="Rectangle 30" x="27" y="8" width="1" height="30" fill="#A8A8A8"/>
<rect id="Rectangle 34" x="37" y="13" width="1" height="29" transform="rotate(90 37 13)" fill="#6D6D6D"/>
<g id="Rectangle 31">
<rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/>
<rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/>
</g>
<rect id="Rectangle 32" x="18" y="8" width="9" height="5" fill="#B6FCC5"/>
<rect id="Rectangle 33" x="28" y="8" width="9" height="5" fill="#FCB6E8"/>
</g>
<defs>
<filter id="filter0_d_1_775" x="6" y="6" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_775"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_775" result="shape"/>
</filter>
</defs>
</svg>
`;var _=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/todo">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/>
<g id="Group 1">
<g id="Rectangle 55" filter="url(#filter0_d_1_1218)">
<rect x="7" y="18" width="8" height="8" rx="1" fill="white"/>
<rect x="6.5" y="17.5" width="9" height="9" rx="1.5" stroke="#333333"/>
</g>
</g>
<g id="Group 2">
<g id="Rectangle 55_2" filter="url(#filter1_di_1_1218)">
<rect x="7" y="6" width="8" height="8" rx="1" fill="#83D400"/>
<rect x="6.5" y="5.5" width="9" height="9" rx="1.5" stroke="#333333"/>
</g>
<path id="Vector 2" d="M8.5 10.3889L10.1667 12L13.5 8.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Group 3">
<g id="Rectangle 55_3" filter="url(#filter2_di_1_1218)">
<rect x="7" y="30" width="8" height="8" rx="1" fill="#83D400"/>
<rect x="6.5" y="29.5" width="9" height="9" rx="1.5" stroke="black"/>
</g>
<path id="Vector 2_2" d="M8.5 34.3889L10.1667 36L13.5 32.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<rect id="Rectangle 28" x="21" y="7" width="18" height="2" rx="1" fill="#9B9B9B"/>
<rect id="Rectangle 29" x="21" y="11" width="14" height="2" rx="1" fill="#9B9B9B"/>
<rect id="Rectangle 30" x="21" y="19" width="18" height="2" rx="1" fill="#9B9B9B"/>
<rect id="Rectangle 31" x="21" y="23" width="14" height="2" rx="1" fill="#9B9B9B"/>
<rect id="Rectangle 32" x="21" y="31" width="18" height="2" rx="1" fill="#9B9B9B"/>
<rect id="Rectangle 33" x="21" y="35" width="14" height="2" rx="1" fill="#9B9B9B"/>
</g>
<defs>
<filter id="filter0_d_1_1218" x="6" y="17" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/>
</filter>
<filter id="filter1_di_1_1218" x="6" y="5" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_1_1218"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1218"/>
</filter>
<filter id="filter2_di_1_1218" x="6" y="29" width="11" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1218"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1218" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_1_1218"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1218"/>
</filter>
</defs>
</svg>
`;s.create({attachTo:document.querySelector("#snippet-slash-command"),extraPlugins:[r,Se,ke,we,Te,Ie,Le,Ee,Re,Ae,ve,Fe,Pe,Oe,Me,Ce,He,Ke,De,Ge,ze,Ve,Ne,Ue,Be],removePlugins:["CKFinder"],toolbar:{items:["undo","redo","|","style","|","heading","|","fontColor","fontBackgroundColor","|","bold","italic","underline","-","insertTable","insertImage","ckbox","blockquote","codeBlock","htmlEmbed","insertTemplate","tableOfContents","|","numberedList","bulletedList","todoList","indent","outdent"],shouldNotGroupWhenFull:!0},template:{definitions:[{title:"Document with an image",icon:x,description:"Simple heading with text and an image.",data:`<h2>Title of the document</h2>
						<figure class="image image-style-align-right image_resized" style="width:26.32%;">
							<img src="../assets/img/ckeditor-logo.png">
							<figcaption>The image caption.</figcaption>
						</figure>
						<p>The content of the document.&nbsp;</p>`},{title:"Rich table",icon:y,description:"A table with a colorful header.",data:`<figure class="table" style="width:100%;">
						<table style="border:5px solid hsl(240, 75%, 60%);">
							<thead>
								<tr>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 1</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 2</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 3</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 4</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 5</span></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<figcaption>Caption of the table</figcaption>
					</figure>`},{title:"To-do list",icon:_,description:"A simple to-do list to keep track of things.",data:`
						<h2>My to-do list</h2>
						<h3>Today</h3>
						<ul class="todo-list">
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled checked="checked" />
									<span class="todo-list__label__description">First item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">Second item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">Third item</span>
								</label>
							</li>
						</ul>
						<h3>Tomorrow</h3>
						<ul class="todo-list">
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">First item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">Second item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">Third item</span>
								</label>
							</li>
						</ul>
						<h3>Anytime</h3>
						<ul class="todo-list">
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled checked="checked" />
									<span class="todo-list__label__description">First item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled checked="checked" />
									<span class="todo-list__label__description">Second item</span>
								</label>
							</li>
							<li>
								<label class="todo-list__label">
									<input type="checkbox" disabled />
									<span class="todo-list__label__description">Third item</span>
								</label>
							</li>
						</ul>
					`}]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","|","imageStyle:inline","imageStyle:breakText","imageStyle:wrapText","|","resizeImage","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},ui:{viewportOffset:{top:c()}},ckbox:{tokenUrl:d,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0}}).catch(e=>{console.error(e.stack)});
