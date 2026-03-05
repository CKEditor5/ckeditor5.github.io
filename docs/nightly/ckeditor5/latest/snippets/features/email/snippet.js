var p="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",h="https://33333.cke-cs.com/easyimage/upload/",m="33333.cke-cs.com/ws",i={tokenUrl:p,uploadUrl:h,webSocketUrl:m};var l="https://api.ckbox.io/token/demo";import{Plugin as ye}from"@ckeditor/ckeditor5-core";import{Essentials as xe}from"@ckeditor/ckeditor5-essentials";import{Autoformat as we}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Le}from"@ckeditor/ckeditor5-block-quote";import{Bold as ke,Italic as Ie}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Te}from"@ckeditor/ckeditor5-heading";import{Image as Se,ImageCaption as Me,ImageStyle as ve,ImageToolbar as Ae}from"@ckeditor/ckeditor5-image";import{Indent as Re}from"@ckeditor/ckeditor5-indent";import{Link as Pe}from"@ckeditor/ckeditor5-link";import{List as Ze}from"@ckeditor/ckeditor5-list";import{MediaEmbed as De}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ke}from"@ckeditor/ckeditor5-paragraph";import{Table as Ne,TableToolbar as qe}from"@ckeditor/ckeditor5-table";function r(){let o=document.documentElement;return parseInt(window.getComputedStyle(o).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Xe,Essentials as Ye,CKFinderUploadAdapter as et,Autoformat as tt,BlockToolbar as ot,Bold as it,Italic as lt,BlockQuote as rt,CKBox as at,CKFinder as nt,EasyImage as dt,Heading as st,Image as ct,ImageCaption as gt,ImageStyle as pt,ImageToolbar as ht,ImageUpload as mt,PictureEditing as ut,Indent as ft,IndentBlock as yt,Link as bt,List as xt,MediaEmbed as Ct,Paragraph as wt,PasteFromOffice as Bt,Table as Lt,TableToolbar as Ft,TextTransformation as kt,CloudServices as It}from"ckeditor5";import{BalloonEditor as St,Essentials as Mt,CKFinderUploadAdapter as vt,Autoformat as At,Bold as Vt,Italic as Rt,BlockQuote as Ht,CKBox as Pt,CKFinder as Ot,EasyImage as Zt,Heading as Ut,Image as Dt,ImageCaption as zt,ImageStyle as Kt,ImageToolbar as Gt,ImageUpload as Nt,PictureEditing as qt,Indent as Qt,IndentBlock as Wt,Link as jt,List as Jt,MediaEmbed as $t,Paragraph as Xt,PasteFromOffice as Yt,Table as eo,TableToolbar as to,TextTransformation as oo,CloudServices as io}from"ckeditor5";import{ClassicEditor as no,Essentials as so,Autoformat as co,Bold as go,Italic as po,BlockQuote as ho,CKBox as mo,EasyImage as uo,Heading as fo,Image as yo,ImageCaption as bo,ImageStyle as xo,ImageToolbar as Co,ImageUpload as wo,PictureEditing as Bo,Indent as Lo,IndentBlock as Fo,Link as ko,List as Io,MediaEmbed as _o,Paragraph as To,PasteFromOffice as Eo,Table as So,TableToolbar as Mo,TextTransformation as vo,CloudServices as Ao,AutoImage as Vo,ImageInsert as Ro,Bookmark as Ho}from"ckeditor5";import{DecoupledEditor as Uo,Essentials as Do,Alignment as zo,FontSize as Ko,FontFamily as Go,FontColor as No,FontBackgroundColor as qo,Autoformat as Qo,Bold as Wo,Italic as jo,Strikethrough as Jo,Underline as $o,BlockQuote as Xo,CKBox as Yo,EasyImage as ei,Heading as ti,Image as oi,ImageCaption as ii,ImageResize as li,ImageStyle as ri,ImageToolbar as ai,ImageUpload as ni,PictureEditing as di,Indent as si,IndentBlock as ci,Link as gi,List as pi,ListProperties as hi,MediaEmbed as mi,Paragraph as ui,PasteFromOffice as fi,Table as yi,TableToolbar as bi,TextTransformation as xi,CloudServices as Ci}from"ckeditor5";import{InlineEditor as Fi,Essentials as ki,CKFinderUploadAdapter as Ii,Autoformat as _i,Bold as Ti,Italic as Ei,BlockQuote as Si,CKBox as Mi,CKFinder as vi,EasyImage as Ai,Heading as Vi,Image as Ri,ImageCaption as Hi,ImageStyle as Pi,ImageToolbar as Oi,ImageUpload as Zi,PictureEditing as Ui,Indent as Di,IndentBlock as zi,Link as Ki,List as Gi,MediaEmbed as Ni,Paragraph as qi,PasteFromOffice as Qi,Table as Wi,TableToolbar as ji,TextTransformation as Ji,CloudServices as $i}from"ckeditor5";import{MultiRootEditor as tl,Essentials as ol,CKFinderUploadAdapter as il,Autoformat as ll,Bold as rl,Italic as al,BlockQuote as nl,CKBox as dl,CKFinder as sl,EasyImage as cl,Heading as gl,Image as pl,ImageCaption as hl,ImageStyle as ml,ImageToolbar as ul,ImageUpload as fl,PictureEditing as yl,Indent as bl,IndentBlock as xl,Link as Cl,List as wl,MediaEmbed as Bl,Paragraph as Ll,PasteFromOffice as Fl,Table as kl,TableToolbar as Il,TextTransformation as _l,CloudServices as Tl}from"ckeditor5";var a=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var n=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var d=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var s=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var c=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;import{Alignment as C,AutoImage as w,AutoLink as B,BlockQuote as L,Bold as F,CKBox as k,CKBoxImageEdit as I,ClassicEditor as _,CloudServices as T,Emoji as E,EmptyBlock as S,FindAndReplace as M,Font as v,Fullscreen as A,GeneralHtmlSupport as V,Heading as R,HorizontalLine as H,ImageInline as P,ImageInsert as O,ImageResize as Z,ImageTextAlternative as U,ImageToolbar as D,Indent as z,IndentBlock as K,Italic as G,Link as N,List as q,Mention as Q,PageBreak as W,PasteFromOffice as j,PictureEditing as J,RemoveFormat as $,Strikethrough as X,Style as Y,Table as ee,TableCellProperties as te,TableLayout as oe,TableProperties as ie,TableToolbar as le,Underline as re}from"ckeditor5";import{EmailConfigurationHelper as g,ExportInlineStyles as ae,MergeFields as ne,PasteFromOfficeEnhanced as de,SourceEditingEnhanced as se,Template as ce}from"ckeditor5-premium-features";var t=[{color:"#000000",label:"Black"},{color:"#4D4D4D",label:"Dim grey"},{color:"#999999",label:"Grey"},{color:"#E6E6E6",label:"Light grey"},{color:"#FFFFFF",label:"White",hasBorder:!0},{color:"#E65C5C",label:"Red"},{color:"#E69C5C",label:"Orange"},{color:"#E6E65C",label:"Yellow"},{color:"#C2E65C",label:"Light green"},{color:"#5CE65C",label:"Green"},{color:"#5CE6A6",label:"Aquamarine"},{color:"#5CE6E6",label:"Turquoise"},{color:"#5CA6E6",label:"Light blue"},{color:"#5C5CE6",label:"Blue"},{color:"#A65CE6",label:"Purple"}],ge=[{title:"Check-in email",description:"A friendly check-in email template for a business customer follow-up.",icon:c,data:`
			<table class="layout-table table" style="width: 100%;">
				<tbody>
					<tr>
						<td>
							<p>
								<img class="image_resized" style="width:100%;"
									src="https://images.unsplash.com/photo-1587303988571-c5563c0bceab?q=80&w=870&auto=format" +
										"&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									width="870" height="580"
									alt="Friendly hello greeting image."/>
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<h1 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 36px; font-weight: 700;">
								Just checking in
							</h1>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<h2 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 24px; font-weight: 400;">
								\u{1F44B} Hello {{clientName}}!
							</h2>
						</td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<p style="color: #333333; margin: 0px;">
								We wanted to reach out and see how everything is going. Is there anything we can help you with?
							</p>
							<p style="color: #333333; margin: 0px;">
								We're here to support you every step of the way.
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<p>
								<a href="#" class="button button--green">Get in touch</a>
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">Have questions? We're here to help.</p>
							<p style="color: #FFFFFF; margin: 0;">Reply to this email or contact us anytime.</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">
								<a href="https://unsplash.com/photos/silver-click-pen-on-white-paper-fPbDggoRaQA"
									style="color: #FFFFFF;">Photo</a> by R Mo on Unsplash
							</p>
							<p style="color: #FFFFFF; margin: 0;">
								Copyright 2025 CKSource Holding sp. z o.o. All rights reserved.
							</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
				</tbody>
			</table>
		`},{title:"Thank-you email",description:"A professional thank you email template to express gratitude to customers.",icon:s,data:`
			<table class="layout-table table" style="width: 100%;">
				<tbody>
					<tr>
						<td style="padding: 12px;">
							<h1 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 36px; font-weight: 700;">
								Thank you! \u{1F389}
							</h1>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="padding: 12px;">
							<h2 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 24px; font-weight: 400;">
								Dear {{clientName}},
							</h2>
						</td>
					</tr>
					<tr>
						<td style="padding: 12px;">
							<p style="color: #333333; margin: 0px;">
								We wanted to take a moment to express our sincere gratitude for your
								{{actionType}}.
							</p>
							<p style="color: #333333; margin: 0px;">
								Your support means the world to us, and we truly appreciate your trust in our
								services.
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="padding: 12px;">
							<p style="color: #333333; margin: 0;">With gratitude,</p>
							<p style="color: #333333; margin: 0;">The Team</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">
								Copyright 2025 CKSource Holding sp. z o.o. All rights reserved.
							</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
				</tbody>
			</table>
		`},{title:"Meeting confirmation email",description:"A meeting confirmation email template with date, time, location, and duration details.",icon:d,data:`
			<table class="layout-table table" style="width: 100%;">
				<tbody>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<h1 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 36px; font-weight: 700;">
								Meeting Confirmed
							</h1>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<h2 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 24px; font-weight: 400;">
								Hello {{clientName}},
							</h2>
						</td>
					</tr>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<p style="color: #333333; margin: 0px;">
								This email confirms your scheduled meeting. We look forward to speaking with you.
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="background-color: #FFF475; padding: 12px;">
							<table class="layout-table table" style="width: 100%;">
								<colgroup>
									<col style="width: 50%;">
									<col style="width: 50%;">
								</colgroup>
								<tbody>
									<tr>
										<td style="padding: 8px 12px 8px 0; vertical-align: top;">
											<p style="color: #333333; margin: 0; font-weight: 700;">\u{1F4C5} Date:</p>
											<p style="color: #333333; margin: 0;">{{meetingDate}}</p>
										</td>
										<td style="padding: 8px 0 8px 12px; vertical-align: top;">
											<p style="color: #333333; margin: 0; font-weight: 700;">\u23F0 Time:</p>
											<p style="color: #333333; margin: 0;">{{meetingTime}}</p>
										</td>
									</tr>
									<tr>
										<td style="padding: 8px 12px 8px 0; vertical-align: top;">
											<p style="color: #333333; margin: 0; font-weight: 700;">\u{1F4CD} Location:</p>
											<p style="color: #333333; margin: 0;">{{meetingLocation}}</p>
										</td>
										<td style="padding: 8px 0 8px 12px; vertical-align: top;">
											<p style="color: #333333; margin: 0; font-weight: 700;">\u23F1\uFE0F Duration:</p>
											<p style="color: #333333; margin: 0;">{{meetingDuration}}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<p>
								<a href="#" class="button button--black">Add to calendar</a>
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">
								Need to reschedule?
								<a href="#" style="color: #FFFFFF;">Reply</a> to this email
								or <a href="#" style="color: #FFFFFF;">contact us</a>.
							</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">
								Copyright 2025 CKSource Holding sp. z o.o. All rights reserved.
							</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
				</tbody>
			</table>
		`},{title:"Introductory outreach email",description:"A professional introductory email template for reaching out to new contacts.",icon:n,data:`
			<table class="layout-table table" style="width: 100%;">
				<tbody>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<h1 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 36px; font-weight: 700;">
								Nice to meet you!
							</h1>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<h2 style="border-bottom: none; color: #333333; margin: 0; padding: 0;
								font-size: 24px; font-weight: 400;">
								Hello {{clientName}},
							</h2>
						</td>
					</tr>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<p style="color: #333333; margin: 0px;">
								I hope this email finds you well. My name is {{senderName}}, and I'm reaching
								out because {{outreachReason}}.
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; padding: 12px;">
							<p style="color: #333333; margin: 0px;">
								I'd love to learn more about your needs and see how we might be able to help.
							</p>
							<p style="color: #333333; margin: 0px;">
								Would you be open to a brief conversation?
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<p>
								<a href="#" class="button button--yellow">Schedule a call \u{1F4DE}</a>
							</p>
						</td>
					</tr>
					<tr>
						<td style="height: 50px;"></td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">Best regards,</p>
							<p style="color: #FFFFFF; margin: 0;">{{senderName}}</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
					<tr>
						<td style="text-align: center; background-color: #141517; padding: 12px;">
							<p style="color: #FFFFFF; margin: 0;">
								Copyright 2025 CKSource Holding sp. z o.o. All rights reserved.
							</p>
						</td>
					</tr>
					<tr>
						<td style="background-color: #141517; height: 30px;"></td>
					</tr>
				</tbody>
			</table>
		`},{title:"Two-column table layout",description:"A simple layout table with two columns.",icon:a,data:`
			<table class="table layout-table" style="width: 100%; height: 100%;">
				<colgroup>
					<col style="width: 50%;">
					<col style="width: 50%;">
				</colgroup>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
			</table>
		`},{title:"Three-column table layout",description:"A simple layout table with three columns.",icon:a,data:`
			<table class="table layout-table" style="width: 100%; height: 100%;">
				<colgroup>
					<col style="width: 33.33%;">
					<col style="width: 33.34%;">
					<col style="width: 33.33%;">
				</colgroup>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
			</table>
		`}];_.create(document.querySelector("#snippet-email-editing"),{plugins:[B,J,R,F,G,re,X,v,q,N,E,P,O,Z,w,U,D,k,I,g,T,ee,le,z,K,ne,se,ie,te,oe,ce,Q,S,ae,V,Y,j,de,g,C,L,A,H,W,$,M],cloudServices:i,toolbar:{shouldNotGroupWhenFull:!0,items:["fullscreen","|","undo","redo","findAndReplace","|","insertMergeField","previewMergeFields","|","sourceEditingEnhanced","|","heading","style","|","bold","italic","underline","strikethrough","alignment","-","insertTable","insertTableLayout","blockQuote","horizontalLine","pageBreak","removeFormat","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","link","emoji","insertImage","insertTemplate","|","bulletedList","numberedList","outdent","indent"]},fontColor:{colorPicker:{format:"hex"},colors:t},fontBackgroundColor:{colorPicker:{format:"hex"},colors:t},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"],tableCellProperties:{borderColors:t,backgroundColors:t},tableProperties:{borderColors:t,backgroundColors:t}},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"}]},htmlSupport:{preserveEmptyBlocksInEditingView:!0,allow:[{name:/^(div|table|tbody|tr|td|span|img|h1|h2|h3|p|a)$/,attributes:!0,classes:!0,styles:!0}]},image:{toolbar:["resizeImage:20","resizeImage:60","resizeImage:100","|","imageTextAlternative","|","link"],resizeOptions:[{name:"resizeImage:20",value:"20",icon:"small"},{name:"resizeImage:60",value:"60",icon:"medium"},{name:"resizeImage:100",value:"100",icon:"large"}],upload:{types:["jpeg","png","gif","bmp","webp","tiff","svg+xml"]}},ui:{viewportOffset:{top:r()}},ckbox:{tokenUrl:l,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},template:{definitions:ge},mergeFields:{previewModes:["$labels","$defaultValues"],initialPreviewMode:"$labels",definitions:[{id:"clientName",type:"text",label:"Client name",defaultValue:"John Doe"},{id:"discountValue",type:"text",label:"Discount value",defaultValue:"20%"},{id:"benefit1",type:"text",label:"Benefit 1",defaultValue:"Boosts energy"},{id:"benefit2",type:"text",label:"Benefit 2",defaultValue:"Antioxidants"},{id:"benefit3",type:"text",label:"Benefit 3",defaultValue:"Immune support"},{id:"actionType",type:"text",label:"Action type",defaultValue:"partnership"},{id:"meetingDate",type:"text",label:"Meeting date",defaultValue:"Monday, January 15, 2025"},{id:"meetingTime",type:"text",label:"Meeting time",defaultValue:"2:00 PM - 3:00 PM EST"},{id:"meetingLocation",type:"text",label:"Meeting location",defaultValue:"Virtual meeting - alink will be sent separately"},{id:"meetingDuration",type:"text",label:"Meeting duration",defaultValue:"1 hour"},{id:"senderName",type:"text",label:"Sender name",defaultValue:"Jane Smith"},{id:"outreachReason",type:"text",label:"Outreach reason",defaultValue:"I noticed your company is doing great work in the industry"}]},style:{definitions:[{name:"CTA Primary",element:"a",classes:["button","button--green"]},{name:"CTA Secondary",element:"a",classes:["button","button--black"]}]},emoji:{definitionsUrl:"cdn"}}).then(o=>{window.editor=o}).catch(o=>{console.error(o.stack)});
