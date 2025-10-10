var n="https://api.ckbox.io/token/demo";import{Plugin as Ve}from"@ckeditor/ckeditor5-core";import{Essentials as Ge}from"@ckeditor/ckeditor5-essentials";import{Autoformat as je}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as $e}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ye,Italic as et}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ot}from"@ckeditor/ckeditor5-heading";import{Image as it,ImageCaption as rt,ImageStyle as nt,ImageToolbar as lt}from"@ckeditor/ckeditor5-image";import{Indent as dt}from"@ckeditor/ckeditor5-indent";import{Link as ct}from"@ckeditor/ckeditor5-link";import{List as ut}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ft}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as bt}from"@ckeditor/ckeditor5-paragraph";import{Table as Tt,TableToolbar as vt}from"@ckeditor/ckeditor5-table";function l({target:e,text:o,editor:i,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:o});return}let m=window.umberto.Tooltip.create({text:o,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...a?.placement&&{position:a.placement}});for(let c of i.editing.view.document.roots)c.once("change:isFocused",(qe,Ke,p)=>{p&&m.destroy()});return m}function s(e,o){let i=e.items,a;return typeof o=="function"?a=i.find(o):a=i.get(o),a?a.element:void 0}function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Et,Essentials as Pt,CKFinderUploadAdapter as wt,Autoformat as Lt,BlockToolbar as Bt,Bold as At,Italic as _t,BlockQuote as Ft,CKBox as Ot,CKFinder as Rt,EasyImage as Ut,Heading as Dt,Image as qt,ImageCaption as Kt,ImageStyle as Ht,ImageToolbar as Mt,ImageUpload as zt,PictureEditing as Nt,Indent as Qt,Link as Vt,List as Wt,MediaEmbed as Gt,Paragraph as Jt,PasteFromOffice as jt,Table as Xt,TableToolbar as $t,TextTransformation as Zt,CloudServices as Yt}from"ckeditor5";import{BalloonEditor as ao,Essentials as io,CKFinderUploadAdapter as ro,Autoformat as no,Bold as lo,Italic as so,BlockQuote as mo,CKBox as co,CKFinder as po,EasyImage as uo,Heading as go,Image as fo,ImageCaption as ho,ImageStyle as bo,ImageToolbar as yo,ImageUpload as To,PictureEditing as vo,Indent as Io,Link as Co,List as So,MediaEmbed as ko,Paragraph as xo,PasteFromOffice as Eo,Table as Po,TableToolbar as wo,TextTransformation as Lo,CloudServices as Bo}from"ckeditor5";import{ClassicEditor as Oo,Essentials as Ro,Autoformat as Uo,Bold as Do,Italic as qo,BlockQuote as Ko,CKBox as Ho,EasyImage as Mo,Heading as zo,Image as No,ImageCaption as Qo,ImageStyle as Vo,ImageToolbar as Wo,ImageUpload as Go,PictureEditing as Jo,Indent as jo,Link as Xo,List as $o,MediaEmbed as Zo,Paragraph as Yo,PasteFromOffice as ea,Table as ta,TableToolbar as oa,TextTransformation as aa,CloudServices as ia,AutoImage as ra,ImageInsert as na,Bookmark as la}from"ckeditor5";import{DecoupledEditor as ca,Essentials as pa,Alignment as ua,FontSize as ga,FontFamily as fa,FontColor as ha,FontBackgroundColor as ba,Autoformat as ya,Bold as Ta,Italic as va,Strikethrough as Ia,Underline as Ca,BlockQuote as Sa,CKBox as ka,EasyImage as xa,Heading as Ea,Image as Pa,ImageCaption as wa,ImageResize as La,ImageStyle as Ba,ImageToolbar as Aa,ImageUpload as _a,PictureEditing as Fa,Indent as Oa,IndentBlock as Ra,Link as Ua,List as Da,ListProperties as qa,MediaEmbed as Ka,Paragraph as Ha,PasteFromOffice as Ma,Table as za,TableToolbar as Na,TextTransformation as Qa,CloudServices as Va}from"ckeditor5";import{InlineEditor as ja,Essentials as Xa,CKFinderUploadAdapter as $a,Autoformat as Za,Bold as Ya,Italic as ei,BlockQuote as ti,CKBox as oi,CKFinder as ai,EasyImage as ii,Heading as ri,Image as ni,ImageCaption as li,ImageStyle as si,ImageToolbar as di,ImageUpload as mi,PictureEditing as ci,Indent as pi,Link as ui,List as gi,MediaEmbed as fi,Paragraph as hi,PasteFromOffice as bi,Table as yi,TableToolbar as Ti,TextTransformation as vi,CloudServices as Ii}from"ckeditor5";import{MultiRootEditor as xi,Essentials as Ei,CKFinderUploadAdapter as Pi,Autoformat as wi,Bold as Li,Italic as Bi,BlockQuote as Ai,CKBox as _i,CKFinder as Fi,EasyImage as Oi,Heading as Ri,Image as Ui,ImageCaption as Di,ImageStyle as qi,ImageToolbar as Ki,ImageUpload as Hi,PictureEditing as Mi,Indent as zi,Link as Ni,List as Qi,MediaEmbed as Vi,Paragraph as Wi,PasteFromOffice as Gi,Table as Ji,TableToolbar as ji,TextTransformation as Xi,CloudServices as $i}from"ckeditor5";import{DecoupledEditor as u,Alignment as g,Autoformat as f,BlockQuote as h,Bold as b,Code as y,Italic as T,Strikethrough as v,Subscript as I,Superscript as C,Underline as S,Bookmark as k,CKBox as x,CKBoxImageEdit as E,CloudServices as P,CodeBlock as w,Essentials as L,FindAndReplace as B,Font as A,GeneralHtmlSupport as _,Heading as F,Highlight as O,HorizontalLine as R,HtmlEmbed as U,MediaEmbed as D,Image as q,ImageCaption as K,ImageInsert as H,ImageResize as M,ImageStyle as z,ImageToolbar as N,ImageUpload as Q,AutoImage as V,PictureEditing as W,Indent as G,IndentBlock as J,Link as j,LinkImage as X,AutoLink as $,List as Z,ListProperties as Y,Mention as ee,PageBreak as te,Paragraph as oe,PasteFromOffice as ae,RemoveFormat as ie,SpecialCharacters as re,SpecialCharactersEssentials as ne,Style as le,Table as se,TableCaption as de,TableCellProperties as me,TableColumnResize as ce,TableProperties as pe,TableToolbar as ue,TextTransformation as ge,Fullscreen as fe}from"ckeditor5";import{ExportPdf as he,ExportWord as be,FormatPainter as ye,ImportWord as Te,MultiLevelList as ve,Pagination as Ie,PasteFromOfficeEnhanced as Ce,SlashCommand as Se,TableOfContents as ke,DocumentOutline as xe,Template as Ee,Comments as Pe,TrackChanges as we,TrackChangesPreview as Le,RevisionHistory as Be,PresenceList as Ae,RealTimeCollaborativeRevisionHistory as _e,RealTimeCollaborativeTrackChanges as Fe,RealTimeCollaborativeEditing as Oe,RealTimeCollaborativeComments as Re}from"ckeditor5-premium-features";var r=class extends u{static builtinPlugins=[f,h,b,k,F,q,K,ye,fe,z,N,G,T,j,Z,D,oe,se,ue,g,V,$,x,E,P,y,w,L,he,be,Te,B,A,O,R,U,H,M,Q,J,_,X,Y,ve,ee,te,Ie,ae,Ce,W,ie,Se,re,ne,le,v,I,C,de,me,ce,pe,ke,Ee,ge,S,xe,Ae,Pe,we,Le,Be,Re,Oe,Fe,_e]};var Ue={tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/",webSocketUrl:"33333.cke-cs.com/ws"},De=`
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
`;r.create(document.querySelector("#pageless_editor"),{removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],initialData:De,ui:{viewportOffset:{top:d()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},placeholder:"Type or paste your content here!",table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},cloudServices:Ue,fullscreen:{onEnterCallback:e=>e.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(e=>(document.querySelector("#pageless_toolbar-container").appendChild(e.ui.view.toolbar.element),window.editorPageless=e,window.preventPasteFromOfficeNotification=!0,e)).then(e=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),l({target:s(e.ui.view.toolbar,o=>o.label&&o.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e)});
