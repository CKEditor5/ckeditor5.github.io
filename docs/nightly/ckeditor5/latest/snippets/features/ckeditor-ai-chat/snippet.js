var j=Object.create;var L=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var X=(e,t)=>()=>(e&&(t=e(e=0)),t);var C=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Y=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of G(t))!Z.call(e,n)&&n!==i&&L(e,n,{get:()=>t[n],enumerable:!(o=J(t,n))||o.enumerable});return e};var ee=(e,t,i)=>(i=e!=null?j($(e)):{},Y(t||!e||!e.__esModule?L(i,"default",{value:e,enumerable:!0}):i,e));var r=X(()=>{});var F=C(I=>{"use strict";r();Object.defineProperty(I,Symbol.toStringTag,{value:"Module"});function ne(e,t,{signal:i,edges:o}={}){let n,l=null,c=o!=null&&o.includes("leading"),m=o==null||o.includes("trailing"),d=()=>{l!==null&&(e.apply(n,l),n=void 0,l=null)},u=()=>{m&&d(),h()},s=null,g=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,u()},t)},p=()=>{s!==null&&(clearTimeout(s),s=null)},h=()=>{p(),n=void 0,l=null},b=()=>{d()},y=function(...V){if(i?.aborted)return;n=this,l=V;let Q=s==null;g(),c&&Q&&d()};return y.schedule=g,y.cancel=h,y.flush=b,i?.addEventListener("abort",h,{once:!0}),y}I.debounce=ne});var U=C(x=>{"use strict";r();Object.defineProperty(x,Symbol.toStringTag,{value:"Module"});var ae=F();function se(e,t=0,i={}){typeof i!="object"&&(i={});let{leading:o=!1,trailing:n=!0,maxWait:l}=i,c=Array(2);o&&(c[0]="leading"),n&&(c[1]="trailing");let m,d=null,u=ae.debounce(function(...p){m=e.apply(this,p),d=null},t,{edges:c}),s=function(...p){return l!=null&&(d===null&&(d=Date.now()),Date.now()-d>=l)?(m=e.apply(this,p),d=Date.now(),u.cancel(),u.schedule(),m):(u.apply(this,p),m)},g=()=>(u.flush(),m);return s.cancel=u.cancel,s.flush=g,s}x.debounce=se});var R=C((za,D)=>{r();D.exports=U().debounce});r();import{WideSidebar as jt,AIChatShortcuts as Jt}from"ckeditor5-premium-features";r();import{Alignment as le,Autoformat as q,AutoImage as de,AutoLink as ce,Autosave as me,BalloonToolbar as ue,BlockQuote as pe,Bold as H,Bookmark as ge,CKBox as he,CKBoxImageEdit as fe,CloudServices as be,Code as ye,DecoupledEditor as ke,Emoji as we,Essentials as Ce,FindAndReplace as ve,FontBackgroundColor as Te,FontColor as Ie,FontFamily as xe,FontSize as Se,Fullscreen as Ee,Heading as Ae,HorizontalLine as Be,ImageBlock as Le,ImageCaption as Pe,ImageEditing as _e,ImageInline as Me,ImageInsert as Fe,ImageInsertViaUrl as Ue,ImageResize as De,ImageStyle as Re,ImageTextAlternative as Oe,ImageToolbar as qe,ImageUpload as He,ImageUtils as ze,Indent as We,IndentBlock as Ne,Italic as z,Link as Ke,LinkImage as Ve,List as Qe,ListProperties as je,Mention as Je,Paragraph as Ge,PasteFromOffice as $e,PictureEditing as Ze,Plugin as Xe,RemoveFormat as Ye,SpecialCharacters as et,SpecialCharactersArrows as tt,SpecialCharactersCurrency as ot,SpecialCharactersEssentials as rt,SpecialCharactersLatin as it,SpecialCharactersMathematical as nt,SpecialCharactersText as at,Strikethrough as st,Subscript as lt,Superscript as dt,Table as ct,TableCaption as mt,TableCellProperties as ut,TableColumnResize as pt,TableProperties as gt,TableToolbar as ht,TextTransformation as ft,TodoList as bt,Underline as yt,uid as kt}from"ckeditor5";r();r();var te="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",oe="https://33333.cke-cs.com/easyimage/upload/",re="33333.cke-cs.com/ws",k={tokenUrl:te,uploadUrl:oe,webSocketUrl:re};r();var v="https://api.ckbox.io/token/demo";r();import{Plugin as no}from"@ckeditor/ckeditor5-core";import{Essentials as so}from"@ckeditor/ckeditor5-essentials";import{Autoformat as co}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as uo}from"@ckeditor/ckeditor5-block-quote";import{Bold as go,Italic as ho}from"@ckeditor/ckeditor5-basic-styles";import{Heading as bo}from"@ckeditor/ckeditor5-heading";import{Image as ko,ImageCaption as wo,ImageStyle as Co,ImageToolbar as vo}from"@ckeditor/ckeditor5-image";import{Indent as Io}from"@ckeditor/ckeditor5-indent";import{Link as So}from"@ckeditor/ckeditor5-link";import{List as Ao}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Lo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as _o}from"@ckeditor/ckeditor5-paragraph";import{Table as Fo,TableToolbar as Uo}from"@ckeditor/ckeditor5-table";r();function T(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}r();import{BalloonEditor as zo,Essentials as Wo,Autoformat as No,BlockToolbar as Ko,Bold as Vo,Italic as Qo,BlockQuote as jo,CKBox as Jo,Heading as Go,Image as $o,ImageCaption as Zo,ImageStyle as Xo,ImageToolbar as Yo,ImageUpload as er,PictureEditing as tr,Indent as or,IndentBlock as rr,Link as ir,List as nr,MediaEmbed as ar,Paragraph as sr,PasteFromOffice as lr,Table as dr,TableToolbar as cr,TextTransformation as mr,CloudServices as ur}from"ckeditor5";r();import{BalloonEditor as fr,Essentials as br,Autoformat as yr,Bold as kr,Italic as wr,BlockQuote as Cr,CKBox as vr,Heading as Tr,Image as Ir,ImageCaption as xr,ImageStyle as Sr,ImageToolbar as Er,ImageUpload as Ar,PictureEditing as Br,Indent as Lr,IndentBlock as Pr,Link as _r,List as Mr,MediaEmbed as Fr,Paragraph as Ur,PasteFromOffice as Dr,Table as Rr,TableToolbar as Or,TextTransformation as qr,CloudServices as Hr}from"ckeditor5";r();import{ClassicEditor as Kr,Essentials as Vr,Autoformat as Qr,Bold as jr,Italic as Jr,BlockQuote as Gr,CKBox as $r,Heading as Zr,Image as Xr,ImageCaption as Yr,ImageStyle as ei,ImageToolbar as ti,ImageUpload as oi,PictureEditing as ri,Indent as ii,IndentBlock as ni,Link as ai,List as si,MediaEmbed as li,Paragraph as di,PasteFromOffice as ci,Table as mi,TableToolbar as ui,TextTransformation as pi,CloudServices as gi,AutoImage as hi,ImageInsert as fi,Bookmark as bi}from"ckeditor5";r();import{DecoupledEditor as Ci,Essentials as vi,Alignment as Ti,FontSize as Ii,FontFamily as xi,FontColor as Si,FontBackgroundColor as Ei,Autoformat as Ai,Bold as Bi,Italic as Li,Strikethrough as Pi,Underline as _i,BlockQuote as Mi,CKBox as Fi,Heading as Ui,Image as Di,ImageCaption as Ri,ImageResize as Oi,ImageStyle as qi,ImageToolbar as Hi,ImageUpload as zi,PictureEditing as Wi,Indent as Ni,IndentBlock as Ki,Link as Vi,List as Qi,ListProperties as ji,MediaEmbed as Ji,Paragraph as Gi,PasteFromOffice as $i,Table as Zi,TableToolbar as Xi,TextTransformation as Yi,CloudServices as en}from"ckeditor5";r();import{InlineEditor as nn,Essentials as an,Autoformat as sn,Bold as ln,Italic as dn,BlockQuote as cn,CKBox as mn,Heading as un,Image as pn,ImageCaption as gn,ImageStyle as hn,ImageToolbar as fn,ImageUpload as bn,PictureEditing as yn,Indent as kn,IndentBlock as wn,Link as Cn,List as vn,MediaEmbed as Tn,Paragraph as In,PasteFromOffice as xn,Table as Sn,TableToolbar as En,TextTransformation as An,CloudServices as Bn}from"ckeditor5";r();import{MultiRootEditor as Mn,Essentials as Fn,Autoformat as Un,Bold as Dn,Italic as Rn,BlockQuote as On,CKBox as qn,Heading as Hn,Image as zn,ImageCaption as Wn,ImageStyle as Nn,ImageToolbar as Kn,ImageUpload as Vn,PictureEditing as Qn,Indent as jn,IndentBlock as Jn,Link as Gn,List as $n,MediaEmbed as Zn,Paragraph as Xn,PasteFromOffice as Yn,Table as ea,TableToolbar as ta,TextTransformation as oa,CloudServices as ra}from"ckeditor5";import{AIChat as wt,AIEditorIntegration as Ct,AIQuickActions as vt,AIReviewMode as Tt,AITranslate as It,CaseChange as xt,Comments as St,CommentsRepository as Et,ExportPdf as At,ExportWord as Bt,Footnotes as Lt,FormatPainter as Pt,ImportWord as _t,LineHeight as Mt,MergeFields as Ft,MultiLevelList as Ut,PasteFromOfficeEnhanced as Dt,SlashCommand as Rt,TableOfContents as Ot,Template as qt,TrackChanges as Ht,TrackChangesData as zt,TrackChangesPreview as Wt,Users as Nt}from"ckeditor5-premium-features";r();r();import{uid as ie}from"ckeditor5";function P(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=ie(),o=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:o+" "+n,id:i}}function _(e,t=P()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}r();function M(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(i,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}r();var O=ee(R(),1);function S(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),i=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let l=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),c=(0,O.default)(()=>{if(!(i&&i.value))if(o.scrollWidth>o.clientWidth)u("narrowSidebar");else{let s=0;l.forEach((g,p)=>{let h=getComputedStyle(p);for(let b of g)b==="scrollWidth"?s+=p.scrollWidth:s+=parseFloat(h.getPropertyValue(b))||0}),s+n<o.clientWidth&&u("wideSidebar")}},10),m=new ResizeObserver(c);m.observe(o),m.observe(document.querySelector(".editor-content-wrapper")),i&&i.on("execute",()=>{i.value||c()}),c();let d="wideSidebar";function u(s){d!==s&&(t.switchTo(s),d=s)}})}r();function E(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(i=>{let o=i.querySelector(".live-snippet__container");if(!o)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,i.prepend(n),t.push({container:o,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),o.classList.add("loaded")}})}),t}var Kt=N("channelId"),f=N("userId"),A={name:Qt(),id:f,role:"writer"},B=class extends Xe{static get requires(){return[Nt,Et]}init(){let t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");t.addUser(A),t.defineMe(A.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Vt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function W(e=()=>{}){let t={ui:{viewportOffset:{top:T()}},root:{initialData:Vt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[le,q,de,ce,me,ue,pe,H,ge,he,fe,be,ye,we,Ce,ve,Te,Ie,xe,Se,Ee,Ae,Be,Le,Pe,_e,Me,Fe,Ue,De,Re,Oe,qe,He,ze,We,Ne,z,Ke,Ve,Qe,je,Je,Ge,$e,Ze,Ye,et,tt,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,wt,Ct,vt,Tt,It,xt,St,At,Bt,Lt,Pt,_t,Mt,Ft,Ut,Dt,Rt,Ot,qt,Ht,zt,Wt,S,B],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:v,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Kt},cloudServices:{...k,tokenUrl:_(k.tokenUrl,A)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let l=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),c=new File([l],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(c)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[H,z,q]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let i=E()[0];return ke.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),i.markDemoAsLoaded(),M(o),o)).catch(o=>{console.error(o)})}function N(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),i=t?decodeURIComponent(t[1]):null;if(!i){i=kt();let o=new URL(window.location.href);o.searchParams.set(e,i),window.history.replaceState({},document.title,o.toString())}return i}function Qt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${i} ${o}`}r();var K=[{id:"summarize-document",type:"chat",label:"Summarize the document",prompt:"Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this document. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-document",type:"chat",label:"Rewrite the document",prompt:`Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];W(e=>{e.plugins=e.plugins.filter(t=>t.pluginName!=="AIReviewMode"&&t.pluginName!=="AITranslate"),e.ai.chat.shortcuts=K.filter(t=>t.type==="chat"),e.plugins.push(jt,Jt)}).then(e=>{window.editor=e});
