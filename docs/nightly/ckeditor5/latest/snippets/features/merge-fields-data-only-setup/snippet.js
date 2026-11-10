import{Alignment as se,Autoformat as ne,Bold as de,Italic as ce,Underline as pe,BlockQuote as me,CKBox as ge,CKBoxImageEdit as ue,CloudServices as fe,Essentials as be,FontBackgroundColor as he,FontColor as ye,FontFamily as xe,FontSize as ke,Heading as we,Indent as Te,IndentBlock as Se,PictureEditing as Ie,Image as Ee,ImageCaption as Ce,ImageInsert as Le,ImageResize as ve,ImageStyle as Pe,ImageToolbar as _e,ImageUpload as Re,Link as De,List as Be,MediaEmbed as Ae,PageBreak as Oe,Paragraph as Fe,PasteFromOffice as Ne,SpecialCharacters as Me,SpecialCharactersEssentials as Ve,Table as Ue,TableCellProperties as Ge,TableProperties as He,TableToolbar as Ke,TextTransformation as qe,CodeBlock as Qe,Mention as Xe,Plugin as li}from"ckeditor5";import{SourceEditingEnhanced as We,ExportPdf as ze,ExportWord as je,ImportWord as Je,MergeFields as $e,Template as Ye}from"ckeditor5-premium-features";var E="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",C="https://33333.cke-cs.com/easyimage/upload/",L="33333.cke-cs.com/ws",p={tokenUrl:E,uploadUrl:C,webSocketUrl:L};var m="https://api.ckbox.io/token/demo";import{Plugin as it}from"@ckeditor/ckeditor5-core";import{Essentials as st}from"@ckeditor/ckeditor5-essentials";import{Autoformat as dt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as pt}from"@ckeditor/ckeditor5-block-quote";import{Bold as gt,Italic as ut}from"@ckeditor/ckeditor5-basic-styles";import{Heading as bt}from"@ckeditor/ckeditor5-heading";import{Image as yt,ImageCaption as xt,ImageStyle as kt,ImageToolbar as wt}from"@ckeditor/ckeditor5-image";import{Indent as St}from"@ckeditor/ckeditor5-indent";import{Link as Et}from"@ckeditor/ckeditor5-link";import{List as Lt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Pt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Rt}from"@ckeditor/ckeditor5-paragraph";import{Table as Bt,TableToolbar as At}from"@ckeditor/ckeditor5-table";function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}function u(e,t){customElements.get(e)||customElements.define(e,t)}function f(){return document.readyState==="complete"?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e(),{once:!0}))}function n(e,t){return Object.assign(document.createElement(e),t)}function w(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0})})}function b(e){try{return e&&!e.disabled?Array.from(e.cssRules):[]}catch{return[]}}var h=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;this.attachShadow({mode:"open"}).append(...this.childNodes);let t=this.getAttribute("layers")?.match(/\S+/g);this.stylesLoaded=f().then(()=>v(this.shadowRoot,t))}};u("snippet-shadow-root",h);async function v(e,t){let r=P(t),i=n("style",{textContent:":host { display: block; }"}),a=Array.from(document.styleSheets).filter(_).map(R);e.prepend(i,...a),await Promise.all(a.map(async k=>{await w(k),T(k.sheet,r)}))}function P(e){return t=>!e||e.some(r=>`${t}.`.startsWith(`${r}.`))}function _(e){return e.ownerNode instanceof HTMLElement&&b(e).length>0}function R(e){let t=e.href?n("link",{rel:"stylesheet",href:e.href}):n("style",{textContent:e.ownerNode.textContent});return t.media=e.media.mediaText,t}function T(e,t){let r=b(e);for(let i=r.length-1;i>=0;i--){let a=r[i];a instanceof CSSImportRule&&a.layerName===null?T(a.styleSheet,t):D(a,t)||e.deleteRule(i)}}function D(e,t){return e instanceof CSSLayerStatementRule||e instanceof CSSNamespaceRule||e instanceof CSSLayerBlockRule&&t(e.name)||e instanceof CSSImportRule&&t(e.layerName)}import{BalloonEditor as Kt,Essentials as qt,Autoformat as Qt,BlockToolbar as Xt,Bold as Wt,Italic as zt,BlockQuote as jt,CKBox as Jt,Heading as $t,Image as Yt,ImageCaption as Zt,ImageStyle as eo,ImageToolbar as to,ImageUpload as oo,PictureEditing as ao,Indent as ro,IndentBlock as io,Link as lo,List as so,MediaEmbed as no,Paragraph as co,PasteFromOffice as po,Table as mo,TableToolbar as go,TextTransformation as uo,CloudServices as fo}from"ckeditor5";import{BalloonEditor as xo,Essentials as ko,Autoformat as wo,Bold as To,Italic as So,BlockQuote as Io,CKBox as Eo,Heading as Co,Image as Lo,ImageCaption as vo,ImageStyle as Po,ImageToolbar as _o,ImageUpload as Ro,PictureEditing as Do,Indent as Bo,IndentBlock as Ao,Link as Oo,List as Fo,MediaEmbed as No,Paragraph as Mo,PasteFromOffice as Vo,Table as Uo,TableToolbar as Go,TextTransformation as Ho,CloudServices as Ko}from"ckeditor5";import{ClassicEditor as B,Essentials as A,Autoformat as O,Bold as F,Italic as N,BlockQuote as M,CKBox as V,Heading as U,Image as G,ImageCaption as H,ImageStyle as K,ImageToolbar as q,ImageUpload as Q,PictureEditing as X,Indent as W,IndentBlock as z,Link as j,List as J,MediaEmbed as $,Paragraph as Y,PasteFromOffice as Z,Table as ee,TableToolbar as te,TextTransformation as oe,CloudServices as ae,AutoImage as re,ImageInsert as ie,Bookmark as le}from"ckeditor5";var l=class extends B{static builtinPlugins=[A,O,F,N,M,ae,U,G,H,K,q,Q,V,W,z,j,J,$,Y,Z,X,ee,te,oe,re,ie,le];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},list:{enableSkipLevelLists:!0},language:"en"}};import{DecoupledEditor as Jo,Essentials as $o,Alignment as Yo,FontSize as Zo,FontFamily as ea,FontColor as ta,FontBackgroundColor as oa,Autoformat as aa,Bold as ra,Italic as ia,Strikethrough as la,Underline as sa,BlockQuote as na,CKBox as da,Heading as ca,Image as pa,ImageCaption as ma,ImageResize as ga,ImageStyle as ua,ImageToolbar as fa,ImageUpload as ba,PictureEditing as ha,Indent as ya,IndentBlock as xa,Link as ka,List as wa,ListProperties as Ta,MediaEmbed as Sa,Paragraph as Ia,PasteFromOffice as Ea,Table as Ca,TableToolbar as La,TextTransformation as va,CloudServices as Pa}from"ckeditor5";import{InlineEditor as Ba,Essentials as Aa,Autoformat as Oa,Bold as Fa,Italic as Na,BlockQuote as Ma,CKBox as Va,Heading as Ua,Image as Ga,ImageCaption as Ha,ImageStyle as Ka,ImageToolbar as qa,ImageUpload as Qa,PictureEditing as Xa,Indent as Wa,IndentBlock as za,Link as ja,List as Ja,MediaEmbed as $a,Paragraph as Ya,PasteFromOffice as Za,Table as er,TableToolbar as tr,TextTransformation as or,CloudServices as ar}from"ckeditor5";import{MultiRootEditor as sr,Essentials as nr,Autoformat as dr,Bold as cr,Italic as pr,BlockQuote as mr,CKBox as gr,Heading as ur,Image as fr,ImageCaption as br,ImageStyle as hr,ImageToolbar as yr,ImageUpload as xr,PictureEditing as kr,Indent as wr,IndentBlock as Tr,Link as Sr,List as Ir,MediaEmbed as Er,Paragraph as Cr,PasteFromOffice as Lr,Table as vr,TableToolbar as Pr,TextTransformation as _r,CloudServices as Rr}from"ckeditor5";var d="19.25mm",c="16mm",s=class extends l{static builtinPlugins=[...l.builtinPlugins,$e,Xe,se,be,ne,me,de,ge,ue,Qe,we,Ie,Ee,Ce,Pe,_e,Te,ce,De,Be,Fe,Ue,Ke,ze,je,Je,ke,xe,ye,he,Se,Re,Le,ve,Ae,Oe,Ne,Me,Ve,We,He,Ge,qe,pe,fe,Ye];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:m,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:c,bottom:c,right:d,left:d}}}},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:c,bottom:c,right:d,left:d}}}},importWord:{defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:p,list:{enableSkipLevelLists:!0},ui:{viewportOffset:{top:g()}}}},y=document.createElement("link");y.rel="stylesheet";y.href="../assets/spa.css";document.head.appendChild(y);var x=document.createElement("meta");x.name="x-cke-crawler-ignore-patterns";x.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(x);var S=`
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
`,I=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Ze={initialPreviewMode:"78900",previewModes:["$dataSets"],dataSets:I};s.create({attachTo:document.querySelector("#snippet-merge-fields-variables"),mergeFields:{...s.defaultConfig.mergeFields,...Ze},toolbar:{items:["insertMergeField"].concat(s.defaultConfig.toolbar.items)},root:{initialData:S}}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0}).catch(e=>{console.error(e.stack)});
