import{Alignment as V,Autoformat as D,AutoImage as j,AutoLink as G,Autosave as $,BalloonToolbar as J,BlockQuote as Z,Bold as U,Bookmark as X,CKBox as Y,CKBoxImageEdit as ee,CloudServices as te,Code as oe,DecoupledEditor as re,Emoji as ie,Essentials as ne,FindAndReplace as ae,FontBackgroundColor as le,FontColor as se,FontFamily as de,FontSize as ce,Fullscreen as me,GeneralHtmlSupport as pe,Heading as ue,HorizontalLine as ge,ImageBlock as he,ImageCaption as fe,ImageEditing as be,ImageInline as ye,ImageInsert as ke,ImageInsertViaUrl as we,ImageResize as ve,ImageStyle as Ie,ImageTextAlternative as Ce,ImageToolbar as Te,ImageUpload as xe,ImageUtils as Se,Indent as Ae,IndentBlock as Ee,Italic as O,Link as Le,LinkImage as Be,List as _e,ListProperties as Pe,Mention as Me,Paragraph as Fe,PasteFromOffice as De,PictureEditing as Ue,Plugin as Oe,RemoveFormat as Re,SpecialCharacters as qe,SpecialCharactersArrows as He,SpecialCharactersCurrency as We,SpecialCharactersEssentials as Ne,SpecialCharactersLatin as ze,SpecialCharactersMathematical as Ke,SpecialCharactersText as Qe,Strikethrough as Ve,Subscript as je,Superscript as Ge,Table as $e,TableCaption as Je,TableCellProperties as Ze,TableColumnResize as Xe,TableProperties as Ye,TableToolbar as et,TextTransformation as tt,TodoList as ot,Underline as rt}from"ckeditor5";var W="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",N="https://33333.cke-cs.com/easyimage/upload/",z="33333.cke-cs.com/ws",y={tokenUrl:W,uploadUrl:N,webSocketUrl:z};var w="https://api.ckbox.io/token/demo";import{Plugin as Rt}from"@ckeditor/ckeditor5-core";import{Essentials as Ht}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Nt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Kt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Vt,Italic as jt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as $t}from"@ckeditor/ckeditor5-heading";import{Image as Zt,ImageCaption as Xt,ImageStyle as Yt,ImageToolbar as eo}from"@ckeditor/ckeditor5-image";import{Indent as oo}from"@ckeditor/ckeditor5-indent";import{Link as io}from"@ckeditor/ckeditor5-link";import{List as ao}from"@ckeditor/ckeditor5-list";import{MediaEmbed as so}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as mo}from"@ckeditor/ckeditor5-paragraph";import{Table as uo,TableToolbar as go}from"@ckeditor/ckeditor5-table";function v({id:e,target:o,text:r,editor:t,tippyOptions:i}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:r});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:r});return}let n=window.umberto.Tooltip.create({id:e,text:r,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let s of t.editing.view.document.roots)s.once("change:isFocused",(d,c,m)=>{m&&n.destroy()});return n}function I(e,o){let r=e.items,t;return typeof o=="function"?t=r.find(o):t=r.get(o),t?t.element:void 0}function C(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function k(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}import{BalloonEditor as wo,Essentials as vo,Autoformat as Io,BlockToolbar as Co,Bold as To,Italic as xo,BlockQuote as So,CKBox as Ao,Heading as Eo,Image as Lo,ImageCaption as Bo,ImageStyle as _o,ImageToolbar as Po,ImageUpload as Mo,PictureEditing as Fo,Indent as Do,IndentBlock as Uo,Link as Oo,List as Ro,MediaEmbed as qo,Paragraph as Ho,PasteFromOffice as Wo,Table as No,TableToolbar as zo,TextTransformation as Ko,CloudServices as Qo}from"ckeditor5";import{BalloonEditor as $o,Essentials as Jo,Autoformat as Zo,Bold as Xo,Italic as Yo,BlockQuote as er,CKBox as tr,Heading as or,Image as rr,ImageCaption as ir,ImageStyle as nr,ImageToolbar as ar,ImageUpload as lr,PictureEditing as sr,Indent as dr,IndentBlock as cr,Link as mr,List as pr,MediaEmbed as ur,Paragraph as gr,PasteFromOffice as hr,Table as fr,TableToolbar as br,TextTransformation as yr,CloudServices as kr}from"ckeditor5";import{ClassicEditor as Cr,Essentials as Tr,Autoformat as xr,Bold as Sr,Italic as Ar,BlockQuote as Er,CKBox as Lr,Heading as Br,Image as _r,ImageCaption as Pr,ImageStyle as Mr,ImageToolbar as Fr,ImageUpload as Dr,PictureEditing as Ur,Indent as Or,IndentBlock as Rr,Link as qr,List as Hr,MediaEmbed as Wr,Paragraph as Nr,PasteFromOffice as zr,Table as Kr,TableToolbar as Qr,TextTransformation as Vr,CloudServices as jr,AutoImage as Gr,ImageInsert as $r,Bookmark as Jr}from"ckeditor5";import{DecoupledEditor as ei,Essentials as ti,Alignment as oi,FontSize as ri,FontFamily as ii,FontColor as ni,FontBackgroundColor as ai,Autoformat as li,Bold as si,Italic as di,Strikethrough as ci,Underline as mi,BlockQuote as pi,CKBox as ui,Heading as gi,Image as hi,ImageCaption as fi,ImageResize as bi,ImageStyle as yi,ImageToolbar as ki,ImageUpload as wi,PictureEditing as vi,Indent as Ii,IndentBlock as Ci,Link as Ti,List as xi,ListProperties as Si,MediaEmbed as Ai,Paragraph as Ei,PasteFromOffice as Li,Table as Bi,TableToolbar as _i,TextTransformation as Pi,CloudServices as Mi}from"ckeditor5";import{InlineEditor as Oi,Essentials as Ri,Autoformat as qi,Bold as Hi,Italic as Wi,BlockQuote as Ni,CKBox as zi,Heading as Ki,Image as Qi,ImageCaption as Vi,ImageStyle as ji,ImageToolbar as Gi,ImageUpload as $i,PictureEditing as Ji,Indent as Zi,IndentBlock as Xi,Link as Yi,List as en,MediaEmbed as tn,Paragraph as on,PasteFromOffice as rn,Table as nn,TableToolbar as an,TextTransformation as ln,CloudServices as sn}from"ckeditor5";import{MultiRootEditor as pn,Essentials as un,Autoformat as gn,Bold as hn,Italic as fn,BlockQuote as bn,CKBox as yn,Heading as kn,Image as wn,ImageCaption as vn,ImageStyle as In,ImageToolbar as Cn,ImageUpload as Tn,PictureEditing as xn,Indent as Sn,IndentBlock as An,Link as En,List as Ln,MediaEmbed as Bn,Paragraph as _n,PasteFromOffice as Pn,Table as Mn,TableToolbar as Fn,TextTransformation as Dn,CloudServices as Un}from"ckeditor5";import{AIChat as it,AIEditorIntegration as nt,AIQuickActions as at,AIReviewMode as lt,AITranslate as st,CaseChange as dt,Comments as ct,CommentsRepository as mt,ExportPdf as pt,ExportWord as ut,Footnotes as gt,FormatPainter as ht,ImportWord as ft,LineHeight as bt,MergeFields as yt,MultiLevelList as kt,PasteFromOfficeEnhanced as wt,SlashCommand as vt,TableOfContents as It,Template as Ct,TrackChanges as Tt,TrackChangesData as xt,TrackChangesPreview as St,Users as At}from"ckeditor5-premium-features";import{uid as K}from"ckeditor5";function B(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],o=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],r=K(),t=e[Math.floor(Math.random()*e.length)],i=o[Math.floor(Math.random()*o.length)];return{name:t+" "+i,id:r}}function _(e,o=B()){return`${e}?`+Object.keys(o).filter(t=>o[t]).map(t=>`user.${t}=${o[t]}`).join("&")}function P(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(o,{error:r,component:t,code:i,type:n,severity:s,context:d})=>{typeof window.Sentry>"u"||n==="user"||n==="network"||window.Sentry.captureException(r,{tags:{component:t,errorCode:i,errorType:n},level:s==="warning"?"warning":"error",extra:d})})}function M(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(r,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}function F(e,o,{signal:r,edges:t}={}){let i,n=null,s=t!=null&&t.includes("leading"),d=t==null||t.includes("trailing"),c=()=>{n!==null&&(e.apply(i,n),i=void 0,n=null)},m=()=>{d&&c(),g()},l=null,u=()=>{l!=null&&clearTimeout(l),l=setTimeout(()=>{l=null,m()},o)},p=()=>{l!==null&&(clearTimeout(l),l=null)},g=()=>{p(),i=void 0,n=null},f=()=>{c()},b=function(...q){if(r?.aborted)return;i=this,n=q;let H=l==null;u(),s&&H&&c()};return b.schedule=u,b.cancel=g,b.flush=f,r?.addEventListener("abort",g,{once:!0}),b}function T(e,o=0,r={}){typeof r!="object"&&(r={});let{leading:t=!1,trailing:i=!0,maxWait:n}=r,s=Array(2);t&&(s[0]="leading"),i&&(s[1]="trailing");let d,c=null,m=F(function(...p){d=e.apply(this,p),c=null},o,{edges:s}),l=function(...p){return n!=null&&(c===null&&(c=Date.now()),Date.now()-c>=n)?((t||i)&&(d=e.apply(this,p)),c=Date.now(),m.cancel(),m.schedule(),d):(m.apply(this,p),d)},u=()=>(m.flush(),d);return l.cancel=m.cancel,l.flush=u,l}function x(e){e.on("ready",()=>{let o=e.plugins.get("AnnotationsUIs"),r=e.commands.get("toggleFullscreen"),t=document.querySelector(".editing-area-scroll-wrapper"),i=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(i))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let n=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),s=T(()=>{if(!(r&&r.value))if(t.scrollWidth>t.clientWidth)m("narrowSidebar");else{let l=0;n.forEach((u,p)=>{let g=getComputedStyle(p);for(let f of u)f==="scrollWidth"?l+=p.scrollWidth:l+=parseFloat(g.getPropertyValue(f))||0}),l+i<t.clientWidth&&m("wideSidebar")}},10),d=new ResizeObserver(s);d.observe(t),d.observe(document.querySelector(".editor-content-wrapper")),r&&r.on("execute",()=>{r.value||s()}),s();let c="wideSidebar";function m(l){c!==l&&(o.switchTo(l),c=l)}})}function S(){let e=document.querySelectorAll(".live-snippet"),o=[];return e.forEach(r=>{let t=r.querySelector(".live-snippet__container");if(!t)return;let i=document.createElement("div");i.classList.add("live-snippet__loader"),i.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,r.prepend(i),o.push({container:t,spinner:i,markDemoAsLoaded(){i.classList.add("fadeout"),t.classList.add("loaded")}})}),o}import{uid as Q}from"ckeditor5";function A(e){let o=location.search.match(new RegExp(`${e}=([^&]+)`)),r=o?decodeURIComponent(o[1]):null;if(!r){r=Q();let t=new URL(window.location.href);t.searchParams.set(e,r),window.history.replaceState({},document.title,t.toString())}return r}var Et=A("channelId"),h=A("userId"),E={name:Bt(),id:h,role:"writer"},L=class extends Oe{static get requires(){return[At,mt]}init(){let o=this.editor.plugins.get("Users"),r=this.editor.plugins.get("CommentsRepository");o.addUser(E),o.defineMe(E.id),r.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:t})=>{let i={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:h,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:h,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:h,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(i[t])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:o.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Lt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function R(e=()=>{}){let o={ui:{viewportOffset:{top:C()}},root:{initialData:Lt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[V,D,j,G,$,J,Z,U,X,Y,ee,te,oe,ie,ne,ae,le,se,de,ce,me,pe,ue,ge,he,fe,be,ye,ke,we,ve,Ie,Ce,Te,xe,Se,Ae,Ee,O,Le,Be,_e,Pe,Me,Fe,De,Ue,Re,qe,He,We,Ne,ze,Ke,Qe,Ve,je,Ge,$e,Je,Ze,Xe,Ye,et,tt,ot,rt,it,nt,at,lt,st,dt,ct,pt,ut,gt,ht,ft,bt,yt,kt,wt,vt,It,Ct,Tt,xt,St,x,L],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:w,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Et},cloudServices:{...y,tokenUrl:_(y.tokenUrl,E)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{alwaysAddSelection:!0,document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let t=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(t)},getData:async()=>{let n=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),s=new File([n],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(s)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[U,O,D]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",k("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(o);let r=S()[0];return re.create(o).then(t=>(window.editor=t,document.querySelector(".menubar-container").appendChild(t.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),P(t),r.markDemoAsLoaded(),M(t),t)).catch(t=>{console.error(t)})}function Bt(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],o=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],r=e[Math.floor(Math.random()*e.length)],t=o[Math.floor(Math.random()*o.length)];return`${r} ${t}`}R(e=>{let o=e.toolbar.items.indexOf("aiQuickActions"),r=e.balloonToolbar.indexOf("aiQuickActions"),t=["improve-writing","translate"];e.toolbar.items.splice(o+1,0,...t),e.balloonToolbar.splice(r+1,0,...t);let i=["AIQuickActions","AIEditorIntegration"];e.plugins=e.plugins.filter(n=>n.pluginName&&n.pluginName.startsWith("AI")?i.includes(n.pluginName):!0),e.toolbar.items=e.toolbar.items.filter(n=>n!=="toggleAi"),e.balloonToolbar=e.balloonToolbar.filter(n=>n!=="ask-ai"),e.ai.container.type="custom"}).then(e=>{window.editor=e,v({target:I(e.ui.view.toolbar,o=>o&&o.buttonView&&o.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu",editor:e,tippyOptions:{placement:"bottom-start"}})});
