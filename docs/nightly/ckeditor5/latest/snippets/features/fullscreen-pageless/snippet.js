var n="https://api.ckbox.io/token/demo";import{Plugin as Ve}from"@ckeditor/ckeditor5-core";import{Essentials as Ge}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Xe}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Je}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ze,Italic as et}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ot}from"@ckeditor/ckeditor5-heading";import{Image as at,ImageCaption as rt,ImageStyle as nt,ImageToolbar as lt}from"@ckeditor/ckeditor5-image";import{Indent as dt}from"@ckeditor/ckeditor5-indent";import{Link as ct}from"@ckeditor/ckeditor5-link";import{List as ut}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ft}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as bt}from"@ckeditor/ckeditor5-paragraph";import{Table as Tt,TableToolbar as vt}from"@ckeditor/ckeditor5-table";function l({id:e,target:o,text:i,editor:a,tippyOptions:m}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:i});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:i});return}let c=window.umberto.Tooltip.create({id:e,text:i,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...m?.placement&&{position:m.placement}});for(let p of a.editing.view.document.roots)p.once("change:isFocused",(qe,Me,u)=>{u&&c.destroy()});return c}function s(e,o){let i=e.items,a;return typeof o=="function"?a=i.find(o):a=i.get(o),a?a.element:void 0}function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Et,Essentials as Pt,Autoformat as wt,BlockToolbar as Lt,Bold as Bt,Italic as At,BlockQuote as _t,CKBox as Ot,Heading as Ft,Image as Rt,ImageCaption as Ut,ImageStyle as Dt,ImageToolbar as qt,ImageUpload as Mt,PictureEditing as Ht,Indent as zt,IndentBlock as Kt,Link as Qt,List as Nt,MediaEmbed as Vt,Paragraph as Wt,PasteFromOffice as Gt,Table as jt,TableToolbar as Xt,TextTransformation as $t,CloudServices as Jt}from"ckeditor5";import{BalloonEditor as to,Essentials as oo,Autoformat as io,Bold as ao,Italic as ro,BlockQuote as no,CKBox as lo,Heading as so,Image as mo,ImageCaption as co,ImageStyle as po,ImageToolbar as uo,ImageUpload as go,PictureEditing as fo,Indent as ho,IndentBlock as bo,Link as yo,List as To,MediaEmbed as vo,Paragraph as Io,PasteFromOffice as So,Table as Co,TableToolbar as ko,TextTransformation as xo,CloudServices as Eo}from"ckeditor5";import{ClassicEditor as Bo,Essentials as Ao,Autoformat as _o,Bold as Oo,Italic as Fo,BlockQuote as Ro,CKBox as Uo,Heading as Do,Image as qo,ImageCaption as Mo,ImageStyle as Ho,ImageToolbar as zo,ImageUpload as Ko,PictureEditing as Qo,Indent as No,IndentBlock as Vo,Link as Wo,List as Go,MediaEmbed as jo,Paragraph as Xo,PasteFromOffice as $o,Table as Jo,TableToolbar as Yo,TextTransformation as Zo,CloudServices as ei,AutoImage as ti,ImageInsert as oi,Bookmark as ii}from"ckeditor5";import{DecoupledEditor as li,Essentials as si,Alignment as di,FontSize as mi,FontFamily as ci,FontColor as pi,FontBackgroundColor as ui,Autoformat as gi,Bold as fi,Italic as hi,Strikethrough as bi,Underline as yi,BlockQuote as Ti,CKBox as vi,Heading as Ii,Image as Si,ImageCaption as Ci,ImageResize as ki,ImageStyle as xi,ImageToolbar as Ei,ImageUpload as Pi,PictureEditing as wi,Indent as Li,IndentBlock as Bi,Link as Ai,List as _i,ListProperties as Oi,MediaEmbed as Fi,Paragraph as Ri,PasteFromOffice as Ui,Table as Di,TableToolbar as qi,TextTransformation as Mi,CloudServices as Hi}from"ckeditor5";import{InlineEditor as Ni,Essentials as Vi,Autoformat as Wi,Bold as Gi,Italic as ji,BlockQuote as Xi,CKBox as $i,Heading as Ji,Image as Yi,ImageCaption as Zi,ImageStyle as ea,ImageToolbar as ta,ImageUpload as oa,PictureEditing as ia,Indent as aa,IndentBlock as ra,Link as na,List as la,MediaEmbed as sa,Paragraph as da,PasteFromOffice as ma,Table as ca,TableToolbar as pa,TextTransformation as ua,CloudServices as ga}from"ckeditor5";import{MultiRootEditor as ya,Essentials as Ta,Autoformat as va,Bold as Ia,Italic as Sa,BlockQuote as Ca,CKBox as ka,Heading as xa,Image as Ea,ImageCaption as Pa,ImageStyle as wa,ImageToolbar as La,ImageUpload as Ba,PictureEditing as Aa,Indent as _a,IndentBlock as Oa,Link as Fa,List as Ra,MediaEmbed as Ua,Paragraph as Da,PasteFromOffice as qa,Table as Ma,TableToolbar as Ha,TextTransformation as za,CloudServices as Ka}from"ckeditor5";import{DecoupledEditor as g,Alignment as f,Autoformat as h,BlockQuote as b,Bold as y,Code as T,Italic as v,Strikethrough as I,Subscript as S,Superscript as C,Underline as k,Bookmark as x,CKBox as E,CKBoxImageEdit as P,CloudServices as w,CodeBlock as L,Essentials as B,FindAndReplace as A,Font as _,GeneralHtmlSupport as O,Heading as F,Highlight as R,HorizontalLine as U,HtmlEmbed as D,MediaEmbed as q,Image as M,ImageCaption as H,ImageInsert as z,ImageResize as K,ImageStyle as Q,ImageToolbar as N,ImageUpload as V,AutoImage as W,PictureEditing as G,Indent as j,IndentBlock as X,Link as $,LinkImage as J,AutoLink as Y,List as Z,ListProperties as ee,Mention as te,PageBreak as oe,Paragraph as ie,PasteFromOffice as ae,RemoveFormat as re,SpecialCharacters as ne,SpecialCharactersEssentials as le,Style as se,Table as de,TableCaption as me,TableCellProperties as ce,TableColumnResize as pe,TableProperties as ue,TableToolbar as ge,TextTransformation as fe,Fullscreen as he}from"ckeditor5";import{ExportPdf as be,ExportWord as ye,FormatPainter as Te,ImportWord as ve,MultiLevelList as Ie,Pagination as Se,PasteFromOfficeEnhanced as Ce,SlashCommand as ke,TableOfContents as xe,DocumentOutline as Ee,Template as Pe,Comments as we,TrackChanges as Le,TrackChangesPreview as Be,RevisionHistory as Ae,PresenceList as _e,RealTimeCollaborativeRevisionHistory as Oe,RealTimeCollaborativeTrackChanges as Fe,RealTimeCollaborativeEditing as Re,RealTimeCollaborativeComments as Ue}from"ckeditor5-premium-features";var r=class extends g{static builtinPlugins=[h,b,y,x,F,M,H,Te,he,Q,N,j,v,$,Z,q,ie,de,ge,f,W,Y,E,P,w,T,L,B,be,ye,ve,A,_,R,U,D,z,K,V,X,O,J,ee,Ie,te,oe,Se,ae,Ce,G,re,ke,ne,le,se,I,S,C,me,ce,pe,ue,xe,Pe,fe,k,Ee,_e,we,Le,Be,Ae,Ue,Re,Fe,Oe]};var De=`
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
`;r.create({removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],ui:{viewportOffset:{top:d()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},root:{initialData:De,placeholder:"Type or paste your content here!",element:document.querySelector("#pageless_editor")},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},fullscreen:{onEnterCallback:e=>e.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(e=>(document.querySelector("#pageless_toolbar-container").appendChild(e.ui.view.toolbar.element),window.editorPageless=e,window.preventPasteFromOfficeNotification=!0,e)).then(e=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),l({target:s(e.ui.view.toolbar,o=>o.label&&o.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e)});
