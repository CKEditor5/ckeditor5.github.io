var s="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",d="https://33333.cke-cs.com/easyimage/upload/",m="33333.cke-cs.com/ws",a={tokenUrl:s,uploadUrl:d,webSocketUrl:m};var i="https://api.ckbox.io/token/demo";import{Plugin as ne}from"@ckeditor/ckeditor5-core";import{Essentials as de}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ce}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as ue}from"@ckeditor/ckeditor5-block-quote";import{Bold as pe,Italic as fe}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Te}from"@ckeditor/ckeditor5-heading";import{Image as Ie,ImageCaption as xe,ImageStyle as ye,ImageToolbar as Ee}from"@ckeditor/ckeditor5-image";import{Indent as we}from"@ckeditor/ckeditor5-indent";import{Link as Se}from"@ckeditor/ckeditor5-link";import{List as Ae}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Le}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Pe}from"@ckeditor/ckeditor5-paragraph";import{Table as Ue,TableToolbar as Re}from"@ckeditor/ckeditor5-table";function l(){let o=document.documentElement;return parseInt(window.getComputedStyle(o).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ve,Essentials as Qe,CKFinderUploadAdapter as Ge,Autoformat as Ne,BlockToolbar as qe,Bold as je,Italic as We,BlockQuote as $e,CKBox as Xe,CKFinder as Je,EasyImage as Ze,Heading as Ye,Image as et,ImageCaption as tt,ImageStyle as ot,ImageToolbar as at,ImageUpload as it,PictureEditing as lt,Indent as rt,Link as nt,List as st,MediaEmbed as dt,Paragraph as mt,PasteFromOffice as ct,Table as gt,TableToolbar as ut,TextTransformation as bt,CloudServices as pt}from"ckeditor5";import{BalloonEditor as Ct,Essentials as It,CKFinderUploadAdapter as xt,Autoformat as yt,Bold as Et,Italic as kt,BlockQuote as wt,CKBox as Bt,CKFinder as St,EasyImage as _t,Heading as At,Image as Ft,ImageCaption as Lt,ImageStyle as vt,ImageToolbar as Pt,ImageUpload as Ot,PictureEditing as Ut,Indent as Rt,Link as Ht,List as Mt,MediaEmbed as Kt,Paragraph as Dt,PasteFromOffice as zt,Table as Vt,TableToolbar as Qt,TextTransformation as Gt,CloudServices as Nt}from"ckeditor5";import{ClassicEditor as $t,Essentials as Xt,Autoformat as Jt,Bold as Zt,Italic as Yt,BlockQuote as eo,CKBox as to,EasyImage as oo,Heading as ao,Image as io,ImageCaption as lo,ImageStyle as ro,ImageToolbar as no,ImageUpload as so,PictureEditing as mo,Indent as co,Link as go,List as uo,MediaEmbed as bo,Paragraph as po,PasteFromOffice as fo,Table as ho,TableToolbar as To,TextTransformation as Co,CloudServices as Io,AutoImage as xo,ImageInsert as yo,Bookmark as Eo}from"ckeditor5";import{DecoupledEditor as So,Essentials as _o,Alignment as Ao,FontSize as Fo,FontFamily as Lo,FontColor as vo,FontBackgroundColor as Po,Autoformat as Oo,Bold as Uo,Italic as Ro,Strikethrough as Ho,Underline as Mo,BlockQuote as Ko,CKBox as Do,EasyImage as zo,Heading as Vo,Image as Qo,ImageCaption as Go,ImageResize as No,ImageStyle as qo,ImageToolbar as jo,ImageUpload as Wo,PictureEditing as $o,Indent as Xo,IndentBlock as Jo,Link as Zo,List as Yo,ListProperties as ea,MediaEmbed as ta,Paragraph as oa,PasteFromOffice as aa,Table as ia,TableToolbar as la,TextTransformation as ra,CloudServices as na}from"ckeditor5";import{InlineEditor as ca,Essentials as ga,CKFinderUploadAdapter as ua,Autoformat as ba,Bold as pa,Italic as fa,BlockQuote as ha,CKBox as Ta,CKFinder as Ca,EasyImage as Ia,Heading as xa,Image as ya,ImageCaption as Ea,ImageStyle as ka,ImageToolbar as wa,ImageUpload as Ba,PictureEditing as Sa,Indent as _a,Link as Aa,List as Fa,MediaEmbed as La,Paragraph as va,PasteFromOffice as Pa,Table as Oa,TableToolbar as Ua,TextTransformation as Ra,CloudServices as Ha}from"ckeditor5";import{MultiRootEditor as za,Essentials as Va,CKFinderUploadAdapter as Qa,Autoformat as Ga,Bold as Na,Italic as qa,BlockQuote as ja,CKBox as Wa,CKFinder as $a,EasyImage as Xa,Heading as Ja,Image as Za,ImageCaption as Ya,ImageStyle as ei,ImageToolbar as ti,ImageUpload as oi,PictureEditing as ai,Indent as ii,Link as li,List as ri,MediaEmbed as ni,Paragraph as si,PasteFromOffice as di,Table as mi,TableToolbar as ci,TextTransformation as gi,CloudServices as ui}from"ckeditor5";var r=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;import{Alignment as g,AutoImage as u,AutoLink as b,BlockQuote as p,Bold as f,CKBox as h,CKBoxImageEdit as T,ClassicEditor as C,CloudServices as I,Emoji as x,EmptyBlock as y,FindAndReplace as E,Font as k,Fullscreen as w,GeneralHtmlSupport as B,Heading as S,HorizontalLine as _,ImageInline as A,ImageInsert as F,ImageResize as L,ImageTextAlternative as v,ImageToolbar as P,Indent as O,Italic as U,Link as R,List as H,Mention as M,PageBreak as K,PasteFromOffice as D,PictureEditing as z,RemoveFormat as V,Strikethrough as Q,Style as G,Table as N,TableCellProperties as q,TableLayout as j,TableProperties as W,TableToolbar as $,Underline as X}from"ckeditor5";import{EmailConfigurationHelper as n,ExportInlineStyles as J,MergeFields as Z,PasteFromOfficeEnhanced as Y,SourceEditingEnhanced as ee,Template as te}from"ckeditor5-premium-features";var t=[{color:"#000000",label:"Black"},{color:"#4D4D4D",label:"Dim grey"},{color:"#999999",label:"Grey"},{color:"#E6E6E6",label:"Light grey"},{color:"#FFFFFF",label:"White",hasBorder:!0},{color:"#E65C5C",label:"Red"},{color:"#E69C5C",label:"Orange"},{color:"#E6E65C",label:"Yellow"},{color:"#C2E65C",label:"Light green"},{color:"#5CE65C",label:"Green"},{color:"#5CE6A6",label:"Aquamarine"},{color:"#5CE6E6",label:"Turquoise"},{color:"#5CA6E6",label:"Light blue"},{color:"#5C5CE6",label:"Blue"},{color:"#A65CE6",label:"Purple"}];C.create(document.querySelector("#snippet-email-editing"),{plugins:[b,z,S,f,U,X,Q,k,H,R,x,A,F,L,u,v,P,h,T,n,I,N,$,O,Z,ee,W,q,j,te,M,y,J,B,G,D,Y,n,g,p,w,_,K,V,E],cloudServices:a,toolbar:{shouldNotGroupWhenFull:!0,items:["fullscreen","|","undo","redo","findAndReplace","|","insertMergeField","previewMergeFields","|","sourceEditingEnhanced","|","heading","style","|","bold","italic","underline","strikethrough","alignment","-","insertTable","insertTableLayout","blockQuote","horizontalLine","pageBreak","removeFormat","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","link","emoji","insertImage","insertTemplate","|","bulletedList","numberedList","outdent","indent"]},fontColor:{colorPicker:{format:"hex"},colors:t},fontBackgroundColor:{colorPicker:{format:"hex"},colors:t},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"],tableCellProperties:{borderColors:t,backgroundColors:t},tableProperties:{borderColors:t,backgroundColors:t}},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"}]},htmlSupport:{preserveEmptyBlocksInEditingView:!0,allow:[{name:/^(div|table|tbody|tr|td|span|img|h1|h2|h3|p|a)$/,attributes:!0,classes:!0,styles:!0}]},image:{toolbar:["resizeImage:20","resizeImage:60","resizeImage:100","|","imageTextAlternative","|","link"],resizeOptions:[{name:"resizeImage:20",value:"20",icon:"small"},{name:"resizeImage:60",value:"60",icon:"medium"},{name:"resizeImage:100",value:"100",icon:"large"}],upload:{types:["jpeg","png","gif","bmp","webp","tiff","svg+xml"]}},ui:{viewportOffset:{top:l()}},ckbox:{tokenUrl:i,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},template:{definitions:[{title:"Two column layout table",description:"The layout of the email is a table with two columns.",icon:r,data:`
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
					`},{title:"Three column layout table",description:"The layout of the email is a table with three columns.",icon:r,data:`
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
					`}]},mergeFields:{previewModes:["$labels","$defaultValues"],initialPreviewMode:"$labels",definitions:[{id:"clientName",type:"text",label:"Client name",defaultValue:"John Doe"},{id:"discountValue",type:"text",label:"Discount value",defaultValue:"20%"},{id:"benefit1",type:"text",label:"Benefit 1",defaultValue:"Boosts energy"},{id:"benefit2",type:"text",label:"Benefit 2",defaultValue:"Antioxidants"},{id:"benefit3",type:"text",label:"Benefit 3",defaultValue:"Immune support"}]},style:{definitions:[{name:"CTA Primary",element:"a",classes:["button","button--green"]},{name:"CTA Secondary",element:"a",classes:["button","button--black"]}]},emoji:{definitionsUrl:"cdn"}}).then(o=>{window.editor=o}).catch(o=>{console.error(o.stack)});
