var P="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",_="https://33333.cke-cs.com/easyimage/upload/",R="33333.cke-cs.com/ws",m={tokenUrl:P,uploadUrl:_,webSocketUrl:R};var g="https://api.ckbox.io/token/demo";import{Plugin as pt}from"@ckeditor/ckeditor5-core";import{Essentials as gt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ft}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as ht}from"@ckeditor/ckeditor5-block-quote";import{Bold as xt,Italic as kt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as Tt}from"@ckeditor/ckeditor5-heading";import{Image as It,ImageCaption as Et,ImageStyle as Ct,ImageToolbar as Lt}from"@ckeditor/ckeditor5-image";import{Indent as Pt}from"@ckeditor/ckeditor5-indent";import{Link as Rt}from"@ckeditor/ckeditor5-link";import{List as Bt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Ot}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Nt}from"@ckeditor/ckeditor5-paragraph";import{Table as Vt,TableToolbar as Ut}from"@ckeditor/ckeditor5-table";function u({id:e,target:t,text:o,editor:a,tippyOptions:i}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let n=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let L of a.editing.view.document.roots)L.once("change:isFocused",(rt,it,v)=>{v&&n.destroy()});return n}function f(e,t){let o=e.items,a;return typeof t=="function"?a=o.find(t):a=o.get(t),a?a.element:void 0}function b(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function h(e,t){customElements.get(e)||customElements.define(e,t)}function y(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function d(e,t){return Object.assign(document.createElement(e),t)}function S(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function x(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var k=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=y().then(()=>D(this.shadowRoot,t))}};h("snippet-shadow-root",k);async function D(e,t){let o=B(t),a=d("style",{textContent:":host { display: block; }"}),i=Array.from(document.styleSheets).filter(A).map(O);e.prepend(a,...i),await Promise.all(i.map(async n=>{await S(n),I(n.sheet,o)}))}function B(e){return t=>!e||e.some(o=>`${t}.`.startsWith(`${o}.`))}function A(e){return e.ownerNode instanceof HTMLElement&&x(e).length>0}function O(e){let t=e.href?d("link",{rel:"stylesheet",href:e.href}):d("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function I(e,t){let o=x(e);for(let a=o.length-1;a>=0;a--){let i=o[a];i instanceof CSSImportRule&&i.layerName===null?I(i.styleSheet,t):F(i,t)||e.deleteRule(a)}}function F(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as jt,Essentials as $t,Autoformat as Jt,BlockToolbar as Yt,Bold as Zt,Italic as eo,BlockQuote as to,CKBox as oo,Heading as ao,Image as ro,ImageCaption as io,ImageStyle as lo,ImageToolbar as so,ImageUpload as no,PictureEditing as co,Indent as po,IndentBlock as mo,Link as go,List as uo,MediaEmbed as fo,Paragraph as bo,PasteFromOffice as ho,Table as yo,TableToolbar as xo,TextTransformation as ko,CloudServices as wo}from"ckeditor5";import{BalloonEditor as Eo,Essentials as Co,Autoformat as Lo,Bold as vo,Italic as Po,BlockQuote as _o,CKBox as Ro,Heading as Do,Image as Bo,ImageCaption as Ao,ImageStyle as Oo,ImageToolbar as Fo,ImageUpload as No,PictureEditing as Mo,Indent as Vo,IndentBlock as Uo,Link as Go,List as Ho,MediaEmbed as Ko,Paragraph as qo,PasteFromOffice as Qo,Table as Xo,TableToolbar as Wo,TextTransformation as zo,CloudServices as jo}from"ckeditor5";import{ClassicEditor as N,Essentials as M,Autoformat as V,Bold as U,Italic as G,BlockQuote as H,CKBox as K,Heading as q,Image as Q,ImageCaption as X,ImageStyle as W,ImageToolbar as z,ImageUpload as j,PictureEditing as $,Indent as J,IndentBlock as Y,Link as Z,List as ee,MediaEmbed as te,Paragraph as oe,PasteFromOffice as ae,Table as re,TableToolbar as ie,TextTransformation as le,CloudServices as se,AutoImage as ne,ImageInsert as de,Bookmark as ce}from"ckeditor5";var l=class extends N{static builtinPlugins=[M,V,U,G,H,se,q,Q,X,W,z,j,K,J,Y,Z,ee,te,oe,ae,$,re,ie,le,ne,de,ce];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},list:{enableSkipLevelLists:!0},language:"en"}};import{DecoupledEditor as oa,Essentials as aa,Alignment as ra,FontSize as ia,FontFamily as la,FontColor as sa,FontBackgroundColor as na,Autoformat as da,Bold as ca,Italic as pa,Strikethrough as ma,Underline as ga,BlockQuote as ua,CKBox as fa,Heading as ba,Image as ha,ImageCaption as ya,ImageResize as xa,ImageStyle as ka,ImageToolbar as wa,ImageUpload as Ta,PictureEditing as Sa,Indent as Ia,IndentBlock as Ea,Link as Ca,List as La,ListProperties as va,MediaEmbed as Pa,Paragraph as _a,PasteFromOffice as Ra,Table as Da,TableToolbar as Ba,TextTransformation as Aa,CloudServices as Oa}from"ckeditor5";import{InlineEditor as Va,Essentials as Ua,Autoformat as Ga,Bold as Ha,Italic as Ka,BlockQuote as qa,CKBox as Qa,Heading as Xa,Image as Wa,ImageCaption as za,ImageStyle as ja,ImageToolbar as $a,ImageUpload as Ja,PictureEditing as Ya,Indent as Za,IndentBlock as er,Link as tr,List as or,MediaEmbed as ar,Paragraph as rr,PasteFromOffice as ir,Table as lr,TableToolbar as sr,TextTransformation as nr,CloudServices as dr}from"ckeditor5";import{MultiRootEditor as gr,Essentials as ur,Autoformat as fr,Bold as br,Italic as hr,BlockQuote as yr,CKBox as xr,Heading as kr,Image as wr,ImageCaption as Tr,ImageStyle as Sr,ImageToolbar as Ir,ImageUpload as Er,PictureEditing as Cr,Indent as Lr,IndentBlock as vr,Link as Pr,List as _r,MediaEmbed as Rr,Paragraph as Dr,PasteFromOffice as Br,Table as Ar,TableToolbar as Or,TextTransformation as Fr,CloudServices as Nr}from"ckeditor5";import{Alignment as pe,Autoformat as me,Bold as ge,Italic as ue,Underline as fe,BlockQuote as be,CKBox as he,CKBoxImageEdit as ye,CloudServices as xe,Essentials as ke,FontBackgroundColor as we,FontColor as Te,FontFamily as Se,FontSize as Ie,Heading as Ee,Indent as Ce,IndentBlock as Le,PictureEditing as ve,Image as Pe,ImageCaption as _e,ImageInsert as Re,ImageResize as De,ImageStyle as Be,ImageToolbar as Ae,ImageUpload as Oe,Link as Fe,List as Ne,MediaEmbed as Me,PageBreak as Ve,Paragraph as Ue,PasteFromOffice as Ge,SpecialCharacters as He,SpecialCharactersEssentials as Ke,Table as qe,TableCellProperties as Qe,TableProperties as Xe,TableToolbar as We,TextTransformation as ze,CodeBlock as je,Mention as $e,Plugin as ci}from"ckeditor5";import{SourceEditingEnhanced as Je,ExportPdf as Ye,ExportWord as Ze,ImportWord as et,MergeFields as tt,Template as ot}from"ckeditor5-premium-features";var c="19.25mm",p="16mm",s=class extends l{static builtinPlugins=[...l.builtinPlugins,tt,$e,pe,ke,me,be,ge,he,ye,je,Ee,ve,Pe,_e,Be,Ae,Ce,ue,Fe,Ne,Ue,qe,We,Ye,Ze,et,Ie,Se,Te,we,Le,Oe,Re,De,Me,Ve,Ge,He,Ke,Je,Xe,Qe,ze,fe,xe,ot];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:p,bottom:p,right:c,left:c}}}},importWord:{defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:m,list:{enableSkipLevelLists:!0},ui:{viewportOffset:{top:b()}}}},w=document.createElement("link");w.rel="stylesheet";w.href="../assets/spa.css";document.head.appendChild(w);var T=document.createElement("meta");T.name="x-cke-crawler-ignore-patterns";T.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(T);var E=`
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
`,C=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var at={dataSets:C,previewModes:["$labels","$dataSets"]};s.create({attachTo:document.querySelector("#snippet-merge-fields-datasets"),mergeFields:{...s.defaultConfig.mergeFields,...at},toolbar:{items:["insertMergeField","previewMergeFields"].concat(s.defaultConfig.toolbar.items)},root:{initialData:E}}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,u({target:f(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Merge fields preview"),text:"Click to change preview mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
