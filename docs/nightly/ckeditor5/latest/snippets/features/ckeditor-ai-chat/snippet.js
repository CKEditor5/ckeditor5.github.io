var J=Object.create;var P=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var Y=(e,t)=>()=>(e&&(t=e(e=0)),t);var C=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ee=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of $(t))!X.call(e,n)&&n!==i&&P(e,n,{get:()=>t[n],enumerable:!(r=G(t,n))||r.enumerable});return e};var te=(e,t,i)=>(i=e!=null?J(Z(e)):{},ee(t||!e||!e.__esModule?P(i,"default",{value:e,enumerable:!0}):i,e));var o=Y(()=>{});var U=C(T=>{"use strict";o();Object.defineProperty(T,Symbol.toStringTag,{value:"Module"});function se(e,t,{signal:i,edges:r}={}){let n,l=null,c=r!=null&&r.includes("leading"),m=r==null||r.includes("trailing"),d=()=>{l!==null&&(e.apply(n,l),n=void 0,l=null)},u=()=>{m&&d(),h()},s=null,g=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,u()},t)},p=()=>{s!==null&&(clearTimeout(s),s=null)},h=()=>{p(),n=void 0,l=null},b=()=>{d()},y=function(...Q){if(i?.aborted)return;n=this,l=Q;let j=s==null;g(),c&&j&&d()};return y.schedule=g,y.cancel=h,y.flush=b,i?.addEventListener("abort",h,{once:!0}),y}T.debounce=se});var R=C(x=>{"use strict";o();Object.defineProperty(x,Symbol.toStringTag,{value:"Module"});var le=U();function de(e,t=0,i={}){typeof i!="object"&&(i={});let{leading:r=!1,trailing:n=!0,maxWait:l}=i,c=Array(2);r&&(c[0]="leading"),n&&(c[1]="trailing");let m,d=null,u=le.debounce(function(...p){m=e.apply(this,p),d=null},t,{edges:c}),s=function(...p){return l!=null&&(d===null&&(d=Date.now()),Date.now()-d>=l)?(m=e.apply(this,p),d=Date.now(),u.cancel(),u.schedule(),m):(u.apply(this,p),m)},g=()=>(u.flush(),m);return s.cancel=u.cancel,s.flush=g,s}x.debounce=de});var q=C((Qa,O)=>{o();O.exports=R().debounce});o();import{WideSidebar as Gt,AIChatShortcuts as $t}from"ckeditor5-premium-features";o();import{Alignment as me,Autoformat as z,AutoImage as ue,AutoLink as pe,Autosave as ge,BalloonToolbar as he,BlockQuote as fe,Bold as W,Bookmark as be,CKBox as ye,CKBoxImageEdit as ke,CloudServices as we,Code as Ce,DecoupledEditor as ve,Emoji as Ie,Essentials as Te,FindAndReplace as xe,FontBackgroundColor as Se,FontColor as Ee,FontFamily as Ae,FontSize as Le,Fullscreen as Be,Heading as Pe,HorizontalLine as _e,ImageBlock as Me,ImageCaption as Fe,ImageEditing as De,ImageInline as Ue,ImageInsert as Re,ImageInsertViaUrl as Oe,ImageResize as qe,ImageStyle as He,ImageTextAlternative as ze,ImageToolbar as We,ImageUpload as Ne,ImageUtils as Ke,Indent as Ve,IndentBlock as Qe,Italic as N,Link as je,LinkImage as Je,List as Ge,ListProperties as $e,Mention as Ze,Paragraph as Xe,PasteFromOffice as Ye,PictureEditing as et,Plugin as tt,RemoveFormat as ot,SpecialCharacters as rt,SpecialCharactersArrows as it,SpecialCharactersCurrency as nt,SpecialCharactersEssentials as at,SpecialCharactersLatin as st,SpecialCharactersMathematical as lt,SpecialCharactersText as dt,Strikethrough as ct,Subscript as mt,Superscript as ut,Table as pt,TableCaption as gt,TableCellProperties as ht,TableColumnResize as ft,TableProperties as bt,TableToolbar as yt,TextTransformation as kt,TodoList as wt,Underline as Ct}from"ckeditor5";o();o();var oe="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",re="https://33333.cke-cs.com/easyimage/upload/",ie="33333.cke-cs.com/ws",k={tokenUrl:oe,uploadUrl:re,webSocketUrl:ie};o();var v="https://api.ckbox.io/token/demo";o();import{Plugin as so}from"@ckeditor/ckeditor5-core";import{Essentials as co}from"@ckeditor/ckeditor5-essentials";import{Autoformat as uo}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as go}from"@ckeditor/ckeditor5-block-quote";import{Bold as fo,Italic as bo}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ko}from"@ckeditor/ckeditor5-heading";import{Image as Co,ImageCaption as vo,ImageStyle as Io,ImageToolbar as To}from"@ckeditor/ckeditor5-image";import{Indent as So}from"@ckeditor/ckeditor5-indent";import{Link as Ao}from"@ckeditor/ckeditor5-link";import{List as Bo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as _o}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Fo}from"@ckeditor/ckeditor5-paragraph";import{Table as Uo,TableToolbar as Ro}from"@ckeditor/ckeditor5-table";o();function I(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}o();import{BalloonEditor as No,Essentials as Ko,Autoformat as Vo,BlockToolbar as Qo,Bold as jo,Italic as Jo,BlockQuote as Go,CKBox as $o,Heading as Zo,Image as Xo,ImageCaption as Yo,ImageStyle as er,ImageToolbar as tr,ImageUpload as or,PictureEditing as rr,Indent as ir,IndentBlock as nr,Link as ar,List as sr,MediaEmbed as lr,Paragraph as dr,PasteFromOffice as cr,Table as mr,TableToolbar as ur,TextTransformation as pr,CloudServices as gr}from"ckeditor5";o();import{BalloonEditor as yr,Essentials as kr,Autoformat as wr,Bold as Cr,Italic as vr,BlockQuote as Ir,CKBox as Tr,Heading as xr,Image as Sr,ImageCaption as Er,ImageStyle as Ar,ImageToolbar as Lr,ImageUpload as Br,PictureEditing as Pr,Indent as _r,IndentBlock as Mr,Link as Fr,List as Dr,MediaEmbed as Ur,Paragraph as Rr,PasteFromOffice as Or,Table as qr,TableToolbar as Hr,TextTransformation as zr,CloudServices as Wr}from"ckeditor5";o();import{ClassicEditor as Qr,Essentials as jr,Autoformat as Jr,Bold as Gr,Italic as $r,BlockQuote as Zr,CKBox as Xr,Heading as Yr,Image as ei,ImageCaption as ti,ImageStyle as oi,ImageToolbar as ri,ImageUpload as ii,PictureEditing as ni,Indent as ai,IndentBlock as si,Link as li,List as di,MediaEmbed as ci,Paragraph as mi,PasteFromOffice as ui,Table as pi,TableToolbar as gi,TextTransformation as hi,CloudServices as fi,AutoImage as bi,ImageInsert as yi,Bookmark as ki}from"ckeditor5";o();import{DecoupledEditor as Ii,Essentials as Ti,Alignment as xi,FontSize as Si,FontFamily as Ei,FontColor as Ai,FontBackgroundColor as Li,Autoformat as Bi,Bold as Pi,Italic as _i,Strikethrough as Mi,Underline as Fi,BlockQuote as Di,CKBox as Ui,Heading as Ri,Image as Oi,ImageCaption as qi,ImageResize as Hi,ImageStyle as zi,ImageToolbar as Wi,ImageUpload as Ni,PictureEditing as Ki,Indent as Vi,IndentBlock as Qi,Link as ji,List as Ji,ListProperties as Gi,MediaEmbed as $i,Paragraph as Zi,PasteFromOffice as Xi,Table as Yi,TableToolbar as en,TextTransformation as tn,CloudServices as on}from"ckeditor5";o();import{InlineEditor as sn,Essentials as ln,Autoformat as dn,Bold as cn,Italic as mn,BlockQuote as un,CKBox as pn,Heading as gn,Image as hn,ImageCaption as fn,ImageStyle as bn,ImageToolbar as yn,ImageUpload as kn,PictureEditing as wn,Indent as Cn,IndentBlock as vn,Link as In,List as Tn,MediaEmbed as xn,Paragraph as Sn,PasteFromOffice as En,Table as An,TableToolbar as Ln,TextTransformation as Bn,CloudServices as Pn}from"ckeditor5";o();import{MultiRootEditor as Dn,Essentials as Un,Autoformat as Rn,Bold as On,Italic as qn,BlockQuote as Hn,CKBox as zn,Heading as Wn,Image as Nn,ImageCaption as Kn,ImageStyle as Vn,ImageToolbar as Qn,ImageUpload as jn,PictureEditing as Jn,Indent as Gn,IndentBlock as $n,Link as Zn,List as Xn,MediaEmbed as Yn,Paragraph as ea,PasteFromOffice as ta,Table as oa,TableToolbar as ra,TextTransformation as ia,CloudServices as na}from"ckeditor5";import{AIChat as vt,AIEditorIntegration as It,AIQuickActions as Tt,AIReviewMode as xt,AITranslate as St,CaseChange as Et,Comments as At,CommentsRepository as Lt,ExportPdf as Bt,ExportWord as Pt,Footnotes as _t,FormatPainter as Mt,ImportWord as Ft,LineHeight as Dt,MergeFields as Ut,MultiLevelList as Rt,PasteFromOfficeEnhanced as Ot,SlashCommand as qt,TableOfContents as Ht,Template as zt,TrackChanges as Wt,TrackChangesData as Nt,TrackChangesPreview as Kt,Users as Vt}from"ckeditor5-premium-features";o();o();import{uid as ne}from"ckeditor5";function _(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=ne(),r=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:r+" "+n,id:i}}function M(e,t=_()){return`${e}?`+Object.keys(t).filter(r=>t[r]).map(r=>`user.${r}=${t[r]}`).join("&")}o();import{AICoreError as ae}from"ckeditor5-premium-features";function F(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(t,{error:i,component:r,context:n})=>{typeof window.Sentry>"u"||i instanceof ae&&(i.type==="user"||i.type==="network")||window.Sentry.captureException(i,{tags:{component:r},extra:n})})}o();function D(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(i,r)=>{r[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}o();var H=te(q(),1);function S(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),i=e.commands.get("toggleFullscreen"),r=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let l=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),c=(0,H.default)(()=>{if(!(i&&i.value))if(r.scrollWidth>r.clientWidth)u("narrowSidebar");else{let s=0;l.forEach((g,p)=>{let h=getComputedStyle(p);for(let b of g)b==="scrollWidth"?s+=p.scrollWidth:s+=parseFloat(h.getPropertyValue(b))||0}),s+n<r.clientWidth&&u("wideSidebar")}},10),m=new ResizeObserver(c);m.observe(r),m.observe(document.querySelector(".editor-content-wrapper")),i&&i.on("execute",()=>{i.value||c()}),c();let d="wideSidebar";function u(s){d!==s&&(t.switchTo(s),d=s)}})}o();function E(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(i=>{let r=i.querySelector(".live-snippet__container");if(!r)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,i.prepend(n),t.push({container:r,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),r.classList.add("loaded")}})}),t}o();import{uid as ce}from"ckeditor5";function A(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),i=t?decodeURIComponent(t[1]):null;if(!i){i=ce();let r=new URL(window.location.href);r.searchParams.set(e,i),window.history.replaceState({},document.title,r.toString())}return i}var Qt=A("channelId"),f=A("userId"),L={name:Jt(),id:f,role:"writer"},B=class extends tt{static get requires(){return[Vt,Lt]}init(){let t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");t.addUser(L),t.defineMe(L.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:r})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[r])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},jt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function K(e=()=>{}){let t={ui:{viewportOffset:{top:I()}},root:{initialData:jt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[me,z,ue,pe,ge,he,fe,W,be,ye,ke,we,Ce,Ie,Te,xe,Se,Ee,Ae,Le,Be,Pe,_e,Me,Fe,De,Ue,Re,Oe,qe,He,ze,We,Ne,Ke,Ve,Qe,N,je,Je,Ge,$e,Ze,Xe,Ye,et,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,kt,wt,Ct,vt,It,Tt,xt,St,Et,At,Bt,Pt,_t,Mt,Ft,Dt,Ut,Rt,Ot,qt,Ht,zt,Wt,Nt,Kt,S,B],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:v,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Qt},cloudServices:{...k,tokenUrl:M(k.tokenUrl,L)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let r=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(r)},getData:async()=>{let l=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),c=new File([l],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(c)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[W,N,z]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let i=E()[0];return ve.create(t).then(r=>(window.editor=r,document.querySelector(".menubar-container").appendChild(r.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(r.ui.view.toolbar.element),F(r),i.markDemoAsLoaded(),D(r),r)).catch(r=>{console.error(r)})}function Jt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)];return`${i} ${r}`}o();var V=[{id:"summarize-document",type:"chat",label:"Summarize the document",prompt:"Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this document. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-document",type:"chat",label:"Rewrite the document",prompt:`Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];K(e=>{e.plugins=e.plugins.filter(t=>t.pluginName!=="AIReviewMode"&&t.pluginName!=="AITranslate"),e.ai.chat.shortcuts=V.filter(t=>t.type==="chat"),e.plugins.push(Gt,$t)}).then(e=>{window.editor=e});
