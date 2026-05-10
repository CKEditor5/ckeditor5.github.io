import{Alignment as Q,Autoformat as X,Bold as z,Italic as W,Underline as j,BlockQuote as J,CKBox as $,CKBoxImageEdit as Y,CloudServices as Z,Essentials as ee,FontBackgroundColor as te,FontColor as oe,FontFamily as ae,FontSize as re,Heading as ie,Indent as le,IndentBlock as se,PictureEditing as ne,Image as de,ImageCaption as ce,ImageInsert as pe,ImageResize as me,ImageStyle as ge,ImageToolbar as ue,ImageUpload as fe,Link as be,List as he,MediaEmbed as ye,PageBreak as xe,Paragraph as ke,PasteFromOffice as Te,SpecialCharacters as we,SpecialCharactersEssentials as Ie,Table as Se,TableCellProperties as Ee,TableProperties as Ce,TableToolbar as ve,TextTransformation as Le,CodeBlock as Pe,Mention as _e,Plugin as Vr}from"ckeditor5";import{SourceEditingEnhanced as De,ExportPdf as Be,ExportWord as Ae,ImportWord as Re,MergeFields as Fe,Template as Oe}from"ckeditor5-premium-features";var u="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",f="https://33333.cke-cs.com/easyimage/upload/",b="33333.cke-cs.com/ws",l={tokenUrl:u,uploadUrl:f,webSocketUrl:b};var s="https://api.ckbox.io/token/demo";import{Plugin as He}from"@ckeditor/ckeditor5-core";import{Essentials as Qe}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ze}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as je}from"@ckeditor/ckeditor5-block-quote";import{Bold as $e,Italic as Ye}from"@ckeditor/ckeditor5-basic-styles";import{Heading as et}from"@ckeditor/ckeditor5-heading";import{Image as ot,ImageCaption as at,ImageStyle as rt,ImageToolbar as it}from"@ckeditor/ckeditor5-image";import{Indent as st}from"@ckeditor/ckeditor5-indent";import{Link as dt}from"@ckeditor/ckeditor5-link";import{List as pt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as gt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as ft}from"@ckeditor/ckeditor5-paragraph";import{Table as ht,TableToolbar as yt}from"@ckeditor/ckeditor5-table";function n(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as St,Essentials as Et,Autoformat as Ct,BlockToolbar as vt,Bold as Lt,Italic as Pt,BlockQuote as _t,CKBox as Dt,Heading as Bt,Image as At,ImageCaption as Rt,ImageStyle as Ft,ImageToolbar as Ot,ImageUpload as Mt,PictureEditing as Nt,Indent as Vt,IndentBlock as Ut,Link as Gt,List as Kt,MediaEmbed as Ht,Paragraph as qt,PasteFromOffice as Qt,Table as Xt,TableToolbar as zt,TextTransformation as Wt,CloudServices as jt}from"ckeditor5";import{BalloonEditor as Zt,Essentials as eo,Autoformat as to,Bold as oo,Italic as ao,BlockQuote as ro,CKBox as io,Heading as lo,Image as so,ImageCaption as no,ImageStyle as co,ImageToolbar as po,ImageUpload as mo,PictureEditing as go,Indent as uo,IndentBlock as fo,Link as bo,List as ho,MediaEmbed as yo,Paragraph as xo,PasteFromOffice as ko,Table as To,TableToolbar as wo,TextTransformation as Io,CloudServices as So}from"ckeditor5";import{ClassicEditor as h,Essentials as y,Autoformat as x,Bold as k,Italic as T,BlockQuote as w,CKBox as I,Heading as S,Image as E,ImageCaption as C,ImageStyle as v,ImageToolbar as L,ImageUpload as P,PictureEditing as _,Indent as D,IndentBlock as B,Link as A,List as R,MediaEmbed as F,Paragraph as O,PasteFromOffice as M,Table as N,TableToolbar as V,TextTransformation as U,CloudServices as G,AutoImage as K,ImageInsert as H,Bookmark as q}from"ckeditor5";var o=class extends h{static builtinPlugins=[y,x,k,T,w,G,S,E,C,v,L,P,I,D,B,A,R,F,O,M,_,N,V,U,K,H,q];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Do,Essentials as Bo,Alignment as Ao,FontSize as Ro,FontFamily as Fo,FontColor as Oo,FontBackgroundColor as Mo,Autoformat as No,Bold as Vo,Italic as Uo,Strikethrough as Go,Underline as Ko,BlockQuote as Ho,CKBox as qo,Heading as Qo,Image as Xo,ImageCaption as zo,ImageResize as Wo,ImageStyle as jo,ImageToolbar as Jo,ImageUpload as $o,PictureEditing as Yo,Indent as Zo,IndentBlock as ea,Link as ta,List as oa,ListProperties as aa,MediaEmbed as ra,Paragraph as ia,PasteFromOffice as la,Table as sa,TableToolbar as na,TextTransformation as da,CloudServices as ca}from"ckeditor5";import{InlineEditor as ua,Essentials as fa,Autoformat as ba,Bold as ha,Italic as ya,BlockQuote as xa,CKBox as ka,Heading as Ta,Image as wa,ImageCaption as Ia,ImageStyle as Sa,ImageToolbar as Ea,ImageUpload as Ca,PictureEditing as va,Indent as La,IndentBlock as Pa,Link as _a,List as Da,MediaEmbed as Ba,Paragraph as Aa,PasteFromOffice as Ra,Table as Fa,TableToolbar as Oa,TextTransformation as Ma,CloudServices as Na}from"ckeditor5";import{MultiRootEditor as Ka,Essentials as Ha,Autoformat as qa,Bold as Qa,Italic as Xa,BlockQuote as za,CKBox as Wa,Heading as ja,Image as Ja,ImageCaption as $a,ImageStyle as Ya,ImageToolbar as Za,ImageUpload as er,PictureEditing as tr,Indent as or,IndentBlock as ar,Link as rr,List as ir,MediaEmbed as lr,Paragraph as sr,PasteFromOffice as nr,Table as dr,TableToolbar as cr,TextTransformation as pr,CloudServices as mr}from"ckeditor5";var r="19.25mm",i="16mm",a=class extends o{static builtinPlugins=[...o.builtinPlugins,Fe,_e,Q,ee,X,J,z,$,Y,Pe,ie,ne,de,ce,ge,ue,le,W,be,he,ke,Se,ve,Be,Ae,Re,re,ae,oe,te,se,fe,pe,me,ye,xe,Te,we,Ie,De,Ce,Ee,Le,j,Z,Oe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:g=>({html:g,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:s,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:i,bottom:i,right:r,left:r}}},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:i,bottom:i,right:r,left:r}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:l,ui:{viewportOffset:{top:n()}}}},d=document.createElement("link");d.rel="stylesheet";d.href="../assets/spa.css";document.head.appendChild(d);var c=document.createElement("meta");c.name="x-cke-crawler-ignore-patterns";c.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(c);var p=`
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
`,m=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Me={initialPreviewMode:"78900",previewModes:["$dataSets"],dataSets:m};a.create({attachTo:document.querySelector("#snippet-merge-fields-variables"),mergeFields:{...a.defaultConfig.mergeFields,...Me},toolbar:{items:["insertMergeField"].concat(a.defaultConfig.toolbar.items)},root:{initialData:p}}).then(t=>{window.editor=t,window.preventPasteFromOfficeNotification=!0}).catch(t=>{console.error(t.stack)});
