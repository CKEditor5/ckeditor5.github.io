import{Alignment as z,Autoformat as P,AutoImage as H,AutoLink as N,Autosave as V,BalloonToolbar as Q,BlockQuote as j,Bold as _,Bookmark as G,CKBox as $,CKBoxImageEdit as J,CloudServices as Z,Code as X,DecoupledEditor as Y,Emoji as ee,Essentials as te,FindAndReplace as oe,FontBackgroundColor as re,FontColor as ie,FontFamily as ae,FontSize as ne,Fullscreen as se,Heading as le,HorizontalLine as me,ImageBlock as pe,ImageCaption as de,ImageEditing as ce,ImageInline as fe,ImageInsert as ue,ImageInsertViaUrl as ge,ImageResize as he,ImageStyle as xe,ImageTextAlternative as be,ImageToolbar as ye,ImageUpload as ke,ImageUtils as Ie,Indent as we,IndentBlock as ve,Italic as F,Link as Ce,LinkImage as Te,List as Se,ListProperties as Ae,Mention as Ee,Paragraph as Be,PasteFromOffice as Le,PictureEditing as Pe,Plugin as _e,RemoveFormat as Fe,SpecialCharacters as Me,SpecialCharactersArrows as Re,SpecialCharactersCurrency as De,SpecialCharactersEssentials as Oe,SpecialCharactersLatin as Ue,SpecialCharactersMathematical as We,SpecialCharactersText as qe,Strikethrough as Ke,Subscript as ze,Superscript as He,Table as Ne,TableCaption as Ve,TableCellProperties as Qe,TableColumnResize as je,TableProperties as Ge,TableToolbar as $e,TextTransformation as Je,TodoList as Ze,Underline as Xe,uid as Ye}from"ckeditor5";var U="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",W="https://33333.cke-cs.com/easyimage/upload/",q="33333.cke-cs.com/ws",b={tokenUrl:U,uploadUrl:W,webSocketUrl:q};var k="https://api.ckbox.io/token/demo";import{Plugin as _t}from"@ckeditor/ckeditor5-core";import{Essentials as Mt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Dt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Ut}from"@ckeditor/ckeditor5-block-quote";import{Bold as qt,Italic as Kt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Ht}from"@ckeditor/ckeditor5-heading";import{Image as Vt,ImageCaption as Qt,ImageStyle as jt,ImageToolbar as Gt}from"@ckeditor/ckeditor5-image";import{Indent as Jt}from"@ckeditor/ckeditor5-indent";import{Link as Xt}from"@ckeditor/ckeditor5-link";import{List as eo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as oo}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as io}from"@ckeditor/ckeditor5-paragraph";import{Table as no,TableToolbar as so}from"@ckeditor/ckeditor5-table";function I(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function y(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as uo,Essentials as go,CKFinderUploadAdapter as ho,Autoformat as xo,BlockToolbar as bo,Bold as yo,Italic as ko,BlockQuote as Io,CKBox as wo,CKFinder as vo,EasyImage as Co,Heading as To,Image as So,ImageCaption as Ao,ImageStyle as Eo,ImageToolbar as Bo,ImageUpload as Lo,PictureEditing as Po,Indent as _o,IndentBlock as Fo,Link as Mo,List as Ro,MediaEmbed as Do,Paragraph as Oo,PasteFromOffice as Uo,Table as Wo,TableToolbar as qo,TextTransformation as Ko,CloudServices as zo}from"ckeditor5";import{BalloonEditor as Qo,Essentials as jo,CKFinderUploadAdapter as Go,Autoformat as $o,Bold as Jo,Italic as Zo,BlockQuote as Xo,CKBox as Yo,CKFinder as er,EasyImage as tr,Heading as or,Image as rr,ImageCaption as ir,ImageStyle as ar,ImageToolbar as nr,ImageUpload as sr,PictureEditing as lr,Indent as mr,IndentBlock as pr,Link as dr,List as cr,MediaEmbed as fr,Paragraph as ur,PasteFromOffice as gr,Table as hr,TableToolbar as xr,TextTransformation as br,CloudServices as yr}from"ckeditor5";import{ClassicEditor as vr,Essentials as Cr,Autoformat as Tr,Bold as Sr,Italic as Ar,BlockQuote as Er,CKBox as Br,EasyImage as Lr,Heading as Pr,Image as _r,ImageCaption as Fr,ImageStyle as Mr,ImageToolbar as Rr,ImageUpload as Dr,PictureEditing as Or,Indent as Ur,IndentBlock as Wr,Link as qr,List as Kr,MediaEmbed as zr,Paragraph as Hr,PasteFromOffice as Nr,Table as Vr,TableToolbar as Qr,TextTransformation as jr,CloudServices as Gr,AutoImage as $r,ImageInsert as Jr,Bookmark as Zr}from"ckeditor5";import{DecoupledEditor as ti,Essentials as oi,Alignment as ri,FontSize as ii,FontFamily as ai,FontColor as ni,FontBackgroundColor as si,Autoformat as li,Bold as mi,Italic as pi,Strikethrough as di,Underline as ci,BlockQuote as fi,CKBox as ui,EasyImage as gi,Heading as hi,Image as xi,ImageCaption as bi,ImageResize as yi,ImageStyle as ki,ImageToolbar as Ii,ImageUpload as wi,PictureEditing as vi,Indent as Ci,IndentBlock as Ti,Link as Si,List as Ai,ListProperties as Ei,MediaEmbed as Bi,Paragraph as Li,PasteFromOffice as Pi,Table as _i,TableToolbar as Fi,TextTransformation as Mi,CloudServices as Ri}from"ckeditor5";import{InlineEditor as Wi,Essentials as qi,CKFinderUploadAdapter as Ki,Autoformat as zi,Bold as Hi,Italic as Ni,BlockQuote as Vi,CKBox as Qi,CKFinder as ji,EasyImage as Gi,Heading as $i,Image as Ji,ImageCaption as Zi,ImageStyle as Xi,ImageToolbar as Yi,ImageUpload as ea,PictureEditing as ta,Indent as oa,IndentBlock as ra,Link as ia,List as aa,MediaEmbed as na,Paragraph as sa,PasteFromOffice as la,Table as ma,TableToolbar as pa,TextTransformation as da,CloudServices as ca}from"ckeditor5";import{MultiRootEditor as ha,Essentials as xa,CKFinderUploadAdapter as ba,Autoformat as ya,Bold as ka,Italic as Ia,BlockQuote as wa,CKBox as va,CKFinder as Ca,EasyImage as Ta,Heading as Sa,Image as Aa,ImageCaption as Ea,ImageStyle as Ba,ImageToolbar as La,ImageUpload as Pa,PictureEditing as _a,Indent as Fa,IndentBlock as Ma,Link as Ra,List as Da,MediaEmbed as Oa,Paragraph as Ua,PasteFromOffice as Wa,Table as qa,TableToolbar as Ka,TextTransformation as za,CloudServices as Ha}from"ckeditor5";import{AIChat as et,AIEditorIntegration as tt,AIQuickActions as ot,AIReviewMode as rt,AITranslate as it,CaseChange as at,Comments as nt,ExportPdf as st,ExportWord as lt,Footnotes as mt,FormatPainter as pt,ImportWord as dt,LineHeight as ct,MergeFields as ft,MultiLevelList as ut,PasteFromOfficeEnhanced as gt,SlashCommand as ht,TableOfContents as xt,Template as bt,TrackChanges as yt,TrackChangesData as kt,TrackChangesPreview as It}from"ckeditor5-premium-features";import{uid as K}from"ckeditor5";function A(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],r=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],o=K(),e=t[Math.floor(Math.random()*t.length)],i=r[Math.floor(Math.random()*r.length)];return{name:e+" "+i,id:o}}function E(t,r=A()){return`${t}?`+Object.keys(r).filter(e=>r[e]).map(e=>`user.${e}=${r[e]}`).join("&")}function B(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(o,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function L(t,r,{signal:o,edges:e}={}){let i,s=null,m=e!=null&&e.includes("leading"),p=e==null||e.includes("trailing"),l=()=>{s!==null&&(t.apply(i,s),i=void 0,s=null)},d=()=>{p&&l(),u()},a=null,f=()=>{a!=null&&clearTimeout(a),a=setTimeout(()=>{a=null,d()},r)},c=()=>{a!==null&&(clearTimeout(a),a=null)},u=()=>{c(),i=void 0,s=null},h=()=>{c(),l()},x=function(...D){if(o?.aborted)return;i=this,s=D;let O=a==null;f(),m&&O&&l()};return x.schedule=f,x.cancel=u,x.flush=h,o?.addEventListener("abort",u,{once:!0}),x}function w(t,r=0,o={}){typeof o!="object"&&(o={});let{leading:e=!1,trailing:i=!0,maxWait:s}=o,m=Array(2);e&&(m[0]="leading"),i&&(m[1]="trailing");let p,l=null,d=L(function(...c){p=t.apply(this,c),l=null},r,{edges:m}),a=function(...c){return s!=null&&(l===null&&(l=Date.now()),Date.now()-l>=s)?(p=t.apply(this,c),l=Date.now(),d.cancel(),d.schedule(),p):(d.apply(this,c),p)},f=()=>(d.flush(),p);return a.cancel=d.cancel,a.flush=f,a}function v(t){t.on("ready",()=>{let r=t.plugins.get("AnnotationsUIs"),o=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),m=w(()=>{if(!(o&&o.value))if(e.scrollWidth>e.clientWidth)d("narrowSidebar");else{let a=0;s.forEach((f,c)=>{let u=getComputedStyle(c);for(let h of f)h==="scrollWidth"?a+=c.scrollWidth:a+=parseFloat(u.getPropertyValue(h))||0}),a+i<e.clientWidth&&d("wideSidebar")}},10),p=new ResizeObserver(m);p.observe(e),p.observe(document.querySelector(".editor-content-wrapper")),o&&o.on("execute",()=>{o.value||m()}),m();let l="wideSidebar";function d(a){l!==a&&(r.switchTo(a),l=a)}})}function C(){let t=document.querySelectorAll(".live-snippet"),r=[];return t.forEach(o=>{let e=o.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,o.prepend(i),r.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),r}var wt=R("channelId"),g=R("userId"),T={name:Ct(),id:g,role:"writer"},S=class extends _e{static get requires(){return["Users","CommentsRepository"]}init(){let r=this.editor.plugins.get("Users"),o=this.editor.plugins.get("CommentsRepository");r.addUser(T),r.defineMe(T.id),o.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:g,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:g,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:r.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},vt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function M(t=()=>{}){let r={initialData:vt,ui:{viewportOffset:{top:I()}},placeholder:"Type or paste your content here!",plugins:[z,P,H,N,V,Q,j,_,G,$,J,Z,X,ee,te,oe,re,ie,ae,ne,se,le,me,pe,de,ce,fe,ue,ge,he,xe,be,ye,ke,Ie,we,ve,F,Ce,Te,Se,Ae,Ee,Be,Le,Pe,Fe,Me,Re,De,Oe,Ue,We,qe,Ke,ze,He,Ne,Ve,Qe,je,Ge,$e,Je,Ze,Xe,et,tt,ot,rt,it,at,nt,st,lt,mt,pt,dt,ct,ft,ut,gt,ht,xt,bt,yt,kt,It,v,S],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:k,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:wt},cloudServices:{...b,tokenUrl:E(b.tokenUrl,T)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(e)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),m=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(m)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[_,F,P]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"Tabloid",margin_top:"20mm",margin_bottom:"20mm",margin_right:"24mm",margin_left:"24mm",page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(r);let o=C()[0];return Y.create(document.querySelector(".editor-content"),r).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),o.markDemoAsLoaded(),B(e),e)).catch(e=>{console.error(e)})}function R(t){let r=location.search.match(new RegExp(`${t}=([^&]+)`)),o=r?decodeURIComponent(r[1]):null;if(!o){o=Ye();let e=new URL(window.location.href);e.searchParams.set(t,o),window.history.replaceState({},document.title,e.toString())}return o}function Ct(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],r=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=t[Math.floor(Math.random()*t.length)],e=r[Math.floor(Math.random()*r.length)];return`${o} ${e}`}M(t=>{let r=["AIChat","AIQuickActions","AITranslate"],o=["ask-ai","aiQuickActions"];t.plugins=t.plugins.filter(e=>!(e.pluginName&&r.includes(e.pluginName))),t.balloonToolbar=t.balloonToolbar.filter(e=>!o.includes(e)),t.toolbar.items=t.toolbar.items.filter(e=>!o.includes(e)),t.ai.review={extraCommands:[{id:"company-style-guide",label:"Company style guide",description:"Apply the company writing style guide to ensure consistent, professional language.",prompt:'Apply the following company style guide rules to the text. For each violation, suggest a concrete rewrite. Replace hedging phrases (e.g., "may require", "could positively impact", "should be treated as") with direct, confident statements. Convert passive voice to active voice where the actor is known or implied. Remove filler words and redundant qualifiers (e.g., "overall", "generally", "in terms of"). Replace vague language with precise wording (e.g., "minor improvement" \u2192 state the actual change). Keep all data, metrics, and factual content unchanged.'}]}}).then(t=>{window.editor=t,t.plugins.get("AITabs").view.activateTab("reviewMode")});
