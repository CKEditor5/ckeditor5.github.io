var I="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",T="https://33333.cke-cs.com/easyimage/upload/",x="33333.cke-cs.com/ws",n={tokenUrl:I,uploadUrl:T,webSocketUrl:x};var s="https://api.ckbox.io/token/demo";import{Plugin as se}from"@ckeditor/ckeditor5-core";import{Essentials as de}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ce}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as be}from"@ckeditor/ckeditor5-block-quote";import{Bold as fe,Italic as Ie}from"@ckeditor/ckeditor5-basic-styles";import{Heading as xe}from"@ckeditor/ckeditor5-heading";import{Image as ke,ImageCaption as Ce,ImageStyle as ye,ImageToolbar as Se}from"@ckeditor/ckeditor5-image";import{Indent as Le}from"@ckeditor/ckeditor5-indent";import{Link as he}from"@ckeditor/ckeditor5-link";import{List as we}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ve}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Oe}from"@ckeditor/ckeditor5-paragraph";import{Table as Ke,TableToolbar as Me}from"@ckeditor/ckeditor5-table";function m({target:e,text:o,editor:l,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:o});return}let u=`
		<div class="tippy-content__message">${o}</div>
		<button class="ck ck-button tippy-content__close-button ck-off" title="Close"></button>
	`,b=Object.assign({},{placement:"bottom",trigger:"manual",hideOnClick:!1,allowHTML:!0,maxWidth:280,showOnCreate:!0,interactive:!0,theme:"light-border",zIndex:1,appendTo:()=>document.body},a),c=window.umberto.createTooltip(e,u,b);for(let p of l.editing.view.document.roots)p.once("change:isFocused",(te,oe,f)=>{f&&c.hide()});return c}function d(e,o){let l=e.items,a;return typeof o=="function"?a=l.find(o):a=l.get(o),a?a.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ne,Essentials as ze,CKFinderUploadAdapter as Ge,Autoformat as Ve,BlockToolbar as je,Bold as We,Italic as Xe,BlockQuote as Je,CKBox as $e,CKFinder as Ye,EasyImage as Ze,Heading as et,Image as tt,ImageCaption as ot,ImageStyle as at,ImageToolbar as it,ImageUpload as lt,PictureEditing as rt,Indent as nt,Link as st,List as mt,MediaEmbed as dt,Paragraph as gt,PasteFromOffice as ct,Table as ut,TableToolbar as bt,TextTransformation as pt,CloudServices as ft}from"ckeditor5";import{BalloonEditor as Et,Essentials as kt,CKFinderUploadAdapter as Ct,Autoformat as yt,Bold as St,Italic as Bt,BlockQuote as Lt,CKBox as _t,CKFinder as ht,EasyImage as Pt,Heading as wt,Image as At,ImageCaption as vt,ImageStyle as Ft,ImageToolbar as Ot,ImageUpload as Ut,PictureEditing as Kt,Indent as Mt,Link as Rt,List as Qt,MediaEmbed as qt,Paragraph as Ht,PasteFromOffice as Dt,Table as Nt,TableToolbar as zt,TextTransformation as Gt,CloudServices as Vt}from"ckeditor5";import{ClassicEditor as E,Essentials as k,Autoformat as C,Bold as y,Italic as S,BlockQuote as B,CKBox as L,EasyImage as _,Heading as h,Image as P,ImageCaption as w,ImageStyle as A,ImageToolbar as v,ImageUpload as F,PictureEditing as O,Indent as U,Link as K,List as M,MediaEmbed as R,Paragraph as Q,PasteFromOffice as q,Table as H,TableToolbar as D,TextTransformation as N,CloudServices as z,AutoImage as G,ImageInsert as V,Bookmark as j}from"ckeditor5";var i=class extends E{static builtinPlugins=[k,C,y,S,B,z,_,h,P,w,A,v,F,L,U,K,M,R,Q,q,O,H,D,N,G,V,j];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Zt,Essentials as eo,Alignment as to,FontSize as oo,FontFamily as ao,FontColor as io,FontBackgroundColor as lo,Autoformat as ro,Bold as no,Italic as so,Strikethrough as mo,Underline as go,BlockQuote as co,CKBox as uo,EasyImage as bo,Heading as po,Image as fo,ImageCaption as Io,ImageResize as To,ImageStyle as xo,ImageToolbar as Eo,ImageUpload as ko,PictureEditing as Co,Indent as yo,IndentBlock as So,Link as Bo,List as Lo,ListProperties as _o,MediaEmbed as ho,Paragraph as Po,PasteFromOffice as wo,Table as Ao,TableToolbar as vo,TextTransformation as Fo,CloudServices as Oo}from"ckeditor5";import{InlineEditor as Ro,Essentials as Qo,CKFinderUploadAdapter as qo,Autoformat as Ho,Bold as Do,Italic as No,BlockQuote as zo,CKBox as Go,CKFinder as Vo,EasyImage as jo,Heading as Wo,Image as Xo,ImageCaption as Jo,ImageStyle as $o,ImageToolbar as Yo,ImageUpload as Zo,PictureEditing as ea,Indent as ta,Link as oa,List as aa,MediaEmbed as ia,Paragraph as la,PasteFromOffice as ra,Table as na,TableToolbar as sa,TextTransformation as ma,CloudServices as da}from"ckeditor5";import{MultiRootEditor as ba,Essentials as pa,CKFinderUploadAdapter as fa,Autoformat as Ia,Bold as Ta,Italic as xa,BlockQuote as Ea,CKBox as ka,CKFinder as Ca,EasyImage as ya,Heading as Sa,Image as Ba,ImageCaption as La,ImageStyle as _a,ImageToolbar as ha,ImageUpload as Pa,PictureEditing as wa,Indent as Aa,Link as va,List as Fa,MediaEmbed as Oa,Paragraph as Ua,PasteFromOffice as Ka,Table as Ma,TableToolbar as Ra,TextTransformation as Qa,CloudServices as qa}from"ckeditor5";import{CKBox as W,CKBoxImageEdit as X,PictureEditing as J,ImageInsert as $,ImageResize as Y,AutoImage as Z,LinkImage as ee}from"ckeditor5";var r=class extends i{static builtinPlugins=[...i.builtinPlugins,J,Y,$,Z,ee,W,X];static defaultConfig={cloudServices:n,toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","insertImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},ui:{viewportOffset:{top:g()}},ckbox:{tokenUrl:s,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},image:{toolbar:["toggleImageCaption","imageTextAlternative","ckboxImageEdit"]}}};r.create(document.querySelector("#snippet-block-quote")).then(e=>{window.editor=e,m({target:d(e.ui.view.toolbar,o=>o.label&&o.label==="Block quote"),text:"Click to insert a block quote.",editor:e})}).catch(e=>{console.error(e.stack)});
