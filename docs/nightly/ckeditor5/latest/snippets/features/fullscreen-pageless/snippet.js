var d="https://api.ckbox.io/token/demo";import{Plugin as at}from"@ckeditor/ckeditor5-core";import{Essentials as rt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as lt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as dt}from"@ckeditor/ckeditor5-block-quote";import{Bold as mt,Italic as pt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ft}from"@ckeditor/ckeditor5-heading";import{Image as ht,ImageCaption as bt,ImageStyle as yt,ImageToolbar as Tt}from"@ckeditor/ckeditor5-image";import{Indent as St}from"@ckeditor/ckeditor5-indent";import{Link as It}from"@ckeditor/ckeditor5-link";import{List as xt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Et}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Lt}from"@ckeditor/ckeditor5-paragraph";import{Table as At,TableToolbar as Rt}from"@ckeditor/ckeditor5-table";function c({id:e,target:t,text:o,editor:a,tippyOptions:r}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let n=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...r?.placement&&{position:r.placement}});for(let T of a.editing.view.document.roots)T.once("change:isFocused",(Xe,Je,v)=>{v&&n.destroy()});return n}function m(e,t){let o=e.items,a;return typeof t=="function"?a=o.find(t):a=o.get(t),a?a.element:void 0}function p(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function u(e,t){customElements.get(e)||customElements.define(e,t)}function f(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function l(e,t){return Object.assign(document.createElement(e),t)}function b(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function g(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var h=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=f().then(()=>S(this.shadowRoot,t))}};u("snippet-shadow-root",h);async function S(e,t){let o=C(t),a=l("style",{textContent:":host { display: block; }"}),r=Array.from(document.styleSheets).filter(I).map(k);e.prepend(a,...r),await Promise.all(r.map(async n=>{await b(n),y(n.sheet,o)}))}function C(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function I(e){return e.ownerNode instanceof HTMLElement&&g(e).length>0}function k(e){let t=e.href?l("link",{rel:"stylesheet",href:e.href}):l("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function y(e,t){let o=g(e);for(let a=o.length-1;a>=0;a--){let r=o[a];r instanceof CSSImportRule&&r.layerName===null?y(r.styleSheet,t):x(r,t)||e.deleteRule(a)}}function x(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Nt,Essentials as zt,Autoformat as Kt,BlockToolbar as Qt,Bold as Vt,Italic as Wt,BlockQuote as Gt,CKBox as jt,Heading as $t,Image as Xt,ImageCaption as Jt,ImageStyle as Yt,ImageToolbar as Zt,ImageUpload as eo,PictureEditing as to,Indent as oo,IndentBlock as ao,Link as io,List as ro,MediaEmbed as no,Paragraph as lo,PasteFromOffice as so,Table as co,TableToolbar as mo,TextTransformation as po,CloudServices as uo}from"ckeditor5";import{BalloonEditor as bo,Essentials as yo,Autoformat as To,Bold as vo,Italic as So,BlockQuote as Co,CKBox as Io,Heading as ko,Image as xo,ImageCaption as wo,ImageStyle as Eo,ImageToolbar as Po,ImageUpload as Lo,PictureEditing as Bo,Indent as Ao,IndentBlock as Ro,Link as _o,List as Oo,MediaEmbed as Fo,Paragraph as Uo,PasteFromOffice as Mo,Table as Do,TableToolbar as qo,TextTransformation as Ho,CloudServices as No}from"ckeditor5";import{ClassicEditor as Vo,Essentials as Wo,Autoformat as Go,Bold as jo,Italic as $o,BlockQuote as Xo,CKBox as Jo,Heading as Yo,Image as Zo,ImageCaption as ea,ImageStyle as ta,ImageToolbar as oa,ImageUpload as aa,PictureEditing as ia,Indent as ra,IndentBlock as na,Link as la,List as sa,MediaEmbed as da,Paragraph as ca,PasteFromOffice as ma,Table as pa,TableToolbar as ua,TextTransformation as fa,CloudServices as ga,AutoImage as ha,ImageInsert as ba,Bookmark as ya}from"ckeditor5";import{DecoupledEditor as Ca,Essentials as Ia,Alignment as ka,FontSize as xa,FontFamily as wa,FontColor as Ea,FontBackgroundColor as Pa,Autoformat as La,Bold as Ba,Italic as Aa,Strikethrough as Ra,Underline as _a,BlockQuote as Oa,CKBox as Fa,Heading as Ua,Image as Ma,ImageCaption as Da,ImageResize as qa,ImageStyle as Ha,ImageToolbar as Na,ImageUpload as za,PictureEditing as Ka,Indent as Qa,IndentBlock as Va,Link as Wa,List as Ga,ListProperties as ja,MediaEmbed as $a,Paragraph as Xa,PasteFromOffice as Ja,Table as Ya,TableToolbar as Za,TextTransformation as ei,CloudServices as ti}from"ckeditor5";import{InlineEditor as ri,Essentials as ni,Autoformat as li,Bold as si,Italic as di,BlockQuote as ci,CKBox as mi,Heading as pi,Image as ui,ImageCaption as fi,ImageStyle as gi,ImageToolbar as hi,ImageUpload as bi,PictureEditing as yi,Indent as Ti,IndentBlock as vi,Link as Si,List as Ci,MediaEmbed as Ii,Paragraph as ki,PasteFromOffice as xi,Table as wi,TableToolbar as Ei,TextTransformation as Pi,CloudServices as Li}from"ckeditor5";import{MultiRootEditor as _i,Essentials as Oi,Autoformat as Fi,Bold as Ui,Italic as Mi,BlockQuote as Di,CKBox as qi,Heading as Hi,Image as Ni,ImageCaption as zi,ImageStyle as Ki,ImageToolbar as Qi,ImageUpload as Vi,PictureEditing as Wi,Indent as Gi,IndentBlock as ji,Link as $i,List as Xi,MediaEmbed as Ji,Paragraph as Yi,PasteFromOffice as Zi,Table as er,TableToolbar as tr,TextTransformation as or,CloudServices as ar}from"ckeditor5";import{DecoupledEditor as w,Alignment as E,Autoformat as P,BlockQuote as L,Bold as B,Code as A,Italic as R,Strikethrough as _,Subscript as O,Superscript as F,Underline as U,Bookmark as M,CKBox as D,CKBoxImageEdit as q,CloudServices as H,CodeBlock as N,Essentials as z,FindAndReplace as K,Font as Q,GeneralHtmlSupport as V,Heading as W,Highlight as G,HorizontalLine as j,HtmlEmbed as $,MediaEmbed as X,Image as J,ImageCaption as Y,ImageInsert as Z,ImageResize as ee,ImageStyle as te,ImageToolbar as oe,ImageUpload as ae,AutoImage as ie,PictureEditing as re,Indent as ne,IndentBlock as le,Link as se,LinkImage as de,AutoLink as ce,List as me,ListProperties as pe,Mention as ue,PageBreak as fe,Paragraph as ge,PasteFromOffice as he,RemoveFormat as be,SpecialCharacters as ye,SpecialCharactersEssentials as Te,Style as ve,Table as Se,TableCaption as Ce,TableCellProperties as Ie,TableColumnResize as ke,TableProperties as xe,TableToolbar as we,TextTransformation as Ee,Fullscreen as Pe}from"ckeditor5";import{ExportPdf as Le,ExportWord as Be,FormatPainter as Ae,ImportWord as Re,MultiLevelList as _e,Pagination as Oe,PasteFromOfficeEnhanced as Fe,SlashCommand as Ue,TableOfContents as Me,DocumentOutline as De,Template as qe,Comments as He,TrackChanges as Ne,TrackChangesPreview as ze,RevisionHistory as Ke,PresenceList as Qe,RealTimeCollaborativeRevisionHistory as Ve,RealTimeCollaborativeTrackChanges as We,RealTimeCollaborativeEditing as Ge,RealTimeCollaborativeComments as je}from"ckeditor5-premium-features";var s=class extends w{static builtinPlugins=[P,L,B,M,W,J,Y,Ae,Pe,te,oe,ne,R,se,me,X,ge,Se,we,E,ie,ce,D,q,H,A,N,z,Le,Be,Re,K,Q,G,j,$,Z,ee,ae,le,V,de,pe,_e,ue,fe,Oe,he,Fe,re,be,Ue,ye,Te,ve,_,O,F,Ce,Ie,ke,xe,Me,qe,Ee,U,De,Qe,He,Ne,ze,Ke,je,Ge,We,Ve]};var $e=`
	<h2 class="document-title">SERVICES AGREEMENT</h2>
	<p>
		This Contract for Services Agreement (the \u201C<i>Agreement</i>\u201D) is made and entered into as of [date] (the
		\u201C<i>Effective Date</i>\u201D), by and between [Client Name], a [state] corporation with its principal place of business
		at [address] (the \u201C<i>Client</i>\u201D), and [Service Provider Name], a [state] corporation with its principal place of
		business at [address] (the \u201C<i>Service Provider</i>\u201D).
	</p>
	<h3>Scope of Services</h3>
	<p>
		The Service Provider shall provide the following services to the CLIENT (the \u201C<i>Services</i>\u201D):
	</p>
	<p>
		[Insert description of services]
	</p>
	<h3>Term</h3>
	<p>
		This Agreement shall commence on the Effective Date and shall continue until [Insert date], unless earlier
		terminated as provided herein (the \u201C<i>Term</i>\u201D).
	</p>
	<h3>Compensation</h3>
	<p>
		In consideration of the Services to be provided by the Service Provider, the Client shall pay the Service Provider
		the fees set forth in <a href="http://example.com">Exhibit A</a> attached hereto and incorporated herein by
		reference (the \u201C<i>Fees</i>\u201D).
	</p>
	<p>
		The Client shall pay the Fees within [Insert number] days of receipt of an invoice from the Service Provider.
	</p>
	<p>
		If any Fees are not paid when due, the Service Provider may, in its sole discretion, suspend or terminate the
		Services.
	</p>
	<h4 class="document-subtitle">
		Late Fees
	</h4>
	<p>
		If any payment is not received by the Service Provider within [Insert number] days of its due date, the Client shall
		pay a late fee equal to [Insert percentage] of the unpaid amount. The following table sets forth the specific late
		fee percentages that will apply based on the number of days the payment is past due:
	</p>
	<figure class="table">
		<table>
			<thead>
				<tr>
					<th>Days Past Due</th>
					<th>Late Fee Percentage</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1-30 days</td>
					<td>[Insert percentage]</td>
				</tr>
				<tr>
					<td>31-60 days</td>
					<td>[Insert percentage]</td>
				</tr>
				<tr>
					<td>61-90 days</td>
					<td>[Insert percentage]</td>
				</tr>
				<tr>
					<td>Over 90 days</td>
					<td>[Insert percentage]</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<p>
		The Client agrees that the late fees set forth in this table are reasonable and necessary to compensate the Service
		Provider for the costs and expenses it will incur as a result of any late payments. The Service Provider reserves
		the right to waive or reduce any late fees in its sole discretion.
	</p>
	<h3>Termination</h3>
	<p>
		This Agreement may be terminated:&nbsp;
	</p>
	<ol style="list-style-type:lower-latin;">
		<li>
			<p>By either party upon [Insert number] days\u2019 written notice to the other party;</p>
		</li>
		<li>
			<p>By the Client upon the occurrence of a material breach by the Service Provider of this Agreement that is not
				cured within [Insert number] days after written notice thereof is given to the Service Provider; or</p>
		</li>
		<li>
			<p>By the Service Provider upon the occurrence of a material breach by the Client of this Agreement that is not
				cured within [Insert number] days after written notice thereof is given to the Client.</p>
		</li>
	</ol>
	<h3 class="document-subtitle">Effect of Termination</h3>
	<p>
		Upon termination of this Agreement for any reason, the Service Provider shall immediately cease providing the
		Services, and the Client shall pay the Service Provider for all Services performed prior to the effective date of
		termination.
	</p>
	<h3>Confidentiality</h2>
	<p>
		The Service Provider agrees to keep confidential all information and materials disclosed by the Client to the
		Service Provider in connection with the Services (the \u201C<i>Confidential Information</i>\u201D).
	</p>
	<p>
		The Service Provider shall not use the Confidential Information for any purpose other than to perform the
		Services.
	</p>
	<p>
		The Service Provider shall take reasonable measures to protect the confidentiality of the Confidential
		Information.
	</p>
	<h3>Exceptions</h3>
	<p>
		The obligations of confidentiality set forth in this Agreement shall not apply to any Confidential Information
		that:
	</p>
	<ol style="list-style-type:lower-latin;">
		<li>
			<p>is already known to the Service Provider prior to its disclosure by the Client;</p>
		</li>
		<li>
			<p>is or becomes publicly known through no fault of the Service Provider; or</p>
		</li>
		<li>
			<p>is obtained by the Service Provider from a third party without a breach of any
				obligation of confidentiality.</p>
		</li>
	</ol>
	<h3>Representations and Warranties</h3>
	<p>
		The Service Provider represents and warrants that it has the necessary expertise, qualifications, and experience
		to perform the Services.
	</p>
	<p>
		The Client represents and warrants that it has the legal right to engage the Service Provider to perform the
		Services.
	</p>
	<h3 class="document-subtitle">Disclaimer of Other Warranties</h3>
	<p>
		Except for the express warranties set forth in this Agreement, the Service Provider makes no other warranties,
		express or implied, with respect to the Services, including, without limitation, any implied warranties of
		merchantability or fitness for a particular purpose.
	</p>
`;s.create({removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],ui:{viewportOffset:{top:p()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},root:{initialData:$e,placeholder:"Type or paste your content here!",element:document.querySelector("#pageless_editor")},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},ckbox:{tokenUrl:d,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},fullscreen:{onEnterCallback:e=>e.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(e=>(document.querySelector("#pageless_toolbar-container").appendChild(e.ui.view.toolbar.element),window.editorPageless=e,window.preventPasteFromOfficeNotification=!0,e)).then(e=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),c({target:m(e.ui.view.toolbar,t=>t.label&&t.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e)});
