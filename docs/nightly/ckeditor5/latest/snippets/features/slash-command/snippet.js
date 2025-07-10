import{Bold as le,Code as ae,Italic as re,Underline as ne,BlockQuote as se,CKBox as de,CKBoxImageEdit as ce,CodeBlock as ge,Font as me,Heading as pe,HorizontalLine as he,GeneralHtmlSupport as fe,HtmlEmbed as ue,ImageInsert as be,ImageResize as xe,ImageUpload as _e,TodoList as ye,Mention as ke,Style as Be,TableProperties as Ce,TableCellProperties as we}from"ckeditor5";import{SlashCommand as Ie,Template as Te,TableOfContents as Se}from"ckeditor5-premium-features";var l="https://api.ckbox.io/token/demo";import{Plugin as d}from"@ckeditor/ckeditor5-core";import{Essentials as c}from"@ckeditor/ckeditor5-essentials";import{Autoformat as g}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as m}from"@ckeditor/ckeditor5-block-quote";import{Bold as p,Italic as h}from"@ckeditor/ckeditor5-basic-styles";import{Heading as f}from"@ckeditor/ckeditor5-heading";import{Image as u,ImageCaption as b,ImageStyle as x,ImageToolbar as _}from"@ckeditor/ckeditor5-image";import{Indent as y}from"@ckeditor/ckeditor5-indent";import{Link as k}from"@ckeditor/ckeditor5-link";import{List as B}from"@ckeditor/ckeditor5-list";import{MediaEmbed as C}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as w}from"@ckeditor/ckeditor5-paragraph";import{Table as I,TableToolbar as T}from"@ckeditor/ckeditor5-table";var o=class extends d{static get pluginName(){return"ArticlePluginSet"}static get requires(){return[c,g,m,p,f,u,b,x,_,y,h,k,B,C,w,I,T]}};function a(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Xe,Essentials as Je,CKFinderUploadAdapter as $e,Autoformat as Ye,BlockToolbar as et,Bold as tt,Italic as ot,BlockQuote as it,CKBox as lt,CKFinder as at,EasyImage as rt,Heading as nt,Image as st,ImageCaption as dt,ImageStyle as ct,ImageToolbar as gt,ImageUpload as mt,PictureEditing as pt,Indent as ht,Link as ft,List as ut,MediaEmbed as bt,Paragraph as xt,PasteFromOffice as _t,Table as yt,TableToolbar as kt,TextTransformation as Bt,CloudServices as Ct}from"ckeditor5";import{BalloonEditor as St,Essentials as At,CKFinderUploadAdapter as Et,Autoformat as Ft,Bold as Lt,Italic as vt,BlockQuote as Rt,CKBox as Ot,CKFinder as Pt,EasyImage as Mt,Heading as Ut,Image as Ht,ImageCaption as Kt,ImageStyle as Dt,ImageToolbar as Gt,ImageUpload as Vt,PictureEditing as zt,Indent as Qt,Link as qt,List as Nt,MediaEmbed as jt,Paragraph as Zt,PasteFromOffice as Wt,Table as Xt,TableToolbar as Jt,TextTransformation as $t,CloudServices as Yt}from"ckeditor5";import{ClassicEditor as S,Essentials as A,Autoformat as E,Bold as F,Italic as L,BlockQuote as v,CKBox as R,EasyImage as O,Heading as P,Image as M,ImageCaption as U,ImageStyle as H,ImageToolbar as K,ImageUpload as D,PictureEditing as G,Indent as V,Link as z,List as Q,MediaEmbed as q,Paragraph as N,PasteFromOffice as j,Table as Z,TableToolbar as W,TextTransformation as X,CloudServices as J,AutoImage as $,ImageInsert as Y,Bookmark as ee}from"ckeditor5";var i=class extends S{static builtinPlugins=[A,E,F,L,v,J,O,P,M,U,H,K,D,R,V,z,Q,q,N,j,G,Z,W,X,$,Y,ee];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as ro,Essentials as no,Alignment as so,FontSize as co,FontFamily as go,FontColor as mo,FontBackgroundColor as po,Autoformat as ho,Bold as fo,Italic as uo,Strikethrough as bo,Underline as xo,BlockQuote as _o,CKBox as yo,EasyImage as ko,Heading as Bo,Image as Co,ImageCaption as wo,ImageResize as Io,ImageStyle as To,ImageToolbar as So,ImageUpload as Ao,PictureEditing as Eo,Indent as Fo,IndentBlock as Lo,Link as vo,List as Ro,ListProperties as Oo,MediaEmbed as Po,Paragraph as Mo,PasteFromOffice as Uo,Table as Ho,TableToolbar as Ko,TextTransformation as Do,CloudServices as Go}from"ckeditor5";import{InlineEditor as qo,Essentials as No,CKFinderUploadAdapter as jo,Autoformat as Zo,Bold as Wo,Italic as Xo,BlockQuote as Jo,CKBox as $o,CKFinder as Yo,EasyImage as ei,Heading as ti,Image as oi,ImageCaption as ii,ImageStyle as li,ImageToolbar as ai,ImageUpload as ri,PictureEditing as ni,Indent as si,Link as di,List as ci,MediaEmbed as gi,Paragraph as mi,PasteFromOffice as pi,Table as hi,TableToolbar as fi,TextTransformation as ui,CloudServices as bi}from"ckeditor5";import{MultiRootEditor as ki,Essentials as Bi,CKFinderUploadAdapter as Ci,Autoformat as wi,Bold as Ii,Italic as Ti,BlockQuote as Si,CKBox as Ai,CKFinder as Ei,EasyImage as Fi,Heading as Li,Image as vi,ImageCaption as Ri,ImageStyle as Oi,ImageToolbar as Pi,ImageUpload as Mi,PictureEditing as Ui,Indent as Hi,Link as Ki,List as Di,MediaEmbed as Gi,Paragraph as Vi,PasteFromOffice as zi,Table as Qi,TableToolbar as qi,TextTransformation as Ni,CloudServices as ji}from"ckeditor5";var r=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var n=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var s=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;i.create(document.querySelector("#snippet-slash-command"),{extraPlugins:[o,se,le,ae,de,ce,ge,me,fe,pe,he,ue,be,xe,_e,re,ke,Ie,Be,we,Se,Ce,Te,ye,ne],removePlugins:["CKFinder"],toolbar:{items:["undo","redo","|","style","|","heading","|","fontColor","fontBackgroundColor","|","bold","italic","underline","-","insertTable","insertImage","ckbox","blockquote","codeBlock","htmlEmbed","insertTemplate","tableOfContents","|","numberedList","bulletedList","todoList","indent","outdent"],shouldNotGroupWhenFull:!0},template:{definitions:[{title:"Document with an image",icon:r,description:"Simple heading with text and an image.",data:`<h2>Title of the document</h2>
						<figure class="image image-style-align-right image_resized" style="width:26.32%;">
							<img src="../assets/img/ckeditor-logo.png">
							<figcaption>The image caption.</figcaption>
						</figure>
						<p>The content of the document.&nbsp;</p>`},{title:"Rich table",icon:n,description:"A table with a colorful header.",data:`<figure class="table" style="width:100%;">
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
					</figure>`},{title:"To-do list",icon:s,description:"A simple to-do list to keep track of things.",data:`
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
					`}]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","|","imageStyle:inline","imageStyle:breakText","imageStyle:wrapText","|","resizeImage","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},ui:{viewportOffset:{top:a()}},ckbox:{tokenUrl:l,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0}}).catch(t=>{console.error(t.stack)});
