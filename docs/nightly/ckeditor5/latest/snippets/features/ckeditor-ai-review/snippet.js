import{Alignment as oe,Autoformat as H,AutoImage as re,AutoLink as ie,Autosave as ne,BalloonToolbar as ae,BlockQuote as se,Bold as N,Bookmark as le,CKBox as de,CKBoxImageEdit as ce,CloudServices as me,Code as ue,DecoupledEditor as pe,Emoji as ge,Essentials as he,FindAndReplace as fe,FontBackgroundColor as be,FontColor as ye,FontFamily as we,FontSize as ke,Fullscreen as ve,GeneralHtmlSupport as Ce,Heading as xe,HorizontalLine as Ie,ImageBlock as Te,ImageCaption as Se,ImageEditing as Ee,ImageInline as Ae,ImageInsert as Le,ImageInsertViaUrl as Be,ImageResize as Pe,ImageStyle as _e,ImageTextAlternative as Re,ImageToolbar as Fe,ImageUpload as Me,ImageUtils as De,Indent as Ue,IndentBlock as Oe,Italic as W,Link as qe,LinkImage as He,List as Ne,ListProperties as We,Mention as ze,Paragraph as Ke,PasteFromOffice as Ve,PictureEditing as Qe,Plugin as je,RemoveFormat as $e,SpecialCharacters as Ge,SpecialCharactersArrows as Je,SpecialCharactersCurrency as Ze,SpecialCharactersEssentials as Xe,SpecialCharactersLatin as Ye,SpecialCharactersMathematical as et,SpecialCharactersText as tt,Strikethrough as ot,Subscript as rt,Superscript as it,Table as nt,TableCaption as at,TableCellProperties as st,TableColumnResize as lt,TableProperties as dt,TableToolbar as ct,TextTransformation as mt,TodoList as ut,Underline as pt}from"ckeditor5";var Q="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",j="https://33333.cke-cs.com/easyimage/upload/",$="33333.cke-cs.com/ws",w={tokenUrl:Q,uploadUrl:j,webSocketUrl:$};var v="https://api.ckbox.io/token/demo";import{Plugin as jt}from"@ckeditor/ckeditor5-core";import{Essentials as Gt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Zt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Yt}from"@ckeditor/ckeditor5-block-quote";import{Bold as to,Italic as oo}from"@ckeditor/ckeditor5-basic-styles";import{Heading as io}from"@ckeditor/ckeditor5-heading";import{Image as ao,ImageCaption as so,ImageStyle as lo,ImageToolbar as co}from"@ckeditor/ckeditor5-image";import{Indent as uo}from"@ckeditor/ckeditor5-indent";import{Link as go}from"@ckeditor/ckeditor5-link";import{List as fo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as yo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as ko}from"@ckeditor/ckeditor5-paragraph";import{Table as Co,TableToolbar as xo}from"@ckeditor/ckeditor5-table";function C(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function k(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}function x(e,o){customElements.get(e)||customElements.define(e,o)}function I(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function h(e,o){return Object.assign(document.createElement(e),o)}function R(e){return new Promise(o=>{e.addEventListener("load",()=>o(),{once:!0}),e.addEventListener("error",()=>o(),{once:!0})})}function T(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var S=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let o=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=I().then(()=>G(this.shadowRoot,o))}};x("snippet-shadow-root",S);async function G(e,o){let r=J(o),t=h("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(Z).map(X);e.prepend(t,...i),await Promise.all(i.map(async a=>{await R(a),F(a.sheet,r)}))}function J(e){return o=>!e||e.some(r=>`${o}.`.startsWith(`${r}.`))}function Z(e){return e.ownerNode instanceof HTMLElement&&T(e).length>0}function X(e){let o=e.href?h("link",{rel:"stylesheet",href:e.href}):h("style",{textContent:e.ownerNode.textContent});return o.media=e.media.mediaText,o}function F(e,o){let r=T(e);for(let t=r.length-1;t>=0;t--){let i=r[t];i instanceof CSSImportRule&&i.layerName===null?F(i.styleSheet,o):Y(i,o)||e.deleteRule(t)}}function Y(e,o){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&o(e.name)||e instanceof CSSImportRule&&o(e.layerName)}import{BalloonEditor as _o,Essentials as Ro,Autoformat as Fo,BlockToolbar as Mo,Bold as Do,Italic as Uo,BlockQuote as Oo,CKBox as qo,Heading as Ho,Image as No,ImageCaption as Wo,ImageStyle as zo,ImageToolbar as Ko,ImageUpload as Vo,PictureEditing as Qo,Indent as jo,IndentBlock as $o,Link as Go,List as Jo,MediaEmbed as Zo,Paragraph as Xo,PasteFromOffice as Yo,Table as er,TableToolbar as tr,TextTransformation as or,CloudServices as rr}from"ckeditor5";import{BalloonEditor as sr,Essentials as lr,Autoformat as dr,Bold as cr,Italic as mr,BlockQuote as ur,CKBox as pr,Heading as gr,Image as hr,ImageCaption as fr,ImageStyle as br,ImageToolbar as yr,ImageUpload as wr,PictureEditing as kr,Indent as vr,IndentBlock as Cr,Link as xr,List as Ir,MediaEmbed as Tr,Paragraph as Sr,PasteFromOffice as Er,Table as Ar,TableToolbar as Lr,TextTransformation as Br,CloudServices as Pr}from"ckeditor5";import{ClassicEditor as Mr,Essentials as Dr,Autoformat as Ur,Bold as Or,Italic as qr,BlockQuote as Hr,CKBox as Nr,Heading as Wr,Image as zr,ImageCaption as Kr,ImageStyle as Vr,ImageToolbar as Qr,ImageUpload as jr,PictureEditing as $r,Indent as Gr,IndentBlock as Jr,Link as Zr,List as Xr,MediaEmbed as Yr,Paragraph as ei,PasteFromOffice as ti,Table as oi,TableToolbar as ri,TextTransformation as ii,CloudServices as ni,AutoImage as ai,ImageInsert as si,Bookmark as li}from"ckeditor5";import{DecoupledEditor as ui,Essentials as pi,Alignment as gi,FontSize as hi,FontFamily as fi,FontColor as bi,FontBackgroundColor as yi,Autoformat as wi,Bold as ki,Italic as vi,Strikethrough as Ci,Underline as xi,BlockQuote as Ii,CKBox as Ti,Heading as Si,Image as Ei,ImageCaption as Ai,ImageResize as Li,ImageStyle as Bi,ImageToolbar as Pi,ImageUpload as _i,PictureEditing as Ri,Indent as Fi,IndentBlock as Mi,Link as Di,List as Ui,ListProperties as Oi,MediaEmbed as qi,Paragraph as Hi,PasteFromOffice as Ni,Table as Wi,TableToolbar as zi,TextTransformation as Ki,CloudServices as Vi}from"ckeditor5";import{InlineEditor as Gi,Essentials as Ji,Autoformat as Zi,Bold as Xi,Italic as Yi,BlockQuote as en,CKBox as tn,Heading as on,Image as rn,ImageCaption as nn,ImageStyle as an,ImageToolbar as sn,ImageUpload as ln,PictureEditing as dn,Indent as cn,IndentBlock as mn,Link as un,List as pn,MediaEmbed as gn,Paragraph as hn,PasteFromOffice as fn,Table as bn,TableToolbar as yn,TextTransformation as wn,CloudServices as kn}from"ckeditor5";import{MultiRootEditor as In,Essentials as Tn,Autoformat as Sn,Bold as En,Italic as An,BlockQuote as Ln,CKBox as Bn,Heading as Pn,Image as _n,ImageCaption as Rn,ImageStyle as Fn,ImageToolbar as Mn,ImageUpload as Dn,PictureEditing as Un,Indent as On,IndentBlock as qn,Link as Hn,List as Nn,MediaEmbed as Wn,Paragraph as zn,PasteFromOffice as Kn,Table as Vn,TableToolbar as Qn,TextTransformation as jn,CloudServices as $n}from"ckeditor5";import{AIChat as gt,AIEditorIntegration as ht,AIQuickActions as ft,AIReviewMode as bt,AITranslate as yt,CaseChange as wt,Comments as kt,CommentsRepository as vt,ExportPdf as Ct,ExportWord as xt,Footnotes as It,FormatPainter as Tt,ImportWord as St,LineHeight as Et,MultiLevelList as At,PasteFromOfficeEnhanced as Lt,SlashCommand as Bt,TableOfContents as Pt,Template as _t,TrackChanges as Rt,TrackChangesData as Ft,TrackChangesPreview as Mt,Users as Dt}from"ckeditor5-premium-features";import{uid as ee}from"ckeditor5";function M(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=ee(),t=e[Math.floor(Math.random()*e.length)],i=o[Math.floor(Math.random()*o.length)];return{name:t+" "+i,id:r}}function D(e,o=M()){return`${e}?`+Object.keys(o).filter(t=>o[t]).map(t=>`user.${t}=${o[t]}`).join("&")}function U(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(o,{error:r,component:t,code:i,type:a,severity:l,context:d})=>{typeof window.Sentry>"u"||a==="user"||a==="network"||window.Sentry.captureException(r,{tags:{component:t,errorCode:i,errorType:a},level:l==="warning"?"warning":"error",extra:d})})}function O(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function q(e,o,{signal:r,edges:t}={}){let i,a=null,l=t!=null&&t.includes("leading"),d=t==null||t.includes("trailing"),c=()=>{a!==null&&(e.apply(i,a),i=void 0,a=null)},m=()=>{d&&c(),g()},s=null,p=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,m()},o)},u=()=>{s!==null&&(clearTimeout(s),s=null)},g=()=>{u(),i=void 0,a=null},b=()=>{c()},y=function(...K){if(r?.aborted)return;i=this,a=K;let V=s==null;p(),l&&V&&c()};return y.schedule=p,y.cancel=g,y.flush=b,r?.addEventListener("abort",g,{once:!0}),y}function E(e,o=0,r={}){typeof r!="object"&&(r={});let{leading:t=!1,trailing:i=!0,maxWait:a}=r,l=Array(2);t&&(l[0]="leading"),i&&(l[1]="trailing");let d,c=null,m=q(function(...u){d=e.apply(this,u),c=null},o,{edges:l}),s=function(...u){return a!=null&&(c===null&&(c=Date.now()),Date.now()-c>=a)?((t||i)&&(d=e.apply(this,u)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,u),d)},p=()=>(m.flush(),d);return s.cancel=m.cancel,s.flush=p,s}function A(e){e.on("ready",()=>{let o=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),t=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let a=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=E(()=>{if(!(r&&r.value))if(t.scrollWidth>t.clientWidth)m("narrowSidebar");else{let s=0;a.forEach((p,u)=>{let g=getComputedStyle(u);for(let b of p)b==="scrollWidth"?s+=u.scrollWidth:s+=parseFloat(g.getPropertyValue(b))||0}),s+i<t.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(t),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let c="wideSidebar";function m(s){c!==s&&(o.switchTo(s),c=s)}})}function L(){let e=document.querySelectorAll(".live-snippet"),o=[];return e.forEach(r=>{let t=r.querySelector(".live-snippet__container");if(!t)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:t,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),t.classList.add("loaded")}})}),o}import{uid as te}from"ckeditor5";function B(e){let o=location.search.match(new RegExp(`${e}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=te();let t=new URL(window.location.href);t.searchParams.set(e,r),window.history.replaceState({},document.title,t.toString())}return r}var Ut=B("channelId"),f=B("userId"),P={name:qt(),id:f,role:"writer"},_=class extends je{static get requires(){return[Dt,vt]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(P),o.defineMe(P.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:t})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[t])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Ot=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function z(e=()=>{}){let o={ui:{viewportOffset:{top:C()}},root:{initialData:Ot,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[oe,H,re,ie,ne,ae,se,N,le,de,ce,me,ue,ge,he,fe,be,ye,we,ke,ve,Ce,xe,Ie,Te,Se,Ee,Ae,Le,Be,Pe,_e,Re,Fe,Me,De,Ue,Oe,W,qe,He,Ne,We,ze,Ke,Ve,Qe,$e,Ge,Je,Ze,Xe,Ye,et,tt,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,wt,kt,Ct,xt,It,Tt,St,Et,At,Lt,Bt,Pt,_t,Rt,Ft,Mt,A,_],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:v,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Ut},cloudServices:{...w,tokenUrl:D(w.tokenUrl,P)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let t=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(t)},getData:async()=>{let a=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([a],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[N,W,H]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(o);let r=L()[0];return pe.create(o).then(t=>(window.editor=t,document.querySelector(".menubar-container").appendChild(t.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),U(t),r.markDemoAsLoaded(),O(t),t)).catch(t=>{console.error(t)})}function qt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],t=o[Math.floor(Math.random()*o.length)];return`${r} ${t}`}z(e=>{let o=["AIChat","AIQuickActions","AITranslate"],r=["ask-ai","aiQuickActions"];e.plugins=e.plugins.filter(t=>!(t.pluginName&&o.includes(t.pluginName))),e.balloonToolbar=e.balloonToolbar.filter(t=>!r.includes(t)),e.toolbar.items=e.toolbar.items.filter(t=>!r.includes(t)),e.ai.review={extraCommands:[{id:"company-style-guide",label:"Company style guide",description:"Apply the company writing style guide to ensure consistent, professional language.",prompt:'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. Replace hedging phrases (e.g., "may require", "could positively impact", "should be treated as") with direct, confident statements. Convert passive voice to active voice where the actor is known or implied. Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). Replace vague language with precise wording (e.g., "minor improvement" \u2192 state the actual change). Keep all data, metrics, and factual content unchanged.'}]}}).then(e=>{window.editor=e,e.plugins.get("AITabs").view.activateTab("reviewMode")});
