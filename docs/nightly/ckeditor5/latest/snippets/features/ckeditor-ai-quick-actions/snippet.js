import{Alignment as N,Autoformat as F,AutoImage as V,AutoLink as Q,Autosave as j,BalloonToolbar as G,BlockQuote as $,Bold as M,Bookmark as J,CKBox as Z,CKBoxImageEdit as X,CloudServices as Y,Code as ee,DecoupledEditor as te,Emoji as oe,Essentials as re,FindAndReplace as ie,FontBackgroundColor as ae,FontColor as ne,FontFamily as se,FontSize as le,Fullscreen as me,Heading as pe,HorizontalLine as de,ImageBlock as ce,ImageCaption as fe,ImageEditing as ue,ImageInline as ge,ImageInsert as he,ImageInsertViaUrl as xe,ImageResize as be,ImageStyle as ye,ImageTextAlternative as ke,ImageToolbar as Ie,ImageUpload as we,ImageUtils as Ce,Indent as ve,IndentBlock as Te,Italic as O,Link as Se,LinkImage as Ae,List as Ee,ListProperties as Be,Mention as Le,Paragraph as Pe,PasteFromOffice as _e,PictureEditing as Fe,Plugin as Me,RemoveFormat as Oe,SpecialCharacters as De,SpecialCharactersArrows as Re,SpecialCharactersCurrency as Ue,SpecialCharactersEssentials as We,SpecialCharactersLatin as qe,SpecialCharactersMathematical as Ke,SpecialCharactersText as ze,Strikethrough as He,Subscript as Ne,Superscript as Ve,Table as Qe,TableCaption as je,TableCellProperties as Ge,TableColumnResize as $e,TableProperties as Je,TableToolbar as Ze,TextTransformation as Xe,TodoList as Ye,Underline as et,uid as tt}from"ckeditor5";var q="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",K="https://33333.cke-cs.com/easyimage/upload/",z="33333.cke-cs.com/ws",b={tokenUrl:q,uploadUrl:K,webSocketUrl:z};var k="https://api.ckbox.io/token/demo";import{Plugin as Mt}from"@ckeditor/ckeditor5-core";import{Essentials as Dt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Ut}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as qt}from"@ckeditor/ckeditor5-block-quote";import{Bold as zt,Italic as Ht}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Vt}from"@ckeditor/ckeditor5-heading";import{Image as jt,ImageCaption as Gt,ImageStyle as $t,ImageToolbar as Jt}from"@ckeditor/ckeditor5-image";import{Indent as Xt}from"@ckeditor/ckeditor5-indent";import{Link as eo}from"@ckeditor/ckeditor5-link";import{List as oo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as io}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as no}from"@ckeditor/ckeditor5-paragraph";import{Table as lo,TableToolbar as mo}from"@ckeditor/ckeditor5-table";function I({id:e,target:o,text:r,editor:t,tippyOptions:i}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:r});return}let a=window.umberto.Tooltip.create({id:e,text:r,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let l of t.editing.view.document.roots)l.once("change:isFocused",(d,m,p)=>{p&&a.destroy()});return a}function w(e,o){let r=e.items,t;return typeof o=="function"?t=r.find(o):t=r.get(o),t?t.element:void 0}function C(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function y(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as ho,Essentials as xo,CKFinderUploadAdapter as bo,Autoformat as yo,BlockToolbar as ko,Bold as Io,Italic as wo,BlockQuote as Co,CKBox as vo,CKFinder as To,EasyImage as So,Heading as Ao,Image as Eo,ImageCaption as Bo,ImageStyle as Lo,ImageToolbar as Po,ImageUpload as _o,PictureEditing as Fo,Indent as Mo,IndentBlock as Oo,Link as Do,List as Ro,MediaEmbed as Uo,Paragraph as Wo,PasteFromOffice as qo,Table as Ko,TableToolbar as zo,TextTransformation as Ho,CloudServices as No}from"ckeditor5";import{BalloonEditor as Go,Essentials as $o,CKFinderUploadAdapter as Jo,Autoformat as Zo,Bold as Xo,Italic as Yo,BlockQuote as er,CKBox as tr,CKFinder as or,EasyImage as rr,Heading as ir,Image as ar,ImageCaption as nr,ImageStyle as sr,ImageToolbar as lr,ImageUpload as mr,PictureEditing as pr,Indent as dr,IndentBlock as cr,Link as fr,List as ur,MediaEmbed as gr,Paragraph as hr,PasteFromOffice as xr,Table as br,TableToolbar as yr,TextTransformation as kr,CloudServices as Ir}from"ckeditor5";import{ClassicEditor as Tr,Essentials as Sr,Autoformat as Ar,Bold as Er,Italic as Br,BlockQuote as Lr,CKBox as Pr,EasyImage as _r,Heading as Fr,Image as Mr,ImageCaption as Or,ImageStyle as Dr,ImageToolbar as Rr,ImageUpload as Ur,PictureEditing as Wr,Indent as qr,IndentBlock as Kr,Link as zr,List as Hr,MediaEmbed as Nr,Paragraph as Vr,PasteFromOffice as Qr,Table as jr,TableToolbar as Gr,TextTransformation as $r,CloudServices as Jr,AutoImage as Zr,ImageInsert as Xr,Bookmark as Yr}from"ckeditor5";import{DecoupledEditor as ri,Essentials as ii,Alignment as ai,FontSize as ni,FontFamily as si,FontColor as li,FontBackgroundColor as mi,Autoformat as pi,Bold as di,Italic as ci,Strikethrough as fi,Underline as ui,BlockQuote as gi,CKBox as hi,EasyImage as xi,Heading as bi,Image as yi,ImageCaption as ki,ImageResize as Ii,ImageStyle as wi,ImageToolbar as Ci,ImageUpload as vi,PictureEditing as Ti,Indent as Si,IndentBlock as Ai,Link as Ei,List as Bi,ListProperties as Li,MediaEmbed as Pi,Paragraph as _i,PasteFromOffice as Fi,Table as Mi,TableToolbar as Oi,TextTransformation as Di,CloudServices as Ri}from"ckeditor5";import{InlineEditor as Ki,Essentials as zi,CKFinderUploadAdapter as Hi,Autoformat as Ni,Bold as Vi,Italic as Qi,BlockQuote as ji,CKBox as Gi,CKFinder as $i,EasyImage as Ji,Heading as Zi,Image as Xi,ImageCaption as Yi,ImageStyle as ea,ImageToolbar as ta,ImageUpload as oa,PictureEditing as ra,Indent as ia,IndentBlock as aa,Link as na,List as sa,MediaEmbed as la,Paragraph as ma,PasteFromOffice as pa,Table as da,TableToolbar as ca,TextTransformation as fa,CloudServices as ua}from"ckeditor5";import{MultiRootEditor as ba,Essentials as ya,CKFinderUploadAdapter as ka,Autoformat as Ia,Bold as wa,Italic as Ca,BlockQuote as va,CKBox as Ta,CKFinder as Sa,EasyImage as Aa,Heading as Ea,Image as Ba,ImageCaption as La,ImageStyle as Pa,ImageToolbar as _a,ImageUpload as Fa,PictureEditing as Ma,Indent as Oa,IndentBlock as Da,Link as Ra,List as Ua,MediaEmbed as Wa,Paragraph as qa,PasteFromOffice as Ka,Table as za,TableToolbar as Ha,TextTransformation as Na,CloudServices as Va}from"ckeditor5";import{AIChat as ot,AIEditorIntegration as rt,AIQuickActions as it,AIReviewMode as at,AITranslate as nt,CaseChange as st,Comments as lt,ExportPdf as mt,ExportWord as pt,Footnotes as dt,FormatPainter as ct,ImportWord as ft,LineHeight as ut,MergeFields as gt,MultiLevelList as ht,PasteFromOfficeEnhanced as xt,SlashCommand as bt,TableOfContents as yt,Template as kt,TrackChanges as It,TrackChangesData as wt,TrackChangesPreview as Ct}from"ckeditor5-premium-features";import{uid as H}from"ckeditor5";function B(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=H(),t=e[Math.floor(Math.random()*e.length)],i=o[Math.floor(Math.random()*o.length)];return{name:t+" "+i,id:r}}function L(e,o=B()){return`${e}?`+Object.keys(o).filter(t=>o[t]).map(t=>`user.${t}=${o[t]}`).join("&")}function P(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function _(e,o,{signal:r,edges:t}={}){let i,a=null,l=t!=null&&t.includes("leading"),d=t==null||t.includes("trailing"),m=()=>{a!==null&&(e.apply(i,a),i=void 0,a=null)},p=()=>{d&&m(),u()},n=null,f=()=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,p()},o)},c=()=>{n!==null&&(clearTimeout(n),n=null)},u=()=>{c(),i=void 0,a=null},h=()=>{c(),m()},x=function(...U){if(r?.aborted)return;i=this,a=U;let W=n==null;f(),l&&W&&m()};return x.schedule=f,x.cancel=u,x.flush=h,r?.addEventListener("abort",u,{once:!0}),x}function v(e,o=0,r={}){typeof r!="object"&&(r={});let{leading:t=!1,trailing:i=!0,maxWait:a}=r,l=Array(2);t&&(l[0]="leading"),i&&(l[1]="trailing");let d,m=null,p=_(function(...c){d=e.apply(this,c),m=null},o,{edges:l}),n=function(...c){return a!=null&&(m===null&&(m=Date.now()),Date.now()-m>=a)?(d=e.apply(this,c),m=Date.now(),p.cancel(),p.schedule(),d):(p.apply(this,c),d)},f=()=>(p.flush(),d);return n.cancel=p.cancel,n.flush=f,n}function T(e){e.on("ready",()=>{let o=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),t=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let a=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=v(()=>{if(!(r&&r.value))if(t.scrollWidth>t.clientWidth)p("narrowSidebar");else{let n=0;a.forEach((f,c)=>{let u=getComputedStyle(c);for(let h of f)h==="scrollWidth"?n+=c.scrollWidth:n+=parseFloat(u.getPropertyValue(h))||0}),n+i<t.clientWidth&&p("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(t),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let m="wideSidebar";function p(n){m!==n&&(o.switchTo(n),m=n)}})}function S(){let e=document.querySelectorAll(".live-snippet"),o=[];return e.forEach(r=>{let t=r.querySelector(".live-snippet__container");if(!t)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:t,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),t.classList.add("loaded")}})}),o}var vt=R("channelId"),g=R("userId"),A={name:St(),id:g,role:"writer"},E=class extends Me{static get requires(){return["Users","CommentsRepository"]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(A),o.defineMe(A.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:t})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:g,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:g,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[t])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Tt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function D(e=()=>{}){let o={initialData:Tt,ui:{viewportOffset:{top:C()}},placeholder:"Type or paste your content here!",plugins:[N,F,V,Q,j,G,$,M,J,Z,X,Y,ee,oe,re,ie,ae,ne,se,le,me,pe,de,ce,fe,ue,ge,he,xe,be,ye,ke,Ie,we,Ce,ve,Te,O,Se,Ae,Ee,Be,Le,Pe,_e,Fe,Oe,De,Re,Ue,We,qe,Ke,ze,He,Ne,Ve,Qe,je,Ge,$e,Je,Ze,Xe,Ye,et,ot,rt,it,at,nt,st,lt,mt,pt,dt,ct,ft,ut,gt,ht,xt,bt,yt,kt,It,wt,Ct,T,E],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:k,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:vt},cloudServices:{...b,tokenUrl:L(b.tokenUrl,A)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let t=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(t)},getData:async()=>{let a=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([a],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[M,O,F]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"Tabloid",margin_top:"20mm",margin_bottom:"20mm",margin_right:"24mm",margin_left:"24mm",page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(o);let r=S()[0];return te.create(document.querySelector(".editor-content"),o).then(t=>(window.editor=t,document.querySelector(".menubar-container").appendChild(t.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),r.markDemoAsLoaded(),P(t),t)).catch(t=>{console.error(t)})}function R(e){let o=location.search.match(new RegExp(`${e}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=tt();let t=new URL(window.location.href);t.searchParams.set(e,r),window.history.replaceState({},document.title,t.toString())}return r}function St(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],t=o[Math.floor(Math.random()*o.length)];return`${r} ${t}`}D(e=>{let o=e.toolbar.items.indexOf("aiQuickActions"),r=e.balloonToolbar.indexOf("aiQuickActions"),t=["improve-writing","translate"];e.toolbar.items.splice(o+1,0,...t),e.balloonToolbar.splice(r+1,0,...t);let i=["AIQuickActions","AIEditorIntegration"];e.plugins=e.plugins.filter(a=>a.pluginName&&a.pluginName.startsWith("AI")?i.includes(a.pluginName):!0),e.toolbar.items=e.toolbar.items.filter(a=>a!=="toggleAi"),e.balloonToolbar=e.balloonToolbar.filter(a=>a!=="ask-ai"),e.ai.container.type="custom"}).then(e=>{window.editor=e,I({target:w(e.ui.view.toolbar,o=>o&&o.buttonView&&o.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu",editor:e,tippyOptions:{placement:"bottom-start"}})});
