var v="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",P="https://33333.cke-cs.com/easyimage/upload/",R="33333.cke-cs.com/ws",m={tokenUrl:v,uploadUrl:P,webSocketUrl:R};var g="https://api.ckbox.io/token/demo";import{Plugin as ct}from"@ckeditor/ckeditor5-core";import{Essentials as mt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ut}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as bt}from"@ckeditor/ckeditor5-block-quote";import{Bold as yt,Italic as xt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as wt}from"@ckeditor/ckeditor5-heading";import{Image as St,ImageCaption as It,ImageStyle as Ct,ImageToolbar as Et}from"@ckeditor/ckeditor5-image";import{Indent as vt}from"@ckeditor/ckeditor5-indent";import{Link as Rt}from"@ckeditor/ckeditor5-link";import{List as Bt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as At}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ft}from"@ckeditor/ckeditor5-paragraph";import{Table as Mt,TableToolbar as Vt}from"@ckeditor/ckeditor5-table";function u({id:e,target:t,text:o,editor:a,tippyOptions:i}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let n=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let E of a.editing.view.document.roots)E.once("change:isFocused",(at,rt,L)=>{L&&n.destroy()});return n}function f(e,t){let o=e.items,a;return typeof t=="function"?a=o.find(t):a=o.get(t),a?a.element:void 0}function b(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function h(e,t){customElements.get(e)||customElements.define(e,t)}function y(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function d(e,t){return Object.assign(document.createElement(e),t)}function S(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function x(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var k=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=y().then(()=>_(this.shadowRoot,t))}};h("snippet-shadow-root",k);async function _(e,t){let o=B(t),a=d("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(D).map(A);e.prepend(a,...i),await Promise.all(i.map(async n=>{await S(n),I(n.sheet,o)}))}function B(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function D(e){return e.ownerNode instanceof HTMLElement&&x(e).length>0}function A(e){let t=e.href?d("link",{rel:"stylesheet",href:e.href}):d("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function I(e,t){let o=x(e);for(let a=o.length-1;a>=0;a--){let i=o[a];i instanceof CSSImportRule&&i.layerName===null?I(i.styleSheet,t):O(i,t)||e.deleteRule(a)}}function O(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as zt,Essentials as jt,Autoformat as Jt,BlockToolbar as $t,Bold as Yt,Italic as Zt,BlockQuote as eo,CKBox as to,Heading as oo,Image as ao,ImageCaption as ro,ImageStyle as io,ImageToolbar as lo,ImageUpload as so,PictureEditing as no,Indent as co,IndentBlock as po,Link as mo,List as go,MediaEmbed as uo,Paragraph as fo,PasteFromOffice as bo,Table as ho,TableToolbar as yo,TextTransformation as xo,CloudServices as ko}from"ckeditor5";import{BalloonEditor as Io,Essentials as Co,Autoformat as Eo,Bold as Lo,Italic as vo,BlockQuote as Po,CKBox as Ro,Heading as _o,Image as Bo,ImageCaption as Do,ImageStyle as Ao,ImageToolbar as Oo,ImageUpload as Fo,PictureEditing as No,Indent as Mo,IndentBlock as Vo,Link as Uo,List as Go,MediaEmbed as Ho,Paragraph as Ko,PasteFromOffice as qo,Table as Qo,TableToolbar as Wo,TextTransformation as Xo,CloudServices as zo}from"ckeditor5";import{ClassicEditor as F,Essentials as N,Autoformat as M,Bold as V,Italic as U,BlockQuote as G,CKBox as H,Heading as K,Image as q,ImageCaption as Q,ImageStyle as W,ImageToolbar as X,ImageUpload as z,PictureEditing as j,Indent as J,IndentBlock as $,Link as Y,List as Z,MediaEmbed as ee,Paragraph as te,PasteFromOffice as oe,Table as ae,TableToolbar as re,TextTransformation as ie,CloudServices as le,AutoImage as se,ImageInsert as ne,Bookmark as de}from"ckeditor5";var l=class extends F{static builtinPlugins=[N,M,V,U,G,le,K,q,Q,W,X,z,H,J,$,Y,Z,ee,te,oe,j,ae,re,ie,se,ne,de];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},list:{enableSkipLevelLists:!0},language:"en"}};import{DecoupledEditor as ta,Essentials as oa,Alignment as aa,FontSize as ra,FontFamily as ia,FontColor as la,FontBackgroundColor as sa,Autoformat as na,Bold as da,Italic as ca,Strikethrough as pa,Underline as ma,BlockQuote as ga,CKBox as ua,Heading as fa,Image as ba,ImageCaption as ha,ImageResize as ya,ImageStyle as xa,ImageToolbar as ka,ImageUpload as wa,PictureEditing as Ta,Indent as Sa,IndentBlock as Ia,Link as Ca,List as Ea,ListProperties as La,MediaEmbed as va,Paragraph as Pa,PasteFromOffice as Ra,Table as _a,TableToolbar as Ba,TextTransformation as Da,CloudServices as Aa}from"ckeditor5";import{InlineEditor as Ma,Essentials as Va,Autoformat as Ua,Bold as Ga,Italic as Ha,BlockQuote as Ka,CKBox as qa,Heading as Qa,Image as Wa,ImageCaption as Xa,ImageStyle as za,ImageToolbar as ja,ImageUpload as Ja,PictureEditing as $a,Indent as Ya,IndentBlock as Za,Link as er,List as tr,MediaEmbed as or,Paragraph as ar,PasteFromOffice as rr,Table as ir,TableToolbar as lr,TextTransformation as sr,CloudServices as nr}from"ckeditor5";import{MultiRootEditor as mr,Essentials as gr,Autoformat as ur,Bold as fr,Italic as br,BlockQuote as hr,CKBox as yr,Heading as xr,Image as kr,ImageCaption as wr,ImageStyle as Tr,ImageToolbar as Sr,ImageUpload as Ir,PictureEditing as Cr,Indent as Er,IndentBlock as Lr,Link as vr,List as Pr,MediaEmbed as Rr,Paragraph as _r,PasteFromOffice as Br,Table as Dr,TableToolbar as Ar,TextTransformation as Or,CloudServices as Fr}from"ckeditor5";import{Alignment as ce,Autoformat as pe,Bold as me,Italic as ge,Underline as ue,BlockQuote as fe,CKBox as be,CKBoxImageEdit as he,CloudServices as ye,Essentials as xe,FontBackgroundColor as ke,FontColor as we,FontFamily as Te,FontSize as Se,Heading as Ie,Indent as Ce,IndentBlock as Ee,PictureEditing as Le,Image as ve,ImageCaption as Pe,ImageInsert as Re,ImageResize as _e,ImageStyle as Be,ImageToolbar as De,ImageUpload as Ae,Link as Oe,List as Fe,MediaEmbed as Ne,PageBreak as Me,Paragraph as Ve,PasteFromOffice as Ue,SpecialCharacters as Ge,SpecialCharactersEssentials as He,Table as Ke,TableCellProperties as qe,TableProperties as Qe,TableToolbar as We,TextTransformation as Xe,CodeBlock as ze,Mention as je,Plugin as di}from"ckeditor5";import{SourceEditingEnhanced as Je,ExportPdf as $e,ExportWord as Ye,ImportWord as Ze,MergeFields as et,Template as tt}from"ckeditor5-premium-features";var c="19.25mm",p="16mm",s=class extends l{static builtinPlugins=[...l.builtinPlugins,et,je,ce,xe,pe,fe,me,be,he,ze,Ie,Le,ve,Pe,Be,De,Ce,ge,Oe,Fe,Ve,Ke,We,$e,Ye,Ze,Se,Te,we,ke,Ee,Ae,Re,_e,Ne,Me,Ue,Ge,He,Je,Qe,qe,Xe,ue,ye,tt];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},importWord:{defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:m,list:{enableSkipLevelLists:!0},ui:{viewportOffset:{top:b()}}}},w=document.createElement("link");w.rel="stylesheet";w.href="../assets/spa.css";document.head.appendChild(w);var T=document.createElement("meta");T.name="x-cke-crawler-ignore-patterns";T.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(T);var C=`
	<figure class="image image_resized" style="width:100%;">
		<img src="https://ckeditor.com/assets/images/ckdemo/merge-fields/serenity-springs.png"
			alt="Serenity Springs Resort logo." />
	</figure>
	<p>{{guestTitle}} {{guestLastName}},</p>
	<p>Your upcoming stay at Serenity Springs Resort is the perfect opportunity to unwind and rejuvenate. Take in the
		beauty of your accommodations and prepare for a truly relaxing experience.
	</p>
	<figure class="image" width="600" height="400">
		<img src="{{hotelRoomPhoto}}" />
		<figcaption>Quick look into your {{roomType}} experience</figcaption>
	</figure>
	<p>To make your visit even more special, we\u2019re pleased to offer you exclusive perks for our luxurious spa services.</p>
	<p><b>Spa Highlights:</b></p>
	<ul>
		<li><b>Complimentary {{complimentaryDuration}} Massage:</b> Relax and let your stress melt away.</li>
		<li><b>{{discount}}  Off Any Spa Package:</b> Indulge in our full range of treatments, from facials to body wraps.</li>
	</ul>
	{{additionalValueProposition}}
	<p><b>Reminder:</b> Our spa is popular, so we recommend booking your treatments in advance to secure your preferred time.</p>
	<p>To book your spa experience, simply call us at {{resortPhone}}. We look forward to pampering you during your stay!</p>
	<p>
		<i>Warm regards,<br />
		The Serenity Springs Resort Team</i>
	</p>
`,mi=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var ot={previewModes:["$labels"]};s.create({attachTo:document.querySelector("#snippet-merge-fields-labels"),mergeFields:{...s.defaultConfig.mergeFields,...ot},toolbar:{items:["insertMergeField"].concat(s.defaultConfig.toolbar.items),shouldNotGroupWhenFull:!0},root:{initialData:C}}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,u({target:f(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:"Click to add a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
