var n="https://api.ckbox.io/token/demo";import{Plugin as We}from"@ckeditor/ckeditor5-core";import{Essentials as Je}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Xe}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Ze}from"@ckeditor/ckeditor5-block-quote";import{Bold as et,Italic as tt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as at}from"@ckeditor/ckeditor5-heading";import{Image as rt,ImageCaption as nt,ImageStyle as lt,ImageToolbar as st}from"@ckeditor/ckeditor5-image";import{Indent as mt}from"@ckeditor/ckeditor5-indent";import{Link as pt}from"@ckeditor/ckeditor5-link";import{List as gt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ht}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as yt}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as It}from"@ckeditor/ckeditor5-table";function l({id:e,target:o,text:a,editor:i,tippyOptions:m}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:a});return}let c=window.umberto.Tooltip.create({id:e,text:a,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...m?.placement&&{position:m.placement}});for(let p of i.editing.view.document.roots)p.once("change:isFocused",(Ke,He,u)=>{u&&c.destroy()});return c}function s(e,o){let a=e.items,i;return typeof o=="function"?i=a.find(o):i=a.get(o),i?i.element:void 0}function d(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Pt,Essentials as wt,CKFinderUploadAdapter as Lt,Autoformat as Bt,BlockToolbar as At,Bold as _t,Italic as Ft,BlockQuote as Ot,CKBox as Rt,CKFinder as Ut,EasyImage as Dt,Heading as qt,Image as Kt,ImageCaption as Ht,ImageStyle as Mt,ImageToolbar as zt,ImageUpload as Nt,PictureEditing as Qt,Indent as Vt,Link as Wt,List as Gt,MediaEmbed as Jt,Paragraph as jt,PasteFromOffice as Xt,Table as $t,TableToolbar as Zt,TextTransformation as Yt,CloudServices as eo}from"ckeditor5";import{BalloonEditor as io,Essentials as ro,CKFinderUploadAdapter as no,Autoformat as lo,Bold as so,Italic as mo,BlockQuote as co,CKBox as po,CKFinder as uo,EasyImage as go,Heading as fo,Image as ho,ImageCaption as bo,ImageStyle as yo,ImageToolbar as To,ImageUpload as vo,PictureEditing as Io,Indent as Co,Link as So,List as ko,MediaEmbed as xo,Paragraph as Eo,PasteFromOffice as Po,Table as wo,TableToolbar as Lo,TextTransformation as Bo,CloudServices as Ao}from"ckeditor5";import{ClassicEditor as Ro,Essentials as Uo,Autoformat as Do,Bold as qo,Italic as Ko,BlockQuote as Ho,CKBox as Mo,EasyImage as zo,Heading as No,Image as Qo,ImageCaption as Vo,ImageStyle as Wo,ImageToolbar as Go,ImageUpload as Jo,PictureEditing as jo,Indent as Xo,Link as $o,List as Zo,MediaEmbed as Yo,Paragraph as ea,PasteFromOffice as ta,Table as oa,TableToolbar as aa,TextTransformation as ia,CloudServices as ra,AutoImage as na,ImageInsert as la,Bookmark as sa}from"ckeditor5";import{DecoupledEditor as pa,Essentials as ua,Alignment as ga,FontSize as fa,FontFamily as ha,FontColor as ba,FontBackgroundColor as ya,Autoformat as Ta,Bold as va,Italic as Ia,Strikethrough as Ca,Underline as Sa,BlockQuote as ka,CKBox as xa,EasyImage as Ea,Heading as Pa,Image as wa,ImageCaption as La,ImageResize as Ba,ImageStyle as Aa,ImageToolbar as _a,ImageUpload as Fa,PictureEditing as Oa,Indent as Ra,IndentBlock as Ua,Link as Da,List as qa,ListProperties as Ka,MediaEmbed as Ha,Paragraph as Ma,PasteFromOffice as za,Table as Na,TableToolbar as Qa,TextTransformation as Va,CloudServices as Wa}from"ckeditor5";import{InlineEditor as Xa,Essentials as $a,CKFinderUploadAdapter as Za,Autoformat as Ya,Bold as ei,Italic as ti,BlockQuote as oi,CKBox as ai,CKFinder as ii,EasyImage as ri,Heading as ni,Image as li,ImageCaption as si,ImageStyle as di,ImageToolbar as mi,ImageUpload as ci,PictureEditing as pi,Indent as ui,Link as gi,List as fi,MediaEmbed as hi,Paragraph as bi,PasteFromOffice as yi,Table as Ti,TableToolbar as vi,TextTransformation as Ii,CloudServices as Ci}from"ckeditor5";import{MultiRootEditor as Ei,Essentials as Pi,CKFinderUploadAdapter as wi,Autoformat as Li,Bold as Bi,Italic as Ai,BlockQuote as _i,CKBox as Fi,CKFinder as Oi,EasyImage as Ri,Heading as Ui,Image as Di,ImageCaption as qi,ImageStyle as Ki,ImageToolbar as Hi,ImageUpload as Mi,PictureEditing as zi,Indent as Ni,Link as Qi,List as Vi,MediaEmbed as Wi,Paragraph as Gi,PasteFromOffice as Ji,Table as ji,TableToolbar as Xi,TextTransformation as $i,CloudServices as Zi}from"ckeditor5";import{DecoupledEditor as g,Alignment as f,Autoformat as h,BlockQuote as b,Bold as y,Code as T,Italic as v,Strikethrough as I,Subscript as C,Superscript as S,Underline as k,Bookmark as x,CKBox as E,CKBoxImageEdit as P,CloudServices as w,CodeBlock as L,Essentials as B,FindAndReplace as A,Font as _,GeneralHtmlSupport as F,Heading as O,Highlight as R,HorizontalLine as U,HtmlEmbed as D,MediaEmbed as q,Image as K,ImageCaption as H,ImageInsert as M,ImageResize as z,ImageStyle as N,ImageToolbar as Q,ImageUpload as V,AutoImage as W,PictureEditing as G,Indent as J,IndentBlock as j,Link as X,LinkImage as $,AutoLink as Z,List as Y,ListProperties as ee,Mention as te,PageBreak as oe,Paragraph as ae,PasteFromOffice as ie,RemoveFormat as re,SpecialCharacters as ne,SpecialCharactersEssentials as le,Style as se,Table as de,TableCaption as me,TableCellProperties as ce,TableColumnResize as pe,TableProperties as ue,TableToolbar as ge,TextTransformation as fe,Fullscreen as he}from"ckeditor5";import{ExportPdf as be,ExportWord as ye,FormatPainter as Te,ImportWord as ve,MultiLevelList as Ie,Pagination as Ce,PasteFromOfficeEnhanced as Se,SlashCommand as ke,TableOfContents as xe,DocumentOutline as Ee,Template as Pe,Comments as we,TrackChanges as Le,TrackChangesPreview as Be,RevisionHistory as Ae,PresenceList as _e,RealTimeCollaborativeRevisionHistory as Fe,RealTimeCollaborativeTrackChanges as Oe,RealTimeCollaborativeEditing as Re,RealTimeCollaborativeComments as Ue}from"ckeditor5-premium-features";var r=class extends g{static builtinPlugins=[h,b,y,x,O,K,H,Te,he,N,Q,J,v,X,Y,q,ae,de,ge,f,W,Z,E,P,w,T,L,B,be,ye,ve,A,_,R,U,D,M,z,V,j,F,$,ee,Ie,te,oe,Ce,ie,Se,G,re,ke,ne,le,se,I,C,S,me,ce,pe,ue,xe,Pe,fe,k,Ee,_e,we,Le,Be,Ae,Ue,Re,Oe,Fe]};var De={tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/",webSocketUrl:"33333.cke-cs.com/ws"},qe=`
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
`;r.create(document.querySelector("#pageless_editor"),{removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],initialData:qe,ui:{viewportOffset:{top:d()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},placeholder:"Type or paste your content here!",table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},cloudServices:De,fullscreen:{onEnterCallback:e=>e.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(e=>(document.querySelector("#pageless_toolbar-container").appendChild(e.ui.view.toolbar.element),window.editorPageless=e,window.preventPasteFromOfficeNotification=!0,e)).then(e=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),l({target:s(e.ui.view.toolbar,o=>o.label&&o.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e)});
