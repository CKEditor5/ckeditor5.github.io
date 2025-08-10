var h="https://api.ckbox.io/token/demo";import{Plugin as dt}from"@ckeditor/ckeditor5-core";import{Essentials as mt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ht}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as ut}from"@ckeditor/ckeditor5-block-quote";import{Bold as bt,Italic as _t}from"@ckeditor/ckeditor5-basic-styles";import{Heading as St}from"@ckeditor/ckeditor5-heading";import{Image as Et,ImageCaption as It,ImageStyle as Ct,ImageToolbar as vt}from"@ckeditor/ckeditor5-image";import{Indent as kt}from"@ckeditor/ckeditor5-indent";import{Link as xt}from"@ckeditor/ckeditor5-link";import{List as Lt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Bt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Dt}from"@ckeditor/ckeditor5-paragraph";import{Table as Mt,TableToolbar as Ut}from"@ckeditor/ckeditor5-table";function g({target:o,text:e,editor:t,tippyOptions:i}){if(!o){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:e});return}if(!o.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:o,text:e});return}let r=window.umberto.Tooltip.create({text:e,trigger:o,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let s of t.editing.view.document.roots)s.once("change:isFocused",(l,d,c)=>{c&&r.destroy()});return r}function u(o,e){let t=o.items,i;return typeof e=="function"?i=t.find(e):i=t.get(e),i?i.element:void 0}function f(){let o=document.documentElement;return parseInt(window.getComputedStyle(o).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as zt,Essentials as Vt,CKFinderUploadAdapter as Qt,Autoformat as jt,BlockToolbar as Gt,Bold as Xt,Italic as Jt,BlockQuote as Yt,CKBox as Zt,CKFinder as $t,EasyImage as eo,Heading as to,Image as oo,ImageCaption as io,ImageStyle as ro,ImageToolbar as ao,ImageUpload as so,PictureEditing as no,Indent as lo,Link as co,List as mo,MediaEmbed as po,Paragraph as ho,PasteFromOffice as go,Table as uo,TableToolbar as fo,TextTransformation as bo,CloudServices as _o}from"ckeditor5";import{BalloonEditor as Eo,Essentials as Io,CKFinderUploadAdapter as Co,Autoformat as vo,Bold as wo,Italic as ko,BlockQuote as Po,CKBox as xo,CKFinder as Oo,EasyImage as Lo,Heading as Ao,Image as Bo,ImageCaption as Ro,ImageStyle as Do,ImageToolbar as Fo,ImageUpload as Mo,PictureEditing as Uo,Indent as Wo,Link as No,List as Ho,MediaEmbed as Ko,Paragraph as qo,PasteFromOffice as zo,Table as Vo,TableToolbar as Qo,TextTransformation as jo,CloudServices as Go}from"ckeditor5";import{ClassicEditor as Zo,Essentials as $o,Autoformat as ei,Bold as ti,Italic as oi,BlockQuote as ii,CKBox as ri,EasyImage as ai,Heading as si,Image as ni,ImageCaption as li,ImageStyle as di,ImageToolbar as ci,ImageUpload as mi,PictureEditing as pi,Indent as hi,Link as gi,List as ui,MediaEmbed as fi,Paragraph as bi,PasteFromOffice as _i,Table as yi,TableToolbar as Si,TextTransformation as Ti,CloudServices as Ei,AutoImage as Ii,ImageInsert as Ci,Bookmark as vi}from"ckeditor5";import{DecoupledEditor as xi,Essentials as Oi,Alignment as Li,FontSize as Ai,FontFamily as Bi,FontColor as Ri,FontBackgroundColor as Di,Autoformat as Fi,Bold as Mi,Italic as Ui,Strikethrough as Wi,Underline as Ni,BlockQuote as Hi,CKBox as Ki,EasyImage as qi,Heading as zi,Image as Vi,ImageCaption as Qi,ImageResize as ji,ImageStyle as Gi,ImageToolbar as Xi,ImageUpload as Ji,PictureEditing as Yi,Indent as Zi,IndentBlock as $i,Link as er,List as tr,ListProperties as or,MediaEmbed as ir,Paragraph as rr,PasteFromOffice as ar,Table as sr,TableToolbar as nr,TextTransformation as lr,CloudServices as dr}from"ckeditor5";import{InlineEditor as hr,Essentials as gr,CKFinderUploadAdapter as ur,Autoformat as fr,Bold as br,Italic as _r,BlockQuote as yr,CKBox as Sr,CKFinder as Tr,EasyImage as Er,Heading as Ir,Image as Cr,ImageCaption as vr,ImageStyle as wr,ImageToolbar as kr,ImageUpload as Pr,PictureEditing as xr,Indent as Or,Link as Lr,List as Ar,MediaEmbed as Br,Paragraph as Rr,PasteFromOffice as Dr,Table as Fr,TableToolbar as Mr,TextTransformation as Ur,CloudServices as Wr}from"ckeditor5";import{MultiRootEditor as qr,Essentials as zr,CKFinderUploadAdapter as Vr,Autoformat as Qr,Bold as jr,Italic as Gr,BlockQuote as Xr,CKBox as Jr,CKFinder as Yr,EasyImage as Zr,Heading as $r,Image as ea,ImageCaption as ta,ImageStyle as oa,ImageToolbar as ia,ImageUpload as ra,PictureEditing as aa,Indent as sa,Link as na,List as la,MediaEmbed as da,Paragraph as ca,PasteFromOffice as ma,Table as pa,TableToolbar as ha,TextTransformation as ga,CloudServices as ua}from"ckeditor5";import{DecoupledEditor as B,Alignment as R,Autoformat as D,BlockQuote as F,Bold as M,Code as U,Italic as W,Strikethrough as N,Subscript as H,Superscript as K,Underline as q,Bookmark as z,CKBox as V,CKBoxImageEdit as Q,CloudServices as j,CodeBlock as G,Essentials as X,FindAndReplace as J,Font as Y,GeneralHtmlSupport as Z,Heading as $,Highlight as ee,HorizontalLine as te,HtmlEmbed as oe,MediaEmbed as ie,Image as re,ImageCaption as ae,ImageInsert as se,ImageResize as ne,ImageStyle as le,ImageToolbar as de,ImageUpload as ce,AutoImage as me,PictureEditing as pe,Indent as he,IndentBlock as ge,Link as ue,LinkImage as fe,AutoLink as be,List as _e,ListProperties as ye,Mention as Se,PageBreak as Te,Paragraph as Ee,PasteFromOffice as Ie,RemoveFormat as Ce,SpecialCharacters as ve,SpecialCharactersEssentials as we,Style as ke,Table as Pe,TableCaption as xe,TableCellProperties as Oe,TableColumnResize as Le,TableProperties as Ae,TableToolbar as Be,TextTransformation as Re,Fullscreen as De}from"ckeditor5";import{ExportPdf as Fe,ExportWord as Me,FormatPainter as Ue,ImportWord as We,MultiLevelList as Ne,Pagination as He,PasteFromOfficeEnhanced as Ke,SlashCommand as qe,TableOfContents as ze,DocumentOutline as Ve,Template as Qe,Comments as je,TrackChanges as Ge,TrackChangesPreview as Xe,RevisionHistory as Je,PresenceList as Ye,RealTimeCollaborativeRevisionHistory as Ze,RealTimeCollaborativeTrackChanges as $e,RealTimeCollaborativeEditing as et,RealTimeCollaborativeComments as tt}from"ckeditor5-premium-features";import{Command as v,Plugin as w}from"@ckeditor/ckeditor5-core/dist/index.js";import{createDropdown as k,addListToDropdown as P,ViewModel as x}from"@ckeditor/ckeditor5-ui/dist/index.js";import{Collection as O}from"@ckeditor/ckeditor5-utils/dist/index.js";var L=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="10.46 17.747 7.014 14.292 8.076 13.232 10.461 15.624 16.377 9.708 17.437 10.768 10.46 17.747"/><path d="M10.147,12.276c.063.153.138.331.226.531a2.7,2.7,0,0,0,.144.286L12,11.614l-.01-.027L9.4,5.189c-.122-.321-.222-.576-.3-.768A2.871,2.871,0,0,0,8.8,3.883a1.355,1.355,0,0,0-.453-.409,1.4,1.4,0,0,0-.7-.159,1.387,1.387,0,0,0-.693.159,1.314,1.314,0,0,0-.453.416,3.4,3.4,0,0,0-.325.646L5.92,5.2,3.383,11.641c-.1.257-.178.457-.223.6a1.4,1.4,0,0,0-.067.419.852.852,0,0,0,.29.629.941.941,0,0,0,.67.277.756.756,0,0,0,.643-.26,4.432,4.432,0,0,0,.473-1l.473-1.272H9.673ZM6.17,9.524,7.638,5.432,9.132,9.524Z"/></svg>
`,_=class extends v{execute(){this.editor.plugins.get("WProofreader").toggle()}},y=class extends v{execute(){this.editor.plugins.get("WProofreader").openSettings()}},S=class extends v{execute(){this.editor.plugins.get("WProofreader").openDialog()}},T=class extends w{static get pluginName(){return"WProofreaderEditing"}init(){this._addCommands()}afterInit(){this._enableInModes([{modeName:"TrackChanges",editingName:"TrackChangesEditing"},{modeName:"RestrictedEditingMode",editingName:"RestrictedEditingModeEditing"}])}_addCommands(){this.editor.commands.add("WProofreaderToggle",new _(this.editor)),this.editor.commands.add("WProofreaderSettings",new y(this.editor)),this.editor.commands.add("WProofreaderDialog",new S(this.editor))}_enableInModes(e){e.forEach(t=>{this._enableInMode(t.modeName,t.editingName)})}_enableInMode(e,t){if(this.editor.plugins.has(e)){let r=this.editor.plugins.get(t);["WProofreaderToggle","WProofreaderSettings","WProofreaderDialog"].forEach(l=>r.enableCommand(l))}}},E=class extends w{static get pluginName(){return"WProofreaderUI"}constructor(e){super(e),this._commands={toggle:"WProofreaderToggle",settings:"WProofreaderSettings",proofreadDialog:"WProofreaderDialog"}}init(){this._registerDropdown()}_registerDropdown(){let e=this.editor,t=e.plugins.get("WProofreader");e.ui.componentFactory.add("wproofreader",i=>{let r=k(i),s,l;return r.buttonView.set({label:"WProofreader text checker",icon:L,tooltip:!0}),r.on("change:isOpen",()=>{let d=t.isInstancesReady(),c=t.isInstancesEnabled();if(!d){r.class="ck-wproofreader-empty";return}s||(l=t.getStaticActions(),s=this._getDropdownItemsDefinitions(l),P(r,s)),r.class="",s.map(n=>{n.model.class=c?"":"ck-hidden",n.model.commandParam==="WProofreaderToggle"&&(n.model.label=c?n.model.localization.disable:n.model.localization.enable,n.model.class="")})}),r.on("execute",d=>{e.execute(d.source.commandParam)}),r.bind("isEnabled").to(e.commands.get("WProofreaderToggle")),r})}_getDropdownItemsDefinitions(e){let t=new O;return e.forEach(i=>{let r={type:"button",model:new x({commandParam:this._commands[i.name],label:i.localization.default,localization:i.localization,class:"",withText:!0})};t.add(r)}),t}},I=class{constructor(){this._create()}_create(){window.WPROOFREADER_SRCSTORAGE=window.WPROOFREADER_SRCSTORAGE||{},this._storage=window.WPROOFREADER_SRCSTORAGE}has(e){return!!this._storage[e]}add(e){this._storage[e]={onLoad:[],onError:[]}}addCallbacks(e,t,i){this._storage[e].onLoad.push(t),this._storage[e].onError.push(i)}eachOnLoad(e,t){this._storage[e].onLoad.forEach(t)}eachOnError(e,t){this._storage[e].onError.forEach(t)}delete(e){delete this._storage[e]}get(e){return this._storage[e]}},C=class{constructor(e){this._validateSrc(e),this._src=e,this._globalSrcStorage=new I}load(){return new Promise((e,t)=>{this._isScriptOnPage()?this._processExistingScript(e,t):this._createScript(e,t)})}_validateSrc(e){if(!e)throw new Error("Path to the script is not specified.")}_isScriptOnPage(){return!!document.querySelector('script[src="'+this._src+'"]')}_createScript(e,t){this._script=this._createElement(),this._globalSrcStorage.add(this._src),this._globalSrcStorage.addCallbacks(this._src,e,t),this._subscribeOnScriptLoad(),this._subscribeOnScriptError(),this._appendScript(this._script)}_createElement(){let e=document.createElement("script");return e.type="text/javascript",e.charset="UTF-8",e.src=this._src,e}_subscribeOnScriptLoad(){this._script.onload=()=>{this._globalSrcStorage.eachOnLoad(this._src,e=>{e()}),this._destroy()}}_subscribeOnScriptError(){this._script.onerror=()=>{let e=new Error(`${this._src} failed to load.`);this._globalSrcStorage.eachOnError(this._src,t=>{t(e)}),this._destroy()}}_destroy(){this._removeListeners(),this._globalSrcStorage.delete(this._src),this._src=null,this._script=null}_removeListeners(){this._script.onload=null,this._script.onerror=null}_appendScript(e){document.getElementsByTagName("head")[0].appendChild(e)}_processExistingScript(e,t){this._globalSrcStorage.has(this._src)?this._addCallbacks(e,t):this._processLoadedScript(e)}_addCallbacks(e,t){this._globalSrcStorage.addCallbacks(this._src,e,t)}_processLoadedScript(e){e()}},A="WProofreaderToggleCommandDisabling",b="InstancesDisabling",m=class extends w{static get requires(){return[T,E]}static get pluginName(){return"WProofreader"}constructor(e){super(e),this.set("isToggleCommandEnabled",!0),this._instances=[],this._restrictedEditingName="RestrictedEditingMode"}init(){this._userOptions=this._getUserOptions(),this._setTheme(),this._setAutoStartup(),this._setBadgeOffset(),this._setIsEnabled(this._userOptions.autoStartup,b),this._loadWscbundle().then(()=>{this._handleWscbundleLoaded()}).catch(e=>{throw new Error(e)}),this.bind("isToggleCommandEnabled").to(this.editor.commands.get("WProofreaderToggle"),"isEnabled",e=>this._handleToggleCommandEnabled(e))}destroy(){super.destroy(),this._instances.forEach(e=>e.destroy()),this._instances=null}_getUserOptions(){let e=this.editor.config.get("wproofreader");if(!e)throw new Error("No WProofreader configuration.");return e}_setTheme(){this._userOptions.theme||(this._userOptions.theme="ckeditor5")}_setAutoStartup(){Object.prototype.hasOwnProperty.call(this._userOptions,"autoStartup")||(this._userOptions.autoStartup=!0)}_setBadgeOffset(){this._userOptions.fullSizeBadge||(Object.prototype.hasOwnProperty.call(this._userOptions,"badgeOffsetX")||(this._userOptions.badgeOffsetX=11),Object.prototype.hasOwnProperty.call(this._userOptions,"badgeOffsetY")||(this._userOptions.badgeOffsetY=11))}_setIsEnabled(e,t){e?this.clearForceDisabled(t):this.forceDisabled(t)}_loadWscbundle(){return new C(this._userOptions.srcUrl).load().then(()=>{if(!window.WEBSPELLCHECKER)throw new Error("WEBSPELLCHECKER is not defined.")})}_handleWscbundleLoaded(){this.editor.state==="ready"?this._createInstances():this._subscribeOnEditorReady()}_createInstances(){let e=this.editor.editing.view.domRoots.values();this._setFields();for(let t of e)this._createInstance(t)}_setFields(){this._isRestrictedEditingMode=this._checkRestrictedEditingMode(),this._options=this._createOptions()}_checkRestrictedEditingMode(){return this.editor.plugins.has(this._restrictedEditingName)}_createOptions(){return{appType:"proofreader_ck5",restrictedEditingMode:this._isRestrictedEditingMode,disableBadgePulsing:!0,onCommitOptions:this._onCommitOptions.bind(this),onToggle:this._onToggle.bind(this)}}_onCommitOptions(e){this._syncOptions(e)}_syncOptions(e){this._instances.forEach(t=>{t.commitOption(e,{ignoreCallback:!0})})}_onToggle(e){let t=!e.isDisabled();this._setIsEnabled(t,b),this._syncToggle(t)}_syncToggle(e){this._instances.forEach(t=>{e?this._enableInstance(t):this._disableInstance(t)})}_enableInstance(e){let t={ignoreCallback:!0};this.isEnabled&&e.enable(t)}_disableInstance(e){let t={ignoreCallback:!0};e.disable(t)}_createInstance(e){window.WEBSPELLCHECKER.init(this._mergeOptions(e),this._handleInstanceCreated.bind(this))}_mergeOptions(e){return Object.assign({},this._userOptions,this._options,{container:e})}_handleInstanceCreated(e){if(e){if(this.editor.state==="destroyed"){e.destroy();return}this.isEnabled||this._disableInstance(e),this._instances.push(e)}}_subscribeOnEditorReady(){this.editor.on("ready",()=>{this._createInstances()})}_handleToggleCommandEnabled(e){return this._setIsEnabled(e,A),this._syncToggle(e),e}getStaticActions(){return this._instances.length===0?[]:this._instances[0].getStaticActions()}toggle(){if(this._instances.length===0)return;let e=this.isInstancesEnabled();this._setIsEnabled(!e,b),this._syncToggle(!e)}openSettings(){this._instances.length!==0&&this._instances[0].openSettings()}openDialog(){this._instances.length!==0&&this._instances[0].openDialog()}isInstancesReady(){return this._instances.length>0}isInstancesEnabled(){return this._instances.length===0?!1:!this._instances[0].isDisabled()}};var p=class extends B{static builtinPlugins=[D,F,M,z,$,re,ae,Ue,De,le,de,he,W,ue,_e,ie,Ee,Pe,Be,R,me,be,V,Q,j,U,G,X,Fe,Me,We,J,Y,ee,te,oe,se,ne,ce,ge,Z,fe,ye,Ne,Se,Te,He,Ie,Ke,pe,Ce,qe,ve,we,ke,N,H,K,xe,Oe,Le,Ae,ze,Qe,Re,q,m,Ve,Ye,je,Ge,Xe,Je,tt,et,$e,Ze]};var ot={tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/",webSocketUrl:"33333.cke-cs.com/ws"},it=`
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
`;p.create(document.querySelector("#pageless_editor"),{removePlugins:["ExportPdf","ExportWord","FormatPainter","ImportWord","MultiLevelList","Pagination","PasteFromOfficeEnhanced","SlashCommand","TableOfContents","DocumentOutline","Template","Comments","TrackChanges","TrackChangesPreview","RevisionHistory","AIAssistant","OpenAITextAdapter","PresenceList","RealTimeCollaborativeRevisionHistory","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeEditing","RealTimeCollaborativeComments"],initialData:it,ui:{viewportOffset:{top:f()}},toolbar:{items:["fullscreen","|","undo","redo","|","findAndReplace","selectAll","wproofreader","|","heading","|","style","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","subscript","superscript","code","|","removeFormat","|","specialCharacters","horizontalLine","pageBreak","|","link","bookmark","insertImage","ckbox","insertTable","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","|","alignment","|","bulletedList","numberedList","outdent","indent"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},placeholder:"Type or paste your content here!",table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},wproofreader:{serviceId:"1:Eebp63-lWHbt2-ASpHy4-AYUpy2-fo3mk4-sKrza1-NsuXy4-I1XZC2-0u2F54-aqYWd1-l3Qf14-umd",lang:"auto",srcUrl:"https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"},ckbox:{tokenUrl:h,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},cloudServices:ot,fullscreen:{onEnterCallback:o=>o.classList.add("formatted","live-snippet"),container:document.querySelector(".l-layout__main"),menuBar:{isVisible:!1}}}).then(o=>(document.querySelector("#pageless_toolbar-container").appendChild(o.ui.view.toolbar.element),window.editorPageless=o,window.preventPasteFromOfficeNotification=!0,o)).then(o=>{document.querySelector("#pageless_live-snippet__loader").classList.add("fadeout"),document.querySelector("#pageless_live-snippet__container").classList.add("loaded"),g({target:u(o.ui.view.toolbar,e=>e.label&&e.label==="Enter fullscreen mode"),text:"Click here to enter fullscreen mode.",editor:o,tippyOptions:{placement:"bottom-start"}})}).catch(o=>{console.error(o)});
