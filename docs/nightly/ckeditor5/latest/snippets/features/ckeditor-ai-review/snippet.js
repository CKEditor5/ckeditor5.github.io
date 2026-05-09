var Q=Object.create;var L=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var Z=(e,o)=>()=>(e&&(o=e(e=0)),o);var v=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var X=(e,o,i,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of J(o))!$.call(e,n)&&n!==i&&L(e,n,{get:()=>o[n],enumerable:!(t=j(o,n))||t.enumerable});return e};var Y=(e,o,i)=>(i=e!=null?Q(G(e)):{},X(o||!e||!e.__esModule?L(i,"default",{value:e,enumerable:!0}):i,e));var r=Z(()=>{});var M=v(I=>{"use strict";r();Object.defineProperty(I,Symbol.toStringTag,{value:"Module"});function ie(e,o,{signal:i,edges:t}={}){let n,s=null,c=t!=null&&t.includes("leading"),m=t==null||t.includes("trailing"),d=()=>{s!==null&&(e.apply(n,s),n=void 0,s=null)},u=()=>{m&&d(),h()},a=null,g=()=>{a!=null&&clearTimeout(a),a=setTimeout(()=>{a=null,u()},o)},p=()=>{a!==null&&(clearTimeout(a),a=null)},h=()=>{p(),n=void 0,s=null},b=()=>{d()},y=function(...K){if(i?.aborted)return;n=this,s=K;let V=a==null;g(),c&&V&&d()};return y.schedule=g,y.cancel=h,y.flush=b,i?.addEventListener("abort",h,{once:!0}),y}I.debounce=ie});var U=v(x=>{"use strict";r();Object.defineProperty(x,Symbol.toStringTag,{value:"Module"});var ne=M();function ae(e,o=0,i={}){typeof i!="object"&&(i={});let{leading:t=!1,trailing:n=!0,maxWait:s}=i,c=Array(2);t&&(c[0]="leading"),n&&(c[1]="trailing");let m,d=null,u=ne.debounce(function(...p){m=e.apply(this,p),d=null},o,{edges:c}),a=function(...p){return s!=null&&(d===null&&(d=Date.now()),Date.now()-d>=s)?(m=e.apply(this,p),d=Date.now(),u.cancel(),u.schedule(),m):(u.apply(this,p),m)},g=()=>(u.flush(),m);return a.cancel=u.cancel,a.flush=g,a}x.debounce=ae});var R=v((Oa,D)=>{r();D.exports=U().debounce});r();r();import{Alignment as le,Autoformat as q,AutoImage as se,AutoLink as de,Autosave as ce,BalloonToolbar as me,BlockQuote as ue,Bold as H,Bookmark as pe,CKBox as ge,CKBoxImageEdit as he,CloudServices as fe,Code as be,DecoupledEditor as ye,Emoji as ke,Essentials as we,FindAndReplace as ve,FontBackgroundColor as Ce,FontColor as Te,FontFamily as Ie,FontSize as xe,Fullscreen as Se,Heading as Ae,HorizontalLine as Ee,ImageBlock as Be,ImageCaption as Le,ImageEditing as Pe,ImageInline as _e,ImageInsert as Fe,ImageInsertViaUrl as Me,ImageResize as Ue,ImageStyle as De,ImageTextAlternative as Re,ImageToolbar as Oe,ImageUpload as qe,ImageUtils as He,Indent as We,IndentBlock as Ne,Italic as W,Link as ze,LinkImage as Ke,List as Ve,ListProperties as Qe,Mention as je,Paragraph as Je,PasteFromOffice as Ge,PictureEditing as $e,Plugin as Ze,RemoveFormat as Xe,SpecialCharacters as Ye,SpecialCharactersArrows as et,SpecialCharactersCurrency as tt,SpecialCharactersEssentials as ot,SpecialCharactersLatin as rt,SpecialCharactersMathematical as it,SpecialCharactersText as nt,Strikethrough as at,Subscript as lt,Superscript as st,Table as dt,TableCaption as ct,TableCellProperties as mt,TableColumnResize as ut,TableProperties as pt,TableToolbar as gt,TextTransformation as ht,TodoList as ft,Underline as bt,uid as yt}from"ckeditor5";r();r();var ee="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",te="https://33333.cke-cs.com/easyimage/upload/",oe="33333.cke-cs.com/ws",k={tokenUrl:ee,uploadUrl:te,webSocketUrl:oe};r();var C="https://api.ckbox.io/token/demo";r();import{Plugin as oo}from"@ckeditor/ckeditor5-core";import{Essentials as io}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ao}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as so}from"@ckeditor/ckeditor5-block-quote";import{Bold as mo,Italic as uo}from"@ckeditor/ckeditor5-basic-styles";import{Heading as go}from"@ckeditor/ckeditor5-heading";import{Image as fo,ImageCaption as bo,ImageStyle as yo,ImageToolbar as ko}from"@ckeditor/ckeditor5-image";import{Indent as vo}from"@ckeditor/ckeditor5-indent";import{Link as To}from"@ckeditor/ckeditor5-link";import{List as xo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Ao}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Bo}from"@ckeditor/ckeditor5-paragraph";import{Table as Po,TableToolbar as _o}from"@ckeditor/ckeditor5-table";r();function T(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}r();import{BalloonEditor as Oo,Essentials as qo,Autoformat as Ho,BlockToolbar as Wo,Bold as No,Italic as zo,BlockQuote as Ko,CKBox as Vo,Heading as Qo,Image as jo,ImageCaption as Jo,ImageStyle as Go,ImageToolbar as $o,ImageUpload as Zo,PictureEditing as Xo,Indent as Yo,IndentBlock as er,Link as tr,List as or,MediaEmbed as rr,Paragraph as ir,PasteFromOffice as nr,Table as ar,TableToolbar as lr,TextTransformation as sr,CloudServices as dr}from"ckeditor5";r();import{BalloonEditor as pr,Essentials as gr,Autoformat as hr,Bold as fr,Italic as br,BlockQuote as yr,CKBox as kr,Heading as wr,Image as vr,ImageCaption as Cr,ImageStyle as Tr,ImageToolbar as Ir,ImageUpload as xr,PictureEditing as Sr,Indent as Ar,IndentBlock as Er,Link as Br,List as Lr,MediaEmbed as Pr,Paragraph as _r,PasteFromOffice as Fr,Table as Mr,TableToolbar as Ur,TextTransformation as Dr,CloudServices as Rr}from"ckeditor5";r();import{ClassicEditor as Wr,Essentials as Nr,Autoformat as zr,Bold as Kr,Italic as Vr,BlockQuote as Qr,CKBox as jr,Heading as Jr,Image as Gr,ImageCaption as $r,ImageStyle as Zr,ImageToolbar as Xr,ImageUpload as Yr,PictureEditing as ei,Indent as ti,IndentBlock as oi,Link as ri,List as ii,MediaEmbed as ni,Paragraph as ai,PasteFromOffice as li,Table as si,TableToolbar as di,TextTransformation as ci,CloudServices as mi,AutoImage as ui,ImageInsert as pi,Bookmark as gi}from"ckeditor5";r();import{DecoupledEditor as yi,Essentials as ki,Alignment as wi,FontSize as vi,FontFamily as Ci,FontColor as Ti,FontBackgroundColor as Ii,Autoformat as xi,Bold as Si,Italic as Ai,Strikethrough as Ei,Underline as Bi,BlockQuote as Li,CKBox as Pi,Heading as _i,Image as Fi,ImageCaption as Mi,ImageResize as Ui,ImageStyle as Di,ImageToolbar as Ri,ImageUpload as Oi,PictureEditing as qi,Indent as Hi,IndentBlock as Wi,Link as Ni,List as zi,ListProperties as Ki,MediaEmbed as Vi,Paragraph as Qi,PasteFromOffice as ji,Table as Ji,TableToolbar as Gi,TextTransformation as $i,CloudServices as Zi}from"ckeditor5";r();import{InlineEditor as tn,Essentials as on,Autoformat as rn,Bold as nn,Italic as an,BlockQuote as ln,CKBox as sn,Heading as dn,Image as cn,ImageCaption as mn,ImageStyle as un,ImageToolbar as pn,ImageUpload as gn,PictureEditing as hn,Indent as fn,IndentBlock as bn,Link as yn,List as kn,MediaEmbed as wn,Paragraph as vn,PasteFromOffice as Cn,Table as Tn,TableToolbar as In,TextTransformation as xn,CloudServices as Sn}from"ckeditor5";r();import{MultiRootEditor as Ln,Essentials as Pn,Autoformat as _n,Bold as Fn,Italic as Mn,BlockQuote as Un,CKBox as Dn,Heading as Rn,Image as On,ImageCaption as qn,ImageStyle as Hn,ImageToolbar as Wn,ImageUpload as Nn,PictureEditing as zn,Indent as Kn,IndentBlock as Vn,Link as Qn,List as jn,MediaEmbed as Jn,Paragraph as Gn,PasteFromOffice as $n,Table as Zn,TableToolbar as Xn,TextTransformation as Yn,CloudServices as ea}from"ckeditor5";import{AIChat as kt,AIEditorIntegration as wt,AIQuickActions as vt,AIReviewMode as Ct,AITranslate as Tt,CaseChange as It,Comments as xt,CommentsRepository as St,ExportPdf as At,ExportWord as Et,Footnotes as Bt,FormatPainter as Lt,ImportWord as Pt,LineHeight as _t,MergeFields as Ft,MultiLevelList as Mt,PasteFromOfficeEnhanced as Ut,SlashCommand as Dt,TableOfContents as Rt,Template as Ot,TrackChanges as qt,TrackChangesData as Ht,TrackChangesPreview as Wt,Users as Nt}from"ckeditor5-premium-features";r();r();import{uid as re}from"ckeditor5";function P(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=re(),t=e[Math.floor(Math.random()*e.length)],n=o[Math.floor(Math.random()*o.length)];return{name:t+" "+n,id:i}}function _(e,o=P()){return`${e}?`+Object.keys(o).filter(t=>o[t]).map(t=>`user.${t}=${o[t]}`).join("&")}r();function F(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(i,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}r();var O=Y(R(),1);function S(e){e.on("ready",()=>{let o=e.plugins.get("AnnotationsUIs"),i=e.commands.get("toggleFullscreen"),t=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),c=(0,O.default)(()=>{if(!(i&&i.value))if(t.scrollWidth>t.clientWidth)u("narrowSidebar");else{let a=0;s.forEach((g,p)=>{let h=getComputedStyle(p);for(let b of g)b==="scrollWidth"?a+=p.scrollWidth:a+=parseFloat(h.getPropertyValue(b))||0}),a+n<t.clientWidth&&u("wideSidebar")}},10),m=new ResizeObserver(c);m.observe(t),m.observe(document.querySelector(".editor-content-wrapper")),i&&i.on("execute",()=>{i.value||c()}),c();let d="wideSidebar";function u(a){d!==a&&(o.switchTo(a),d=a)}})}r();function A(){let e=document.querySelectorAll(".live-snippet"),o=[];return e.forEach(i=>{let t=i.querySelector(".live-snippet__container");if(!t)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,i.prepend(n),o.push({container:t,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),t.classList.add("loaded")}})}),o}var zt=z("channelId"),f=z("userId"),E={name:Vt(),id:f,role:"writer"},B=class extends Ze{static get requires(){return[Nt,St]}init(){let o=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");o.addUser(E),o.defineMe(E.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:t})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[t])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Kt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function N(e=()=>{}){let o={ui:{viewportOffset:{top:T()}},root:{initialData:Kt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[le,q,se,de,ce,me,ue,H,pe,ge,he,fe,be,ke,we,ve,Ce,Te,Ie,xe,Se,Ae,Ee,Be,Le,Pe,_e,Fe,Me,Ue,De,Re,Oe,qe,He,We,Ne,W,ze,Ke,Ve,Qe,je,Je,Ge,$e,Xe,Ye,et,tt,ot,rt,it,nt,at,lt,st,dt,ct,mt,ut,pt,gt,ht,ft,bt,kt,wt,vt,Ct,Tt,It,xt,At,Et,Bt,Lt,Pt,_t,Ft,Mt,Ut,Dt,Rt,Ot,qt,Ht,Wt,S,B],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:C,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:zt},cloudServices:{...k,tokenUrl:_(k.tokenUrl,E)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let t=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(t)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),c=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(c)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[H,W,q]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(o);let i=A()[0];return ye.create(o).then(t=>(window.editor=t,document.querySelector(".menubar-container").appendChild(t.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),i.markDemoAsLoaded(),F(t),t)).catch(t=>{console.error(t)})}function z(e){let o=location.search.match(new RegExp(`${e}=([^&]+)`)),i=o?decodeURIComponent(o[1]):null;if(!i){i=yt();let t=new URL(window.location.href);t.searchParams.set(e,i),window.history.replaceState({},document.title,t.toString())}return i}function Vt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],t=o[Math.floor(Math.random()*o.length)];return`${i} ${t}`}N(e=>{let o=["AIChat","AIQuickActions","AITranslate"],i=["ask-ai","aiQuickActions"];e.plugins=e.plugins.filter(t=>!(t.pluginName&&o.includes(t.pluginName))),e.balloonToolbar=e.balloonToolbar.filter(t=>!i.includes(t)),e.toolbar.items=e.toolbar.items.filter(t=>!i.includes(t)),e.ai.review={extraCommands:[{id:"company-style-guide",label:"Company style guide",description:"Apply the company writing style guide to ensure consistent, professional language.",prompt:'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. Replace hedging phrases (e.g., "may require", "could positively impact", "should be treated as") with direct, confident statements. Convert passive voice to active voice where the actor is known or implied. Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). Replace vague language with precise wording (e.g., "minor improvement" \u2192 state the actual change). Keep all data, metrics, and factual content unchanged.'}]}}).then(e=>{window.editor=e,e.plugins.get("AITabs").view.activateTab("reviewMode")});
