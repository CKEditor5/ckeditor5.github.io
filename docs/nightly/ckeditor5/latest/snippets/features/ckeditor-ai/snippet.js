import{Alignment as V,Autoformat as F,AutoImage as j,AutoLink as Q,Autosave as G,BalloonToolbar as $,BlockQuote as J,Bold as M,Bookmark as Z,CKBox as X,CKBoxImageEdit as Y,CloudServices as ee,Code as te,DecoupledEditor as oe,Emoji as re,Essentials as ie,FindAndReplace as ae,FontBackgroundColor as ne,FontColor as se,FontFamily as le,FontSize as me,Fullscreen as pe,Heading as de,HorizontalLine as ce,ImageBlock as fe,ImageCaption as ue,ImageEditing as ge,ImageInline as he,ImageInsert as xe,ImageInsertViaUrl as be,ImageResize as ye,ImageStyle as ke,ImageTextAlternative as we,ImageToolbar as Ce,ImageUpload as Ie,ImageUtils as ve,Indent as Te,IndentBlock as Se,Italic as D,Link as Ae,LinkImage as Ee,List as Be,ListProperties as Le,Mention as Pe,Paragraph as _e,PasteFromOffice as Fe,PictureEditing as Me,Plugin as De,RemoveFormat as Re,SpecialCharacters as Oe,SpecialCharactersArrows as Ue,SpecialCharactersCurrency as We,SpecialCharactersEssentials as qe,SpecialCharactersLatin as ze,SpecialCharactersMathematical as Ke,SpecialCharactersText as He,Strikethrough as Ne,Subscript as Ve,Superscript as je,Table as Qe,TableCaption as Ge,TableCellProperties as $e,TableColumnResize as Je,TableProperties as Ze,TableToolbar as Xe,TextTransformation as Ye,TodoList as et,Underline as tt,uid as ot}from"ckeditor5";var z="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",K="https://33333.cke-cs.com/easyimage/upload/",H="33333.cke-cs.com/ws",b={tokenUrl:z,uploadUrl:K,webSocketUrl:H};var k="https://api.ckbox.io/token/demo";import{Plugin as Rt}from"@ckeditor/ckeditor5-core";import{Essentials as Ut}from"@ckeditor/ckeditor5-essentials";import{Autoformat as qt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Kt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Nt,Italic as Vt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Qt}from"@ckeditor/ckeditor5-heading";import{Image as $t,ImageCaption as Jt,ImageStyle as Zt,ImageToolbar as Xt}from"@ckeditor/ckeditor5-image";import{Indent as eo}from"@ckeditor/ckeditor5-indent";import{Link as oo}from"@ckeditor/ckeditor5-link";import{List as io}from"@ckeditor/ckeditor5-list";import{MediaEmbed as no}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as lo}from"@ckeditor/ckeditor5-paragraph";import{Table as po,TableToolbar as co}from"@ckeditor/ckeditor5-table";function w({id:t,target:o,text:r,editor:e,tippyOptions:i}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:r});return}let s=window.umberto.Tooltip.create({id:t,text:r,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let l of e.editing.view.document.roots)l.once("change:isFocused",(d,m,p)=>{p&&s.destroy()});return s}function C(t,o){let r=t.items,e;return typeof o=="function"?e=r.find(o):e=r.get(o),e?e.element:void 0}function I(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function y(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as bo,Essentials as yo,CKFinderUploadAdapter as ko,Autoformat as wo,BlockToolbar as Co,Bold as Io,Italic as vo,BlockQuote as To,CKBox as So,CKFinder as Ao,EasyImage as Eo,Heading as Bo,Image as Lo,ImageCaption as Po,ImageStyle as _o,ImageToolbar as Fo,ImageUpload as Mo,PictureEditing as Do,Indent as Ro,Link as Oo,List as Uo,MediaEmbed as Wo,Paragraph as qo,PasteFromOffice as zo,Table as Ko,TableToolbar as Ho,TextTransformation as No,CloudServices as Vo}from"ckeditor5";import{BalloonEditor as $o,Essentials as Jo,CKFinderUploadAdapter as Zo,Autoformat as Xo,Bold as Yo,Italic as er,BlockQuote as tr,CKBox as or,CKFinder as rr,EasyImage as ir,Heading as ar,Image as nr,ImageCaption as sr,ImageStyle as lr,ImageToolbar as mr,ImageUpload as pr,PictureEditing as dr,Indent as cr,Link as fr,List as ur,MediaEmbed as gr,Paragraph as hr,PasteFromOffice as xr,Table as br,TableToolbar as yr,TextTransformation as kr,CloudServices as wr}from"ckeditor5";import{ClassicEditor as Tr,Essentials as Sr,Autoformat as Ar,Bold as Er,Italic as Br,BlockQuote as Lr,CKBox as Pr,EasyImage as _r,Heading as Fr,Image as Mr,ImageCaption as Dr,ImageStyle as Rr,ImageToolbar as Or,ImageUpload as Ur,PictureEditing as Wr,Indent as qr,Link as zr,List as Kr,MediaEmbed as Hr,Paragraph as Nr,PasteFromOffice as Vr,Table as jr,TableToolbar as Qr,TextTransformation as Gr,CloudServices as $r,AutoImage as Jr,ImageInsert as Zr,Bookmark as Xr}from"ckeditor5";import{DecoupledEditor as oi,Essentials as ri,Alignment as ii,FontSize as ai,FontFamily as ni,FontColor as si,FontBackgroundColor as li,Autoformat as mi,Bold as pi,Italic as di,Strikethrough as ci,Underline as fi,BlockQuote as ui,CKBox as gi,EasyImage as hi,Heading as xi,Image as bi,ImageCaption as yi,ImageResize as ki,ImageStyle as wi,ImageToolbar as Ci,ImageUpload as Ii,PictureEditing as vi,Indent as Ti,IndentBlock as Si,Link as Ai,List as Ei,ListProperties as Bi,MediaEmbed as Li,Paragraph as Pi,PasteFromOffice as _i,Table as Fi,TableToolbar as Mi,TextTransformation as Di,CloudServices as Ri}from"ckeditor5";import{InlineEditor as qi,Essentials as zi,CKFinderUploadAdapter as Ki,Autoformat as Hi,Bold as Ni,Italic as Vi,BlockQuote as ji,CKBox as Qi,CKFinder as Gi,EasyImage as $i,Heading as Ji,Image as Zi,ImageCaption as Xi,ImageStyle as Yi,ImageToolbar as ea,ImageUpload as ta,PictureEditing as oa,Indent as ra,Link as ia,List as aa,MediaEmbed as na,Paragraph as sa,PasteFromOffice as la,Table as ma,TableToolbar as pa,TextTransformation as da,CloudServices as ca}from"ckeditor5";import{MultiRootEditor as ha,Essentials as xa,CKFinderUploadAdapter as ba,Autoformat as ya,Bold as ka,Italic as wa,BlockQuote as Ca,CKBox as Ia,CKFinder as va,EasyImage as Ta,Heading as Sa,Image as Aa,ImageCaption as Ea,ImageStyle as Ba,ImageToolbar as La,ImageUpload as Pa,PictureEditing as _a,Indent as Fa,Link as Ma,List as Da,MediaEmbed as Ra,Paragraph as Oa,PasteFromOffice as Ua,Table as Wa,TableToolbar as qa,TextTransformation as za,CloudServices as Ka}from"ckeditor5";import{AIChat as rt,AIEditorIntegration as it,AIQuickActions as at,AIReviewMode as nt,AITranslate as st,CaseChange as lt,Comments as mt,ExportPdf as pt,ExportWord as dt,Footnotes as ct,FormatPainter as ft,ImportWord as ut,LineHeight as gt,MergeFields as ht,MultiLevelList as xt,PasteFromOfficeEnhanced as bt,SlashCommand as yt,TableOfContents as kt,Template as wt,TrackChanges as Ct,TrackChangesData as It,TrackChangesPreview as vt}from"ckeditor5-premium-features";import{uid as N}from"ckeditor5";function B(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=N(),e=t[Math.floor(Math.random()*t.length)],i=o[Math.floor(Math.random()*o.length)];return{name:e+" "+i,id:r}}function L(t,o=B()){return`${t}?`+Object.keys(o).filter(e=>o[e]).map(e=>`user.${e}=${o[e]}`).join("&")}function P(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(r,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function _(t,o,{signal:r,edges:e}={}){let i,s=null,l=e!=null&&e.includes("leading"),d=e==null||e.includes("trailing"),m=()=>{s!==null&&(t.apply(i,s),i=void 0,s=null)},p=()=>{d&&m(),u()},n=null,f=()=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,p()},o)},c=()=>{n!==null&&(clearTimeout(n),n=null)},u=()=>{c(),i=void 0,s=null},h=()=>{c(),m()},x=function(...W){if(r?.aborted)return;i=this,s=W;let q=n==null;f(),l&&q&&m()};return x.schedule=f,x.cancel=u,x.flush=h,r?.addEventListener("abort",u,{once:!0}),x}function v(t,o=0,r={}){typeof r!="object"&&(r={});let{leading:e=!1,trailing:i=!0,maxWait:s}=r,l=Array(2);e&&(l[0]="leading"),i&&(l[1]="trailing");let d,m=null,p=_(function(...c){d=t.apply(this,c),m=null},o,{edges:l}),n=function(...c){return s!=null&&(m===null&&(m=Date.now()),Date.now()-m>=s)?(d=t.apply(this,c),m=Date.now(),p.cancel(),p.schedule(),d):(p.apply(this,c),d)},f=()=>(p.flush(),d);return n.cancel=p.cancel,n.flush=f,n}function T(t){t.on("ready",()=>{let o=t.plugins.get("AnnotationsUIs"),r=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=v(()=>{if(!(r&&r.value))if(e.scrollWidth>e.clientWidth)p("narrowSidebar");else{let n=0;s.forEach((f,c)=>{let u=getComputedStyle(c);for(let h of f)h==="scrollWidth"?n+=c.scrollWidth:n+=parseFloat(u.getPropertyValue(h))||0}),n+i<e.clientWidth&&p("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(e),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let m="wideSidebar";function p(n){m!==n&&(o.switchTo(n),m=n)}})}function S(){let t=document.querySelectorAll(".live-snippet"),o=[];return t.forEach(r=>{let e=r.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),o}var Tt=O("channelId"),g=O("userId"),A={name:At(),id:g,role:"writer"},E=class extends De{static get requires(){return["Users","CommentsRepository"]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(A),o.defineMe(A.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:g,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:g,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:g,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},St=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function R(t=()=>{}){let o={initialData:St,ui:{viewportOffset:{top:I()}},placeholder:"Type or paste your content here!",plugins:[V,F,j,Q,G,$,J,M,Z,X,Y,ee,te,re,ie,ae,ne,se,le,me,pe,de,ce,fe,ue,ge,he,xe,be,ye,ke,we,Ce,Ie,ve,Te,Se,D,Ae,Ee,Be,Le,Pe,_e,Fe,Me,Re,Oe,Ue,We,qe,ze,Ke,He,Ne,Ve,je,Qe,Ge,$e,Je,Ze,Xe,Ye,et,tt,rt,it,at,nt,st,lt,mt,pt,dt,ct,ft,ut,gt,ht,xt,bt,yt,kt,wt,Ct,It,vt,T,E],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:k,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Tt},cloudServices:{...b,tokenUrl:L(b.tokenUrl,A)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(e)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),l=new File([s],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[M,D,F]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"Tabloid",margin_top:"20mm",margin_bottom:"20mm",margin_right:"24mm",margin_left:"24mm",page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",y("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(o);let r=S()[0];return oe.create(document.querySelector(".editor-content"),o).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),r.markDemoAsLoaded(),P(e),e)).catch(e=>{console.error(e)})}function O(t){let o=location.search.match(new RegExp(`${t}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=ot();let e=new URL(window.location.href);e.searchParams.set(t,r),window.history.replaceState({},document.title,e.toString())}return r}function At(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=t[Math.floor(Math.random()*t.length)],e=o[Math.floor(Math.random()*o.length)];return`${r} ${e}`}import{AIChatShortcuts as Et}from"ckeditor5-premium-features";var U=[{id:"summarize-article",type:"chat",label:"Summarize the article",prompt:"Summarize the following article in 5-7 sentences. Focus on the main ideas and essential details. Exclude examples, repetition, and minor points. Do not introduce new information."},{id:"continue-writing",type:"chat",label:"Continue writing",prompt:"Continue writing this article. Match the existing tone, vocabulary level, and formatting. Do not repeat or summarize earlier sections. Ensure logical flow and progression of ideas. Add approximately 3 paragraphs.",useReasoning:!0,useWebSearch:!0},{id:"rewrite-article",type:"chat",label:"Rewrite the article",prompt:`Rewrite the article below for the following audience:

Audience: [e.g. Product / Engineering /Leadership]
Primary concern: [e.g., escalations, integrations, customer sentiment]
Context: [e.g. Internal performance review]

Guidelines:

- Emphasize sections most relevant to this audience
- De-emphasize or condense less relevant details
- Adjust terminology to match how this team thinks and speaks
- Keep metrics accurate and unchanged

Tone: [e.g. Clear, practical, collaborative]`,useReasoning:!0,draftMode:!0},{id:"fix-grammar-and-spelling",type:"review",label:"Fix grammar and spelling ",check:"correctness"},{id:"review-document",type:"review",label:"Review document"},{id:"translate-document",type:"translate",label:"Translate document"}];R(t=>{t.ai.chat.shortcuts=U,t.plugins.push(Et)}).then(t=>{window.editor=t,w({target:C(t.ui.view.toolbar,o=>o&&o.buttonView&&o.buttonView.label==="AI Quick Actions"),text:"Click to see AI-powered Quick Actions.",editor:t,tippyOptions:{placement:"bottom-start"}})});
