import{WideSidebar as St,AIChatShortcuts as Et}from"ckeditor5-premium-features";import{Alignment as H,Autoformat as P,AutoImage as N,AutoLink as V,Autosave as j,BalloonToolbar as Q,BlockQuote as G,Bold as _,Bookmark as $,CKBox as J,CKBoxImageEdit as Z,CloudServices as X,Code as Y,DecoupledEditor as ee,Emoji as te,Essentials as oe,FindAndReplace as re,FontBackgroundColor as ie,FontColor as ae,FontFamily as ne,FontSize as se,Fullscreen as le,Heading as me,HorizontalLine as pe,ImageBlock as de,ImageCaption as ce,ImageEditing as fe,ImageInline as ue,ImageInsert as ge,ImageInsertViaUrl as he,ImageResize as xe,ImageStyle as be,ImageTextAlternative as ye,ImageToolbar as ke,ImageUpload as we,ImageUtils as Ce,Indent as Ie,IndentBlock as ve,Italic as F,Link as Te,LinkImage as Se,List as Ee,ListProperties as Ae,Mention as Be,Paragraph as Le,PasteFromOffice as Pe,PictureEditing as _e,Plugin as Fe,RemoveFormat as Me,SpecialCharacters as Re,SpecialCharactersArrows as De,SpecialCharactersCurrency as Oe,SpecialCharactersEssentials as Ue,SpecialCharactersLatin as We,SpecialCharactersMathematical as qe,SpecialCharactersText as ze,Strikethrough as Ke,Subscript as He,Superscript as Ne,Table as Ve,TableCaption as je,TableCellProperties as Qe,TableColumnResize as Ge,TableProperties as $e,TableToolbar as Je,TextTransformation as Ze,TodoList as Xe,Underline as Ye,uid as et}from"ckeditor5";var W="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",q="https://33333.cke-cs.com/easyimage/upload/",z="33333.cke-cs.com/ws",b={tokenUrl:W,uploadUrl:q,webSocketUrl:z};var k="https://api.ckbox.io/token/demo";import{Plugin as Rt}from"@ckeditor/ckeditor5-core";import{Essentials as Ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Wt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as zt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ht,Italic as Nt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as jt}from"@ckeditor/ckeditor5-heading";import{Image as Gt,ImageCaption as $t,ImageStyle as Jt,ImageToolbar as Zt}from"@ckeditor/ckeditor5-image";import{Indent as Yt}from"@ckeditor/ckeditor5-indent";import{Link as to}from"@ckeditor/ckeditor5-link";import{List as ro}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ao}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as so}from"@ckeditor/ckeditor5-paragraph";import{Table as mo,TableToolbar as po}from"@ckeditor/ckeditor5-table";function w(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function y(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as xo,Essentials as bo,CKFinderUploadAdapter as yo,Autoformat as ko,BlockToolbar as wo,Bold as Co,Italic as Io,BlockQuote as vo,CKBox as To,CKFinder as So,EasyImage as Eo,Heading as Ao,Image as Bo,ImageCaption as Lo,ImageStyle as Po,ImageToolbar as _o,ImageUpload as Fo,PictureEditing as Mo,Indent as Ro,Link as Do,List as Oo,MediaEmbed as Uo,Paragraph as Wo,PasteFromOffice as qo,Table as zo,TableToolbar as Ko,TextTransformation as Ho,CloudServices as No}from"ckeditor5";import{BalloonEditor as Go,Essentials as $o,CKFinderUploadAdapter as Jo,Autoformat as Zo,Bold as Xo,Italic as Yo,BlockQuote as er,CKBox as tr,CKFinder as or,EasyImage as rr,Heading as ir,Image as ar,ImageCaption as nr,ImageStyle as sr,ImageToolbar as lr,ImageUpload as mr,PictureEditing as pr,Indent as dr,Link as cr,List as fr,MediaEmbed as ur,Paragraph as gr,PasteFromOffice as hr,Table as xr,TableToolbar as br,TextTransformation as yr,CloudServices as kr}from"ckeditor5";import{ClassicEditor as vr,Essentials as Tr,Autoformat as Sr,Bold as Er,Italic as Ar,BlockQuote as Br,CKBox as Lr,EasyImage as Pr,Heading as _r,Image as Fr,ImageCaption as Mr,ImageStyle as Rr,ImageToolbar as Dr,ImageUpload as Or,PictureEditing as Ur,Indent as Wr,Link as qr,List as zr,MediaEmbed as Kr,Paragraph as Hr,PasteFromOffice as Nr,Table as Vr,TableToolbar as jr,TextTransformation as Qr,CloudServices as Gr,AutoImage as $r,ImageInsert as Jr,Bookmark as Zr}from"ckeditor5";import{DecoupledEditor as ti,Essentials as oi,Alignment as ri,FontSize as ii,FontFamily as ai,FontColor as ni,FontBackgroundColor as si,Autoformat as li,Bold as mi,Italic as pi,Strikethrough as di,Underline as ci,BlockQuote as fi,CKBox as ui,EasyImage as gi,Heading as hi,Image as xi,ImageCaption as bi,ImageResize as yi,ImageStyle as ki,ImageToolbar as wi,ImageUpload as Ci,PictureEditing as Ii,Indent as vi,IndentBlock as Ti,Link as Si,List as Ei,ListProperties as Ai,MediaEmbed as Bi,Paragraph as Li,PasteFromOffice as Pi,Table as _i,TableToolbar as Fi,TextTransformation as Mi,CloudServices as Ri}from"ckeditor5";import{InlineEditor as Wi,Essentials as qi,CKFinderUploadAdapter as zi,Autoformat as Ki,Bold as Hi,Italic as Ni,BlockQuote as Vi,CKBox as ji,CKFinder as Qi,EasyImage as Gi,Heading as $i,Image as Ji,ImageCaption as Zi,ImageStyle as Xi,ImageToolbar as Yi,ImageUpload as ea,PictureEditing as ta,Indent as oa,Link as ra,List as ia,MediaEmbed as aa,Paragraph as na,PasteFromOffice as sa,Table as la,TableToolbar as ma,TextTransformation as pa,CloudServices as da}from"ckeditor5";import{MultiRootEditor as ga,Essentials as ha,CKFinderUploadAdapter as xa,Autoformat as ba,Bold as ya,Italic as ka,BlockQuote as wa,CKBox as Ca,CKFinder as Ia,EasyImage as va,Heading as Ta,Image as Sa,ImageCaption as Ea,ImageStyle as Aa,ImageToolbar as Ba,ImageUpload as La,PictureEditing as Pa,Indent as _a,Link as Fa,List as Ma,MediaEmbed as Ra,Paragraph as Da,PasteFromOffice as Oa,Table as Ua,TableToolbar as Wa,TextTransformation as qa,CloudServices as za}from"ckeditor5";import{AIChat as tt,AIEditorIntegration as ot,AIQuickActions as rt,AIReviewMode as it,AITranslate as at,CaseChange as nt,Comments as st,ExportPdf as lt,ExportWord as mt,Footnotes as pt,FormatPainter as dt,ImportWord as ct,LineHeight as ft,MergeFields as ut,MultiLevelList as gt,PasteFromOfficeEnhanced as ht,SlashCommand as xt,TableOfContents as bt,Template as yt,TrackChanges as kt,TrackChangesData as wt,TrackChangesPreview as Ct}from"ckeditor5-premium-features";import{uid as K}from"ckeditor5";function E(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=K(),e=t[Math.floor(Math.random()*t.length)],i=o[Math.floor(Math.random()*o.length)];return{name:e+" "+i,id:r}}function A(t,o=E()){return`${t}?`+Object.keys(o).filter(e=>o[e]).map(e=>`user.${e}=${o[e]}`).join("&")}function B(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(r,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function L(t,o,{signal:r,edges:e}={}){let i,s=null,m=e!=null&&e.includes("leading"),p=e==null||e.includes("trailing"),l=()=>{s!==null&&(t.apply(i,s),i=void 0,s=null)},d=()=>{p&&l(),u()},n=null,f=()=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,d()},o)},c=()=>{n!==null&&(clearTimeout(n),n=null)},u=()=>{c(),i=void 0,s=null},h=()=>{c(),l()},x=function(...O){if(r?.aborted)return;i=this,s=O;let U=n==null;f(),m&&U&&l()};return x.schedule=f,x.cancel=u,x.flush=h,r?.addEventListener("abort",u,{once:!0}),x}function C(t,o=0,r={}){typeof r!="object"&&(r={});let{leading:e=!1,trailing:i=!0,maxWait:s}=r,m=Array(2);e&&(m[0]="leading"),i&&(m[1]="trailing");let p,l=null,d=L(function(...c){p=t.apply(this,c),l=null},o,{edges:m}),n=function(...c){return s!=null&&(l===null&&(l=Date.now()),Date.now()-l>=s)?(p=t.apply(this,c),l=Date.now(),d.cancel(),d.schedule(),p):(d.apply(this,c),p)},f=()=>(d.flush(),p);return n.cancel=d.cancel,n.flush=f,n}function I(t){t.on("ready",()=>{let o=t.plugins.get("AnnotationsUIs"),r=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),m=C(()=>{if(!(r&&r.value))if(e.scrollWidth>e.clientWidth)d("narrowSidebar");else{let n=0;s.forEach((f,c)=>{let u=getComputedStyle(c);for(let h of f)h==="scrollWidth"?n+=c.scrollWidth:n+=parseFloat(u.getPropertyValue(h))||0}),n+i<e.clientWidth&&d("wideSidebar")}},10),p=new ResizeObserver(m);p.observe(e),p.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||m()}),m();let l="wideSidebar";function d(n){l!==n&&(o.switchTo(n),l=n)}})}function v(){let t=document.querySelectorAll(".live-snippet"),o=[];return t.forEach(r=>{let e=r.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),o}var It=R("channelId"),g=R("userId"),T={name:Tt(),id:g,role:"writer"},S=class extends Fe{static get requires(){return["Users","CommentsRepository"]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(T),o.defineMe(T.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:g,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:g,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},vt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function M(t=()=>{}){let o={initialData:vt,ui:{viewportOffset:{top:w()}},placeholder:"Type or paste your content here!",plugins:[H,P,N,V,j,Q,G,_,$,J,Z,X,Y,te,oe,re,ie,ae,ne,se,le,me,pe,de,ce,fe,ue,ge,he,xe,be,ye,ke,we,Ce,Ie,ve,F,Te,Se,Ee,Ae,Be,Le,Pe,_e,Me,Re,De,Oe,Ue,We,qe,ze,Ke,He,Ne,Ve,je,Qe,Ge,$e,Je,Ze,Xe,Ye,tt,ot,rt,it,at,nt,st,lt,mt,pt,dt,ct,ft,ut,gt,ht,xt,bt,yt,kt,wt,Ct,I,S],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:k,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:It},cloudServices:{...b,tokenUrl:A(b.tokenUrl,T)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(e)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),m=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(m)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[_,F,P]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"Tabloid",margin_top:"20mm",margin_bottom:"20mm",margin_right:"24mm",margin_left:"24mm",page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(o);let r=v()[0];return ee.create(document.querySelector(".editor-content"),o).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),r.markDemoAsLoaded(),B(e),e)).catch(e=>{console.error(e)})}function R(t){let o=location.search.match(new RegExp(`${t}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=et();let e=new URL(window.location.href);e.searchParams.set(t,r),window.history.replaceState({},document.title,e.toString())}return r}function Tt(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=t[Math.floor(Math.random()*t.length)],e=o[Math.floor(Math.random()*o.length)];return`${r} ${e}`}var D=[{id:"summarize-article",type:"chat",label:"Summarize the article",prompt:"Summarize the following article in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this article. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-article",type:"chat",label:"Rewrite the article",prompt:`Rewrite the article below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling ",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];M(t=>{t.plugins=t.plugins.filter(o=>o.pluginName!=="AIReviewMode"&&o.pluginName!=="AITranslate"),t.ai.chat.shortcuts=D,t.plugins.push(St,Et)}).then(t=>{window.editor=t});
