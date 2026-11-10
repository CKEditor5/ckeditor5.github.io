import{ClassicEditor as se,Alignment as le,Autoformat as de,Bold as ce,Code as he,Italic as pe,Strikethrough as ge,Subscript as me,Superscript as ue,Underline as fe,Bookmark as be,BlockQuote as Ce,CKBox as xe,CKBoxImageEdit as _e,CloudServices as ke,CodeBlock as ye,Emoji as we,Essentials as Le,FindAndReplace as Se,Font as Ie,Fullscreen as Be,GeneralHtmlSupport as Ee,Heading as Te,Highlight as ve,HorizontalLine as Oe,HtmlEmbed as Me,AutoImage as Ae,Image as Re,ImageCaption as Pe,ImageInsert as Fe,ImageResize as He,ImageStyle as De,ImageToolbar as Ne,ImageUpload as Ve,PictureEditing as Ue,Indent as Ze,IndentBlock as ze,AutoLink as We,Plugin as Ge,IconLink as v,Link as V,LinkUI as U,LinkImage as qe,List as je,ListProperties as Ke,TodoList as Qe,MediaEmbed as Ye,Mention as $e,PageBreak as Xe,Paragraph as Je,PasteFromOffice as et,RemoveFormat as tt,ShowBlocks as ot,SpecialCharacters as it,SpecialCharactersEssentials as rt,Style as nt,Table as at,TableCaption as st,TableCellProperties as lt,TableColumnResize as dt,TableProperties as ct,TableToolbar as ht,TextTransformation as pt,WordCount as gt}from"ckeditor5";import{Template as mt,SlashCommand as ut,SourceEditingEnhanced as ft,PasteFromOfficeEnhanced as bt,MultiLevelList as Ct,ImportWord as xt,FormatPainter as _t,ExportPdf as kt,ExportWord as yt,TableOfContents as wt,CaseChange as Lt,LineHeight as St,Footnotes as It,FootnotesProperties as Bt}from"ckeditor5-premium-features";import{Command as k,Plugin as y}from"@ckeditor/ckeditor5-core/dist/index.js";import{createDropdown as Z,addListToDropdown as z,ViewModel as W}from"@ckeditor/ckeditor5-ui/dist/index.js";import{Collection as G}from"@ckeditor/ckeditor5-utils/dist/index.js";var q=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="10.46 17.747 7.014 14.292 8.076 13.232 10.461 15.624 16.377 9.708 17.437 10.768 10.46 17.747"/><path d="M10.147,12.276c.063.153.138.331.226.531a2.7,2.7,0,0,0,.144.286L12,11.614l-.01-.027L9.4,5.189c-.122-.321-.222-.576-.3-.768A2.871,2.871,0,0,0,8.8,3.883a1.355,1.355,0,0,0-.453-.409,1.4,1.4,0,0,0-.7-.159,1.387,1.387,0,0,0-.693.159,1.314,1.314,0,0,0-.453.416,3.4,3.4,0,0,0-.325.646L5.92,5.2,3.383,11.641c-.1.257-.178.457-.223.6a1.4,1.4,0,0,0-.067.419.852.852,0,0,0,.29.629.941.941,0,0,0,.67.277.756.756,0,0,0,.643-.26,4.432,4.432,0,0,0,.473-1l.473-1.272H9.673ZM6.17,9.524,7.638,5.432,9.132,9.524Z"/></svg>
`,m=class extends k{execute(){this.editor.plugins.get("WProofreader").toggle()}},u=class extends k{execute(){this.editor.plugins.get("WProofreader").openSettings()}},f=class extends k{execute(){this.editor.plugins.get("WProofreader").openDialog()}},b=class extends y{static get pluginName(){return"WProofreaderEditing"}init(){this._addCommands()}afterInit(){this._enableInModes([{modeName:"TrackChanges",editingName:"TrackChangesEditing"},{modeName:"RestrictedEditingMode",editingName:"RestrictedEditingModeEditing"}])}_addCommands(){this.editor.commands.add("WProofreaderToggle",new m(this.editor)),this.editor.commands.add("WProofreaderSettings",new u(this.editor)),this.editor.commands.add("WProofreaderDialog",new f(this.editor))}_enableInModes(e){e.forEach(o=>{this._enableInMode(o.modeName,o.editingName)})}_enableInMode(e,o){if(this.editor.plugins.has(e)){let i=this.editor.plugins.get(o);["WProofreaderToggle","WProofreaderSettings","WProofreaderDialog"].forEach(d=>i.enableCommand(d))}}},C=class extends y{static get pluginName(){return"WProofreaderUI"}constructor(e){super(e),this._commands={toggle:"WProofreaderToggle",settings:"WProofreaderSettings",proofreadDialog:"WProofreaderDialog"}}init(){this._registerDropdown()}_registerDropdown(){let e=this.editor,o=e.plugins.get("WProofreader");e.ui.componentFactory.add("wproofreader",r=>{let i=Z(r),a,d;return i.buttonView.set({label:"WProofreader text checker",icon:q,tooltip:!0}),i.on("change:isOpen",()=>{let p=o.isInstancesReady(),M=o.isInstancesEnabled();if(!p){i.class="ck-wproofreader-empty";return}a||(d=o.getStaticActions(),a=this._getDropdownItemsDefinitions(d),z(i,a)),i.class="",a.map(s=>{s.model.class=M?"":"ck-hidden",s.model.commandParam==="WProofreaderToggle"&&(s.model.label=M?s.model.localization.disable:s.model.localization.enable,s.model.class="")})}),i.on("execute",p=>{e.execute(p.source.commandParam)}),i.bind("isEnabled").to(e.commands.get("WProofreaderToggle")),i})}_getDropdownItemsDefinitions(e){let o=new G;return e.forEach(r=>{let i={type:"button",model:new W({commandParam:this._commands[r.name],label:r.localization.default,localization:r.localization,class:"",withText:!0})};o.add(i)}),o}},x=class{constructor(){this._create()}_create(){window.WPROOFREADER_SRCSTORAGE=window.WPROOFREADER_SRCSTORAGE||{},this._storage=window.WPROOFREADER_SRCSTORAGE}has(e){return!!this._storage[e]}add(e){this._storage[e]={onLoad:[],onError:[]}}addCallbacks(e,o,r){this._storage[e].onLoad.push(o),this._storage[e].onError.push(r)}eachOnLoad(e,o){this._storage[e].onLoad.forEach(o)}eachOnError(e,o){this._storage[e].onError.forEach(o)}delete(e){delete this._storage[e]}get(e){return this._storage[e]}},_=class{constructor(e){this._validateSrc(e),this._src=e,this._globalSrcStorage=new x}load(){return new Promise((e,o)=>{this._isScriptOnPage()?this._processExistingScript(e,o):this._createScript(e,o)})}_validateSrc(e){if(!e)throw new Error("Path to the script is not specified.")}_isScriptOnPage(){return!!document.querySelector('script[src="'+this._src+'"]')}_createScript(e,o){this._script=this._createElement(),this._globalSrcStorage.add(this._src),this._globalSrcStorage.addCallbacks(this._src,e,o),this._subscribeOnScriptLoad(),this._subscribeOnScriptError(),this._appendScript(this._script)}_createElement(){let e=document.createElement("script");return e.type="text/javascript",e.charset="UTF-8",e.src=this._src,e}_subscribeOnScriptLoad(){this._script.onload=()=>{this._globalSrcStorage.eachOnLoad(this._src,e=>{e()}),this._destroy()}}_subscribeOnScriptError(){this._script.onerror=()=>{let e=new Error(`${this._src} failed to load.`);this._globalSrcStorage.eachOnError(this._src,o=>{o(e)}),this._destroy()}}_destroy(){this._removeListeners(),this._globalSrcStorage.delete(this._src),this._src=null,this._script=null}_removeListeners(){this._script.onload=null,this._script.onerror=null}_appendScript(e){document.getElementsByTagName("head")[0].appendChild(e)}_processExistingScript(e,o){this._globalSrcStorage.has(this._src)?this._addCallbacks(e,o):this._processLoadedScript(e)}_addCallbacks(e,o){this._globalSrcStorage.addCallbacks(this._src,e,o)}_processLoadedScript(e){e()}},j="WProofreaderToggleCommandDisabling",g="InstancesDisabling",c=class extends y{static get requires(){return[b,C]}static get pluginName(){return"WProofreader"}constructor(e){super(e),this.set("isToggleCommandEnabled",!0),this._instances=[],this._restrictedEditingName="RestrictedEditingMode"}init(){this._userOptions=this._getUserOptions(),this._setTheme(),this._setAutoStartup(),this._setBadgeOffset(),this._setIsEnabled(this._userOptions.autoStartup,g),this._loadWscbundle().then(()=>{this._handleWscbundleLoaded()}).catch(e=>{throw new Error(e)}),this.bind("isToggleCommandEnabled").to(this.editor.commands.get("WProofreaderToggle"),"isEnabled",e=>this._handleToggleCommandEnabled(e))}destroy(){super.destroy(),this._instances.forEach(e=>e.destroy()),this._instances=null}_getUserOptions(){let e=this.editor.config.get("wproofreader");if(!e)throw new Error("No WProofreader configuration.");return e}_setTheme(){this._userOptions.theme||(this._userOptions.theme="ckeditor5")}_setAutoStartup(){Object.prototype.hasOwnProperty.call(this._userOptions,"autoStartup")||(this._userOptions.autoStartup=!0)}_setBadgeOffset(){this._userOptions.fullSizeBadge||(Object.prototype.hasOwnProperty.call(this._userOptions,"badgeOffsetX")||(this._userOptions.badgeOffsetX=11),Object.prototype.hasOwnProperty.call(this._userOptions,"badgeOffsetY")||(this._userOptions.badgeOffsetY=11))}_setIsEnabled(e,o){e?this.clearForceDisabled(o):this.forceDisabled(o)}_loadWscbundle(){return new _(this._userOptions.srcUrl).load().then(()=>{if(!window.WEBSPELLCHECKER)throw new Error("WEBSPELLCHECKER is not defined.")})}_handleWscbundleLoaded(){this.editor.state==="ready"?this._createInstances():this._subscribeOnEditorReady()}_createInstances(){let e=this.editor.editing.view.domRoots.values();this._setFields();for(let o of e)this._createInstance(o)}_setFields(){this._isRestrictedEditingMode=this._checkRestrictedEditingMode(),this._options=this._createOptions()}_checkRestrictedEditingMode(){return this.editor.plugins.has(this._restrictedEditingName)}_createOptions(){return{appType:"proofreader_ck5",restrictedEditingMode:this._isRestrictedEditingMode,disableBadgePulsing:!0,onCommitOptions:this._onCommitOptions.bind(this),onToggle:this._onToggle.bind(this)}}_onCommitOptions(e){this._syncOptions(e)}_syncOptions(e){this._instances.forEach(o=>{o.commitOption(e,{ignoreCallback:!0})})}_onToggle(e){let o=!e.isDisabled();this._setIsEnabled(o,g),this._syncToggle(o)}_syncToggle(e){this._instances.forEach(o=>{e?this._enableInstance(o):this._disableInstance(o)})}_enableInstance(e){let o={ignoreCallback:!0};this.isEnabled&&e.enable(o)}_disableInstance(e){let o={ignoreCallback:!0};e.disable(o)}_createInstance(e){window.WEBSPELLCHECKER.init(this._mergeOptions(e),this._handleInstanceCreated.bind(this))}_mergeOptions(e){return Object.assign({},this._userOptions,this._options,{container:e})}_handleInstanceCreated(e){if(e){if(this.editor.state==="destroyed"){e.destroy();return}this.isEnabled||this._disableInstance(e),this._instances.push(e)}}_subscribeOnEditorReady(){this.editor.on("ready",()=>{this._createInstances()})}_handleToggleCommandEnabled(e){return this._setIsEnabled(e,j),this._syncToggle(e),e}getStaticActions(){return this._instances.length===0?[]:this._instances[0].getStaticActions()}toggle(){if(this._instances.length===0)return;let e=this.isInstancesEnabled();this._setIsEnabled(!e,g),this._syncToggle(!e)}openSettings(){this._instances.length!==0&&this._instances[0].openSettings()}openDialog(){this._instances.length!==0&&this._instances[0].openDialog()}isInstancesReady(){return this._instances.length>0}isInstancesEnabled(){return this._instances.length===0?!1:!this._instances[0].isDisabled()}};var w="https://api.ckbox.io/token/demo";var K="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",Q="https://33333.cke-cs.com/easyimage/upload/",Y="33333.cke-cs.com/ws",L={tokenUrl:K,uploadUrl:Q,webSocketUrl:Y};import{Plugin as Vt}from"@ckeditor/ckeditor5-core";import{Essentials as Zt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Wt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as qt}from"@ckeditor/ckeditor5-block-quote";import{Bold as Kt,Italic as Qt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as $t}from"@ckeditor/ckeditor5-heading";import{Image as Jt,ImageCaption as eo,ImageStyle as to,ImageToolbar as oo}from"@ckeditor/ckeditor5-image";import{Indent as ro}from"@ckeditor/ckeditor5-indent";import{Link as ao}from"@ckeditor/ckeditor5-link";import{List as lo}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ho}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as go}from"@ckeditor/ckeditor5-paragraph";import{Table as uo,TableToolbar as fo}from"@ckeditor/ckeditor5-table";function S(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}function h(t){return document.querySelector(`link[href*="${t}/snippet.css"][data-cke]`)?.href||""}function I(t,e){customElements.get(t)||customElements.define(t,e)}function B(){return document.readyState==="complete"?Promise.resolve():new Promise(t=>window.addEventListener("load",()=>t(),{once:!0}))}function l(t,e){return Object.assign(document.createElement(t),e)}function A(t){return new Promise(e=>{t.addEventListener("load",()=>e(),{once:!0}),t.addEventListener("error",()=>e(),{once:!0})})}function E(t){try{return t&&!t.disabled?Array.from(t.cssRules):[]}catch{return[]}}var T=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let e=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=B().then(()=>$(this.shadowRoot,e))}};I("snippet-shadow-root",T);async function $(t,e){let o=X(e),r=l("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(J).map(ee);t.prepend(r,...i),await Promise.all(i.map(async a=>{await A(a),R(a.sheet,o)}))}function X(t){return e=>!t||t.some(o=>`${e}.`.startsWith(`${o}.`))}function J(t){return t.ownerNode instanceof HTMLElement&&E(t).length>0}function ee(t){let e=t.href?l("link",{rel:"stylesheet",href:t.href}):l("style",{textContent:t.ownerNode.textContent});return e.media=t.media.mediaText,e}function R(t,e){let o=E(t);for(let r=o.length-1;r>=0;r--){let i=o[r];i instanceof CSSImportRule&&i.layerName===null?R(i.styleSheet,e):te(i,e)||t.deleteRule(r)}}function te(t,e){return t instanceof CSSLayerStatementRule||t instanceof CSSNamespaceRule||t instanceof CSSLayerBlockRule&&e(t.name)||t instanceof CSSImportRule&&e(t.layerName)}import{BalloonEditor as So,Essentials as Io,Autoformat as Bo,BlockToolbar as Eo,Bold as To,Italic as vo,BlockQuote as Oo,CKBox as Mo,Heading as Ao,Image as Ro,ImageCaption as Po,ImageStyle as Fo,ImageToolbar as Ho,ImageUpload as Do,PictureEditing as No,Indent as Vo,IndentBlock as Uo,Link as Zo,List as zo,MediaEmbed as Wo,Paragraph as Go,PasteFromOffice as qo,Table as jo,TableToolbar as Ko,TextTransformation as Qo,CloudServices as Yo}from"ckeditor5";import{BalloonEditor as ei,Essentials as ti,Autoformat as oi,Bold as ii,Italic as ri,BlockQuote as ni,CKBox as ai,Heading as si,Image as li,ImageCaption as di,ImageStyle as ci,ImageToolbar as hi,ImageUpload as pi,PictureEditing as gi,Indent as mi,IndentBlock as ui,Link as fi,List as bi,MediaEmbed as Ci,Paragraph as xi,PasteFromOffice as _i,Table as ki,TableToolbar as yi,TextTransformation as wi,CloudServices as Li}from"ckeditor5";import{ClassicEditor as Ei,Essentials as Ti,Autoformat as vi,Bold as Oi,Italic as Mi,BlockQuote as Ai,CKBox as Ri,Heading as Pi,Image as Fi,ImageCaption as Hi,ImageStyle as Di,ImageToolbar as Ni,ImageUpload as Vi,PictureEditing as Ui,Indent as Zi,IndentBlock as zi,Link as Wi,List as Gi,MediaEmbed as qi,Paragraph as ji,PasteFromOffice as Ki,Table as Qi,TableToolbar as Yi,TextTransformation as $i,CloudServices as Xi,AutoImage as Ji,ImageInsert as er,Bookmark as tr}from"ckeditor5";import{DecoupledEditor as nr,Essentials as ar,Alignment as sr,FontSize as lr,FontFamily as dr,FontColor as cr,FontBackgroundColor as hr,Autoformat as pr,Bold as gr,Italic as mr,Strikethrough as ur,Underline as fr,BlockQuote as br,CKBox as Cr,Heading as xr,Image as _r,ImageCaption as kr,ImageResize as yr,ImageStyle as wr,ImageToolbar as Lr,ImageUpload as Sr,PictureEditing as Ir,Indent as Br,IndentBlock as Er,Link as Tr,List as vr,ListProperties as Or,MediaEmbed as Mr,Paragraph as Ar,PasteFromOffice as Rr,Table as Pr,TableToolbar as Fr,TextTransformation as Hr,CloudServices as Dr}from"ckeditor5";import{InlineEditor as Zr,Essentials as zr,Autoformat as Wr,Bold as Gr,Italic as qr,BlockQuote as jr,CKBox as Kr,Heading as Qr,Image as Yr,ImageCaption as $r,ImageStyle as Xr,ImageToolbar as Jr,ImageUpload as en,PictureEditing as tn,Indent as on,IndentBlock as rn,Link as nn,List as an,MediaEmbed as sn,Paragraph as ln,PasteFromOffice as dn,Table as cn,TableToolbar as hn,TextTransformation as pn,CloudServices as gn}from"ckeditor5";import{MultiRootEditor as bn,Essentials as Cn,Autoformat as xn,Bold as _n,Italic as kn,BlockQuote as yn,CKBox as wn,Heading as Ln,Image as Sn,ImageCaption as In,ImageStyle as Bn,ImageToolbar as En,ImageUpload as Tn,PictureEditing as vn,Indent as On,IndentBlock as Mn,Link as An,List as Rn,MediaEmbed as Pn,Paragraph as Fn,PasteFromOffice as Hn,Table as Dn,TableToolbar as Nn,TextTransformation as Vn,CloudServices as Un}from"ckeditor5";var P=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`;var F=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/financial-report">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_920)">
<path d="M9 41H36V12L28 5H9V41Z" fill="white"/>
<path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 24" x="13" y="35" width="19" height="2" rx="1" fill="#B4B4B4"/>
<g id="table">
<rect id="Rectangle 47" x="22" y="22" width="5" height="3" fill="#FF2B2B"/>
<rect id="Rectangle 48" x="17" y="26" width="5" height="3" fill="#9FF577"/>
<rect id="Rectangle 49" x="27" y="29" width="4" height="3" fill="#9FF577"/>
<rect id="Rectangle 46" x="13.5" y="18.5" width="18" height="14" rx="0.5" stroke="#424242"/>
<path id="Vector 3" d="M17.5 19V32" stroke="#474747"/>
<path id="Vector 4" d="M22 19V32" stroke="#474747"/>
<path id="Vector 6" d="M31 22L14 22" stroke="#474747"/>
<path id="Vector 7" d="M31 25.5L14 25.5" stroke="#474747"/>
<path id="Vector 8" d="M31 29L14 29" stroke="#474747"/>
<path id="Vector 5" d="M27 19V32" stroke="#474747"/>
</g>
<rect id="Rectangle 25" x="13" y="10" width="12" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 26" x="13" y="14" width="12" height="2" rx="1" fill="#B4B4B4"/>
</g>
<defs>
<filter id="filter0_d_1_920" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_920"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_920" result="shape"/>
</filter>
</defs>
</svg>
`;var H=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/formal-letter">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_893)">
<path d="M9 41H36V11L31 5H9V41Z" fill="white"/>
<path d="M35.25 11.2715V40.25H9.75V5.75H30.6487L35.25 11.2715Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 23" x="16" y="15" width="12" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 25" x="13" y="20" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 26" x="13" y="24" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 27" x="13" y="28" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 28" x="22" y="33" width="10" height="2" rx="1" fill="#B4B4B4"/>
<g id="badge">
<g id="Star 1" filter="url(#filter1_d_1_893)">
<path d="M35 3L36.9919 4.52723L39.4995 4.63769L40.0437 7.088L41.8937 8.78446L40.7355 11.0113L41.0622 13.5L38.7436 14.4614L37.3941 16.5778L35 15.824L32.6059 16.5778L31.2564 14.4614L28.9378 13.5L29.2645 11.0113L28.1063 8.78446L29.9563 7.088L30.5005 4.63769L33.0081 4.52723L35 3Z" fill="#FFD12D"/>
<path d="M35.4563 2.40481C35.1871 2.1984 34.8129 2.1984 34.5437 2.40481L32.7391 3.78835L30.4675 3.88842C30.1286 3.90334 29.8419 4.14391 29.7683 4.47508L29.2753 6.69485L27.5994 8.2317C27.3494 8.46098 27.2844 8.82955 27.441 9.13052L28.4901 11.1479L28.1942 13.4024C28.1501 13.7387 28.3372 14.0629 28.6505 14.1928L30.751 15.0638L31.9735 16.9811C32.1559 17.2671 32.5075 17.3951 32.8311 17.2932L35 16.6103L37.1689 17.2932C37.4925 17.3951 37.8441 17.2671 38.0265 16.9811L39.249 15.0638L41.3495 14.1928C41.6628 14.0629 41.8499 13.7387 41.8058 13.4024L41.5099 11.1479L42.559 9.13052C42.7156 8.82955 42.6506 8.46098 42.4006 8.2317L40.7247 6.69485L40.2317 4.47508C40.1581 4.14391 39.8714 3.90334 39.5325 3.88842L37.2609 3.78835L35.4563 2.40481Z" stroke="#333333" stroke-width="1.5" stroke-linejoin="round"/>
</g>
<path id="Vector 2" d="M32 11L34.5 13L38.5 8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<filter id="filter0_d_1_893" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_893"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_893" result="shape"/>
</filter>
<filter id="filter1_d_1_893" x="26.6063" y="1.5" width="16.7875" height="17.578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_893"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_893" result="shape"/>
</filter>
</defs>
</svg>
`;var D=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/resume">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>
<g id="page" filter="url(#filter0_d_1_1054)">
<path d="M9 41H36V12L28 5H9V41Z" fill="white"/>
<path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>
</g>
<rect id="Rectangle 24" x="13" y="23" width="8" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 45" x="13" y="19" width="9" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 27" x="13" y="27" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 42" x="13" y="31" width="19" height="2" rx="1" fill="#B4B4B4"/>
<rect id="Rectangle 23" x="13" y="15" width="11" height="2" rx="1" fill="#B4B4B4"/>
<g id="Union">
<mask id="path-9-inside-1_1_1054" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1747 20.3333C30.667 19.8768 30.975 19.2244 30.975 18.5C30.975 17.1193 29.8557 16 28.475 16C27.0943 16 25.975 17.1193 25.975 18.5C25.975 19.2244 26.2831 19.8768 26.7753 20.3333C26.7679 20.3364 26.7604 20.3395 26.753 20.3425C26.207 20.5687 25.7109 20.9002 25.293 21.318C24.8752 21.7359 24.5437 22.232 24.3176 22.7779C24.1553 23.1696 24.0496 23.5814 24.0028 24.001C23.9722 24.2755 24.1989 24.5 24.475 24.5L28.475 24.5H32.475C32.7512 24.5 32.9779 24.2755 32.9473 24.001C32.9005 23.5814 32.7947 23.1696 32.6325 22.7779C32.4063 22.232 32.0749 21.7359 31.657 21.318C31.2391 20.9002 30.7431 20.5687 30.1971 20.3425C30.1896 20.3395 30.1822 20.3364 30.1747 20.3333Z" fill="#FFBF9B"/>
<path d="M30.1747 20.3333L29.4947 19.6002L28.3447 20.6668L29.797 21.2593L30.1747 20.3333ZM26.7753 20.3333L27.1531 21.2593L28.6054 20.6668L27.4554 19.6002L26.7753 20.3333ZM26.753 20.3425L27.1356 21.2664L27.1357 21.2664L26.753 20.3425ZM25.293 21.318L26.0002 22.0251L26.0002 22.0251L25.293 21.318ZM24.3176 22.7779L23.3937 22.3952H23.3937L24.3176 22.7779ZM24.0028 24.001L24.9966 24.1119V24.1119L24.0028 24.001ZM24.475 24.5L24.475 23.5H24.475V24.5ZM28.475 24.5V25.5V24.5ZM32.9473 24.001L31.9534 24.1119V24.1119L32.9473 24.001ZM32.6325 22.7779L31.7086 23.1606L31.7086 23.1606L32.6325 22.7779ZM31.657 21.318L32.3641 20.6109L32.3641 20.6109L31.657 21.318ZM30.1971 20.3425L30.5798 19.4187L30.5798 19.4187L30.1971 20.3425ZM29.975 18.5C29.975 18.9346 29.7915 19.3249 29.4947 19.6002L30.8548 21.0665C31.5425 20.4286 31.975 19.5141 31.975 18.5H29.975ZM28.475 17C29.3035 17 29.975 17.6716 29.975 18.5H31.975C31.975 16.567 30.408 15 28.475 15V17ZM26.975 18.5C26.975 17.6716 27.6466 17 28.475 17V15C26.542 15 24.975 16.567 24.975 18.5H26.975ZM27.4554 19.6002C27.1586 19.3249 26.975 18.9346 26.975 18.5H24.975C24.975 19.5141 25.4076 20.4286 26.0953 21.0665L27.4554 19.6002ZM27.1357 21.2664C27.1413 21.2641 27.1471 21.2617 27.1531 21.2593L26.3976 19.4074C26.3886 19.4111 26.3795 19.4148 26.3703 19.4187L27.1357 21.2664ZM26.0002 22.0251C26.3252 21.7001 26.711 21.4423 27.1356 21.2664L26.3703 19.4187C25.703 19.6951 25.0967 20.1002 24.5859 20.6109L26.0002 22.0251ZM25.2415 23.1606C25.4173 22.736 25.6751 22.3501 26.0002 22.0251L24.5859 20.6109C24.0752 21.1216 23.6701 21.7279 23.3937 22.3952L25.2415 23.1606ZM24.9966 24.1119C25.033 23.7855 25.1153 23.4652 25.2415 23.1606L23.3937 22.3952C23.1954 22.8739 23.0662 23.3772 23.0089 23.8901L24.9966 24.1119ZM24.475 23.5C24.7172 23.5 25.0404 23.719 24.9966 24.1119L23.0089 23.8901C22.9039 24.8319 23.6806 25.5 24.475 25.5V23.5ZM28.475 23.5L24.475 23.5L24.475 25.5L28.475 25.5L28.475 23.5ZM32.475 23.5H28.475V25.5H32.475V23.5ZM31.9534 24.1119C31.9096 23.719 32.2329 23.5 32.475 23.5V25.5C33.2695 25.5 34.0462 24.8319 33.9411 23.8901L31.9534 24.1119ZM31.7086 23.1606C31.8348 23.4652 31.917 23.7855 31.9534 24.1119L33.9411 23.8901C33.8839 23.3772 33.7546 22.8739 33.5564 22.3952L31.7086 23.1606ZM30.9499 22.0251C31.2749 22.3501 31.5327 22.736 31.7086 23.1606L33.5564 22.3952C33.28 21.728 32.8748 21.1216 32.3641 20.6109L30.9499 22.0251ZM29.8144 21.2664C30.2391 21.4423 30.6249 21.7001 30.9499 22.0251L32.3641 20.6109C31.8534 20.1002 31.2471 19.6951 30.5798 19.4187L29.8144 21.2664ZM29.797 21.2593C29.8029 21.2617 29.8087 21.2641 29.8144 21.2664L30.5798 19.4187C30.5706 19.4148 30.5615 19.4111 30.5524 19.4074L29.797 21.2593Z" fill="black" mask="url(#path-9-inside-1_1_1054)"/>
</g>
</g>
<defs>
<filter id="filter0_d_1_1054" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1054"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1054" result="shape"/>
</filter>
</defs>
</svg>
`;var N=`<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icons/rich-table">
<rect id="icon-bg" width="45" height="45" rx="2" fill="#F3D1F4"/>
<g id="table-border" filter="url(#filter0_d_1_775)">
<path d="M8 40H37C38.1046 40 39 39.1046 39 38V8C39 6.89543 38.1046 6 37 6H31H7.9994C6.89484 6 6 6.89543 6 8V38C6 39.1046 6.89543 40 8 40Z" fill="white"/>
<path d="M37 39.25H8C7.30964 39.25 6.75 38.6904 6.75 38V8C6.75 7.30935 7.30934 6.75 7.9994 6.75H31H37C37.6904 6.75 38.25 7.30964 38.25 8V38C38.25 38.6904 37.6904 39.25 37 39.25Z" stroke="black" stroke-width="1.5"/>
</g>
<rect id="Rectangle 29" x="17" y="8" width="1" height="30" fill="#A8A8A8"/>
<rect id="Rectangle 35" x="37" y="19" width="1" height="29" transform="rotate(90 37 19)" fill="#A8A8A8"/>
<rect id="Rectangle 36" x="37" y="25" width="1" height="29" transform="rotate(90 37 25)" fill="#A8A8A8"/>
<rect id="Rectangle 37" x="37" y="31" width="1" height="29" transform="rotate(90 37 31)" fill="#A8A8A8"/>
<rect id="Rectangle 30" x="27" y="8" width="1" height="30" fill="#A8A8A8"/>
<rect id="Rectangle 34" x="37" y="13" width="1" height="29" transform="rotate(90 37 13)" fill="#6D6D6D"/>
<g id="Rectangle 31">
<rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/>
<rect x="8" y="8" width="9" height="5" fill="#B6E3FC"/>
</g>
<rect id="Rectangle 32" x="18" y="8" width="9" height="5" fill="#B6FCC5"/>
<rect id="Rectangle 33" x="28" y="8" width="9" height="5" fill="#FCB6E8"/>
</g>
<defs>
<filter id="filter0_d_1_775" x="6" y="6" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_775"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_775" result="shape"/>
</filter>
</defs>
</svg>
`;var O=class extends Ge{static get requires(){return[V]}async init(){this.editor.plugins.get(U).registerLinksListProvider({label:"Handy links",getListItems:()=>[{id:"cksource",href:"https://cksource.com/",label:"CKSource",icon:v},{id:"ckeditor",href:"https://ckeditor.com/ckeditor-5/",label:"CKEditor 5",icon:v},{id:"github",href:"https://github.com/ckeditor/ckeditor5/",label:"GitHub",icon:v}]})}};se.create({attachTo:document.querySelector("#full-featured-editor"),cloudServices:L,ui:{viewportOffset:{top:S()}},poweredBy:{position:"inside",side:"left",label:"This is"},plugins:[de,Ce,ce,be,we,Te,Lt,Re,Pe,_t,Be,De,Ne,Ze,pe,V,U,je,Ye,Je,at,ht,le,Ae,We,xe,_e,ke,he,ye,Le,kt,yt,xt,Se,Ie,ve,Oe,Me,Fe,He,Ve,ze,Ee,St,qe,Ke,Qe,Ct,$e,Xe,et,bt,Ue,tt,ot,ut,ft,it,rt,nt,ge,me,ue,st,lt,dt,It,Bt,ct,wt,mt,pt,fe,gt,c,O],toolbar:{items:["undo","redo","|","exportPdf","exportWord","importWord","|","formatPainter","findAndReplace","selectAll","|","heading","|","style","|",{label:"Font family",icon:"text",items:["fontSize","fontFamily","fontColor","fontBackgroundColor"]},"caseChange","|","alignment","lineHeight","-","bold","italic","underline",{label:"Formatting",icon:"text",items:["strikethrough","subscript","superscript","code","horizontalLine","|","removeFormat"]},"emoji","|","specialCharacters","|","link","bookmark","insertImage","ckbox","insertTable",{label:"Insert",icon:"plus",items:["insertFootnote","tableOfContents","insertTemplate","highlight","blockQuote","mediaEmbed","codeBlock","htmlEmbed","pageBreak"]},"|","wproofreader","|","bulletedList","numberedList","multiLevelList","todoList","outdent","indent","|","sourceEditingEnhanced","fullscreen"],shouldNotGroupWhenFull:!0},menuBar:{isVisible:!0},footnotes:{multiBlock:!1},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},style:{definitions:[{name:"Article category",element:"h3",classes:["category"]},{name:"Title",element:"h2",classes:["document-title"]},{name:"Subtitle",element:"h3",classes:["document-subtitle"]},{name:"Info box",element:"p",classes:["info-box"]},{name:"Side quote",element:"blockquote",classes:["side-quote"]},{name:"Marker",element:"span",classes:["marker"]},{name:"Spoiler",element:"span",classes:["spoiler"]},{name:"Code (dark)",element:"pre",classes:["fancy-code","fancy-code-dark"]},{name:"Code (bright)",element:"pre",classes:["fancy-code","fancy-code-bright"]}]},emoji:{definitionsUrl:"cdn"},exportPdf:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",h("full-featured-editor")],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"Tabloid",orientation:"portrait",margins:{top:"20mm",bottom:"20mm",right:"24mm",left:"24mm"}}}},exportWord:{stylesheets:["../../assets/pagination-fonts.css","../../assets/ckeditor5/ckeditor5.css","../../assets/ckeditor5-premium-features/ckeditor5-premium-features.css",h("full-featured-editor")],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margin:{top:"20mm",bottom:"20mm",right:"12mm",left:"12mm"}}}},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},lineHeight:{supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{enableSkipLevelLists:!0,properties:{styles:!0,startIndex:!0,reversed:!0}},link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},mention:{feeds:[{marker:"@",feed:["@apple","@bears","@brownie","@cake","@cake","@candy","@canes","@chocolate","@cookie","@cotton","@cream","@cupcake","@danish","@donut","@drag\xE9e","@fruitcake","@gingerbread","@gummi","@ice","@jelly-o","@liquorice","@macaroon","@marzipan","@oat","@pie","@plum","@pudding","@sesame","@snaps","@souffl\xE9","@sugar","@sweet","@topping","@wafer"],minimumCharacters:0}]},importWord:{defaultStyles:!0},root:{placeholder:"Type or paste your content here!"},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},template:{definitions:[{title:"Document with an image",description:"Simple heading with text and image.",icon:P,data:`<h2>Title of the document</h2>
						<figure class="image image-style-align-right image_resized" style="width:26.32%;">
							<img src="../../assets/img/ckeditor-logo.png">
							<figcaption>A caption of the image.</figcaption>
						</figure>
						<p>The content of the document.&nbsp;</p>`},{title:"Annual financial report",description:"A report that spells out the company's financial condition.",icon:F,data:`<figure class="table">
						<table style="border:2px solid hsl(0, 0%, 0%);">
							<thead>
								<tr>
									<th style="text-align:center;" rowspan="2">Metric name</th>
									<th style="text-align:center;" colspan="4">Year</th>
								</tr>
								<tr>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2019</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2020</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2021</th>
									<th style="background-color:hsl(90, 75%, 60%);text-align:center;">2022</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th><strong>Revenue</strong></th>
									<td>$100,000.00</td>
									<td>$120,000.00</td>
									<td>$130,000.00</td>
									<td>$180,000.00</td>
								</tr>
								<tr>
									<th style="background-color:hsl(0, 0%, 90%);"><strong>Operating expenses</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<th><strong>Interest</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<th style="background-color:hsl(0, 0%, 90%);"><strong>Net profit</strong></th>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
					</figure>`},{title:"Resume",description:"A quick overview of candidate's professional qualifications.",icon:D,data:`<figure class="image image_resized" style="width:11.42%;">
							<picture>
								<img src="../../assets/img/user-avatar.png">
							</picture>
						</figure>
						<h2 style="text-align:center;">John Doe</h2>
						<p style="text-align:center;"><i>Address, Phone, e-mail, social media</i></p>
						<h3>Profile</h3>
						<p>A quick summary of who you are and what you specialize in.</p>
						<h3>Employment history</h3>
						<ul>
							<li>
								<p><strong>MARCH 2021 - CURRENT&nbsp;</strong></p>
								<p>Position (Company name, city)</p>
								<ul>
									<li>Most important accomplishments.</li>
									<li>Most important &nbsp;responsibilities.</li>
								</ul>
							</li>
							<li>
								<p><strong>JANUARY 2019 - MARCH 2021&nbsp;</strong></p>
								<p>Position (Company name, city)</p>
								<ul>
									<li>Most important accomplishments.</li>
									<li>Most important &nbsp;responsibilities.</li>
								</ul>
							</li>
						</ul>
						<h3>Skills</h3>
						<ul>
							<li>A list of your skills.</li>
						</ul>
						<h3>Education</h3>
						<ul>
							<li>
								<p><strong>MAY 2018</strong></p>
								<p>Name of University, Degree</p>
							</li>
							<li>
								<p><strong>JULY 2015</strong></p>
								<p>Name of University, Degree</p>
							</li>
						</ul>`},{title:"Formal business letter",description:"A clear letter template for business communication.",icon:H,data:()=>`<p style="text-align:right;">${new Date().toLocaleDateString()}</p>
						<p><strong>Company name,</strong><br><strong>Street Name, Number</strong><br><strong>Post code, City</strong></p>
						<p>&nbsp;</p>
						<p>Dear [First name],</p>
						<p>Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter. Content of the letter.
						Content of the letter. Content of the letter. Content of the letter. Content of the letter.&nbsp;</p>
						<p>Kind regards,</p>
						<p>Name Surname<br>Position, Company<br>Phone, E-mail</p>`},{title:"Rich table",description:"A table with a colorful header.",icon:N,data:`<figure class="table" style="width:100%;">
						<table style="border:5px solid hsl(240, 75%, 60%);">
							<thead>
								<tr>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 1</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 2</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 3</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 4</span></th>
									<th style="background-color:hsl(240, 75%, 60%);text-align:center;"><span
											style="color:hsl(0, 0%, 100%);">Column 5</span></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
									<td style="background-color:hsl(0, 0%, 90%);">&nbsp;</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<figcaption>Caption of the table</figcaption>
					</figure>`}]},wproofreader:{serviceId:"1:Eebp63-lWHbt2-ASpHy4-AYUpy2-fo3mk4-sKrza1-NsuXy4-I1XZC2-0u2F54-aqYWd1-l3Qf14-umd",lang:"auto",srcUrl:"https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"},ckbox:{tokenUrl:w,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]}}).then(t=>{window.editor=t,window.preventPasteFromOfficeNotification=!0,document.querySelector(".ck.ck-editor__main").appendChild(t.plugins.get("WordCount").wordCountContainer)}).catch(t=>{console.error(t)});export{O as HandyLinksPlugin};
