import{Alignment as le,Autoformat as W,AutoImage as de,AutoLink as ce,Autosave as me,BalloonToolbar as ue,BlockQuote as pe,Bold as V,Bookmark as ge,CKBox as he,CKBoxImageEdit as fe,CloudServices as be,Code as ye,DecoupledEditor as ke,Emoji as we,Essentials as Ce,FindAndReplace as Te,FontBackgroundColor as xe,FontColor as Ie,FontFamily as ve,FontSize as Se,Fullscreen as Ee,GeneralHtmlSupport as Ae,Heading as Le,HorizontalLine as Be,ImageBlock as _e,ImageCaption as Pe,ImageEditing as Re,ImageInline as Me,ImageInsert as Fe,ImageInsertViaUrl as Ue,ImageResize as De,ImageStyle as Oe,ImageTextAlternative as He,ImageToolbar as qe,ImageUpload as Ne,ImageUtils as We,Indent as Ve,IndentBlock as ze,Italic as z,Link as Ke,LinkImage as Qe,List as je,ListProperties as Ge,Mention as $e,Paragraph as Xe,PasteFromOffice as Je,PictureEditing as Ze,Plugin as Ye,RemoveFormat as et,SpecialCharacters as tt,SpecialCharactersArrows as ot,SpecialCharactersCurrency as rt,SpecialCharactersEssentials as it,SpecialCharactersLatin as nt,SpecialCharactersMathematical as at,SpecialCharactersText as st,Strikethrough as lt,Subscript as dt,Superscript as ct,Table as mt,TableCaption as ut,TableCellProperties as pt,TableColumnResize as gt,TableProperties as ht,TableToolbar as ft,TextTransformation as bt,TodoList as yt,Underline as kt}from"ckeditor5";var G="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",$="https://33333.cke-cs.com/easyimage/upload/",X="33333.cke-cs.com/ws",k={tokenUrl:G,uploadUrl:$,webSocketUrl:X};var C="https://api.ckbox.io/token/demo";import{Plugin as Yt}from"@ckeditor/ckeditor5-core";import{Essentials as to}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ro}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as no}from"@ckeditor/ckeditor5-block-quote";import{Bold as so,Italic as lo}from"@ckeditor/ckeditor5-basic-styles";import{Heading as mo}from"@ckeditor/ckeditor5-heading";import{Image as po,ImageCaption as go,ImageStyle as ho,ImageToolbar as fo}from"@ckeditor/ckeditor5-image";import{Indent as yo}from"@ckeditor/ckeditor5-indent";import{Link as wo}from"@ckeditor/ckeditor5-link";import{List as To}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Io}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as So}from"@ckeditor/ckeditor5-paragraph";import{Table as Ao,TableToolbar as Lo}from"@ckeditor/ckeditor5-table";function T({id:e,target:t,text:r,editor:o,tippyOptions:i}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:r});return}let n=window.umberto.Tooltip.create({id:e,text:r,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let l of o.editing.view.document.roots)l.once("change:isFocused",(d,c,m)=>{m&&n.destroy()});return n}function x(e,t){let r=e.items,o;return typeof t=="function"?o=r.find(t):o=r.get(t),o?o.element:void 0}function I(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}function v(e,t){customElements.get(e)||customElements.define(e,t)}function S(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function h(e,t){return Object.assign(document.createElement(e),t)}function F(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function E(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var A=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=S().then(()=>J(this.shadowRoot,t))}};v("snippet-shadow-root",A);async function J(e,t){let r=Z(t),o=h("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(Y).map(ee);e.prepend(o,...i),await Promise.all(i.map(async n=>{await F(n),U(n.sheet,r)}))}function Z(e){return t=>!e||e.some(r=>`${t}.`.startsWith(`${r}.`))}function Y(e){return e.ownerNode instanceof HTMLElement&&E(e).length>0}function ee(e){let t=e.href?h("link",{rel:"stylesheet",href:e.href}):h("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function U(e,t){let r=E(e);for(let o=r.length-1;o>=0;o--){let i=r[o];i instanceof CSSImportRule&&i.layerName===null?U(i.styleSheet,t):te(i,t)||e.deleteRule(o)}}function te(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Oo,Essentials as Ho,Autoformat as qo,BlockToolbar as No,Bold as Wo,Italic as Vo,BlockQuote as zo,CKBox as Ko,Heading as Qo,Image as jo,ImageCaption as Go,ImageStyle as $o,ImageToolbar as Xo,ImageUpload as Jo,PictureEditing as Zo,Indent as Yo,IndentBlock as er,Link as tr,List as or,MediaEmbed as rr,Paragraph as ir,PasteFromOffice as nr,Table as ar,TableToolbar as sr,TextTransformation as lr,CloudServices as dr}from"ckeditor5";import{BalloonEditor as pr,Essentials as gr,Autoformat as hr,Bold as fr,Italic as br,BlockQuote as yr,CKBox as kr,Heading as wr,Image as Cr,ImageCaption as Tr,ImageStyle as xr,ImageToolbar as Ir,ImageUpload as vr,PictureEditing as Sr,Indent as Er,IndentBlock as Ar,Link as Lr,List as Br,MediaEmbed as _r,Paragraph as Pr,PasteFromOffice as Rr,Table as Mr,TableToolbar as Fr,TextTransformation as Ur,CloudServices as Dr}from"ckeditor5";import{ClassicEditor as Nr,Essentials as Wr,Autoformat as Vr,Bold as zr,Italic as Kr,BlockQuote as Qr,CKBox as jr,Heading as Gr,Image as $r,ImageCaption as Xr,ImageStyle as Jr,ImageToolbar as Zr,ImageUpload as Yr,PictureEditing as ei,Indent as ti,IndentBlock as oi,Link as ri,List as ii,MediaEmbed as ni,Paragraph as ai,PasteFromOffice as si,Table as li,TableToolbar as di,TextTransformation as ci,CloudServices as mi,AutoImage as ui,ImageInsert as pi,Bookmark as gi}from"ckeditor5";import{DecoupledEditor as yi,Essentials as ki,Alignment as wi,FontSize as Ci,FontFamily as Ti,FontColor as xi,FontBackgroundColor as Ii,Autoformat as vi,Bold as Si,Italic as Ei,Strikethrough as Ai,Underline as Li,BlockQuote as Bi,CKBox as _i,Heading as Pi,Image as Ri,ImageCaption as Mi,ImageResize as Fi,ImageStyle as Ui,ImageToolbar as Di,ImageUpload as Oi,PictureEditing as Hi,Indent as qi,IndentBlock as Ni,Link as Wi,List as Vi,ListProperties as zi,MediaEmbed as Ki,Paragraph as Qi,PasteFromOffice as ji,Table as Gi,TableToolbar as $i,TextTransformation as Xi,CloudServices as Ji}from"ckeditor5";import{InlineEditor as tn,Essentials as on,Autoformat as rn,Bold as nn,Italic as an,BlockQuote as sn,CKBox as ln,Heading as dn,Image as cn,ImageCaption as mn,ImageStyle as un,ImageToolbar as pn,ImageUpload as gn,PictureEditing as hn,Indent as fn,IndentBlock as bn,Link as yn,List as kn,MediaEmbed as wn,Paragraph as Cn,PasteFromOffice as Tn,Table as xn,TableToolbar as In,TextTransformation as vn,CloudServices as Sn}from"ckeditor5";import{MultiRootEditor as Bn,Essentials as _n,Autoformat as Pn,Bold as Rn,Italic as Mn,BlockQuote as Fn,CKBox as Un,Heading as Dn,Image as On,ImageCaption as Hn,ImageStyle as qn,ImageToolbar as Nn,ImageUpload as Wn,PictureEditing as Vn,Indent as zn,IndentBlock as Kn,Link as Qn,List as jn,MediaEmbed as Gn,Paragraph as $n,PasteFromOffice as Xn,Table as Jn,TableToolbar as Zn,TextTransformation as Yn,CloudServices as ea}from"ckeditor5";import{AIChat as wt,AIEditorIntegration as Ct,AIQuickActions as Tt,AIReviewMode as xt,AITranslate as It,CaseChange as vt,Comments as St,CommentsRepository as Et,ExportPdf as At,ExportWord as Lt,Footnotes as Bt,FormatPainter as _t,ImportWord as Pt,LineHeight as Rt,MultiLevelList as Mt,PasteFromOfficeEnhanced as Ft,SlashCommand as Ut,TableOfContents as Dt,Template as Ot,TrackChanges as Ht,TrackChangesData as qt,TrackChangesPreview as Nt,Users as Wt}from"ckeditor5-premium-features";import{uid as oe}from"ckeditor5";function D(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=oe(),o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return{name:o+" "+i,id:r}}function O(e,t=D()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}function re(e){return e&&Object.fromEntries(Object.entries(e).map(([t,r])=>[t,ie(r)]))}function ie(e){let t=typeof e=="string"?e:ne(e);return typeof t=="string"&&t.length>8192?ae(t):e}function ne(e){try{return JSON.stringify(e)}catch{return}}function ae(e){let t=e.charCodeAt(8191),o=t>=55296&&t<=56319?8191:8192;return`${e.slice(0,o)}\u2026`}function H(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(t,{error:r,component:o,code:i,type:n,severity:l,context:d})=>{typeof window.Sentry>"u"||n==="user"||n==="network"||window.Sentry.captureException(r,{tags:{component:o,errorCode:i,errorType:n},level:l==="warning"?"warning":"error",extra:re(d)})})}function q(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function N(e,t,{signal:r,edges:o}={}){let i,n=null,l=o!=null&&o.includes("leading"),d=o==null||o.includes("trailing"),c=()=>{n!==null&&(e.apply(i,n),i=void 0,n=null)},m=()=>{d&&c(),g()},s=null,p=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,m()},t)},u=()=>{s!==null&&(clearTimeout(s),s=null)},g=()=>{u(),i=void 0,n=null},b=()=>{c()},y=function(...Q){if(r?.aborted)return;i=this,n=Q;let j=s==null;p(),l&&j&&c()};return y.schedule=p,y.cancel=g,y.flush=b,r?.addEventListener("abort",g,{once:!0}),y}function L(e,t=0,r={}){typeof r!="object"&&(r={});let{leading:o=!1,trailing:i=!0,maxWait:n}=r,l=Array(2);o&&(l[0]="leading"),i&&(l[1]="trailing");let d,c=null,m=N(function(...u){d=e.apply(this,u),c=null},t,{edges:l}),s=function(...u){return n!=null&&(c===null&&(c=Date.now()),Date.now()-c>=n)?((o||i)&&(d=e.apply(this,u)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,u),d)},p=()=>(m.flush(),d);return s.cancel=m.cancel,s.flush=p,s}function B(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let n=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=L(()=>{if(!(r&&r.value))if(o.scrollWidth>o.clientWidth)m("narrowSidebar");else{let s=0;n.forEach((p,u)=>{let g=getComputedStyle(u);for(let b of p)b==="scrollWidth"?s+=u.scrollWidth:s+=parseFloat(g.getPropertyValue(b))||0}),s+i<o.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(o),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let c="wideSidebar";function m(s){c!==s&&(t.switchTo(s),c=s)}})}function _(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(r=>{let o=r.querySelector(".live-snippet__container");if(!o)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),t.push({container:o,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),o.classList.add("loaded")}})}),t}import{uid as se}from"ckeditor5";function P(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),r=t?decodeURIComponent(t[1]):null;if(!r){r=se();let o=new URL(window.location.href);o.searchParams.set(e,r),window.history.replaceState({},document.title,o.toString())}return r}var Vt=P("channelId"),f=P("userId"),R={name:Kt(),id:f,role:"writer"},M=class extends Ye{static get requires(){return[Wt,Et]}init(){let t=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");t.addUser(R),t.defineMe(R.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},zt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function K(e=()=>{}){let t={ui:{viewportOffset:{top:I()}},root:{initialData:zt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[le,W,de,ce,me,ue,pe,V,ge,he,fe,be,ye,we,Ce,Te,xe,Ie,ve,Se,Ee,Ae,Le,Be,_e,Pe,Re,Me,Fe,Ue,De,Oe,He,qe,Ne,We,Ve,ze,z,Ke,Qe,je,Ge,$e,Xe,Je,Ze,et,tt,ot,rt,it,nt,at,st,lt,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,kt,wt,Ct,Tt,xt,It,vt,St,At,Lt,Bt,_t,Pt,Rt,Mt,Ft,Ut,Dt,Ot,Ht,qt,Nt,B,M],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:C,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Vt},cloudServices:{...k,tokenUrl:O(k.tokenUrl,R)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let n=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([n],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[V,z,W]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let r=_()[0];return ke.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),H(o),r.markDemoAsLoaded(),q(o),o)).catch(o=>{console.error(o)})}function Kt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${r} ${o}`}K(e=>{let t=e.toolbar.items.indexOf("aiQuickActions"),r=e.balloonToolbar.indexOf("aiQuickActions"),o=["improve-writing","translate"];e.toolbar.items.splice(t+1,0,...o),e.balloonToolbar.splice(r+1,0,...o);let i=["AIQuickActions","AIEditorIntegration"];e.plugins=e.plugins.filter(n=>n.pluginName&&n.pluginName.startsWith("AI")?i.includes(n.pluginName):!0),e.toolbar.items=e.toolbar.items.filter(n=>n!=="toggleAi"),e.balloonToolbar=e.balloonToolbar.filter(n=>n!=="ask-ai"),e.ai.container.type="custom"}).then(e=>{window.editor=e,T({target:x(e.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu",editor:e,tippyOptions:{placement:"bottom-start"}})});
