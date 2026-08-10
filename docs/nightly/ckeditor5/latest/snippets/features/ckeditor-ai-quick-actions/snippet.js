var G=Object.create;var M=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var ee=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(o){throw i=[o],o}};var I=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(i){throw t=0,i}};var te=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Z(t))!Y.call(e,n)&&n!==i&&M(e,n,{get:()=>t[n],enumerable:!(o=$(t,n))||o.enumerable});return e};var oe=(e,t,i)=>(i=e!=null?G(X(e)):{},te(t||!e||!e.__esModule?M(i,"default",{value:e,enumerable:!0}):i,e));var r=ee(()=>{});var R=I(S=>{"use strict";r();Object.defineProperty(S,Symbol.toStringTag,{value:"Module"});function se(e,t,{signal:i,edges:o}={}){let n,a=null,d=o!=null&&o.includes("leading"),u=o==null||o.includes("trailing"),c=()=>{a!==null&&(e.apply(n,a),n=void 0,a=null)},m=()=>{u&&c(),h()},s=null,g=()=>{s!=null&&clearTimeout(s),s=setTimeout(()=>{s=null,m()},t)},p=()=>{s!==null&&(clearTimeout(s),s=null)},h=()=>{p(),n=void 0,a=null},b=()=>{c()},y=function(...j){if(i?.aborted)return;n=this,a=j;let J=s==null;g(),d&&J&&c()};return y.schedule=g,y.cancel=h,y.flush=b,i?.addEventListener("abort",h,{once:!0}),y}S.debounce=se});var q=I(A=>{"use strict";r();Object.defineProperty(A,Symbol.toStringTag,{value:"Module"});var de=R();function ce(e,t=0,i={}){typeof i!="object"&&(i={});let{leading:o=!1,trailing:n=!0,maxWait:a}=i,d=Array(2);o&&(d[0]="leading"),n&&(d[1]="trailing");let u,c=null,m=de.debounce(function(...p){u=e.apply(this,p),c=null},t,{edges:d}),s=function(...p){return a!=null&&(c===null&&(c=Date.now()),Date.now()-c>=a)?(u=e.apply(this,p),c=Date.now(),m.cancel(),m.schedule(),u):(m.apply(this,p),u)},g=()=>(m.flush(),u);return s.cancel=m.cancel,s.flush=g,s}A.debounce=ce});var W=I((Va,H)=>{r();H.exports=q().debounce});r();r();import{Alignment as ue,Autoformat as z,AutoImage as pe,AutoLink as ge,Autosave as he,BalloonToolbar as fe,BlockQuote as be,Bold as V,Bookmark as ye,CKBox as ke,CKBoxImageEdit as we,CloudServices as Ie,Code as ve,DecoupledEditor as Ce,Emoji as Te,Essentials as xe,FindAndReplace as Se,FontBackgroundColor as Ae,FontColor as Ee,FontFamily as Le,FontSize as Be,Fullscreen as _e,GeneralHtmlSupport as Pe,Heading as Me,HorizontalLine as Fe,ImageBlock as Ue,ImageCaption as De,ImageEditing as Oe,ImageInline as Re,ImageInsert as qe,ImageInsertViaUrl as He,ImageResize as We,ImageStyle as Ne,ImageTextAlternative as ze,ImageToolbar as Ve,ImageUpload as Ke,ImageUtils as Qe,Indent as je,IndentBlock as Je,Italic as K,Link as Ge,LinkImage as $e,List as Ze,ListProperties as Xe,Mention as Ye,Paragraph as et,PasteFromOffice as tt,PictureEditing as ot,Plugin as it,RemoveFormat as rt,SpecialCharacters as nt,SpecialCharactersArrows as at,SpecialCharactersCurrency as lt,SpecialCharactersEssentials as st,SpecialCharactersLatin as dt,SpecialCharactersMathematical as ct,SpecialCharactersText as mt,Strikethrough as ut,Subscript as pt,Superscript as gt,Table as ht,TableCaption as ft,TableCellProperties as bt,TableColumnResize as yt,TableProperties as kt,TableToolbar as wt,TextTransformation as It,TodoList as vt,Underline as Ct}from"ckeditor5";r();r();var ie="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",re="https://33333.cke-cs.com/easyimage/upload/",ne="33333.cke-cs.com/ws",k={tokenUrl:ie,uploadUrl:re,webSocketUrl:ne};r();var v="https://api.ckbox.io/token/demo";r();import{Plugin as lo}from"@ckeditor/ckeditor5-core";import{Essentials as co}from"@ckeditor/ckeditor5-essentials";import{Autoformat as uo}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as go}from"@ckeditor/ckeditor5-block-quote";import{Bold as fo,Italic as bo}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ko}from"@ckeditor/ckeditor5-heading";import{Image as Io,ImageCaption as vo,ImageStyle as Co,ImageToolbar as To}from"@ckeditor/ckeditor5-image";import{Indent as So}from"@ckeditor/ckeditor5-indent";import{Link as Eo}from"@ckeditor/ckeditor5-link";import{List as Bo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Po}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Fo}from"@ckeditor/ckeditor5-paragraph";import{Table as Do,TableToolbar as Oo}from"@ckeditor/ckeditor5-table";r();function C({id:e,target:t,text:i,editor:o,tippyOptions:n}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:i});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:i});return}let a=window.umberto.Tooltip.create({id:e,text:i,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...n?.placement&&{position:n.placement}});for(let d of o.editing.view.document.roots)d.once("change:isFocused",(u,c,m)=>{m&&a.destroy()});return a}function T(e,t){let i=e.items,o;return typeof t=="function"?o=i.find(t):o=i.get(t),o?o.element:void 0}function x(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function w(e){return document.querySelector(`link[href*="${e}/snippet.css"][data-cke]`)?.href||""}r();import{BalloonEditor as zo,Essentials as Vo,Autoformat as Ko,BlockToolbar as Qo,Bold as jo,Italic as Jo,BlockQuote as Go,CKBox as $o,Heading as Zo,Image as Xo,ImageCaption as Yo,ImageStyle as ei,ImageToolbar as ti,ImageUpload as oi,PictureEditing as ii,Indent as ri,IndentBlock as ni,Link as ai,List as li,MediaEmbed as si,Paragraph as di,PasteFromOffice as ci,Table as mi,TableToolbar as ui,TextTransformation as pi,CloudServices as gi}from"ckeditor5";r();import{BalloonEditor as yi,Essentials as ki,Autoformat as wi,Bold as Ii,Italic as vi,BlockQuote as Ci,CKBox as Ti,Heading as xi,Image as Si,ImageCaption as Ai,ImageStyle as Ei,ImageToolbar as Li,ImageUpload as Bi,PictureEditing as _i,Indent as Pi,IndentBlock as Mi,Link as Fi,List as Ui,MediaEmbed as Di,Paragraph as Oi,PasteFromOffice as Ri,Table as qi,TableToolbar as Hi,TextTransformation as Wi,CloudServices as Ni}from"ckeditor5";r();import{ClassicEditor as Qi,Essentials as ji,Autoformat as Ji,Bold as Gi,Italic as $i,BlockQuote as Zi,CKBox as Xi,Heading as Yi,Image as er,ImageCaption as tr,ImageStyle as or,ImageToolbar as ir,ImageUpload as rr,PictureEditing as nr,Indent as ar,IndentBlock as lr,Link as sr,List as dr,MediaEmbed as cr,Paragraph as mr,PasteFromOffice as ur,Table as pr,TableToolbar as gr,TextTransformation as hr,CloudServices as fr,AutoImage as br,ImageInsert as yr,Bookmark as kr}from"ckeditor5";r();import{DecoupledEditor as Cr,Essentials as Tr,Alignment as xr,FontSize as Sr,FontFamily as Ar,FontColor as Er,FontBackgroundColor as Lr,Autoformat as Br,Bold as _r,Italic as Pr,Strikethrough as Mr,Underline as Fr,BlockQuote as Ur,CKBox as Dr,Heading as Or,Image as Rr,ImageCaption as qr,ImageResize as Hr,ImageStyle as Wr,ImageToolbar as Nr,ImageUpload as zr,PictureEditing as Vr,Indent as Kr,IndentBlock as Qr,Link as jr,List as Jr,ListProperties as Gr,MediaEmbed as $r,Paragraph as Zr,PasteFromOffice as Xr,Table as Yr,TableToolbar as en,TextTransformation as tn,CloudServices as on}from"ckeditor5";r();import{InlineEditor as ln,Essentials as sn,Autoformat as dn,Bold as cn,Italic as mn,BlockQuote as un,CKBox as pn,Heading as gn,Image as hn,ImageCaption as fn,ImageStyle as bn,ImageToolbar as yn,ImageUpload as kn,PictureEditing as wn,Indent as In,IndentBlock as vn,Link as Cn,List as Tn,MediaEmbed as xn,Paragraph as Sn,PasteFromOffice as An,Table as En,TableToolbar as Ln,TextTransformation as Bn,CloudServices as _n}from"ckeditor5";r();import{MultiRootEditor as Un,Essentials as Dn,Autoformat as On,Bold as Rn,Italic as qn,BlockQuote as Hn,CKBox as Wn,Heading as Nn,Image as zn,ImageCaption as Vn,ImageStyle as Kn,ImageToolbar as Qn,ImageUpload as jn,PictureEditing as Jn,Indent as Gn,IndentBlock as $n,Link as Zn,List as Xn,MediaEmbed as Yn,Paragraph as ea,PasteFromOffice as ta,Table as oa,TableToolbar as ia,TextTransformation as ra,CloudServices as na}from"ckeditor5";import{AIChat as Tt,AIEditorIntegration as xt,AIQuickActions as St,AIReviewMode as At,AITranslate as Et,CaseChange as Lt,Comments as Bt,CommentsRepository as _t,ExportPdf as Pt,ExportWord as Mt,Footnotes as Ft,FormatPainter as Ut,ImportWord as Dt,LineHeight as Ot,MergeFields as Rt,MultiLevelList as qt,PasteFromOfficeEnhanced as Ht,SlashCommand as Wt,TableOfContents as Nt,Template as zt,TrackChanges as Vt,TrackChangesData as Kt,TrackChangesPreview as Qt,Users as jt}from"ckeditor5-premium-features";r();r();import{uid as ae}from"ckeditor5";function F(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=ae(),o=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:o+" "+n,id:i}}function U(e,t=F()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}r();import{AICoreError as le}from"ckeditor5-premium-features";function D(e){e.plugins.has("AIErrorSink")&&e.plugins.get("AIErrorSink").on("error",(t,{error:i,component:o,context:n})=>{typeof window.Sentry>"u"||i instanceof le&&(i.type==="user"||i.type==="network")||window.Sentry.captureException(i,{tags:{component:o},extra:n})})}r();function O(e){e.commands.get("aiQuickAction")&&e.commands.get("aiQuickAction").on("execute",(i,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}r();var N=oe(W(),1);function E(e){e.on("ready",()=>{let t=e.plugins.get("AnnotationsUIs"),i=e.commands.get("toggleFullscreen"),o=document.querySelector(".editing-area-scroll-wrapper"),n=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--ck-demo-sidebar-wide-min-width"));if(isNaN(parseFloat(n))){console.error("--ck-demo-sidebar-wide-min-width is required by DynamicAnnotationsModeIntegration");return}let a=new Map([[document.querySelector(".editing-area-scroll-wrapper .ck.editor-content"),["margin-left","margin-right","border-left-width","border-right-width","scrollWidth"]],[document.querySelector(".editing-area-scroll-wrapper .editor-content-wrapper"),["padding-left","padding-right"]]]),d=(0,N.default)(()=>{if(!(i&&i.value))if(o.scrollWidth>o.clientWidth)m("narrowSidebar");else{let s=0;a.forEach((g,p)=>{let h=getComputedStyle(p);for(let b of g)b==="scrollWidth"?s+=p.scrollWidth:s+=parseFloat(h.getPropertyValue(b))||0}),s+n<o.clientWidth&&m("wideSidebar")}},10),u=new ResizeObserver(d);u.observe(o),u.observe(document.querySelector(".editor-content-wrapper")),i&&i.on("execute",()=>{i.value||d()}),d();let c="wideSidebar";function m(s){c!==s&&(t.switchTo(s),c=s)}})}r();function L(){let e=document.querySelectorAll(".live-snippet"),t=[];return e.forEach(i=>{let o=i.querySelector(".live-snippet__container");if(!o)return;let n=document.createElement("div");n.classList.add("live-snippet__loader"),n.innerHTML=`<svg class="spinner" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>`,i.prepend(n),t.push({container:o,spinner:n,markDemoAsLoaded(){n.classList.add("fadeout"),o.classList.add("loaded")}})}),t}r();import{uid as me}from"ckeditor5";function B(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),i=t?decodeURIComponent(t[1]):null;if(!i){i=me();let o=new URL(window.location.href);o.searchParams.set(e,i),window.history.replaceState({},document.title,o.toString())}return i}var Jt=B("channelId"),f=B("userId"),_={name:$t(),id:f,role:"writer"},P=class extends it{static get requires(){return[jt,_t]}init(){let t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");t.addUser(_),t.defineMe(_.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:({threadId:o})=>{let n={"thread-1":{threadId:"thread-1",comments:[{commentId:"comment-1",authorId:f,content:"<p>What are some typical examples of Tier 2 cases?</p>",createdAt:new Date}]},"thread-2":{threadId:"thread-2",comments:[{commentId:"comment-1",authorId:f,content:"<p>Could we add one sentence explaining what qualifies as \u201Chigh-impact\u201D?</p>",createdAt:new Date}]},"thread-3":{threadId:"thread-3",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add percentages for each category?</p>",createdAt:new Date}]},"thread-4":{threadId:"thread-4",comments:[{commentId:"comment-1",authorId:f,content:"<p>Can we add a short explanation here?</p>",createdAt:new Date}]}};return Promise.resolve(n[o])},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Gt=`<h1>Customer Support Metrics Report</h1>

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

<p>Overall support performance remained within expected operational ranges. Most key indicators were stable, with moderate improvements observed in response efficiency. At the same time, the data suggests that further improvements in communication clarity and escalation handling could positively impact customer experience in future reporting periods.</p>`;function Q(e=()=>{}){let t={ui:{viewportOffset:{top:x()}},root:{initialData:Gt,placeholder:"Type or paste your content here!",element:document.querySelector(".editor-content")},plugins:[ue,z,pe,ge,he,fe,be,V,ye,ke,we,Ie,ve,Te,xe,Se,Ae,Ee,Le,Be,_e,Pe,Me,Fe,Ue,De,Oe,Re,qe,He,We,Ne,ze,Ve,Ke,Qe,je,Je,K,Ge,$e,Ze,Xe,Ye,et,tt,ot,rt,nt,at,lt,st,dt,ct,mt,ut,pt,gt,ht,ft,bt,yt,kt,wt,It,vt,Ct,Tt,xt,St,At,Et,Lt,Bt,Pt,Mt,Ft,Ut,Dt,Ot,Rt,qt,Ht,Wt,Nt,zt,Vt,Kt,Qt,E,P],toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","insertMergeField","previewMergeFields","|","toggleAi","aiQuickActions","|","importWord","exportWord","exportPdf","formatPainter","caseChange","findAndReplace","fullscreen","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","removeFormat","|","emoji","specialCharacters","horizontalLine","link","insertFootnote","bookmark","insertImage","insertImageViaUrl","ckbox","insertTable","tableOfContents","insertTemplate","blockQuote","|","alignment","lineHeight","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent"]},balloonToolbar:["comment","|","aiQuickActions","ask-ai","|","bold","italic","|","link","insertImage","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:v,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Jt},cloudServices:{...k,tokenUrl:U(k.tokenUrl,_)},ai:{container:{type:"sidebar",element:document.querySelector(".demo-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0},sources:[{id:"customer_support_metrics",label:"Customer Support Metrics",useDefaultFiltering:!0,getResources:async()=>{let o=[{id:"customer_support_metrics_source",type:"file",label:"Customer Support Metrics - Source Data"}];return Promise.resolve(o)},getData:async()=>{let a=await(await fetch("../../assets/pdf/Customer_Support_Metrics-Source_Data.pdf")).blob(),d=new File([a],"Customer_Support_Metrics-Source_Data.pdf",{type:"application/pdf"});return Promise.resolve(d)}}]}}},sidebar:{container:document.querySelector(".sidebar-container")},comments:{editorConfig:{extraPlugins:[V,K,z]}},trackChanges:{showAISource:"pill"},emoji:{skinTone:"default",definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",w("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},template:{definitions:[{title:"Introduction",description:"Simple introduction to an article",icon:`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,data:"<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"}]}};e(t);let i=L()[0];return Ce.create(t).then(o=>(window.editor=o,document.querySelector(".menubar-container").appendChild(o.ui.view.menuBarView.element),document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),D(o),i.markDemoAsLoaded(),O(o),o)).catch(o=>{console.error(o)})}function $t(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${i} ${o}`}Q(e=>{let t=e.toolbar.items.indexOf("aiQuickActions"),i=e.balloonToolbar.indexOf("aiQuickActions"),o=["improve-writing","translate"];e.toolbar.items.splice(t+1,0,...o),e.balloonToolbar.splice(i+1,0,...o);let n=["AIQuickActions","AIEditorIntegration"];e.plugins=e.plugins.filter(a=>a.pluginName&&a.pluginName.startsWith("AI")?n.includes(a.pluginName):!0),e.toolbar.items=e.toolbar.items.filter(a=>a!=="toggleAi"),e.balloonToolbar=e.balloonToolbar.filter(a=>a!=="ask-ai"),e.ai.container.type="custom"}).then(e=>{window.editor=e,C({target:T(e.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu",editor:e,tippyOptions:{placement:"bottom-start"}})});
