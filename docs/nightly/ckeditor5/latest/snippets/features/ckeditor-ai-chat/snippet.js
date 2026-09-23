import{WideSidebar as Lt,AIChatShortcuts as Bt}from"ckeditor5-premium-features";import{Alignment as V,Autoformat as F,AutoImage as Q,AutoLink as j,Autosave as G,BalloonToolbar as $,BlockQuote as J,Bold as D,Bookmark as Z,CKBox as X,CKBoxImageEdit as Y,CloudServices as ee,Code as te,DecoupledEditor as oe,Emoji as re,Essentials as ie,FindAndReplace as ne,FontBackgroundColor as ae,FontColor as se,FontFamily as le,FontSize as de,Fullscreen as ce,GeneralHtmlSupport as me,Heading as pe,HorizontalLine as ue,ImageBlock as ge,ImageCaption as he,ImageEditing as fe,ImageInline as be,ImageInsert as ye,ImageInsertViaUrl as we,ImageResize as ke,ImageStyle as ve,ImageTextAlternative as Ce,ImageToolbar as Ie,ImageUpload as xe,ImageUtils as Te,Indent as Se,IndentBlock as Ee,Italic as M,Link as Ae,LinkImage as Le,List as Be,ListProperties as _e,Mention as Pe,Paragraph as Fe,PasteFromOffice as De,PictureEditing as Me,Plugin as Ue,RemoveFormat as Re,SpecialCharacters as Oe,SpecialCharactersArrows as qe,SpecialCharactersCurrency as He,SpecialCharactersEssentials as ze,SpecialCharactersLatin as We,SpecialCharactersMathematical as Ne,SpecialCharactersText as Ke,Strikethrough as Ve,Subscript as Qe,Superscript as je,Table as Ge,TableCaption as $e,TableCellProperties as Je,TableColumnResize as Ze,TableProperties as Xe,TableToolbar as Ye,TextTransformation as et,TodoList as tt,Underline as ot}from"ckeditor5";var H="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",z="https://33333.cke-cs.com/easyimage/upload/",W="33333.cke-cs.com/ws",y={tokenUrl:H,uploadUrl:z,webSocketUrl:W};var k="https://api.ckbox.io/token/demo";import{Plugin as Ot}from"@ckeditor/ckeditor5-core";import{Essentials as Ht}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Wt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Kt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Qt,Italic as jt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as $t}from"@ckeditor/ckeditor5-heading";import{Image as Zt,ImageCaption as Xt,ImageStyle as Yt,ImageToolbar as eo}from"@ckeditor/ckeditor5-image";import{Indent as oo}from"@ckeditor/ckeditor5-indent";import{Link as io}from"@ckeditor/ckeditor5-link";import{List as ao}from"@ckeditor/ckeditor5-list";import{MediaEmbed as lo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as mo}from"@ckeditor/ckeditor5-paragraph";import{Table as uo,TableToolbar as go}from"@ckeditor/ckeditor5-table";function v(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as ko,Essentials as vo,Autoformat as Co,BlockToolbar as Io,Bold as xo,Italic as To,BlockQuote as So,CKBox as Eo,Heading as Ao,Image as Lo,ImageCaption as Bo,ImageStyle as _o,ImageToolbar as Po,ImageUpload as Fo,PictureEditing as Do,Indent as Mo,IndentBlock as Uo,Link as Ro,List as Oo,MediaEmbed as qo,Paragraph as Ho,PasteFromOffice as zo,Table as Wo,TableToolbar as No,TextTransformation as Ko,CloudServices as Vo}from"ckeditor5";import{BalloonEditor as $o,Essentials as Jo,Autoformat as Zo,Bold as Xo,Italic as Yo,BlockQuote as er,CKBox as tr,Heading as or,Image as rr,ImageCaption as ir,ImageStyle as nr,ImageToolbar as ar,ImageUpload as sr,PictureEditing as lr,Indent as dr,IndentBlock as cr,Link as mr,List as pr,MediaEmbed as ur,Paragraph as gr,PasteFromOffice as hr,Table as fr,TableToolbar as br,TextTransformation as yr,CloudServices as wr}from"ckeditor5";import{ClassicEditor as Ir,Essentials as xr,Autoformat as Tr,Bold as Sr,Italic as Er,BlockQuote as Ar,CKBox as Lr,Heading as Br,Image as _r,ImageCaption as Pr,ImageStyle as Fr,ImageToolbar as Dr,ImageUpload as Mr,PictureEditing as Ur,Indent as Rr,IndentBlock as Or,Link as qr,List as Hr,MediaEmbed as zr,Paragraph as Wr,PasteFromOffice as Nr,Table as Kr,TableToolbar as Vr,TextTransformation as Qr,CloudServices as jr,AutoImage as Gr,ImageInsert as $r,Bookmark as Jr}from"ckeditor5";import{DecoupledEditor as ei,Essentials as ti,Alignment as oi,FontSize as ri,FontFamily as ii,FontColor as ni,FontBackgroundColor as ai,Autoformat as si,Bold as li,Italic as di,Strikethrough as ci,Underline as mi,BlockQuote as pi,CKBox as ui,Heading as gi,Image as hi,ImageCaption as fi,ImageResize as bi,ImageStyle as yi,ImageToolbar as wi,ImageUpload as ki,PictureEditing as vi,Indent as Ci,IndentBlock as Ii,Link as xi,List as Ti,ListProperties as Si,MediaEmbed as Ei,Paragraph as Ai,PasteFromOffice as Li,Table as Bi,TableToolbar as _i,TextTransformation as Pi,CloudServices as Fi}from"ckeditor5";import{InlineEditor as Ri,Essentials as Oi,Autoformat as qi,Bold as Hi,Italic as zi,BlockQuote as Wi,CKBox as Ni,Heading as Ki,Image as Vi,ImageCaption as Qi,ImageStyle as ji,ImageToolbar as Gi,ImageUpload as $i,PictureEditing as Ji,Indent as Zi,IndentBlock as Xi,Link as Yi,List as en,MediaEmbed as tn,Paragraph as on,PasteFromOffice as rn,Table as nn,TableToolbar as an,TextTransformation as sn,CloudServices as ln}from"ckeditor5";import{MultiRootEditor as pn,Essentials as un,Autoformat as gn,Bold as hn,Italic as fn,BlockQuote as bn,CKBox as yn,Heading as wn,Image as kn,ImageCaption as vn,ImageStyle as Cn,ImageToolbar as In,ImageUpload as xn,PictureEditing as Tn,Indent as Sn,IndentBlock as En,Link as An,List as Ln,MediaEmbed as Bn,Paragraph as _n,PasteFromOffice as Pn,Table as Fn,TableToolbar as Dn,TextTransformation as Mn,CloudServices as Un}from"ckeditor5";import{AIChat as rt,AIEditorIntegration as it,AIQuickActions as nt,AIReviewMode as at,AITranslate as st,CaseChange as lt,Comments as dt,CommentsRepository as ct,ExportPdf as mt,ExportWord as pt,Footnotes as ut,FormatPainter as gt,ImportWord as ht,LineHeight as ft,MultiLevelList as bt,PasteFromOfficeEnhanced as yt,SlashCommand as wt,TableOfContents as kt,Template as vt,TrackChanges as Ct,TrackChangesData as It,TrackChangesPreview as xt,Users as Tt}from"ckeditor5-premium-features";import{uid as N}from"ckeditor5";function A(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=N(),e=t[Math.floor(Math.random()*t.length)],i=o[Math.floor(Math.random()*o.length)];return{name:e+" "+i,id:r}}function L(t,o=A()){return`${t}?`+Object.keys(o).filter(e=>o[e]).map(e=>`user.${e}=${o[e]}`).join("&")}function B(t){t.plugins.has("AIErrorSink")&&t.plugins.get("AIErrorSink").on("error",(o,{error:r,component:e,code:i,type:s,severity:l,context:d})=>{typeof window.Sentry>"u"||s==="user"||s==="network"||window.Sentry.captureException(r,{tags:{component:e,errorCode:i,errorType:s},level:l==="warning"?"warning":"error",extra:d})})}function _(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(r,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function P(t,o,{signal:r,edges:e}={}){let i,s=null,l=e!=null&&e.includes("leading"),d=e==null||e.includes("trailing"),c=()=>{s!==null&&(t.apply(i,s),i=void 0,s=null)},m=()=>{d&&c(),g()},a=null,u=()=>{a!=null&&clearTimeout(a),a=setTimeout(()=>{a=null,m()},o)},p=()=>{a!==null&&(clearTimeout(a),a=null)},g=()=>{p(),i=void 0,s=null},f=()=>{c()},b=function(...O){if(r?.aborted)return;i=this,s=O;let q=a==null;u(),l&&q&&c()};return b.schedule=u,b.cancel=g,b.flush=f,r?.addEventListener("abort",g,{once:!0}),b}function C(t,o=0,r={}){typeof r!="object"&&(r={});let{leading:e=!1,trailing:i=!0,maxWait:s}=r,l=Array(2);e&&(l[0]="leading"),i&&(l[1]="trailing");let d,c=null,m=P(function(...p){d=t.apply(this,p),c=null},o,{edges:l}),a=function(...p){return s!=null&&(c===null&&(c=Date.now()),Date.now()-c>=s)?((e||i)&&(d=t.apply(this,p)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,p),d)},u=()=>(m.flush(),d);return a.cancel=m.cancel,a.flush=u,a}function I(t){t.on("ready",()=>{let o=t.plugins.get("AnnotationsUIs"),r=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=C(()=>{if(!(r&&r.value))if(e.scrollWidth>e.clientWidth)m("narrowSidebar");else{let a=0;s.forEach((u,p)=>{let g=getComputedStyle(p);for(let f of u)f==="scrollWidth"?a+=p.scrollWidth:a+=parseFloat(g.getPropertyValue(f))||0}),a+i<e.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(e),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let c="wideSidebar";function m(a){c!==a&&(o.switchTo(a),c=a)}})}function x(){let t=document.querySelectorAll(".live-snippet"),o=[];return t.forEach(r=>{let e=r.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),o}import{uid as K}from"ckeditor5";function T(t){let o=location.search.match(new RegExp(`${t}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=K();let e=new URL(window.location.href);e.searchParams.set(t,r),window.history.replaceState({},document.title,e.toString())}return r}var St=T("channelId"),h=T("userId"),S={name:At(),id:h,role:"writer"},E=class extends Ue{static get requires(){return[Tt,ct]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(S),o.defineMe(S.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:h,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:h,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Et=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function U(t=()=>{}){let o={ui:{viewportOffset:{top:v()}},root:{initialData:Et,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[V,F,Q,j,G,$,J,D,Z,X,Y,ee,te,re,ie,ne,ae,se,le,de,ce,me,pe,ue,ge,he,fe,be,ye,we,ke,ve,Ce,Ie,xe,Te,Se,Ee,M,Ae,Le,Be,_e,Pe,Fe,De,Me,Re,Oe,qe,He,ze,We,Ne,Ke,Ve,Qe,je,Ge,$e,Je,Ze,Xe,Ye,et,tt,ot,rt,it,nt,at,st,lt,dt,mt,pt,ut,gt,ht,ft,bt,yt,wt,kt,vt,Ct,It,xt,I,E],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:k,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:St},cloudServices:{...y,tokenUrl:L(y.tokenUrl,S)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(e)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[D,M,F]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(o);let r=x()[0];return oe.create(o).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),B(e),r.markDemoAsLoaded(),_(e),e)).catch(e=>{console.error(e)})}function At(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=t[Math.floor(Math.random()*t.length)],e=o[Math.floor(Math.random()*o.length)];return`${r} ${e}`}var R=[{id:"summarize-document",type:"chat",label:"Summarize the document",prompt:"Summarize the following document in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this document. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-document",type:"chat",label:"Rewrite the document",prompt:`Rewrite the document below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];U(t=>{t.plugins=t.plugins.filter(o=>o.pluginName!=="AIReviewMode"&&o.pluginName!=="AITranslate"),t.ai.chat.shortcuts=R.filter(o=>o.type==="chat"),t.plugins.push(Lt,Bt)}).then(t=>{window.editor=t});
