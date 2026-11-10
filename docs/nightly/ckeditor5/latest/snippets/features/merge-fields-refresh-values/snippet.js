var L="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",P="https://33333.cke-cs.com/easyimage/upload/",R="33333.cke-cs.com/ws",g={tokenUrl:L,uploadUrl:P,webSocketUrl:R};var u="https://api.ckbox.io/token/demo";import{Plugin as mt}from"@ckeditor/ckeditor5-core";import{Essentials as ut}from"@ckeditor/ckeditor5-essentials";import{Autoformat as bt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as yt}from"@ckeditor/ckeditor5-block-quote";import{Bold as kt,Italic as wt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as St}from"@ckeditor/ckeditor5-heading";import{Image as Ct,ImageCaption as Et,ImageStyle as vt,ImageToolbar as Lt}from"@ckeditor/ckeditor5-image";import{Indent as Rt}from"@ckeditor/ckeditor5-indent";import{Link as _t}from"@ckeditor/ckeditor5-link";import{List as Ft}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Ot}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Mt}from"@ckeditor/ckeditor5-paragraph";import{Table as Ut,TableToolbar as Gt}from"@ckeditor/ckeditor5-table";function f({id:e,target:t,text:o,editor:a,tippyOptions:i}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let l=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let E of a.editing.view.document.roots)E.once("change:isFocused",(it,lt,v)=>{v&&l.destroy()});return l}function b(e,t){let o=e.items,a;return typeof t=="function"?a=o.find(t):a=o.get(t),a?a.element:void 0}function h(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function y(e,t){customElements.get(e)||customElements.define(e,t)}function x(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function d(e,t){return Object.assign(document.createElement(e),t)}function I(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function k(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var w=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=x().then(()=>B(this.shadowRoot,t))}};y("snippet-shadow-root",w);async function B(e,t){let o=_(t),a=d("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(D).map(F);e.prepend(a,...i),await Promise.all(i.map(async l=>{await I(l),C(l.sheet,o)}))}function _(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function D(e){return e.ownerNode instanceof HTMLElement&&k(e).length>0}function F(e){let t=e.href?d("link",{rel:"stylesheet",href:e.href}):d("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function C(e,t){let o=k(e);for(let a=o.length-1;a>=0;a--){let i=o[a];i instanceof CSSImportRule&&i.layerName===null?C(i.styleSheet,t):A(i,t)||e.deleteRule(a)}}function A(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as $t,Essentials as Jt,Autoformat as Yt,BlockToolbar as Zt,Bold as eo,Italic as to,BlockQuote as oo,CKBox as ao,Heading as ro,Image as io,ImageCaption as lo,ImageStyle as so,ImageToolbar as no,ImageUpload as co,PictureEditing as po,Indent as mo,IndentBlock as go,Link as uo,List as fo,MediaEmbed as bo,Paragraph as ho,PasteFromOffice as yo,Table as xo,TableToolbar as ko,TextTransformation as wo,CloudServices as To}from"ckeditor5";import{BalloonEditor as Eo,Essentials as vo,Autoformat as Lo,Bold as Po,Italic as Ro,BlockQuote as Bo,CKBox as _o,Heading as Do,Image as Fo,ImageCaption as Ao,ImageStyle as Oo,ImageToolbar as No,ImageUpload as Mo,PictureEditing as Vo,Indent as Uo,IndentBlock as Go,Link as Ho,List as Ko,MediaEmbed as qo,Paragraph as Qo,PasteFromOffice as Xo,Table as Wo,TableToolbar as zo,TextTransformation as jo,CloudServices as $o}from"ckeditor5";import{ClassicEditor as O,Essentials as N,Autoformat as M,Bold as V,Italic as U,BlockQuote as G,CKBox as H,Heading as K,Image as q,ImageCaption as Q,ImageStyle as X,ImageToolbar as W,ImageUpload as z,PictureEditing as j,Indent as $,IndentBlock as J,Link as Y,List as Z,MediaEmbed as ee,Paragraph as te,PasteFromOffice as oe,Table as ae,TableToolbar as re,TextTransformation as ie,CloudServices as le,AutoImage as se,ImageInsert as ne,Bookmark as de}from"ckeditor5";var s=class extends O{static builtinPlugins=[N,M,V,U,G,le,K,q,Q,X,W,z,H,$,J,Y,Z,ee,te,oe,j,ae,re,ie,se,ne,de];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},list:{enableSkipLevelLists:!0},language:"en"}};import{DecoupledEditor as aa,Essentials as ra,Alignment as ia,FontSize as la,FontFamily as sa,FontColor as na,FontBackgroundColor as da,Autoformat as ca,Bold as pa,Italic as ma,Strikethrough as ga,Underline as ua,BlockQuote as fa,CKBox as ba,Heading as ha,Image as ya,ImageCaption as xa,ImageResize as ka,ImageStyle as wa,ImageToolbar as Ta,ImageUpload as Sa,PictureEditing as Ia,Indent as Ca,IndentBlock as Ea,Link as va,List as La,ListProperties as Pa,MediaEmbed as Ra,Paragraph as Ba,PasteFromOffice as _a,Table as Da,TableToolbar as Fa,TextTransformation as Aa,CloudServices as Oa}from"ckeditor5";import{InlineEditor as Ua,Essentials as Ga,Autoformat as Ha,Bold as Ka,Italic as qa,BlockQuote as Qa,CKBox as Xa,Heading as Wa,Image as za,ImageCaption as ja,ImageStyle as $a,ImageToolbar as Ja,ImageUpload as Ya,PictureEditing as Za,Indent as er,IndentBlock as tr,Link as or,List as ar,MediaEmbed as rr,Paragraph as ir,PasteFromOffice as lr,Table as sr,TableToolbar as nr,TextTransformation as dr,CloudServices as cr}from"ckeditor5";import{MultiRootEditor as ur,Essentials as fr,Autoformat as br,Bold as hr,Italic as yr,BlockQuote as xr,CKBox as kr,Heading as wr,Image as Tr,ImageCaption as Sr,ImageStyle as Ir,ImageToolbar as Cr,ImageUpload as Er,PictureEditing as vr,Indent as Lr,IndentBlock as Pr,Link as Rr,List as Br,MediaEmbed as _r,Paragraph as Dr,PasteFromOffice as Fr,Table as Ar,TableToolbar as Or,TextTransformation as Nr,CloudServices as Mr}from"ckeditor5";import{Alignment as ce,Autoformat as pe,Bold as me,Italic as ge,Underline as ue,BlockQuote as fe,CKBox as be,CKBoxImageEdit as he,CloudServices as ye,Essentials as xe,FontBackgroundColor as ke,FontColor as we,FontFamily as Te,FontSize as Se,Heading as Ie,Indent as Ce,IndentBlock as Ee,PictureEditing as ve,Image as Le,ImageCaption as Pe,ImageInsert as Re,ImageResize as Be,ImageStyle as _e,ImageToolbar as De,ImageUpload as Fe,Link as Ae,List as Oe,MediaEmbed as Ne,PageBreak as Me,Paragraph as Ve,PasteFromOffice as Ue,SpecialCharacters as Ge,SpecialCharactersEssentials as He,Table as Ke,TableCellProperties as qe,TableProperties as Qe,TableToolbar as Xe,TextTransformation as We,CodeBlock as ze,Mention as je,Plugin as $e}from"ckeditor5";import{SourceEditingEnhanced as Je,ExportPdf as Ye,ExportWord as Ze,ImportWord as et,MergeFields as tt,Template as ot}from"ckeditor5-premium-features";var c="19.25mm",p="16mm",n=class extends s{static builtinPlugins=[...s.builtinPlugins,tt,je,ce,xe,pe,fe,me,be,he,ze,Ie,ve,Le,Pe,_e,De,Ce,ge,Ae,Oe,Ve,Ke,Xe,Ye,Ze,et,Se,Te,we,ke,Ee,Fe,Re,Be,Ne,Me,Ue,Ge,He,Je,Qe,qe,We,ue,ye,ot];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
									<p style="text-align:center;"><strong>Reservation Details</strong></p>
									<figure class="table">
										<table>
											<tbody>
												<tr>
													<th style="padding:5px 10px;">
														Check-In Date
													</th>
													<td style="padding:5px 10px;text-align:center;">
														01/01/2000
													</td>
												</tr>
												<tr>
													<th style="padding:5px 10px;">
														Reservation Number
													</th>
													<td style="padding:5px 10px;text-align:center;">
														XXXXXXXX
													</td>
												</tr>
												<tr>
													<th style="padding:5px 10px;">
														Number of Guests
													</th>
													<td style="padding:5px 10px;text-align:center;">
														0
													</td>
												</tr>
											</tbody>
										</table>
									</figure>`,type:"block"},{id:"additionalValueProposition",label:"Spa recommendations box",defaultValue:`
									<figure style="width:100%;display:flex;">
										<table
											style="border-width:0;background:#ebe8e1;
											text-wrap: balance;width:100%;">
											<colgroup>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
												<col style="width:11.12%"></col>
											</colgroup>
											<tbody>
												<tr>
												<td colspan="2"
													style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
													<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg"
														alt="" />
													</td>
												<td colspan="5"
													style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
													<h3 class="ck-recomendations-header-text">
														Spa offers hand-picked for you
														<br />
														with a special X% discount
													</h3>
												</td>
												<td colspan="2"
													style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
														<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg"
															alt="" />
													</td>
												</tr>
											<tr>
												<td colspan="3"
													style="width:33.36%;border-style:none;text-align:center;
													background: #ddd8cd;padding: 16px;">
													<h4 class="ck-offer-header">Spa Offer #1</h4>
													<p class="ck-offer_paragraph">Description of the offer.</p>
												</td>
												<td colspan="3" style="width:33.36%;border-style:none;
													text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
													<h4 class="ck-offer-header">Spa Offer #2</h4>
													<p class="ck-offer_paragraph">Description of the offer.</p></td>
												<td colspan="3" style="width:33.36%;border-style:none;
													text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
													<h4 class="ck-offer-header">Spa Offer #3</h4>
													<p class="ck-offer_paragraph">Description of the offer.</p></td>
											</tr>
											</tbody>
										</table>
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:u,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},importWord:{defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:g,list:{enableSkipLevelLists:!0},ui:{viewportOffset:{top:h()}}}},T=document.createElement("link");T.rel="stylesheet";T.href="../assets/spa.css";document.head.appendChild(T);var at="https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",m=class extends $e{static get pluginName(){return"IntervalFetcher"}mergeFieldsData={};init(){this._updateMergeFieldsData(),setInterval(()=>this._updateMergeFieldsData(),5e3)}async _updateMergeFieldsData(){try{let o=await(await fetch(at)).json(),a=new Date(o.closeTime),l={bitcoinRate:"$"+Number(o.lastPrice).toFixed(2)+" - "+a.toLocaleString()};this.mergeFieldsData=l,this.editor.plugins.get("MergeFieldsEditing").refreshMergeFields()}catch(t){console.error(t)}}},S=document.createElement("meta");S.name="x-cke-crawler-ignore-patterns";S.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(S);var gi=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
				<p style="text-align:center;"><strong>Reservation Details</strong></p>
				<figure class="table">
					<table>
						<tbody>
							<tr>
								<th style="padding:5px 10px;">
									Check-In Date
								</th>
								<td style="padding:5px 10px;text-align:center;">
									${new Date(2024,7,22).toLocaleDateString()}
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Reservation Number
								</th>
								<td style="padding:5px 10px;text-align:center;">
									Y2JKH5G1Z
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Number of Guests
								</th>
								<td style="padding:5px 10px;text-align:center;">
									2
								</td>
							</tr>
						</tbody>
					</table>
			</figure>`,additionalValueProposition:`
				<figure style="width:100%;display:flex;">
					<table style="
					border-width:0;background:#ebe8e1;
					text-wrap: balance;width:100%;">
						<colgroup>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
						</colgroup>
						<tbody>
							<tr>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
								<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg" alt="" />
								</td>
							<td colspan="5" style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
								<h3 class="ck-recomendations-header-text">
									Spa offers hand-picked for you
									<br />
									with a special 10% discount
								</h3>
							</td>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
									<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg" alt="" />
								</td>
							</tr>
						<tr>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;padding: 16px;">
								<h4 class="ck-offer-header">Signature Relaxation Package</h4>
								<p class="ck-offer_paragraph">Luxurious day of pampering: massage, facial, body wrap.</p>
							</td>
							<td colspan="3"
								style="width:33.36%;border-style:none;
								text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Couples' Retreat</h4>
								<p class="ck-offer_paragraph">Relaxing escape for two: massage, bath, scrub.</p></td>
							<td colspan="3"
								style="width:33.36%;border-style:none;
								text-align:center;background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Anti-Aging Treatment</h4>
								<p class="ck-offer_paragraph">Combat aging: facial, massage, body wrap.</p></td>
						</tr>
						</tbody>
					</table>
				</figure>`}},{id:"78901",label:"Kate Smith",values:{guestTitle:"Ms.",guestName:"Kate",guestLastName:"Smith",reservationNumber:"GRJKCCG23",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room.jpg",arrivalDate:new Date(2024,4,12).toLocaleDateString(),numberOfGuests:"3",numberOfNights:"10",roomType:"Apartment",discount:"30%",complimentaryDuration:"30 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
				<p style="text-align:center;"><strong>Reservation Details</strong></p>
				<figure class="table">
					<table>
						<tbody>
							<tr>
								<th style="padding:5px 10px;">
									Check-In Date
								</th>
								<td style="padding:5px 10px;text-align:center;">
									${new Date(2024,4,12).toLocaleDateString()}
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Reservation Number
								</th>
								<td style="padding:5px 10px;text-align:center;">
									GRJKCCG23
								</td>
							</tr>
							<tr>
								<th style="padding:5px 10px;">
									Number of Guests
								</th>
								<td style="padding:5px 10px;text-align:center;">
									3
								</td>
							</tr>
						</tbody>
					</table>
				</figure>`,additionalValueProposition:`
				<figure style="width:100%;display:flex;">
					<table style="
					border-width:0;background:#ebe8e1;
					text-wrap: balance;width:100%;">
						<colgroup>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
							<col style="width:11.12%"></col>
						</colgroup>
						<tbody>
							<tr>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:left;border-bottom: 4px solid #fff;">
								<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/left-edge.svg" alt="" />
								</td>
							<td colspan="5" style="width:55.6%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
								<h3 class="ck-recomendations-header-text">
									Spa offers hand-picked for you
									<br />
									with a special 20% discount
								</h3>
							</td>
							<td colspan="2" style="width:22.24%;border-style:none;text-align:right;border-bottom: 4px solid #fff;">
									<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/right-edge.svg" alt="" />
								</td>
							</tr>
						<tr>
							<td colspan="3" style="width:33.36%;border-style:none;text-align:center;background: #ddd8cd;padding: 16px;">
								<h4 class="ck-offer-header">Harmony Found: Thai Massage and Foot Reflexology</h4>
								<p class="ck-offer_paragraph">Blissful Thai massage & foot reflexology.</p>
							</td>
							<td colspan="3" style="
								width:33.36%;border-style:none;text-align:center;
								background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Twin Tranquility: Couples' Thai Massage</h4>
								<p class="ck-offer_paragraph">Relaxing massage for two.</p></td>
							<td colspan="3" style="
								width:33.36%;border-style:none;text-align:center;
								background: #ddd8cd;border-left: 4px solid #fff;padding: 16px;">
								<h4 class="ck-offer-header">Serenity Through Scent: Aromatherapy Massage</h4>
								<p class="ck-offer_paragraph">Aromatic massage for peace.</p></td>
						</tr>
						</tbody>
					</table>
				</figure>`}}];var rt={previewModes:["$defaultValues"],initialPreviewMode:"$defaultValues",definitions:[{id:"bitcoinRate",label:"Bitcoin rate",defaultValue:e=>e.plugins.has("IntervalFetcher")?e.plugins.get("IntervalFetcher").mergeFieldsData.bitcoinRate||"Fetching data...":"Data not available."}]};n.create({attachTo:document.querySelector("#snippet-merge-fields-refresh-values"),mergeFields:{...n.defaultConfig.mergeFields,...rt},toolbar:{items:["insertMergeField"].concat(n.defaultConfig.toolbar.items)},extraPlugins:[m]}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,f({target:b(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:'"Bitcoin rate" merge field value refreshes every 5 seconds.',editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
