import{Alignment as K,Autoformat as F,AutoImage as V,AutoLink as Q,Autosave as j,BalloonToolbar as G,BlockQuote as $,Bold as M,Bookmark as J,CKBox as Z,CKBoxImageEdit as X,CloudServices as Y,Code as ee,DecoupledEditor as te,Emoji as oe,Essentials as re,FindAndReplace as ie,FontBackgroundColor as ae,FontColor as ne,FontFamily as le,FontSize as se,Fullscreen as de,GeneralHtmlSupport as ce,Heading as me,HorizontalLine as pe,ImageBlock as ue,ImageCaption as ge,ImageEditing as he,ImageInline as fe,ImageInsert as be,ImageInsertViaUrl as ye,ImageResize as ke,ImageStyle as we,ImageTextAlternative as ve,ImageToolbar as Ce,ImageUpload as Ie,ImageUtils as Te,Indent as xe,IndentBlock as Se,Italic as D,Link as Ae,LinkImage as Ee,List as Le,ListProperties as Be,Mention as _e,Paragraph as Pe,PasteFromOffice as Fe,PictureEditing as Me,Plugin as De,RemoveFormat as Ue,SpecialCharacters as Oe,SpecialCharactersArrows as Re,SpecialCharactersCurrency as qe,SpecialCharactersEssentials as He,SpecialCharactersLatin as We,SpecialCharactersMathematical as Ne,SpecialCharactersText as ze,Strikethrough as Ke,Subscript as Ve,Superscript as Qe,Table as je,TableCaption as Ge,TableCellProperties as $e,TableColumnResize as Je,TableProperties as Ze,TableToolbar as Xe,TextTransformation as Ye,TodoList as et,Underline as tt}from"ckeditor5";var q="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",H="https://33333.cke-cs.com/easyimage/upload/",W="33333.cke-cs.com/ws",y={tokenUrl:q,uploadUrl:H,webSocketUrl:W};var w="https://api.ckbox.io/token/demo";import{Plugin as Dt}from"@ckeditor/ckeditor5-core";import{Essentials as Ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as qt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Wt}from"@ckeditor/ckeditor5-block-quote";import{Bold as zt,Italic as Kt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Qt}from"@ckeditor/ckeditor5-heading";import{Image as Gt,ImageCaption as $t,ImageStyle as Jt,ImageToolbar as Zt}from"@ckeditor/ckeditor5-image";import{Indent as Yt}from"@ckeditor/ckeditor5-indent";import{Link as to}from"@ckeditor/ckeditor5-link";import{List as ro}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ao}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as lo}from"@ckeditor/ckeditor5-paragraph";import{Table as co,TableToolbar as mo}from"@ckeditor/ckeditor5-table";function v(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function k(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as bo,Essentials as yo,Autoformat as ko,BlockToolbar as wo,Bold as vo,Italic as Co,BlockQuote as Io,CKBox as To,Heading as xo,Image as So,ImageCaption as Ao,ImageStyle as Eo,ImageToolbar as Lo,ImageUpload as Bo,PictureEditing as _o,Indent as Po,IndentBlock as Fo,Link as Mo,List as Do,MediaEmbed as Uo,Paragraph as Oo,PasteFromOffice as Ro,Table as qo,TableToolbar as Ho,TextTransformation as Wo,CloudServices as No}from"ckeditor5";import{BalloonEditor as Qo,Essentials as jo,Autoformat as Go,Bold as $o,Italic as Jo,BlockQuote as Zo,CKBox as Xo,Heading as Yo,Image as er,ImageCaption as tr,ImageStyle as or,ImageToolbar as rr,ImageUpload as ir,PictureEditing as ar,Indent as nr,IndentBlock as lr,Link as sr,List as dr,MediaEmbed as cr,Paragraph as mr,PasteFromOffice as pr,Table as ur,TableToolbar as gr,TextTransformation as hr,CloudServices as fr}from"ckeditor5";import{ClassicEditor as wr,Essentials as vr,Autoformat as Cr,Bold as Ir,Italic as Tr,BlockQuote as xr,CKBox as Sr,Heading as Ar,Image as Er,ImageCaption as Lr,ImageStyle as Br,ImageToolbar as _r,ImageUpload as Pr,PictureEditing as Fr,Indent as Mr,IndentBlock as Dr,Link as Ur,List as Or,MediaEmbed as Rr,Paragraph as qr,PasteFromOffice as Hr,Table as Wr,TableToolbar as Nr,TextTransformation as zr,CloudServices as Kr,AutoImage as Vr,ImageInsert as Qr,Bookmark as jr}from"ckeditor5";import{DecoupledEditor as Zr,Essentials as Xr,Alignment as Yr,FontSize as ei,FontFamily as ti,FontColor as oi,FontBackgroundColor as ri,Autoformat as ii,Bold as ai,Italic as ni,Strikethrough as li,Underline as si,BlockQuote as di,CKBox as ci,Heading as mi,Image as pi,ImageCaption as ui,ImageResize as gi,ImageStyle as hi,ImageToolbar as fi,ImageUpload as bi,PictureEditing as yi,Indent as ki,IndentBlock as wi,Link as vi,List as Ci,ListProperties as Ii,MediaEmbed as Ti,Paragraph as xi,PasteFromOffice as Si,Table as Ai,TableToolbar as Ei,TextTransformation as Li,CloudServices as Bi}from"ckeditor5";import{InlineEditor as Mi,Essentials as Di,Autoformat as Ui,Bold as Oi,Italic as Ri,BlockQuote as qi,CKBox as Hi,Heading as Wi,Image as Ni,ImageCaption as zi,ImageStyle as Ki,ImageToolbar as Vi,ImageUpload as Qi,PictureEditing as ji,Indent as Gi,IndentBlock as $i,Link as Ji,List as Zi,MediaEmbed as Xi,Paragraph as Yi,PasteFromOffice as ea,Table as ta,TableToolbar as oa,TextTransformation as ra,CloudServices as ia}from"ckeditor5";import{MultiRootEditor as sa,Essentials as da,Autoformat as ca,Bold as ma,Italic as pa,BlockQuote as ua,CKBox as ga,Heading as ha,Image as fa,ImageCaption as ba,ImageStyle as ya,ImageToolbar as ka,ImageUpload as wa,PictureEditing as va,Indent as Ca,IndentBlock as Ia,Link as Ta,List as xa,MediaEmbed as Sa,Paragraph as Aa,PasteFromOffice as Ea,Table as La,TableToolbar as Ba,TextTransformation as _a,CloudServices as Pa}from"ckeditor5";import{AIChat as ot,AIEditorIntegration as rt,AIQuickActions as it,AIReviewMode as at,AITranslate as nt,CaseChange as lt,Comments as st,CommentsRepository as dt,ExportPdf as ct,ExportWord as mt,Footnotes as pt,FormatPainter as ut,ImportWord as gt,LineHeight as ht,MultiLevelList as ft,PasteFromOfficeEnhanced as bt,SlashCommand as yt,TableOfContents as kt,Template as wt,TrackChanges as vt,TrackChangesData as Ct,TrackChangesPreview as It,Users as Tt}from"ckeditor5-premium-features";import{uid as N}from"ckeditor5";function E(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],r=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],o=N(),e=t[Math.floor(Math.random()*t.length)],i=r[Math.floor(Math.random()*r.length)];return{name:e+" "+i,id:o}}function L(t,r=E()){return`${t}?`+Object.keys(r).filter(e=>r[e]).map(e=>`user.${e}=${r[e]}`).join("&")}function B(t){t.plugins.has("AIErrorSink")&&t.plugins.get("AIErrorSink").on("error",(r,{error:o,component:e,code:i,type:l,severity:s,context:d})=>{typeof window.Sentry>"u"||l==="user"||l==="network"||window.Sentry.captureException(o,{tags:{component:e,errorCode:i,errorType:l},level:s==="warning"?"warning":"error",extra:d})})}function _(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(o,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function P(t,r,{signal:o,edges:e}={}){let i,l=null,s=e!=null&&e.includes("leading"),d=e==null||e.includes("trailing"),c=()=>{l!==null&&(t.apply(i,l),i=void 0,l=null)},m=()=>{d&&c(),g()},n=null,u=()=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,m()},r)},p=()=>{n!==null&&(clearTimeout(n),n=null)},g=()=>{p(),i=void 0,l=null},f=()=>{c()},b=function(...O){if(o?.aborted)return;i=this,l=O;let R=n==null;u(),s&&R&&c()};return b.schedule=u,b.cancel=g,b.flush=f,o?.addEventListener("abort",g,{once:!0}),b}function C(t,r=0,o={}){typeof o!="object"&&(o={});let{leading:e=!1,trailing:i=!0,maxWait:l}=o,s=Array(2);e&&(s[0]="leading"),i&&(s[1]="trailing");let d,c=null,m=P(function(...p){d=t.apply(this,p),c=null},r,{edges:s}),n=function(...p){return l!=null&&(c===null&&(c=Date.now()),Date.now()-c>=l)?((e||i)&&(d=t.apply(this,p)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,p),d)},u=()=>(m.flush(),d);return n.cancel=m.cancel,n.flush=u,n}function I(t){t.on("ready",()=>{let r=t.plugins.get("AnnotationsUIs"),o=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let l=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),s=C(()=>{if(!(o&&o.value))if(e.scrollWidth>e.clientWidth)m("narrowSidebar");else{let n=0;l.forEach((u,p)=>{let g=getComputedStyle(p);for(let f of u)f==="scrollWidth"?n+=p.scrollWidth:n+=parseFloat(g.getPropertyValue(f))||0}),n+i<e.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(s);d.observe(e),d.observe(document.querySelector(".editor-content-wrapper")),o&&o.on("execute",()=>{o.value||s()}),s();let c="wideSidebar";function m(n){c!==n&&(r.switchTo(n),c=n)}})}function T(){let t=document.querySelectorAll(".live-snippet"),r=[];return t.forEach(o=>{let e=o.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,o.prepend(i),r.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),r}import{uid as z}from"ckeditor5";function x(t){let r=location.search.match(new RegExp(`${t}=([^&]+)`)),o=r?decodeURIComponent(r[1]):null;if(!o){o=z();let e=new URL(window.location.href);e.searchParams.set(t,o),window.history.replaceState({},document.title,e.toString())}return o}var xt=x("channelId"),h=x("userId"),S={name:At(),id:h,role:"writer"},A=class extends De{static get requires(){return[Tt,dt]}init(){let r=this.editor.plugins.get("Users"),o=this.editor.plugins.get("CommentsRepository");r.addUser(S),r.defineMe(S.id),o.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:h,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:h,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:r.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},St=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function U(t=()=>{}){let r={ui:{viewportOffset:{top:v()}},root:{initialData:St,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[K,F,V,Q,j,G,$,M,J,Z,X,Y,ee,oe,re,ie,ae,ne,le,se,de,ce,me,pe,ue,ge,he,fe,be,ye,ke,we,ve,Ce,Ie,Te,xe,Se,D,Ae,Ee,Le,Be,_e,Pe,Fe,Me,Ue,Oe,Re,qe,He,We,Ne,ze,Ke,Ve,Qe,je,Ge,$e,Je,Ze,Xe,Ye,et,tt,ot,rt,it,at,nt,lt,st,ct,mt,pt,ut,gt,ht,ft,bt,yt,kt,wt,vt,Ct,It,I,A],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:w,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:xt},cloudServices:{...y,tokenUrl:L(y.tokenUrl,S)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(e)},getData:async()=>{let l=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),s=new File([l],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(s)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[M,D,F]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(r);let o=T()[0];return te.create(r).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),B(e),o.markDemoAsLoaded(),_(e),e)).catch(e=>{console.error(e)})}function At(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],r=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=t[Math.floor(Math.random()*t.length)],e=r[Math.floor(Math.random()*r.length)];return`${o} ${e}`}U(t=>{let r=["AIChat","AIQuickActions","AIReviewMode"],o=["ask-ai","aiQuickActions"];t.plugins=t.plugins.filter(e=>!(e.pluginName&&r.includes(e.pluginName))),t.balloonToolbar=t.balloonToolbar.filter(e=>!o.includes(e)),t.toolbar.items=t.toolbar.items.filter(e=>!o.includes(e))}).then(t=>{window.editor=t,t.plugins.get("AITabs").view.activateTab("translate")});
