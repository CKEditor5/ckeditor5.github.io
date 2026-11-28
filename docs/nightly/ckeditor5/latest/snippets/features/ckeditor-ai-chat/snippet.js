import{WideSidebar as Kt,AIChatShortcuts as Qt}from"ckeditor5-premium-features";import{Alignment as se,Autoformat as q,AutoImage as le,AutoLink as de,Autosave as ce,BalloonToolbar as me,BlockQuote as ue,Bold as N,Bookmark as pe,CKBox as ge,CKBoxImageEdit as he,CloudServices as fe,Code as be,DecoupledEditor as ye,Emoji as we,Essentials as ke,FindAndReplace as Ce,FontBackgroundColor as ve,FontColor as xe,FontFamily as Te,FontSize as Se,Fullscreen as Ie,GeneralHtmlSupport as Ee,Heading as Ae,HorizontalLine as Le,ImageBlock as _e,ImageCaption as Be,ImageEditing as Pe,ImageInline as Re,ImageInsert as Me,ImageInsertViaUrl as Fe,ImageResize as De,ImageStyle as Ue,ImageTextAlternative as Oe,ImageToolbar as He,ImageUpload as qe,ImageUtils as Ne,Indent as We,IndentBlock as ze,Italic as W,Link as Ve,LinkImage as Ke,List as Qe,ListProperties as je,Mention as Ge,Paragraph as $e,PasteFromOffice as Xe,PictureEditing as Je,Plugin as Ze,RemoveFormat as Ye,SpecialCharacters as et,SpecialCharactersArrows as tt,SpecialCharactersCurrency as ot,SpecialCharactersEssentials as rt,SpecialCharactersLatin as it,SpecialCharactersMathematical as nt,SpecialCharactersText as at,Strikethrough as st,Subscript as lt,Superscript as dt,Table as ct,TableCaption as mt,TableCellProperties as ut,TableColumnResize as pt,TableProperties as gt,TableToolbar as ht,TextTransformation as ft,TodoList as bt,Underline as yt}from"ckeditor5";var j="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",G="https://33333.cke-cs.com/easyimage/upload/",$="33333.cke-cs.com/ws",w={tokenUrl:j,uploadUrl:G,webSocketUrl:$};var C="https://api.ckbox.io/token/demo";import{Plugin as eo}from"@ckeditor/ckeditor5-core";import{Essentials as oo}from"@ckeditor/ckeditor5-essentials";import{Autoformat as io}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as ao}from"@ckeditor/ckeditor5-block-quote";import{Bold as lo,Italic as co}from"@ckeditor/ckeditor5-basic-styles";import{Heading as uo}from"@ckeditor/ckeditor5-heading";import{Image as go,ImageCaption as ho,ImageStyle as fo,ImageToolbar as bo}from"@ckeditor/ckeditor5-image";import{Indent as wo}from"@ckeditor/ckeditor5-indent";import{Link as Co}from"@ckeditor/ckeditor5-link";import{List as xo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as So}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Eo}from"@ckeditor/ckeditor5-paragraph";import{Table as Lo,TableToolbar as _o}from"@ckeditor/ckeditor5-table";function v(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function k(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}function x(e,t){customElements.get(e)||customElements.define(e,t)}function T(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function h(e,t){return Object.assign(document.createElement(e),t)}function R(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function S(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var I=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=T().then(()=>X(this.shadowRoot,t))}};x("snippet-shadow-root",I);async function X(e,t){let r=J(t),o=h("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(Z).map(Y);e.prepend(o,...i),await Promise.all(i.map(async a=>{await R(a),M(a.sheet,r)}))}function J(e){return t=>!e||e.some(r=>`${t}.`.startsWith(`${r}.`))}function Z(e){return e.ownerNode instanceof HTMLElement&&S(e).length>0}function Y(e){let t=e.href?h("link",{rel:"stylesheet",href:e.href}):h("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function M(e,t){let r=S(e);for(let o=r.length-1;o>=0;o--){let i=r[o];i instanceof CSSImportRule&&i.layerName===null?M(i.styleSheet,t):ee(i,t)||e.deleteRule(o)}}function ee(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Ho,Essentials as qo,Autoformat as No,BlockToolbar as Wo,Bold as zo,Italic as Vo,BlockQuote as Ko,CKBox as Qo,Heading as jo,Image as Go,ImageCaption as $o,ImageStyle as Xo,ImageToolbar as Jo,ImageUpload as Zo,PictureEditing as Yo,Indent as er,IndentBlock as tr,Link as or,List as rr,MediaEmbed as ir,Paragraph as nr,PasteFromOffice as ar,Table as sr,TableToolbar as lr,TextTransformation as dr,CloudServices as cr}from"ckeditor5";import{BalloonEditor as gr,Essentials as hr,Autoformat as fr,Bold as br,Italic as yr,BlockQuote as wr,CKBox as kr,Heading as Cr,Image as vr,ImageCaption as xr,ImageStyle as Tr,ImageToolbar as Sr,ImageUpload as Ir,PictureEditing as Er,Indent as Ar,IndentBlock as Lr,Link as _r,List as Br,MediaEmbed as Pr,Paragraph as Rr,PasteFromOffice as Mr,Table as Fr,TableToolbar as Dr,TextTransformation as Ur,CloudServices as Or}from"ckeditor5";import{ClassicEditor as Wr,Essentials as zr,Autoformat as Vr,Bold as Kr,Italic as Qr,BlockQuote as jr,CKBox as Gr,Heading as $r,Image as Xr,ImageCaption as Jr,ImageStyle as Zr,ImageToolbar as Yr,ImageUpload as ei,PictureEditing as ti,Indent as oi,IndentBlock as ri,Link as ii,List as ni,MediaEmbed as ai,Paragraph as si,PasteFromOffice as li,Table as di,TableToolbar as ci,TextTransformation as mi,CloudServices as ui,AutoImage as pi,ImageInsert as gi,Bookmark as hi}from"ckeditor5";import{DecoupledEditor as wi,Essentials as ki,Alignment as Ci,FontSize as vi,FontFamily as xi,FontColor as Ti,FontBackgroundColor as Si,Autoformat as Ii,Bold as Ei,Italic as Ai,Strikethrough as Li,Underline as _i,BlockQuote as Bi,CKBox as Pi,Heading as Ri,Image as Mi,ImageCaption as Fi,ImageResize as Di,ImageStyle as Ui,ImageToolbar as Oi,ImageUpload as Hi,PictureEditing as qi,Indent as Ni,IndentBlock as Wi,Link as zi,List as Vi,ListProperties as Ki,MediaEmbed as Qi,Paragraph as ji,PasteFromOffice as Gi,Table as $i,TableToolbar as Xi,TextTransformation as Ji,CloudServices as Zi}from"ckeditor5";import{InlineEditor as on,Essentials as rn,Autoformat as nn,Bold as an,Italic as sn,BlockQuote as ln,CKBox as dn,Heading as cn,Image as mn,ImageCaption as un,ImageStyle as pn,ImageToolbar as gn,ImageUpload as hn,PictureEditing as fn,Indent as bn,IndentBlock as yn,Link as wn,List as kn,MediaEmbed as Cn,Paragraph as vn,PasteFromOffice as xn,Table as Tn,TableToolbar as Sn,TextTransformation as In,CloudServices as En}from"ckeditor5";import{MultiRootEditor as Bn,Essentials as Pn,Autoformat as Rn,Bold as Mn,Italic as Fn,BlockQuote as Dn,CKBox as Un,Heading as On,Image as Hn,ImageCaption as qn,ImageStyle as Nn,ImageToolbar as Wn,ImageUpload as zn,PictureEditing as Vn,Indent as Kn,IndentBlock as Qn,Link as jn,List as Gn,MediaEmbed as $n,Paragraph as Xn,PasteFromOffice as Jn,Table as Zn,TableToolbar as Yn,TextTransformation as ea,CloudServices as ta}from"ckeditor5";import{AIChat as wt,AIEditorIntegration as kt,AIQuickActions as Ct,AIReviewMode as vt,AITranslate as xt,CaseChange as Tt,Comments as St,CommentsRepository as It,ExportPdf as Et,ExportWord as At,Footnotes as Lt,FormatPainter as _t,ImportWord as Bt,LineHeight as Pt,MultiLevelList as Rt,PasteFromOfficeEnhanced as Mt,SlashCommand as Ft,TableOfContents as Dt,Template as Ut,TrackChanges as Ot,TrackChangesData as Ht,TrackChangesPreview as qt,Users as Nt}from"ckeditor5-premium-features";import{uid as te}from"ckeditor5";function F(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=te(),o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return{name:o+" "+i,id:r}}function D(e,t=F()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}function oe(e){return e&&Object.fromEntries(Object.entries(e).map(([t,r])=>[t,re(r)]))}function re(e){let t=typeof e=="string"?e:ie(e);return typeof t=="string"&&t.length>8192?ne(t):e}function ie(e){try{return JSON.stringify(e)}catch{return}}function ne(e){let t=e.charCodeAt(8191),o=t>=55296&&t<=56319?8191:8192;return`${e.slice(0,o)}\u2026`}function U(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(t,{error:r,component:o,code:i,type:a,severity:l,context:d})=>{typeof window.Sentry>"u"||a==="user"||a==="network"||window.Sentry.captureException(r,{tags:{component:o,errorCode:i,errorType:a},level:l==="warning"?"warning":"error",extra:oe(d)})})}function O(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function H(e,t,{signal:r,edges:o}={}){let i,a=null,l=o!=null&&o.includes("leading"),d=o==null||o.includes("trailing"),c=()=>{a!==null&&(e.apply(i,a),i=void 0,a=null)},m=()=>{d&&c(),g()},s=null,p=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,m()},t)},u=()=>{s!==null&&(clearTimeout(s),s=null)},g=()=>{u(),i=void 0,a=null},b=()=>{c()},y=function(...K){if(r?.aborted)return;i=this,a=K;let Q=s==null;p(),l&&Q&&c()};return y.schedule=p,y.cancel=g,y.flush=b,r?.addEventListener("abort",g,{once:!0}),y}function E(e,t=0,r={}){typeof r!="object"&&(r={});let{leading:o=!1,trailing:i=!0,maxWait:a}=r,l=Array(2);o&&(l[0]="leading"),i&&(l[1]="trailing");let d,c=null,m=H(function(...u){d=e.apply(this,u),c=null},t,{edges:l}),s=function(...u){return a!=null&&(c===null&&(c=Date.now()),Date.now()-c>=a)?((o||i)&&(d=e.apply(this,u)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,u),d)},p=()=>(m.flush(),d);return s.cancel=m.cancel,s.flush=p,s}function A(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let a=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=E(()=>{if(!(r&&r.value))if(o.scrollWidth>o.clientWidth)m("narrowSidebar");else{let s=0;a.forEach((p,u)=>{let g=getComputedStyle(u);for(let b of p)b==="scrollWidth"?s+=u.scrollWidth:s+=parseFloat(g.getPropertyValue(b))||0}),s+i<o.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(o),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let c="wideSidebar";function m(s){c!==s&&(t.switchTo(s),c=s)}})}function L(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(r=>{let o=r.querySelector(".live-snippet__container");if(!o)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),t.push({container:o,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),o.classList.add("loaded")}})}),t}import{uid as ae}from"ckeditor5";function _(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),r=t?decodeURIComponent(t[1]):null;if(!r){r=ae();let o=new URL(window.location.href);o.searchParams.set(e,r),window.history.replaceState({},document.title,o.toString())}return r}var Wt=_("channelId"),f=_("userId"),B={name:Vt(),id:f,role:"writer"},P=class extends Ze{static get requires(){return[Nt,It]}init(){let t=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");t.addUser(B),t.defineMe(B.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},zt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function z(e=()=>{}){let t={ui:{viewportOffset:{top:v()}},root:{initialData:zt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[se,q,le,de,ce,me,ue,N,pe,ge,he,fe,be,we,ke,Ce,ve,xe,Te,Se,Ie,Ee,Ae,Le,_e,Be,Pe,Re,Me,Fe,De,Ue,Oe,He,qe,Ne,We,ze,W,Ve,Ke,Qe,je,Ge,$e,Xe,Je,Ye,et,tt,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,wt,kt,Ct,vt,xt,Tt,St,Et,At,Lt,_t,Bt,Pt,Rt,Mt,Ft,Dt,Ut,Ot,Ht,qt,A,P],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:C,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Wt},cloudServices:{...w,tokenUrl:D(w.tokenUrl,B)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let a=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([a],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[N,W,q]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let r=L()[0];return ye.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),U(o),r.markDemoAsLoaded(),O(o),o)).catch(o=>{console.error(o)})}function Vt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${r} ${o}`}var V=[{id:"summarize-document",type:"chat",label:"Summarize the document",prompt:"Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this document. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-document",type:"chat",label:"Rewrite the document",prompt:`Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];z(e=>{e.plugins=e.plugins.filter(t=>t.pluginName!=="AIReviewMode"&&t.pluginName!=="AITranslate"),e.ai.chat.shortcuts=V.filter(t=>t.type==="chat"),e.plugins.push(Kt,Qt)}).then(e=>{window.editor=e});
