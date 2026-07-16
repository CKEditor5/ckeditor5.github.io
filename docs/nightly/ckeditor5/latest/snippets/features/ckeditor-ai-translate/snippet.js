var j=Object.create;var _=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var X=(e,o,r)=>()=>{if(r)throw r[0];try{return e&&(o=e(e=0)),o}catch(t){throw r=[t],t}};var v=(e,o)=>()=>{try{return o||e((o={exports:{}}).exports,o),o.exports}catch(r){throw o=0,r}};var Y=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of G(o))!Z.call(e,n)&&n!==r&&_(e,n,{get:()=>o[n],enumerable:!(t=J(o,n))||t.enumerable});return e};var ee=(e,o,r)=>(r=e!=null?j($(e)):{},Y(o||!e||!e.__esModule?_(r,"default",{value:e,enumerable:!0}):r,e));var i=X(()=>{});var D=v(T=>{"use strict";i();Object.defineProperty(T,Symbol.toStringTag,{value:"Module"});function ae(e,o,{signal:r,edges:t}={}){let n,s=null,c=t!=null&&t.includes("leading"),m=t==null||t.includes("trailing"),d=()=>{s!==null&&(e.apply(n,s),n=void 0,s=null)},u=()=>{m&&d(),h()},l=null,g=()=>{l!=null&&clearTimeout(l),l=setTimeout(()=>{l=null,u()},o)},p=()=>{l!==null&&(clearTimeout(l),l=null)},h=()=>{p(),n=void 0,s=null},b=()=>{d()},y=function(...V){if(r?.aborted)return;n=this,s=V;let Q=l==null;g(),c&&Q&&d()};return y.schedule=g,y.cancel=h,y.flush=b,r?.addEventListener("abort",h,{once:!0}),y}T.debounce=ae});var O=v(x=>{"use strict";i();Object.defineProperty(x,Symbol.toStringTag,{value:"Module"});var le=D();function se(e,o=0,r={}){typeof r!="object"&&(r={});let{leading:t=!1,trailing:n=!0,maxWait:s}=r,c=Array(2);t&&(c[0]="leading"),n&&(c[1]="trailing");let m,d=null,u=le.debounce(function(...p){m=e.apply(this,p),d=null},o,{edges:c}),l=function(...p){return s!=null&&(d===null&&(d=Date.now()),Date.now()-d>=s)?(m=e.apply(this,p),d=Date.now(),u.cancel(),u.schedule(),m):(u.apply(this,p),m)},g=()=>(u.flush(),m);return l.cancel=u.cancel,l.flush=g,l}x.debounce=se});var q=v((Ka,R)=>{i();R.exports=O().debounce});i();i();import{Alignment as ce,Autoformat as W,AutoImage as me,AutoLink as ue,Autosave as pe,BalloonToolbar as ge,BlockQuote as he,Bold as N,Bookmark as fe,CKBox as be,CKBoxImageEdit as ye,CloudServices as ke,Code as we,DecoupledEditor as ve,Emoji as Ce,Essentials as Ie,FindAndReplace as Te,FontBackgroundColor as xe,FontColor as Se,FontFamily as Ae,FontSize as Ee,Fullscreen as Le,GeneralHtmlSupport as Be,Heading as _e,HorizontalLine as Pe,ImageBlock as Me,ImageCaption as Fe,ImageEditing as Ue,ImageInline as De,ImageInsert as Oe,ImageInsertViaUrl as Re,ImageResize as qe,ImageStyle as He,ImageTextAlternative as We,ImageToolbar as Ne,ImageUpload as ze,ImageUtils as Ke,Indent as Ve,IndentBlock as Qe,Italic as z,Link as je,LinkImage as Je,List as Ge,ListProperties as $e,Mention as Ze,Paragraph as Xe,PasteFromOffice as Ye,PictureEditing as et,Plugin as tt,RemoveFormat as ot,SpecialCharacters as rt,SpecialCharactersArrows as it,SpecialCharactersCurrency as nt,SpecialCharactersEssentials as at,SpecialCharactersLatin as lt,SpecialCharactersMathematical as st,SpecialCharactersText as dt,Strikethrough as ct,Subscript as mt,Superscript as ut,Table as pt,TableCaption as gt,TableCellProperties as ht,TableColumnResize as ft,TableProperties as bt,TableToolbar as yt,TextTransformation as kt,TodoList as wt,Underline as vt}from"ckeditor5";i();i();var te="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",oe="https://33333.cke-cs.com/easyimage/upload/",re="33333.cke-cs.com/ws",k={tokenUrl:te,uploadUrl:oe,webSocketUrl:re};i();var C="https://api.ckbox.io/token/demo";i();import{Plugin as no}from"@ckeditor/ckeditor5-core";import{Essentials as lo}from"@ckeditor/ckeditor5-essentials";import{Autoformat as co}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as uo}from"@ckeditor/ckeditor5-block-quote";import{Bold as go,Italic as ho}from"@ckeditor/ckeditor5-basic-styles";import{Heading as bo}from"@ckeditor/ckeditor5-heading";import{Image as ko,ImageCaption as wo,ImageStyle as vo,ImageToolbar as Co}from"@ckeditor/ckeditor5-image";import{Indent as To}from"@ckeditor/ckeditor5-indent";import{Link as So}from"@ckeditor/ckeditor5-link";import{List as Eo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Bo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Po}from"@ckeditor/ckeditor5-paragraph";import{Table as Fo,TableToolbar as Uo}from"@ckeditor/ckeditor5-table";i();function I(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}i();import{BalloonEditor as Wo,Essentials as No,Autoformat as zo,BlockToolbar as Ko,Bold as Vo,Italic as Qo,BlockQuote as jo,CKBox as Jo,Heading as Go,Image as $o,ImageCaption as Zo,ImageStyle as Xo,ImageToolbar as Yo,ImageUpload as er,PictureEditing as tr,Indent as or,IndentBlock as rr,Link as ir,List as nr,MediaEmbed as ar,Paragraph as lr,PasteFromOffice as sr,Table as dr,TableToolbar as cr,TextTransformation as mr,CloudServices as ur}from"ckeditor5";i();import{BalloonEditor as fr,Essentials as br,Autoformat as yr,Bold as kr,Italic as wr,BlockQuote as vr,CKBox as Cr,Heading as Ir,Image as Tr,ImageCaption as xr,ImageStyle as Sr,ImageToolbar as Ar,ImageUpload as Er,PictureEditing as Lr,Indent as Br,IndentBlock as _r,Link as Pr,List as Mr,MediaEmbed as Fr,Paragraph as Ur,PasteFromOffice as Dr,Table as Or,TableToolbar as Rr,TextTransformation as qr,CloudServices as Hr}from"ckeditor5";i();import{ClassicEditor as Kr,Essentials as Vr,Autoformat as Qr,Bold as jr,Italic as Jr,BlockQuote as Gr,CKBox as $r,Heading as Zr,Image as Xr,ImageCaption as Yr,ImageStyle as ei,ImageToolbar as ti,ImageUpload as oi,PictureEditing as ri,Indent as ii,IndentBlock as ni,Link as ai,List as li,MediaEmbed as si,Paragraph as di,PasteFromOffice as ci,Table as mi,TableToolbar as ui,TextTransformation as pi,CloudServices as gi,AutoImage as hi,ImageInsert as fi,Bookmark as bi}from"ckeditor5";i();import{DecoupledEditor as vi,Essentials as Ci,Alignment as Ii,FontSize as Ti,FontFamily as xi,FontColor as Si,FontBackgroundColor as Ai,Autoformat as Ei,Bold as Li,Italic as Bi,Strikethrough as _i,Underline as Pi,BlockQuote as Mi,CKBox as Fi,Heading as Ui,Image as Di,ImageCaption as Oi,ImageResize as Ri,ImageStyle as qi,ImageToolbar as Hi,ImageUpload as Wi,PictureEditing as Ni,Indent as zi,IndentBlock as Ki,Link as Vi,List as Qi,ListProperties as ji,MediaEmbed as Ji,Paragraph as Gi,PasteFromOffice as $i,Table as Zi,TableToolbar as Xi,TextTransformation as Yi,CloudServices as en}from"ckeditor5";i();import{InlineEditor as nn,Essentials as an,Autoformat as ln,Bold as sn,Italic as dn,BlockQuote as cn,CKBox as mn,Heading as un,Image as pn,ImageCaption as gn,ImageStyle as hn,ImageToolbar as fn,ImageUpload as bn,PictureEditing as yn,Indent as kn,IndentBlock as wn,Link as vn,List as Cn,MediaEmbed as In,Paragraph as Tn,PasteFromOffice as xn,Table as Sn,TableToolbar as An,TextTransformation as En,CloudServices as Ln}from"ckeditor5";i();import{MultiRootEditor as Mn,Essentials as Fn,Autoformat as Un,Bold as Dn,Italic as On,BlockQuote as Rn,CKBox as qn,Heading as Hn,Image as Wn,ImageCaption as Nn,ImageStyle as zn,ImageToolbar as Kn,ImageUpload as Vn,PictureEditing as Qn,Indent as jn,IndentBlock as Jn,Link as Gn,List as $n,MediaEmbed as Zn,Paragraph as Xn,PasteFromOffice as Yn,Table as ea,TableToolbar as ta,TextTransformation as oa,CloudServices as ra}from"ckeditor5";import{AIChat as Ct,AIEditorIntegration as It,AIQuickActions as Tt,AIReviewMode as xt,AITranslate as St,CaseChange as At,Comments as Et,CommentsRepository as Lt,ExportPdf as Bt,ExportWord as _t,Footnotes as Pt,FormatPainter as Mt,ImportWord as Ft,LineHeight as Ut,MergeFields as Dt,MultiLevelList as Ot,PasteFromOfficeEnhanced as Rt,SlashCommand as qt,TableOfContents as Ht,Template as Wt,TrackChanges as Nt,TrackChangesData as zt,TrackChangesPreview as Kt,Users as Vt}from"ckeditor5-premium-features";i();i();import{uid as ie}from"ckeditor5";function P(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=ie(),t=e[Math.floor(Math.random()*e.length)],n=o[Math.floor(Math.random()*o.length)];return{name:t+" "+n,id:r}}function M(e,o=P()){return`${e}?`+Object.keys(o).filter(t=>o[t]).map(t=>`user.${t}=${o[t]}`).join("&")}i();import{AICoreError as ne}from"ckeditor5-premium-features";function F(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(o,{error:r,component:t,context:n})=>{typeof window.Sentry>"u"||r instanceof ne&&(r.type==="user"||r.type==="network")||window.Sentry.captureException(r,{tags:{component:t},extra:n})})}i();function U(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}i();var H=ee(q(),1);function S(e){e.on("ready",()=>{let o=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),t=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),c=(0,H.default)(()=>{if(!(r&&r.value))if(t.scrollWidth>t.clientWidth)u("narrowSidebar");else{let l=0;s.forEach((g,p)=>{let h=getComputedStyle(p);for(let b of g)b==="scrollWidth"?l+=p.scrollWidth:l+=parseFloat(h.getPropertyValue(b))||0}),l+n<t.clientWidth&&u("wideSidebar")}},10),m=new ResizeObserver(c);m.observe(t),m.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||c()}),c();let d="wideSidebar";function u(l){d!==l&&(o.switchTo(l),d=l)}})}i();function A(){let e=document.querySelectorAll(".live-snippet"),o=[];return e.forEach(r=>{let t=r.querySelector(".live-snippet__container");if(!t)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(n),o.push({container:t,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),t.classList.add("loaded")}})}),o}i();import{uid as de}from"ckeditor5";function E(e){let o=location.search.match(new RegExp(`${e}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=de();let t=new URL(window.location.href);t.searchParams.set(e,r),window.history.replaceState({},document.title,t.toString())}return r}var Qt=E("channelId"),f=E("userId"),L={name:Jt(),id:f,role:"writer"},B=class extends tt{static get requires(){return[Vt,Lt]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(L),o.defineMe(L.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:t})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[t])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},jt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function K(e=()=>{}){let o={ui:{viewportOffset:{top:I()}},root:{initialData:jt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[ce,W,me,ue,pe,ge,he,N,fe,be,ye,ke,we,Ce,Ie,Te,xe,Se,Ae,Ee,Le,Be,_e,Pe,Me,Fe,Ue,De,Oe,Re,qe,He,We,Ne,ze,Ke,Ve,Qe,z,je,Je,Ge,$e,Ze,Xe,Ye,et,ot,rt,it,nt,at,lt,st,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,kt,wt,vt,Ct,It,Tt,xt,St,At,Et,Bt,_t,Pt,Mt,Ft,Ut,Dt,Ot,Rt,qt,Ht,Wt,Nt,zt,Kt,S,B],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:C,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Qt},cloudServices:{...k,tokenUrl:M(k.tokenUrl,L)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let t=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(t)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),c=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(c)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[N,z,W]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(o);let r=A()[0];return ve.create(o).then(t=>(window.editor=t,document.querySelector(".menubar-container").appendChild(t.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),F(t),r.markDemoAsLoaded(),U(t),t)).catch(t=>{console.error(t)})}function Jt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],t=o[Math.floor(Math.random()*o.length)];return`${r} ${t}`}K(e=>{let o=["AIChat","AIQuickActions","AIReviewMode"],r=["ask-ai","aiQuickActions"];e.plugins=e.plugins.filter(t=>!(t.pluginName&&o.includes(t.pluginName))),e.balloonToolbar=e.balloonToolbar.filter(t=>!r.includes(t)),e.toolbar.items=e.toolbar.items.filter(t=>!r.includes(t))}).then(e=>{window.editor=e,e.plugins.get("AITabs").view.activateTab("translate")});
