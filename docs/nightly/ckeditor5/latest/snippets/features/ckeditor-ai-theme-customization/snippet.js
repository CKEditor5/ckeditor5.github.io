import{Alignment as re,Autoformat as q,AutoImage as ie,AutoLink as ne,Autosave as ae,BalloonToolbar as se,BlockQuote as le,Bold as N,Bookmark as de,CKBox as ce,CKBoxImageEdit as me,CloudServices as ue,Code as pe,DecoupledEditor as ge,Emoji as he,Essentials as fe,FindAndReplace as be,FontBackgroundColor as ye,FontColor as ke,FontFamily as we,FontSize as Ce,Fullscreen as ve,GeneralHtmlSupport as Se,Heading as xe,HorizontalLine as Te,ImageBlock as Ie,ImageCaption as Ee,ImageEditing as Le,ImageInline as Ae,ImageInsert as Be,ImageInsertViaUrl as Pe,ImageResize as _e,ImageStyle as Re,ImageTextAlternative as Fe,ImageToolbar as Me,ImageUpload as De,ImageUtils as Ue,Indent as Oe,IndentBlock as He,Italic as W,Link as qe,LinkImage as Ne,List as We,ListProperties as Ke,Mention as ze,Paragraph as Ve,PasteFromOffice as Qe,PictureEditing as je,Plugin as $e,RemoveFormat as Ge,SpecialCharacters as Je,SpecialCharactersArrows as Ze,SpecialCharactersCurrency as Xe,SpecialCharactersEssentials as Ye,SpecialCharactersLatin as et,SpecialCharactersMathematical as tt,SpecialCharactersText as ot,Strikethrough as rt,Subscript as it,Superscript as nt,Table as at,TableCaption as st,TableCellProperties as lt,TableColumnResize as dt,TableProperties as ct,TableToolbar as mt,TextTransformation as ut,TodoList as pt,Underline as gt}from"ckeditor5";var j="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",$="https://33333.cke-cs.com/easyimage/upload/",G="33333.cke-cs.com/ws",k={tokenUrl:j,uploadUrl:$,webSocketUrl:G};var C="https://api.ckbox.io/token/demo";import{Plugin as Zt}from"@ckeditor/ckeditor5-core";import{Essentials as Yt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as to}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as ro}from"@ckeditor/ckeditor5-block-quote";import{Bold as no,Italic as ao}from"@ckeditor/ckeditor5-basic-styles";import{Heading as lo}from"@ckeditor/ckeditor5-heading";import{Image as mo,ImageCaption as uo,ImageStyle as po,ImageToolbar as go}from"@ckeditor/ckeditor5-image";import{Indent as fo}from"@ckeditor/ckeditor5-indent";import{Link as yo}from"@ckeditor/ckeditor5-link";import{List as wo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as vo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as xo}from"@ckeditor/ckeditor5-paragraph";import{Table as Io,TableToolbar as Eo}from"@ckeditor/ckeditor5-table";function v(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}function S(e,t){customElements.get(e)||customElements.define(e,t)}function x(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function h(e,t){return Object.assign(document.createElement(e),t)}function R(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function T(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var I=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=x().then(()=>J(this.shadowRoot,t))}};S("snippet-shadow-root",I);async function J(e,t){let r=Z(t),o=h("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(X).map(Y);e.prepend(o,...i),await Promise.all(i.map(async n=>{await R(n),F(n.sheet,r)}))}function Z(e){return t=>!e||e.some(r=>`${t}.`.startsWith(`${r}.`))}function X(e){return e.ownerNode instanceof HTMLElement&&T(e).length>0}function Y(e){let t=e.href?h("link",{rel:"stylesheet",href:e.href}):h("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function F(e,t){let r=T(e);for(let o=r.length-1;o>=0;o--){let i=r[o];i instanceof CSSImportRule&&i.layerName===null?F(i.styleSheet,t):ee(i,t)||e.deleteRule(o)}}function ee(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Do,Essentials as Uo,Autoformat as Oo,BlockToolbar as Ho,Bold as qo,Italic as No,BlockQuote as Wo,CKBox as Ko,Heading as zo,Image as Vo,ImageCaption as Qo,ImageStyle as jo,ImageToolbar as $o,ImageUpload as Go,PictureEditing as Jo,Indent as Zo,IndentBlock as Xo,Link as Yo,List as er,MediaEmbed as tr,Paragraph as or,PasteFromOffice as rr,Table as ir,TableToolbar as nr,TextTransformation as ar,CloudServices as sr}from"ckeditor5";import{BalloonEditor as mr,Essentials as ur,Autoformat as pr,Bold as gr,Italic as hr,BlockQuote as fr,CKBox as br,Heading as yr,Image as kr,ImageCaption as wr,ImageStyle as Cr,ImageToolbar as vr,ImageUpload as Sr,PictureEditing as xr,Indent as Tr,IndentBlock as Ir,Link as Er,List as Lr,MediaEmbed as Ar,Paragraph as Br,PasteFromOffice as Pr,Table as _r,TableToolbar as Rr,TextTransformation as Fr,CloudServices as Mr}from"ckeditor5";import{ClassicEditor as Hr,Essentials as qr,Autoformat as Nr,Bold as Wr,Italic as Kr,BlockQuote as zr,CKBox as Vr,Heading as Qr,Image as jr,ImageCaption as $r,ImageStyle as Gr,ImageToolbar as Jr,ImageUpload as Zr,PictureEditing as Xr,Indent as Yr,IndentBlock as ei,Link as ti,List as oi,MediaEmbed as ri,Paragraph as ii,PasteFromOffice as ni,Table as ai,TableToolbar as si,TextTransformation as li,CloudServices as di,AutoImage as ci,ImageInsert as mi,Bookmark as ui}from"ckeditor5";import{DecoupledEditor as fi,Essentials as bi,Alignment as yi,FontSize as ki,FontFamily as wi,FontColor as Ci,FontBackgroundColor as vi,Autoformat as Si,Bold as xi,Italic as Ti,Strikethrough as Ii,Underline as Ei,BlockQuote as Li,CKBox as Ai,Heading as Bi,Image as Pi,ImageCaption as _i,ImageResize as Ri,ImageStyle as Fi,ImageToolbar as Mi,ImageUpload as Di,PictureEditing as Ui,Indent as Oi,IndentBlock as Hi,Link as qi,List as Ni,ListProperties as Wi,MediaEmbed as Ki,Paragraph as zi,PasteFromOffice as Vi,Table as Qi,TableToolbar as ji,TextTransformation as $i,CloudServices as Gi}from"ckeditor5";import{InlineEditor as Yi,Essentials as en,Autoformat as tn,Bold as on,Italic as rn,BlockQuote as nn,CKBox as an,Heading as sn,Image as ln,ImageCaption as dn,ImageStyle as cn,ImageToolbar as mn,ImageUpload as un,PictureEditing as pn,Indent as gn,IndentBlock as hn,Link as fn,List as bn,MediaEmbed as yn,Paragraph as kn,PasteFromOffice as wn,Table as Cn,TableToolbar as vn,TextTransformation as Sn,CloudServices as xn}from"ckeditor5";import{MultiRootEditor as Ln,Essentials as An,Autoformat as Bn,Bold as Pn,Italic as _n,BlockQuote as Rn,CKBox as Fn,Heading as Mn,Image as Dn,ImageCaption as Un,ImageStyle as On,ImageToolbar as Hn,ImageUpload as qn,PictureEditing as Nn,Indent as Wn,IndentBlock as Kn,Link as zn,List as Vn,MediaEmbed as Qn,Paragraph as jn,PasteFromOffice as $n,Table as Gn,TableToolbar as Jn,TextTransformation as Zn,CloudServices as Xn}from"ckeditor5";import{AIChat as ht,AIEditorIntegration as ft,AIQuickActions as bt,AIReviewMode as yt,AITranslate as kt,CaseChange as wt,Comments as Ct,CommentsRepository as vt,ExportPdf as St,ExportWord as xt,Footnotes as Tt,FormatPainter as It,ImportWord as Et,LineHeight as Lt,MultiLevelList as At,PasteFromOfficeEnhanced as Bt,SlashCommand as Pt,TableOfContents as _t,Template as Rt,TrackChanges as Ft,TrackChangesData as Mt,TrackChangesPreview as Dt,Users as Ut}from"ckeditor5-premium-features";import{uid as te}from"ckeditor5";function M(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=te(),o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return{name:o+" "+i,id:r}}function D(e,t=M()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}function U(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(t,{error:r,component:o,code:i,type:n,severity:l,context:d})=>{typeof window.Sentry>"u"||n==="user"||n==="network"||window.Sentry.captureException(r,{tags:{component:o,errorCode:i,errorType:n},level:l==="warning"?"warning":"error",extra:d})})}function O(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function H(e,t,{signal:r,edges:o}={}){let i,n=null,l=o!=null&&o.includes("leading"),d=o==null||o.includes("trailing"),c=()=>{n!==null&&(e.apply(i,n),i=void 0,n=null)},m=()=>{d&&c(),g()},s=null,p=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,m()},t)},u=()=>{s!==null&&(clearTimeout(s),s=null)},g=()=>{u(),i=void 0,n=null},b=()=>{c()},y=function(...V){if(r?.aborted)return;i=this,n=V;let Q=s==null;p(),l&&Q&&c()};return y.schedule=p,y.cancel=g,y.flush=b,r?.addEventListener("abort",g,{once:!0}),y}function E(e,t=0,r={}){typeof r!="object"&&(r={});let{leading:o=!1,trailing:i=!0,maxWait:n}=r,l=Array(2);o&&(l[0]="leading"),i&&(l[1]="trailing");let d,c=null,m=H(function(...u){d=e.apply(this,u),c=null},t,{edges:l}),s=function(...u){return n!=null&&(c===null&&(c=Date.now()),Date.now()-c>=n)?((o||i)&&(d=e.apply(this,u)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,u),d)},p=()=>(m.flush(),d);return s.cancel=m.cancel,s.flush=p,s}function L(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let n=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=E(()=>{if(!(r&&r.value))if(o.scrollWidth>o.clientWidth)m("narrowSidebar");else{let s=0;n.forEach((p,u)=>{let g=getComputedStyle(u);for(let b of p)b==="scrollWidth"?s+=u.scrollWidth:s+=parseFloat(g.getPropertyValue(b))||0}),s+i<o.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(o),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let c="wideSidebar";function m(s){c!==s&&(t.switchTo(s),c=s)}})}function A(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(r=>{let o=r.querySelector(".live-snippet__container");if(!o)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),t.push({container:o,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),o.classList.add("loaded")}})}),t}import{uid as oe}from"ckeditor5";function B(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),r=t?decodeURIComponent(t[1]):null;if(!r){r=oe();let o=new URL(window.location.href);o.searchParams.set(e,r),window.history.replaceState({},document.title,o.toString())}return r}var Ot=B("channelId"),f=B("userId"),P={name:qt(),id:f,role:"writer"},_=class extends $e{static get requires(){return[Ut,vt]}init(){let t=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");t.addUser(P),t.defineMe(P.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Ht=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function K(e=()=>{}){let t={ui:{viewportOffset:{top:v()}},root:{initialData:Ht,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[re,q,ie,ne,ae,se,le,N,de,ce,me,ue,pe,he,fe,be,ye,ke,we,Ce,ve,Se,xe,Te,Ie,Ee,Le,Ae,Be,Pe,_e,Re,Fe,Me,De,Ue,Oe,He,W,qe,Ne,We,Ke,ze,Ve,Qe,je,Ge,Je,Ze,Xe,Ye,et,tt,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,kt,wt,Ct,St,xt,Tt,It,Et,Lt,At,Bt,Pt,_t,Rt,Ft,Mt,Dt,L,_],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:C,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Ot},cloudServices:{...k,tokenUrl:D(k.tokenUrl,P)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let n=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([n],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[N,W,q]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let r=A()[0];return ge.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),U(o),r.markDemoAsLoaded(),O(o),o)).catch(o=>{console.error(o)})}function qt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${r} ${o}`}var z=`/*
 * What you're currently looking at is the source code of a legally protected, proprietary software.
 * CKEditor 5 Collaboration is licensed under a commercial license and protected by copyright law. Where not otherwise indicated,
 * all CKEditor 5 Collaboration content is authored by CKSource engineers and consists of CKSource-owned intellectual property.
 *
 * @license Copyright (c) 2003-2026, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* Recolors the whole editor. */
:root {
	--ck-color-base-action: hsl(168, 76%, 34%);
	--ck-color-base-action-hover: hsl(168, 76%, 28%);
	--ck-color-base-action-muted: hsl(168, 45%, 92%);
	--ck-color-base-action-disabled: hsl(168, 40%, 70%);
	--ck-color-base-active: hsl(168, 76%, 34%);
	--ck-color-base-active-focus: hsl(168, 76%, 28%);
	--ck-color-base-selected: hsl(168, 60%, 96%);
	--ck-color-base-selected-hover: hsl(168, 60%, 92%);
}
`;var Wt={default:`/* The default theme. No overrides. */
`,brand:z};K().then(e=>{window.editor=e;let t=document.createElement("style");document.head.appendChild(t),e.on("destroy",()=>t.remove()),window.umberto.afterReady(()=>{let{codeBlock:r}=document.getElementById("snippet-ai-theme-css"),o=document.querySelectorAll('[id^="snippet-ai-theme-"] input[name="snippet-ai-theme"]');for(let n of o)n.addEventListener("change",()=>i(n.value));i("brand");function i(n){let l=Kt(Wt[n]);t.textContent=l;for(let d of o)d.checked=d.value===n;r.setCode(l)}})});function Kt(e){return e.replace(/^\/\*[\s\S]*?@license[\s\S]*?\*\/\s*/,"")}
