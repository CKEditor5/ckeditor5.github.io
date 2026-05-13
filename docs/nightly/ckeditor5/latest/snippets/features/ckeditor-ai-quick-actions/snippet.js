var J=Object.create;var _=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var Y=(e,t)=>()=>(e&&(t=e(e=0)),t);var C=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ee=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of $(t))!X.call(e,n)&&n!==r&&_(e,n,{get:()=>t[n],enumerable:!(o=G(t,n))||o.enumerable});return e};var te=(e,t,r)=>(r=e!=null?J(Z(e)):{},ee(t||!e||!e.__esModule?_(r,"default",{value:e,enumerable:!0}):r,e));var i=Y(()=>{});var D=C(S=>{"use strict";i();Object.defineProperty(S,Symbol.toStringTag,{value:"Module"});function ae(e,t,{signal:r,edges:o}={}){let n,a=null,d=o!=null&&o.includes("leading"),u=o==null||o.includes("trailing"),c=()=>{a!==null&&(e.apply(n,a),n=void 0,a=null)},m=()=>{u&&c(),f()},l=null,g=()=>{l!=null&&clearTimeout(l),l=setTimeout(()=>{l=null,m()},t)},p=()=>{l!==null&&(clearTimeout(l),l=null)},f=()=>{p(),n=void 0,a=null},b=()=>{c()},y=function(...Q){if(r?.aborted)return;n=this,a=Q;let j=l==null;g(),d&&j&&c()};return y.schedule=g,y.cancel=f,y.flush=b,r?.addEventListener("abort",f,{once:!0}),y}S.debounce=ae});var O=C(A=>{"use strict";i();Object.defineProperty(A,Symbol.toStringTag,{value:"Module"});var le=D();function se(e,t=0,r={}){typeof r!="object"&&(r={});let{leading:o=!1,trailing:n=!0,maxWait:a}=r,d=Array(2);o&&(d[0]="leading"),n&&(d[1]="trailing");let u,c=null,m=le.debounce(function(...p){u=e.apply(this,p),c=null},t,{edges:d}),l=function(...p){return a!=null&&(c===null&&(c=Date.now()),Date.now()-c>=a)?(u=e.apply(this,p),c=Date.now(),m.cancel(),m.schedule(),u):(m.apply(this,p),u)},g=()=>(m.flush(),u);return l.cancel=m.cancel,l.flush=g,l}A.debounce=se});var q=C((Ra,R)=>{i();R.exports=O().debounce});i();i();import{Alignment as de,Autoformat as W,AutoImage as ce,AutoLink as me,Autosave as ue,BalloonToolbar as pe,BlockQuote as ge,Bold as N,Bookmark as fe,CKBox as he,CKBoxImageEdit as be,CloudServices as ye,Code as ke,DecoupledEditor as we,Emoji as Ce,Essentials as Ie,FindAndReplace as Te,FontBackgroundColor as ve,FontColor as xe,FontFamily as Se,FontSize as Ae,Fullscreen as Ee,Heading as Be,HorizontalLine as Le,ImageBlock as Pe,ImageCaption as _e,ImageEditing as Me,ImageInline as Fe,ImageInsert as Ue,ImageInsertViaUrl as De,ImageResize as Oe,ImageStyle as Re,ImageTextAlternative as qe,ImageToolbar as He,ImageUpload as We,ImageUtils as Ne,Indent as ze,IndentBlock as Ve,Italic as z,Link as Ke,LinkImage as Qe,List as je,ListProperties as Je,Mention as Ge,Paragraph as $e,PasteFromOffice as Ze,PictureEditing as Xe,Plugin as Ye,RemoveFormat as et,SpecialCharacters as tt,SpecialCharactersArrows as ot,SpecialCharactersCurrency as rt,SpecialCharactersEssentials as it,SpecialCharactersLatin as nt,SpecialCharactersMathematical as at,SpecialCharactersText as lt,Strikethrough as st,Subscript as dt,Superscript as ct,Table as mt,TableCaption as ut,TableCellProperties as pt,TableColumnResize as gt,TableProperties as ft,TableToolbar as ht,TextTransformation as bt,TodoList as yt,Underline as kt,uid as wt}from"ckeditor5";i();i();var oe="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",re="https://33333.cke-cs.com/easyimage/upload/",ie="33333.cke-cs.com/ws",k={tokenUrl:oe,uploadUrl:re,webSocketUrl:ie};i();var I="https://api.ckbox.io/token/demo";i();import{Plugin as io}from"@ckeditor/ckeditor5-core";import{Essentials as ao}from"@ckeditor/ckeditor5-essentials";import{Autoformat as so}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as mo}from"@ckeditor/ckeditor5-block-quote";import{Bold as po,Italic as go}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ho}from"@ckeditor/ckeditor5-heading";import{Image as yo,ImageCaption as ko,ImageStyle as wo,ImageToolbar as Co}from"@ckeditor/ckeditor5-image";import{Indent as To}from"@ckeditor/ckeditor5-indent";import{Link as xo}from"@ckeditor/ckeditor5-link";import{List as Ao}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Bo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Po}from"@ckeditor/ckeditor5-paragraph";import{Table as Mo,TableToolbar as Fo}from"@ckeditor/ckeditor5-table";i();function T({id:e,target:t,text:r,editor:o,tippyOptions:n}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:r});return}let a=window.umberto.Tooltip.create({id:e,text:r,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...n?.placement&&{position:n.placement}});for(let d of o.editing.view.document.roots)d.once("change:isFocused",(u,c,m)=>{m&&a.destroy()});return a}function v(e,t){let r=e.items,o;return typeof t=="function"?o=r.find(t):o=r.get(t),o?o.element:void 0}function x(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}i();import{BalloonEditor as Ho,Essentials as Wo,Autoformat as No,BlockToolbar as zo,Bold as Vo,Italic as Ko,BlockQuote as Qo,CKBox as jo,Heading as Jo,Image as Go,ImageCaption as $o,ImageStyle as Zo,ImageToolbar as Xo,ImageUpload as Yo,PictureEditing as er,Indent as tr,IndentBlock as or,Link as rr,List as ir,MediaEmbed as nr,Paragraph as ar,PasteFromOffice as lr,Table as sr,TableToolbar as dr,TextTransformation as cr,CloudServices as mr}from"ckeditor5";i();import{BalloonEditor as fr,Essentials as hr,Autoformat as br,Bold as yr,Italic as kr,BlockQuote as wr,CKBox as Cr,Heading as Ir,Image as Tr,ImageCaption as vr,ImageStyle as xr,ImageToolbar as Sr,ImageUpload as Ar,PictureEditing as Er,Indent as Br,IndentBlock as Lr,Link as Pr,List as _r,MediaEmbed as Mr,Paragraph as Fr,PasteFromOffice as Ur,Table as Dr,TableToolbar as Or,TextTransformation as Rr,CloudServices as qr}from"ckeditor5";i();import{ClassicEditor as zr,Essentials as Vr,Autoformat as Kr,Bold as Qr,Italic as jr,BlockQuote as Jr,CKBox as Gr,Heading as $r,Image as Zr,ImageCaption as Xr,ImageStyle as Yr,ImageToolbar as ei,ImageUpload as ti,PictureEditing as oi,Indent as ri,IndentBlock as ii,Link as ni,List as ai,MediaEmbed as li,Paragraph as si,PasteFromOffice as di,Table as ci,TableToolbar as mi,TextTransformation as ui,CloudServices as pi,AutoImage as gi,ImageInsert as fi,Bookmark as hi}from"ckeditor5";i();import{DecoupledEditor as wi,Essentials as Ci,Alignment as Ii,FontSize as Ti,FontFamily as vi,FontColor as xi,FontBackgroundColor as Si,Autoformat as Ai,Bold as Ei,Italic as Bi,Strikethrough as Li,Underline as Pi,BlockQuote as _i,CKBox as Mi,Heading as Fi,Image as Ui,ImageCaption as Di,ImageResize as Oi,ImageStyle as Ri,ImageToolbar as qi,ImageUpload as Hi,PictureEditing as Wi,Indent as Ni,IndentBlock as zi,Link as Vi,List as Ki,ListProperties as Qi,MediaEmbed as ji,Paragraph as Ji,PasteFromOffice as Gi,Table as $i,TableToolbar as Zi,TextTransformation as Xi,CloudServices as Yi}from"ckeditor5";i();import{InlineEditor as rn,Essentials as nn,Autoformat as an,Bold as ln,Italic as sn,BlockQuote as dn,CKBox as cn,Heading as mn,Image as un,ImageCaption as pn,ImageStyle as gn,ImageToolbar as fn,ImageUpload as hn,PictureEditing as bn,Indent as yn,IndentBlock as kn,Link as wn,List as Cn,MediaEmbed as In,Paragraph as Tn,PasteFromOffice as vn,Table as xn,TableToolbar as Sn,TextTransformation as An,CloudServices as En}from"ckeditor5";i();import{MultiRootEditor as _n,Essentials as Mn,Autoformat as Fn,Bold as Un,Italic as Dn,BlockQuote as On,CKBox as Rn,Heading as qn,Image as Hn,ImageCaption as Wn,ImageStyle as Nn,ImageToolbar as zn,ImageUpload as Vn,PictureEditing as Kn,Indent as Qn,IndentBlock as jn,Link as Jn,List as Gn,MediaEmbed as $n,Paragraph as Zn,PasteFromOffice as Xn,Table as Yn,TableToolbar as ea,TextTransformation as ta,CloudServices as oa}from"ckeditor5";import{AIChat as Ct,AIEditorIntegration as It,AIQuickActions as Tt,AIReviewMode as vt,AITranslate as xt,CaseChange as St,Comments as At,CommentsRepository as Et,ExportPdf as Bt,ExportWord as Lt,Footnotes as Pt,FormatPainter as _t,ImportWord as Mt,LineHeight as Ft,MergeFields as Ut,MultiLevelList as Dt,PasteFromOfficeEnhanced as Ot,SlashCommand as Rt,TableOfContents as qt,Template as Ht,TrackChanges as Wt,TrackChangesData as Nt,TrackChangesPreview as zt,Users as Vt}from"ckeditor5-premium-features";i();i();import{uid as ne}from"ckeditor5";function M(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=ne(),o=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:o+" "+n,id:r}}function F(e,t=M()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}i();function U(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}i();var H=te(q(),1);function E(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let a=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),d=(0,H.default)(()=>{if(!(r&&r.value))if(o.scrollWidth>o.clientWidth)m("narrowSidebar");else{let l=0;a.forEach((g,p)=>{let f=getComputedStyle(p);for(let b of g)b==="scrollWidth"?l+=p.scrollWidth:l+=parseFloat(f.getPropertyValue(b))||0}),l+n<o.clientWidth&&m("wideSidebar")}},10),u=new ResizeObserver(d);u.observe(o),u.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||d()}),d();let c="wideSidebar";function m(l){c!==l&&(t.switchTo(l),c=l)}})}i();function B(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(r=>{let o=r.querySelector(".live-snippet__container");if(!o)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(n),t.push({container:o,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),o.classList.add("loaded")}})}),t}var Kt=K("channelId"),h=K("userId"),L={name:jt(),id:h,role:"writer"},P=class extends Ye{static get requires(){return[Vt,Et]}init(){let t=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");t.addUser(L),t.defineMe(L.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:h,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:h,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Qt=`<h1>Customer Support Metrics Report</h1>

<p><strong>Operational Summary \u2013 Second Half of 2025</strong></p>

<h2>Overview</h2>

<p>This report summarizes customer support performance during the second half of 2025. It focuses on ticket volumes, response efficiency and common issue categories, based on internal operational data across all support channels.</p>

<p>The information below should be treated as an overview of observed trends rather than a detailed performance evaluation.</p>

<h2>Support Process Overview</h2>

<p>The diagram outlines our internal customer support process, showing how incoming requests are handled across multiple support tiers based on complexity.</p>

<p>Customer inquiries are initially managed by <strong>Tier 1: Frontline Support</strong>, which is responsible for triage and resolution of common issues. <comment-start name="thread-1"></comment-start>More complex<comment-end name="thread-1"></comment-end> cases are escalated to <strong>Tier 2: Technical Support</strong>, where deeper technical investigation is performed.</p>

<p><comment-start name="thread-2"></comment-start>High-impact<comment-end name="thread-2"></comment-end> or unresolved issues are handled by <strong>Tier 3: Escalation Team</strong>, which coordinates with internal experts as required. <strong>Specialist Teams</strong> support Tier 2 and Tier 3 by providing domain-specific expertise, while typically remaining non-customer-facing.</p>

<p>The process is designed to allow flexible movement between tiers, supporting efficient resolution and appropriate escalation when needed.</p>

<figure class="image">
	<img src="../../assets/img/demo-content-customer-support-metrics-report-image.png" alt="Internal support workflow">
	<figcaption>Figure 1. Internal support workflow across frontline, technical and escalation teams.</figcaption>
</figure>

<h2>Ticket Volume</h2>

<p>During the reporting period, the support team processed <strong>184,600 tickets</strong>, representing an increase of <strong>11%</strong> compared to the previous period. Ticket volume peaked in September and gradually stabilized towards the end of the year.</p>

<p>The increase was primarily driven by onboarding-related questions and product configuration requests.</p>

<h2>Channel Distribution</h2>

<table>
	<thead>
		<tr>
			<th>Channel</th>
			<th>Share of Tickets</th>
			<th>Change vs. Previous Period</th>
			<th>Avg. First Response Time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Email</td>
			<td>54%</td>
			<td>-3%</td>
			<td>3.1 hours</td>
		</tr>
		<tr>
			<td>Live Chat</td>
			<td>31%</td>
			<td>+5%</td>
			<td>1.2 hours</td>
		</tr>
		<tr>
			<td>In-App Support</td>
			<td>15%</td>
			<td>-2%</td>
			<td>2.4 hours</td>
		</tr>
	</tbody>
</table>

<p>Email remained the dominant support channel, although live chat usage continued to increase, particularly among larger accounts.</p>

<h2>Resolution Efficiency</h2>

<p>Average response and resolution times showed minor improvement compared to earlier in the year.</p>

<ul>
	<li>Average first response time: <strong>2.4 hours</strong></li>
	<li>Average resolution time: <strong>18.7 hours</strong></li>
	<li>Tickets resolved within 24 hours: <strong>68%</strong></li>
</ul>

<p>More complex cases, especially those related to integrations, required additional follow-up and were not consistently resolved within standard timeframes. While faster response times were generally appreciated, qualitative feedback indicates that communication consistency played an equally important role in overall customer perception.</p>

<blockquote>
	<p>"Faster responses were helpful, but consistency in follow-up communication had a bigger impact on our overall experience."</p>
	<p><strong>\u2014 Enterprise customer, post-resolution survey</strong></p>
</blockquote>

<h2>Common Issue Categories</h2>

<p><comment-start name="thread-3"></comment-start>The most frequently reported issues were<comment-end name="thread-3"></comment-end>:</p>

<ol>
	<li>Account access and authentication</li>
	<li>Billing and invoice related questions</li>
	<li>Feature usage clarification</li>
	<li>Integration setup</li>
	<li>Performance-related concerns</li>
</ol>

<p>Billing-related requests declined slightly, while integration-related inquiries increased towards the end of the period.</p>

<h2>Customer Satisfaction</h2>

<p>Customer satisfaction was measured through post-resolution surveys. The overall response rate remained stable throughout the reporting period.</p>

<ul>
	<li><comment-start name="thread-4"></comment-start>Average CSAT score: <strong>4.2 / 5</strong></li>
	<li>Survey response rate: <strong>27%</strong><comment-end name="thread-4"></comment-end></li>
</ul>

<p>Feedback most often referenced response time and clarity of follow-up communication as areas for improvement, particularly in cases involving multiple handovers or escalations.</p>

<h2>Identified Bottlenecks</h2>

<p>Internal review identified several operational areas that may require further attention:</p>

<ul>
	<li>Delays in ticket reassignment for escalated cases</li>
	<li>Inconsistent categorization of incoming requests</li>
	<li>Limited coverage during selected regional peak hours</li>
</ul>

<p>While these issues did not materially impact aggregate performance metrics, they were visible in individual case handling and customer feedback.</p>

<blockquote>
	<p>"The issue was eventually resolved, although it was not always clear who was responsible for the case during escalation."</p>
	<p><strong>\u2014 Key account feedback, quarterly review</strong></p>
</blockquote>

<h2>Summary</h2>

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function V(e=()=>{}){let t={ui:{viewportOffset:{top:x()}},root:{initialData:Qt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[de,W,ce,me,ue,pe,ge,N,fe,he,be,ye,ke,Ce,Ie,Te,ve,xe,Se,Ae,Ee,Be,Le,Pe,_e,Me,Fe,Ue,De,Oe,Re,qe,He,We,Ne,ze,Ve,z,Ke,Qe,je,Je,Ge,$e,Ze,Xe,et,tt,ot,rt,it,nt,at,lt,st,dt,ct,mt,ut,pt,gt,ft,ht,bt,yt,kt,Ct,It,Tt,vt,xt,St,At,Bt,Lt,Pt,_t,Mt,Ft,Ut,Dt,Ot,Rt,qt,Ht,Wt,Nt,zt,E,P],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:I,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Kt},cloudServices:{...k,tokenUrl:F(k.tokenUrl,L)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let a=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),d=new File([a],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(d)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[N,z,W]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let r=B()[0];return we.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),r.markDemoAsLoaded(),U(o),o)).catch(o=>{console.error(o)})}function K(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),r=t?decodeURIComponent(t[1]):null;if(!r){r=wt();let o=new URL(window.location.href);o.searchParams.set(e,r),window.history.replaceState({},document.title,o.toString())}return r}function jt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${r} ${o}`}V(e=>{let t=e.toolbar.items.indexOf("aiQuickActions"),r=e.balloonToolbar.indexOf("aiQuickActions"),o=["improve-writing","translate"];e.toolbar.items.splice(t+1,0,...o),e.balloonToolbar.splice(r+1,0,...o);let n=["AIQuickActions","AIEditorIntegration"];e.plugins=e.plugins.filter(a=>a.pluginName&&a.pluginName.startsWith("AI")?n.includes(a.pluginName):!0),e.toolbar.items=e.toolbar.items.filter(a=>a!=="toggleAi"),e.balloonToolbar=e.balloonToolbar.filter(a=>a!=="ask-ai"),e.ai.container.type="custom"}).then(e=>{window.editor=e,T({target:v(e.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu",editor:e,tippyOptions:{placement:"bottom-start"}})});
