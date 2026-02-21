import{Alignment as V,Autoformat as _,AutoImage as Q,AutoLink as j,Autosave as G,BalloonToolbar as $,BlockQuote as J,Bold as M,Bookmark as Z,CKBox as X,CKBoxImageEdit as Y,CloudServices as ee,Code as te,DecoupledEditor as oe,Emoji as re,Essentials as ie,FindAndReplace as ae,FontBackgroundColor as ne,FontColor as se,FontFamily as le,FontSize as me,Fullscreen as pe,Heading as de,HorizontalLine as ce,ImageBlock as fe,ImageCaption as ue,ImageEditing as ge,ImageInline as he,ImageInsert as xe,ImageInsertViaUrl as be,ImageResize as ye,ImageStyle as ke,ImageTextAlternative as Ie,ImageToolbar as we,ImageUpload as Ce,ImageUtils as ve,Indent as Te,IndentBlock as Se,Italic as O,Link as Ae,LinkImage as Ee,List as Be,ListProperties as Le,Mention as Pe,Paragraph as Fe,PasteFromOffice as _e,PictureEditing as Me,Plugin as Oe,RemoveFormat as De,SpecialCharacters as Re,SpecialCharactersArrows as Ue,SpecialCharactersCurrency as We,SpecialCharactersEssentials as qe,SpecialCharactersLatin as Ke,SpecialCharactersMathematical as ze,SpecialCharactersText as He,Strikethrough as Ne,Subscript as Ve,Superscript as Qe,Table as je,TableCaption as Ge,TableCellProperties as $e,TableColumnResize as Je,TableProperties as Ze,TableToolbar as Xe,TextTransformation as Ye,TodoList as et,Underline as tt,uid as ot}from"ckeditor5";var K="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",z="https://33333.cke-cs.com/easyimage/upload/",H="33333.cke-cs.com/ws",y={tokenUrl:K,uploadUrl:z,webSocketUrl:H};var I="https://api.ckbox.io/token/demo";import{Plugin as Ot}from"@ckeditor/ckeditor5-core";import{Essentials as Rt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Wt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Kt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ht,Italic as Nt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Qt}from"@ckeditor/ckeditor5-heading";import{Image as Gt,ImageCaption as $t,ImageStyle as Jt,ImageToolbar as Zt}from"@ckeditor/ckeditor5-image";import{Indent as Yt}from"@ckeditor/ckeditor5-indent";import{Link as to}from"@ckeditor/ckeditor5-link";import{List as ro}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ao}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as so}from"@ckeditor/ckeditor5-paragraph";import{Table as mo,TableToolbar as po}from"@ckeditor/ckeditor5-table";function g({id:t,target:o,text:r,editor:e,tippyOptions:i}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:r});return}let s=window.umberto.Tooltip.create({id:t,text:r,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let l of e.editing.view.document.roots)l.once("change:isFocused",(d,m,p)=>{p&&s.destroy()});return s}function w(t,o){let r=t.items,e;return typeof o=="function"?e=r.find(o):e=r.get(o),e?e.element:void 0}function C(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function k(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as xo,Essentials as bo,CKFinderUploadAdapter as yo,Autoformat as ko,BlockToolbar as Io,Bold as wo,Italic as Co,BlockQuote as vo,CKBox as To,CKFinder as So,EasyImage as Ao,Heading as Eo,Image as Bo,ImageCaption as Lo,ImageStyle as Po,ImageToolbar as Fo,ImageUpload as _o,PictureEditing as Mo,Indent as Oo,Link as Do,List as Ro,MediaEmbed as Uo,Paragraph as Wo,PasteFromOffice as qo,Table as Ko,TableToolbar as zo,TextTransformation as Ho,CloudServices as No}from"ckeditor5";import{BalloonEditor as Go,Essentials as $o,CKFinderUploadAdapter as Jo,Autoformat as Zo,Bold as Xo,Italic as Yo,BlockQuote as er,CKBox as tr,CKFinder as or,EasyImage as rr,Heading as ir,Image as ar,ImageCaption as nr,ImageStyle as sr,ImageToolbar as lr,ImageUpload as mr,PictureEditing as pr,Indent as dr,Link as cr,List as fr,MediaEmbed as ur,Paragraph as gr,PasteFromOffice as hr,Table as xr,TableToolbar as br,TextTransformation as yr,CloudServices as kr}from"ckeditor5";import{ClassicEditor as vr,Essentials as Tr,Autoformat as Sr,Bold as Ar,Italic as Er,BlockQuote as Br,CKBox as Lr,EasyImage as Pr,Heading as Fr,Image as _r,ImageCaption as Mr,ImageStyle as Or,ImageToolbar as Dr,ImageUpload as Rr,PictureEditing as Ur,Indent as Wr,Link as qr,List as Kr,MediaEmbed as zr,Paragraph as Hr,PasteFromOffice as Nr,Table as Vr,TableToolbar as Qr,TextTransformation as jr,CloudServices as Gr,AutoImage as $r,ImageInsert as Jr,Bookmark as Zr}from"ckeditor5";import{DecoupledEditor as ti,Essentials as oi,Alignment as ri,FontSize as ii,FontFamily as ai,FontColor as ni,FontBackgroundColor as si,Autoformat as li,Bold as mi,Italic as pi,Strikethrough as di,Underline as ci,BlockQuote as fi,CKBox as ui,EasyImage as gi,Heading as hi,Image as xi,ImageCaption as bi,ImageResize as yi,ImageStyle as ki,ImageToolbar as Ii,ImageUpload as wi,PictureEditing as Ci,Indent as vi,IndentBlock as Ti,Link as Si,List as Ai,ListProperties as Ei,MediaEmbed as Bi,Paragraph as Li,PasteFromOffice as Pi,Table as Fi,TableToolbar as _i,TextTransformation as Mi,CloudServices as Oi}from"ckeditor5";import{InlineEditor as Wi,Essentials as qi,CKFinderUploadAdapter as Ki,Autoformat as zi,Bold as Hi,Italic as Ni,BlockQuote as Vi,CKBox as Qi,CKFinder as ji,EasyImage as Gi,Heading as $i,Image as Ji,ImageCaption as Zi,ImageStyle as Xi,ImageToolbar as Yi,ImageUpload as ea,PictureEditing as ta,Indent as oa,Link as ra,List as ia,MediaEmbed as aa,Paragraph as na,PasteFromOffice as sa,Table as la,TableToolbar as ma,TextTransformation as pa,CloudServices as da}from"ckeditor5";import{MultiRootEditor as ga,Essentials as ha,CKFinderUploadAdapter as xa,Autoformat as ba,Bold as ya,Italic as ka,BlockQuote as Ia,CKBox as wa,CKFinder as Ca,EasyImage as va,Heading as Ta,Image as Sa,ImageCaption as Aa,ImageStyle as Ea,ImageToolbar as Ba,ImageUpload as La,PictureEditing as Pa,Indent as Fa,Link as _a,List as Ma,MediaEmbed as Oa,Paragraph as Da,PasteFromOffice as Ra,Table as Ua,TableToolbar as Wa,TextTransformation as qa,CloudServices as Ka}from"ckeditor5";import{AIChat as rt,AIEditorIntegration as it,AIQuickActions as at,AIReviewMode as nt,AITranslate as st,CaseChange as lt,Comments as mt,ExportPdf as pt,ExportWord as dt,Footnotes as ct,FormatPainter as ft,ImportWord as ut,LineHeight as gt,MergeFields as ht,MultiLevelList as xt,PasteFromOfficeEnhanced as bt,SlashCommand as yt,TableOfContents as kt,Template as It,TrackChanges as wt,TrackChangesData as Ct,TrackChangesPreview as vt}from"ckeditor5-premium-features";import{uid as N}from"ckeditor5";function B(){let t=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=N(),e=t[Math.floor(Math.random()*t.length)],i=o[Math.floor(Math.random()*o.length)];return{name:e+" "+i,id:r}}function L(t,o=B()){return`${t}?`+Object.keys(o).filter(e=>o[e]).map(e=>`user.${e}=${o[e]}`).join("&")}function P(t){t.commands.get("aiQuickAction")&&t.commands.get("aiQuickAction").on("execute",(r,e)=>{e[0].type==="CHAT"&&(t.commands.get("toggleAi").value||t.execute("toggleAi"))},{priority:"high"})}function F(t,o,{signal:r,edges:e}={}){let i,s=null,l=e!=null&&e.includes("leading"),d=e==null||e.includes("trailing"),m=()=>{s!==null&&(t.apply(i,s),i=void 0,s=null)},p=()=>{d&&m(),u()},n=null,f=()=>{n!=null&&clearTimeout(n),n=setTimeout(()=>{n=null,p()},o)},c=()=>{n!==null&&(clearTimeout(n),n=null)},u=()=>{c(),i=void 0,s=null},x=()=>{c(),m()},b=function(...W){if(r?.aborted)return;i=this,s=W;let q=n==null;f(),l&&q&&m()};return b.schedule=f,b.cancel=u,b.flush=x,r?.addEventListener("abort",u,{once:!0}),b}function v(t,o=0,r={}){typeof r!="object"&&(r={});let{leading:e=!1,trailing:i=!0,maxWait:s}=r,l=Array(2);e&&(l[0]="leading"),i&&(l[1]="trailing");let d,m=null,p=F(function(...c){d=t.apply(this,c),m=null},o,{edges:l}),n=function(...c){return s!=null&&(m===null&&(m=Date.now()),Date.now()-m>=s)?(d=t.apply(this,c),m=Date.now(),p.cancel(),p.schedule(),d):(p.apply(this,c),d)},f=()=>(p.flush(),d);return n.cancel=p.cancel,n.flush=f,n}function T(t){t.on("ready",()=>{let o=t.plugins.get("AnnotationsUIs"),r=t.commands.get("toggleFullscreen"),e=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let s=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),l=v(()=>{if(!(r&&r.value))if(e.scrollWidth>e.clientWidth)p("narrowSidebar");else{let n=0;s.forEach((f,c)=>{let u=getComputedStyle(c);for(let x of f)x==="scrollWidth"?n+=c.scrollWidth:n+=parseFloat(u.getPropertyValue(x))||0}),n+i<e.clientWidth&&p("wideSidebar")}},10),d=new ResizeObserver(l);d.observe(e),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||l()}),l();let m="wideSidebar";function p(n){m!==n&&(o.switchTo(n),m=n)}})}function S(){let t=document.querySelectorAll(".live-snippet"),o=[];return t.forEach(r=>{let e=r.querySelector(".live-snippet__container");if(!e)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:e,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),e.classList.add("loaded")}})}),o}var Tt=R("channelId"),h=R("userId"),A={name:At(),id:h,role:"writer"},E=class extends Oe{static get requires(){return["Users","CommentsRepository"]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(A),o.defineMe(A.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:e})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:h,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:h,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[e])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},St=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function D(t=()=>{}){let o={initialData:St,ui:{viewportOffset:{top:C()}},placeholder:"Type or paste your content here!",plugins:[V,_,Q,j,G,$,J,M,Z,X,Y,ee,te,re,ie,ae,ne,se,le,me,pe,de,ce,fe,ue,ge,he,xe,be,ye,ke,Ie,we,Ce,ve,Te,Se,O,Ae,Ee,Be,Le,Pe,Fe,_e,Me,De,Re,Ue,We,qe,Ke,ze,He,Ne,Ve,Qe,je,Ge,$e,Je,Ze,Xe,Ye,et,tt,rt,it,at,nt,st,lt,mt,pt,dt,ct,ft,ut,gt,ht,xt,bt,yt,kt,It,wt,Ct,vt,T,E],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:I,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Tt},cloudServices:{...y,tokenUrl:L(y.tokenUrl,A)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let e=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics \u2013 Source Data"}];return Promise.resolve(e)},getData:async()=>{let s=await(await fetch("../../assets/pdf/Customer%20Support%20Metrics%20%E2%80%93%20Source%20Data.pdf")).blob(),l=new File([s],"Customer Support Metrics \u2013 Source Data.pdf",{type:"application/pdf"});return Promise.resolve(l)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[M,O,_]}},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"Tabloid",margin_top:"20mm",margin_bottom:"20mm",margin_right:"24mm",margin_left:"24mm",page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}},tokenUrl:!1},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};t(o);let r=S()[0];return oe.create(document.querySelector(".editor-content"),o).then(e=>(window.editor=e,document.querySelector(".menubar-container").appendChild(e.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(e.ui.view.toolbar.element),r.markDemoAsLoaded(),P(e),e)).catch(e=>{console.error(e)})}function R(t){let o=location.search.match(new RegExp(`${t}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=ot();let e=new URL(window.location.href);e.searchParams.set(t,r),window.history.replaceState({},document.title,e.toString())}return r}function At(){let t=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=t[Math.floor(Math.random()*t.length)],e=o[Math.floor(Math.random()*o.length)];return`${r} ${e}`}function U(t){let o;function r(){if(!t.commands.get("toggleAi").value){o?.destroy();return}let e=document.querySelector(".ck-ai-chat__prompt-input textarea");e&&(o=g({id:"ai-chat-overlay-input-tooltip",target:e,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:t,tippyOptions:{placement:"top"}}))}t.commands.get("toggleAi").on("execute",()=>{r()},{priority:"low"}),r()}D().then(t=>{window.editor=t,g({target:w(t.ui.view.toolbar,o=>o&&o.buttonView&&o.buttonView.label==="AI Quick Actions"),text:"Click to see AI-powered Quick Actions.",editor:t,tippyOptions:{placement:"bottom-start"}}),U(t)});
