var n="https://api.ckbox.io/token/demo";import{Plugin as We}from"@ckeditor/ckeditor5-core";import{Essentials as Je}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Xe}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Ze}from"@ckeditor/ckeditor5-block-quote";import{Bold as et,Italic as tt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as it}from"@ckeditor/ckeditor5-heading";import{Image as rt,ImageCaption as nt,ImageStyle as lt,ImageToolbar as st}from"@ckeditor/ckeditor5-image";import{Indent as ct}from"@ckeditor/ckeditor5-indent";import{Link as pt}from"@ckeditor/ckeditor5-link";import{List as gt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ht}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as yt}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as It}from"@ckeditor/ckeditor5-table";function l({id:e,target:o,text:i,editor:a,tippyOptions:c}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:i});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:i});return}let m=window.umberto.Tooltip.create({id:e,text:i,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...c?.placement&&{position:c.placement}});for(let p of a.editing.view.document.roots)p.once("change:isFocused",(He,Me,u)=>{u&&m.destroy()});return m}function s(e,o){let i=e.items,a;return typeof o=="function"?a=i.find(o):a=i.get(o),a?a.element:void 0}function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Pt,Essentials as wt,Autoformat as Bt,BlockToolbar as Lt,Bold as At,Italic as _t,BlockQuote as Ot,CKBox as Rt,Heading as Ft,Image as Ut,ImageCaption as Dt,ImageStyle as qt,ImageToolbar as Ht,ImageUpload as Mt,PictureEditing as zt,Indent as Kt,IndentBlock as Nt,Link as Qt,List as Vt,MediaEmbed as Wt,Paragraph as Gt,PasteFromOffice as Jt,Table as jt,TableToolbar as Xt,TextTransformation as $t,CloudServices as Zt}from"ckeditor5";import{BalloonEditor as oo,Essentials as io,Autoformat as ao,Bold as ro,Italic as no,BlockQuote as lo,CKBox as so,Heading as co,Image as mo,ImageCaption as po,ImageStyle as uo,ImageToolbar as go,ImageUpload as fo,PictureEditing as ho,Indent as bo,IndentBlock as yo,Link as To,List as vo,MediaEmbed as Io,Paragraph as So,PasteFromOffice as Co,Table as ko,TableToolbar as xo,TextTransformation as Eo,CloudServices as Po}from"ckeditor5";import{ClassicEditor as Ao,Essentials as _o,Autoformat as Oo,Bold as Ro,Italic as Fo,BlockQuote as Uo,CKBox as Do,Heading as qo,Image as Ho,ImageCaption as Mo,ImageStyle as zo,ImageToolbar as Ko,ImageUpload as No,PictureEditing as Qo,Indent as Vo,IndentBlock as Wo,Link as Go,List as Jo,MediaEmbed as jo,Paragraph as Xo,PasteFromOffice as $o,Table as Zo,TableToolbar as Yo,TextTransformation as ei,CloudServices as ti,AutoImage as oi,ImageInsert as ii,Bookmark as ai}from"ckeditor5";import{DecoupledEditor as si,Essentials as di,Alignment as ci,FontSize as mi,FontFamily as pi,FontColor as ui,FontBackgroundColor as gi,Autoformat as fi,Bold as hi,Italic as bi,Strikethrough as yi,Underline as Ti,BlockQuote as vi,CKBox as Ii,Heading as Si,Image as Ci,ImageCaption as ki,ImageResize as xi,ImageStyle as Ei,ImageToolbar as Pi,ImageUpload as wi,PictureEditing as Bi,Indent as Li,IndentBlock as Ai,Link as _i,List as Oi,ListProperties as Ri,MediaEmbed as Fi,Paragraph as Ui,PasteFromOffice as Di,Table as qi,TableToolbar as Hi,TextTransformation as Mi,CloudServices as zi}from"ckeditor5";import{InlineEditor as Vi,Essentials as Wi,Autoformat as Gi,Bold as Ji,Italic as ji,BlockQuote as Xi,CKBox as $i,Heading as Zi,Image as Yi,ImageCaption as ea,ImageStyle as ta,ImageToolbar as oa,ImageUpload as ia,PictureEditing as aa,Indent as ra,IndentBlock as na,Link as la,List as sa,MediaEmbed as da,Paragraph as ca,PasteFromOffice as ma,Table as pa,TableToolbar as ua,TextTransformation as ga,CloudServices as fa}from"ckeditor5";import{MultiRootEditor as Ta,Essentials as va,Autoformat as Ia,Bold as Sa,Italic as Ca,BlockQuote as ka,CKBox as xa,Heading as Ea,Image as Pa,ImageCaption as wa,ImageStyle as Ba,ImageToolbar as La,ImageUpload as Aa,PictureEditing as _a,Indent as Oa,IndentBlock as Ra,Link as Fa,List as Ua,MediaEmbed as Da,Paragraph as qa,PasteFromOffice as Ha,Table as Ma,TableToolbar as za,TextTransformation as Ka,CloudServices as Na}from"ckeditor5";import{DecoupledEditor as g,Alignment as f,Autoformat as h,BlockQuote as b,Bold as y,Code as T,Italic as v,Strikethrough as I,Subscript as S,Superscript as C,Underline as k,Bookmark as x,CKBox as E,CKBoxImageEdit as P,CloudServices as w,CodeBlock as B,Essentials as L,FindAndReplace as A,Font as _,GeneralHtmlSupport as O,Heading as R,Highlight as F,HorizontalLine as U,HtmlEmbed as D,MediaEmbed as q,Image as H,ImageCaption as M,ImageInsert as z,ImageResize as K,ImageStyle as N,ImageToolbar as Q,ImageUpload as V,AutoImage as W,PictureEditing as G,Indent as J,IndentBlock as j,Link as X,LinkImage as $,AutoLink as Z,List as Y,ListProperties as ee,Mention as te,PageBreak as oe,Paragraph as ie,PasteFromOffice as ae,RemoveFormat as re,SpecialCharacters as ne,SpecialCharactersEssentials as le,Style as se,Table as de,TableCaption as ce,TableCellProperties as me,TableColumnResize as pe,TableProperties as ue,TableToolbar as ge,TextTransformation as fe,Fullscreen as he}from"ckeditor5";import{ExportPdf as be,ExportWord as ye,FormatPainter as Te,ImportWord as ve,MultiLevelList as Ie,Pagination as Se,PasteFromOfficeEnhanced as Ce,SlashCommand as ke,TableOfContents as xe,DocumentOutline as Ee,Template as Pe,Comments as we,TrackChanges as Be,TrackChangesPreview as Le,RevisionHistory as Ae,PresenceList as _e,RealTimeCollaborativeRevisionHistory as Oe,RealTimeCollaborativeTrackChanges as Re,RealTimeCollaborativeEditing as Fe,RealTimeCollaborativeComments as Ue}from"ckeditor5-premium-features";var r=class extends g{static builtinPlugins=[h,b,y,x,R,H,M,Te,he,N,Q,J,v,X,Y,q,ie,de,ge,f,W,Z,E,P,w,T,B,L,be,ye,ve,A,_,F,U,D,z,K,V,j,O,$,ee,Ie,te,oe,Se,ae,Ce,G,re,ke,ne,le,se,I,S,C,ce,me,pe,ue,xe,Pe,fe,k,Ee,_e,we,Be,Le,Ae,Ue,Fe,Re,Oe]};var De={tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",webSocketUrl:"33333.cke-cs.com/ws"},qe=`
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
`;r.create({removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],ui:{viewportOffset:{top:d()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},root:{initialData:qe,placeholder:"Type or paste your content here!",element:document.querySelector("#pageless_editor")},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},cloudServices:De,fullscreen:{onEnterCallback:e=>e.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(e=>(document.querySelector("#pageless_toolbar-container").appendChild(e.ui.view.toolbar.element),window.editorPageless=e,window.preventPasteFromOfficeNotification=!0,e)).then(e=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),l({target:s(e.ui.view.toolbar,o=>o.label&&o.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e)});
