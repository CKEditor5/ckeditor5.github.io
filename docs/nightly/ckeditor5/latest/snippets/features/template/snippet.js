import{Alignment as ie,RemoveFormat as le,Bold as re,Italic as ae,Code as ne,Strikethrough as de,Subscript as se,Superscript as ce,Underline as he,CKBox as pe,CKBoxImageEdit as ge,Font as fe,Heading as me,ImageInsert as ue,ImageResize as be,TodoList as xe,TableToolbar as Ce,TableCaption as ye,TableProperties as _e,TableCellProperties as we}from"ckeditor5";import{Template as Be}from"ckeditor5-premium-features";var y="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",_="https://33333.cke-cs.com/easyimage/upload/",w="33333.cke-cs.com/ws",a={tokenUrl:y,uploadUrl:_,webSocketUrl:w};var n="https://api.ckbox.io/token/demo";import{Plugin as ve}from"@ckeditor/ckeditor5-core";import{Essentials as Ee}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Ve}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Ue}from"@ckeditor/ckeditor5-block-quote";import{Bold as Pe,Italic as Ze}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Ge}from"@ckeditor/ckeditor5-heading";import{Image as Ne,ImageCaption as Qe,ImageStyle as qe,ImageToolbar as ze}from"@ckeditor/ckeditor5-image";import{Indent as $e}from"@ckeditor/ckeditor5-indent";import{Link as Ye}from"@ckeditor/ckeditor5-link";import{List as Xe}from"@ckeditor/ckeditor5-list";import{MediaEmbed as tt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as it}from"@ckeditor/ckeditor5-paragraph";import{Table as rt,TableToolbar as at}from"@ckeditor/ckeditor5-table";function d({target:e,text:t,editor:r,tippyOptions:i}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let h=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let x of r.editing.view.document.roots)x.once("change:isFocused",(ke,Le,C)=>{C&&h.destroy()});return h}function s(e,t){let r=e.items,i;return typeof t=="function"?i=r.find(t):i=r.get(t),i?i.element:void 0}function c(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as pt,Essentials as gt,CKFinderUploadAdapter as ft,Autoformat as mt,BlockToolbar as ut,Bold as bt,Italic as xt,BlockQuote as Ct,CKBox as yt,CKFinder as _t,EasyImage as wt,Heading as Bt,Image as kt,ImageCaption as Lt,ImageStyle as It,ImageToolbar as St,ImageUpload as Tt,PictureEditing as At,Indent as Mt,Link as vt,List as Ft,MediaEmbed as Et,Paragraph as Rt,PasteFromOffice as Vt,Table as Ot,TableToolbar as Ut,TextTransformation as Ht,CloudServices as Pt}from"ckeditor5";import{BalloonEditor as Kt,Essentials as Nt,CKFinderUploadAdapter as Qt,Autoformat as qt,Bold as zt,Italic as jt,BlockQuote as $t,CKBox as Jt,CKFinder as Yt,EasyImage as Wt,Heading as Xt,Image as eo,ImageCaption as to,ImageStyle as oo,ImageToolbar as io,ImageUpload as lo,PictureEditing as ro,Indent as ao,Link as no,List as so,MediaEmbed as co,Paragraph as ho,PasteFromOffice as po,Table as go,TableToolbar as fo,TextTransformation as mo,CloudServices as uo}from"ckeditor5";import{ClassicEditor as B,Essentials as k,Autoformat as L,Bold as I,Italic as S,BlockQuote as T,CKBox as A,EasyImage as M,Heading as v,Image as F,ImageCaption as E,ImageStyle as R,ImageToolbar as V,ImageUpload as O,PictureEditing as U,Indent as H,Link as P,List as Z,MediaEmbed as D,Paragraph as G,PasteFromOffice as K,Table as N,TableToolbar as Q,TextTransformation as q,CloudServices as z,AutoImage as j,ImageInsert as $,Bookmark as J}from"ckeditor5";var l=class extends B{static builtinPlugins=[k,L,I,S,T,z,M,v,F,E,R,V,O,A,H,P,Z,D,G,K,U,N,Q,q,j,$,J];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Bo,Essentials as ko,Alignment as Lo,FontSize as Io,FontFamily as So,FontColor as To,FontBackgroundColor as Ao,Autoformat as Mo,Bold as vo,Italic as Fo,Strikethrough as Eo,Underline as Ro,BlockQuote as Vo,CKBox as Oo,EasyImage as Uo,Heading as Ho,Image as Po,ImageCaption as Zo,ImageResize as Do,ImageStyle as Go,ImageToolbar as Ko,ImageUpload as No,PictureEditing as Qo,Indent as qo,IndentBlock as zo,Link as jo,List as $o,ListProperties as Jo,MediaEmbed as Yo,Paragraph as Wo,PasteFromOffice as Xo,Table as ei,TableToolbar as ti,TextTransformation as oi,CloudServices as ii}from"ckeditor5";import{InlineEditor as ni,Essentials as di,CKFinderUploadAdapter as si,Autoformat as ci,Bold as hi,Italic as pi,BlockQuote as gi,CKBox as fi,CKFinder as mi,EasyImage as ui,Heading as bi,Image as xi,ImageCaption as Ci,ImageStyle as yi,ImageToolbar as _i,ImageUpload as wi,PictureEditing as Bi,Indent as ki,Link as Li,List as Ii,MediaEmbed as Si,Paragraph as Ti,PasteFromOffice as Ai,Table as Mi,TableToolbar as vi,TextTransformation as Fi,CloudServices as Ei}from"ckeditor5";import{MultiRootEditor as Ui,Essentials as Hi,CKFinderUploadAdapter as Pi,Autoformat as Zi,Bold as Di,Italic as Gi,BlockQuote as Ki,CKBox as Ni,CKFinder as Qi,EasyImage as qi,Heading as zi,Image as ji,ImageCaption as $i,ImageStyle as Ji,ImageToolbar as Yi,ImageUpload as Wi,PictureEditing as Xi,Indent as el,Link as tl,List as ol,MediaEmbed as il,Paragraph as ll,PasteFromOffice as rl,Table as al,TableToolbar as nl,TextTransformation as dl,CloudServices as sl}from"ckeditor5";var p=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var g=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/financial-report">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_920)">
<path d="M9 41H36V12L28 5H9V41Z" fill="white"/>
<path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 24" x="13" y="35" width="19" height="2" rx="1" fill="#B4B4B4"/>
<g id="table">
<rect id="Rectangle 47" x="22" y="22" width="5" height="3" fill="#FF2B2B"/>
<rect id="Rectangle 48" x="17" y="26" width="5" height="3" fill="#9FF577"/>
<rect id="Rectangle 49" x="27" y="29" width="4" height="3" fill="#9FF577"/>
<rect id="Rectangle 46" x="13.5" y="18.5" width="18" height="14" rx="0.5" stroke="#424242"/>
<path id="Vector 3" d="M17.5 19V32" stroke="#474747"/>
<path id="Vector 4" d="M22 19V32" stroke="#474747"/>
<path id="Vector 6" d="M31 22L14 22" stroke="#474747"/>
<path id="Vector 7" d="M31 25.5L14 25.5" stroke="#474747"/>
<path id="Vector 8" d="M31 29L14 29" stroke="#474747"/>
<path id="Vector 5" d="M27 19V32" stroke="#474747"/>
</g>
<rect id="Rectangle 25" x="13" y="10" width="12" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 26" x="13" y="14" width="12" height="2" rx="1" fill="#B4B4B4"/>
</g>
<defs>
<filter id="filter0_d_1_920" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_920"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_920" result="shape"/>
</filter>
</defs>
</svg>
`;var f=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/formal-letter">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_893)">
<path d="M9 41H36V11L31 5H9V41Z" fill="white"/>
<path d="M35.25 11.2715V40.25H9.75V5.75H30.6487L35.25 11.2715Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 23" x="16" y="15" width="12" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 25" x="13" y="20" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 26" x="13" y="24" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 27" x="13" y="28" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 28" x="22" y="33" width="10" height="2" rx="1" fill="#B4B4B4"/>
<g id="badge">
<g id="Star 1" filter="url(#filter1_d_1_893)">
<path d="M35 3L36.9919 4.52723L39.4995 4.63769L40.0437 7.088L41.8937 8.78446L40.7355 11.0113L41.0622 13.5L38.7436 14.4614L37.3941 16.5778L35 15.824L32.6059 16.5778L31.2564 14.4614L28.9378 13.5L29.2645 11.0113L28.1063 8.78446L29.9563 7.088L30.5005 4.63769L33.0081 4.52723L35 3Z" fill="#FFD12D"/>
<path d="M35.4563 2.40481C35.1871 2.1984 34.8129 2.1984 34.5437 2.40481L32.7391 3.78835L30.4675 3.88842C30.1286 3.90334 29.8419 4.14391 29.7683 4.47508L29.2753 6.69485L27.5994 8.2317C27.3494 8.46098 27.2844 8.82955 27.441 9.13052L28.4901 11.1479L28.1942 13.4024C28.1501 13.7387 28.3372 14.0629 28.6505 14.1928L30.751 15.0638L31.9735 16.9811C32.1559 17.2671 32.5075 17.3951 32.8311 17.2932L35 16.6103L37.1689 17.2932C37.4925 17.3951 37.8441 17.2671 38.0265 16.9811L39.249 15.0638L41.3495 14.1928C41.6628 14.0629 41.8499 13.7387 41.8058 13.4024L41.5099 11.1479L42.559 9.13052C42.7156 8.82955 42.6506 8.46098 42.4006 8.2317L40.7247 6.69485L40.2317 4.47508C40.1581 4.14391 39.8714 3.90334 39.5325 3.88842L37.2609 3.78835L35.4563 2.40481Z" stroke="#333333" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<path id="Vector 2" d="M32 11L34.5 13L38.5 8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<filter id="filter0_d_1_893" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_893"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_893" result="shape"/>
</filter>
<filter id="filter1_d_1_893" x="26.6063" y="1.5" width="16.7875" height="17.578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_893"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_893" result="shape"/>
</filter>
</defs>
</svg>
`;var m=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/resume">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_1054)">
<path d="M9 41H36V12L28 5H9V41Z" fill="white"/>
<path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 24" x="13" y="23" width="8" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 45" x="13" y="19" width="9" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 27" x="13" y="27" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 42" x="13" y="31" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 23" x="13" y="15" width="11" height="2" rx="1" fill="#B4B4B4"/>
<g id="Union">
<mask id="path-9-inside-1_1_1054" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z" fill="#FFBF9B"/>
<path d="M30.1747 20.3333L29.4947 19.6002L28.3447 20.6668L29.797 21.2593L30.1747 20.3333ZM26.7753 20.3333L27.1531 21.2593L28.6054 20.6668L27.4554 19.6002L26.7753 20.3333ZM26.753 20.3425L27.1356 21.2664L27.1357 21.2664L26.753 20.3425ZM25.293 21.318L26.0002 22.0251L26.0002 22.0251L25.293 21.318ZM24.3176 22.7779L23.3937 22.3952H23.3937L24.3176 22.7779ZM24.0028 24.001L24.9966 24.1119V24.1119L24.0028 24.001ZM24.475 24.5L24.475 23.5H24.475V24.5ZM28.475 24.5V25.5V24.5ZM32.9473 24.001L31.9534 24.1119V24.1119L32.9473 24.001ZM32.6325 22.7779L31.7086 23.1606L31.7086 23.1606L32.6325 22.7779ZM31.657 21.318L32.3641 20.6109L32.3641 20.6109L31.657 21.318ZM30.1971 20.3425L30.5798 19.4187L30.5798 19.4187L30.1971 20.3425ZM29.975 18.5C29.975 18.9346 29.7915 19.3249 29.4947 19.6002L30.8548 21.0665C31.5425 20.4286 31.975 19.5141 31.975 18.5H29.975ZM28.475 17C29.3035 17 29.975 17.6716 29.975 18.5H31.975C31.975 16.567 30.408 15 28.475 15V17ZM26.975 18.5C26.975 17.6716 27.6466 17 28.475 17V15C26.542 15 24.975 16.567 24.975 18.5H26.975ZM27.4554 19.6002C27.1586 19.3249 26.975 18.9346 26.975 18.5H24.975C24.975 19.5141 25.4076 20.4286 26.0953 21.0665L27.4554 19.6002ZM27.1357 21.2664C27.1413 21.2641 27.1471 21.2617 27.1531 21.2593L26.3976 19.4074C26.3886 19.4111 26.3795 19.4148 26.3703 19.4187L27.1357 21.2664ZM26.0002 22.0251C26.3252 21.7001 26.711 21.4423 27.1356 21.2664L26.3703 19.4187C25.703 19.6951 25.0967 20.1002 24.5859 20.6109L26.0002 22.0251ZM25.2415 23.1606C25.4173 22.736 25.6751 22.3501 26.0002 22.0251L24.5859 20.6109C24.0752 21.1216 23.6701 21.7279 23.3937 22.3952L25.2415 23.1606ZM24.9966 24.1119C25.033 23.7855 25.1153 23.4652 25.2415 23.1606L23.3937 22.3952C23.1954 22.8739 23.0662 23.3772 23.0089 23.8901L24.9966 24.1119ZM24.475 23.5C24.7172 23.5 25.0404 23.719 24.9966 24.1119L23.0089 23.8901C22.9039 24.8319 23.6806 25.5 24.475 25.5V23.5ZM28.475 23.5L24.475 23.5L24.475 25.5L28.475 25.5L28.475 23.5ZM32.475 23.5H28.475V25.5H32.475V23.5ZM31.9534 24.1119C31.9096 23.719 32.2329 23.5 32.475 23.5V25.5C33.2695 25.5 34.0462 24.8319 33.9411 23.8901L31.9534 24.1119ZM31.7086 23.1606C31.8348 23.4652 31.917 23.7855 31.9534 24.1119L33.9411 23.8901C33.8839 23.3772 33.7546 22.8739 33.5564 22.3952L31.7086 23.1606ZM30.9499 22.0251C31.2749 22.3501 31.5327 22.736 31.7086 23.1606L33.5564 22.3952C33.28 21.728 32.8748 21.1216 32.3641 20.6109L30.9499 22.0251ZM29.8144 21.2664C30.2391 21.4423 30.6249 21.7001 30.9499 22.0251L32.3641 20.6109C31.8534 20.1002 31.2471 19.6951 30.5798 19.4187L29.8144 21.2664ZM29.797 21.2593C29.8029 21.2617 29.8087 21.2641 29.8144 21.2664L30.5798 19.4187C30.5706 19.4148 30.5615 19.4111 30.5524 19.4074L29.797 21.2593Z" fill="black" mask="url(#path-9-inside-1_1_1054)"/>
</g>
</g>
<defs>
<filter id="filter0_d_1_1054" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1054"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1054" result="shape"/>
</filter>
</defs>
</svg>
`;var u=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var b=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;l.create(document.querySelector("#snippet-template"),{placeholder:"Start typing here or insert a template using the toolbar button.",extraPlugins:[ie,re,ne,pe,ge,fe,me,ue,be,ae,le,de,se,ce,ye,we,_e,Ce,Be,xe,he],toolbar:{items:["undo","redo","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","-","link","insertTable","insertImage","insertTemplate","|","bulletedList","numberedList","todoList"],shouldNotGroupWhenFull:!0},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},ckbox:{tokenUrl:n,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},ui:{viewportOffset:{top:c()}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},template:{definitions:[{title:"Document with an image",description:"Simple heading with text and image.",icon:p,data:`<h2>Title of the document</h2>
						<figure class="image image-style-align-right image_resized" style="width:26.32%;">
							<img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/ckeditor-logo.png">
							<figcaption>A caption of the image.</figcaption>
						</figure>
						<p>The content of the document.&nbsp;</p>`},{title:"Annual financial report",description:"A report that spells out the company's financial condition.",icon:g,data:`<figure class="table">
						<table style="border:2px solid hsl(0, 0%, 0%);">
							<thead>
								<tr>
									<th style="text-align:center;" rowspan="2">Metric name</th>
									<th style="text-align:center;" colspan="4">Year</th>
								</tr>
								<tr>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2019</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2020</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2021</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2022</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th><strong>Revenue</strong></th>
									<td>$100,000.00</td>
									<td>$120,000.00</td>
									<td>$130,000.00</td>
									<td>$180,000.00</td>
								</tr>
								<tr>
									<th style="background-color:hsl(0, 0%, 90%);"><strong>Operating expenses</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<th><strong>Interest</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<th style="background-color:hsl(0, 0%, 90%);"><strong>Net profit</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
					</figure>`},{title:"Resume",description:"A quick overview of candidate's professional qualifications.",icon:m,data:`<figure class="image image_resized" style="width:11.42%;">
							<picture>
								<img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/user-avatar.png">
							</picture>
						</figure>
						<h2 style="text-align:center;">John Doe</h2>
						<p style="text-align:center;"><i>Address, Phone, e-mail, social media</i></p>
						<h3>Profile</h3>
						<p>A quick summary of who you are and what you specialize in.</p>
						<h3>Employment history</h3>
						<ul>
							<li>
								<p><strong>MARCH 2021 - CURRENT&nbsp;</strong></p>
								<p>Position (Company name, city)</p>
								<ul>
									<li>Most important accomplishments.</li>
									<li>Most important &nbsp;responsibilities.</li>
								</ul>
							</li>
							<li>
								<p><strong>JANUARY 2019 - MARCH 2021&nbsp;</strong></p>
								<p>Position (Company name, city)</p>
								<ul>
									<li>Most important accomplishments.</li>
									<li>Most important &nbsp;responsibilities.</li>
								</ul>
							</li>
						</ul>
						<h3>Skills</h3>
						<ul>
							<li>A list of your skills.</li>
						</ul>
						<h3>Education</h3>
						<ul>
							<li>
								<p><strong>MAY 2018</strong></p>
								<p>Name of University, Degree</p>
							</li>
							<li>
								<p><strong>JULY 2015</strong></p>
								<p>Name of University, Degree</p>
							</li>
						</ul>`},{title:"Formal business letter",description:"A clear letter template for business communication.",icon:f,data:()=>`<p style="text-align:right;">${new Date().toLocaleDateString()}</p>
						<p><strong>Company name,</strong><br><strong>Street Name, Number</strong><br><strong>Post code, City</strong></p>
						<p>&nbsp;</p>
						<p>Dear [First name],</p>
						<p>Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter.&nbsp;</p>
						<p>Kind regards,</p>
						<p>Name Surname<br>Position, Company<br>Phone, E-mail</p>`},{title:"Rich table",description:"A table with a colorful header.",icon:u,data:`<figure class="table" style="width:100%;">
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
					</figure>`},{title:"To-do list",description:"A simple to-do list to keep track of things.",icon:b,data:`
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
					`}]},cloudServices:a}).then(e=>{window.editor=e,d({target:s(e.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="Insert template"),text:"Click here to insert a template.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
