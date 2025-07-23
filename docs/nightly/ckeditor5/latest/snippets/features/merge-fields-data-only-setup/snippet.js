import{Alignment as Q,Autoformat as X,Bold as z,Italic as W,Underline as j,BlockQuote as J,CKBox as Y,CKBoxImageEdit as $,CloudServices as Z,Essentials as ee,FontBackgroundColor as te,FontColor as oe,FontFamily as ae,FontSize as re,Heading as ie,Indent as le,IndentBlock as se,PictureEditing as ne,Image as de,ImageCaption as ce,ImageInsert as pe,ImageResize as me,ImageStyle as ge,ImageToolbar as fe,ImageUpload as ue,Link as be,List as he,MediaEmbed as ye,PageBreak as xe,Paragraph as ke,PasteFromOffice as Te,SpecialCharacters as we,SpecialCharactersEssentials as Ie,Table as Se,TableCellProperties as Ee,TableProperties as Ce,TableToolbar as ve,TextTransformation as _e,CodeBlock as Le,Mention as Pe,Plugin as Wr}from"ckeditor5";import{SourceEditingEnhanced as De,ExportPdf as Ae,ExportWord as Fe,ImportWord as Re,MergeFields as Be,Template as Oe}from"ckeditor5-premium-features";var f="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",u="https://33333.cke-cs.com/easyimage/upload/",b="33333.cke-cs.com/ws",l={tokenUrl:f,uploadUrl:u,webSocketUrl:b};var s="https://api.ckbox.io/token/demo";import{Plugin as He}from"@ckeditor/ckeditor5-core";import{Essentials as Qe}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ze}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as je}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ye,Italic as $e}from"@ckeditor/ckeditor5-basic-styles";import{Heading as et}from"@ckeditor/ckeditor5-heading";import{Image as ot,ImageCaption as at,ImageStyle as rt,ImageToolbar as it}from"@ckeditor/ckeditor5-image";import{Indent as st}from"@ckeditor/ckeditor5-indent";import{Link as dt}from"@ckeditor/ckeditor5-link";import{List as pt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as gt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as ut}from"@ckeditor/ckeditor5-paragraph";import{Table as ht,TableToolbar as yt}from"@ckeditor/ckeditor5-table";function n(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as St,Essentials as Et,CKFinderUploadAdapter as Ct,Autoformat as vt,BlockToolbar as _t,Bold as Lt,Italic as Pt,BlockQuote as Dt,CKBox as At,CKFinder as Ft,EasyImage as Rt,Heading as Bt,Image as Ot,ImageCaption as Mt,ImageStyle as Nt,ImageToolbar as Ut,ImageUpload as Vt,PictureEditing as Kt,Indent as Gt,Link as Ht,List as qt,MediaEmbed as Qt,Paragraph as Xt,PasteFromOffice as zt,Table as Wt,TableToolbar as jt,TextTransformation as Jt,CloudServices as Yt}from"ckeditor5";import{BalloonEditor as to,Essentials as oo,CKFinderUploadAdapter as ao,Autoformat as ro,Bold as io,Italic as lo,BlockQuote as so,CKBox as no,CKFinder as co,EasyImage as po,Heading as mo,Image as go,ImageCaption as fo,ImageStyle as uo,ImageToolbar as bo,ImageUpload as ho,PictureEditing as yo,Indent as xo,Link as ko,List as To,MediaEmbed as wo,Paragraph as Io,PasteFromOffice as So,Table as Eo,TableToolbar as Co,TextTransformation as vo,CloudServices as _o}from"ckeditor5";import{ClassicEditor as h,Essentials as y,Autoformat as x,Bold as k,Italic as T,BlockQuote as w,CKBox as I,EasyImage as S,Heading as E,Image as C,ImageCaption as v,ImageStyle as _,ImageToolbar as L,ImageUpload as P,PictureEditing as D,Indent as A,Link as F,List as R,MediaEmbed as B,Paragraph as O,PasteFromOffice as M,Table as N,TableToolbar as U,TextTransformation as V,CloudServices as K,AutoImage as G,ImageInsert as H,Bookmark as q}from"ckeditor5";var o=class extends h{static builtinPlugins=[y,x,k,T,w,K,S,E,C,v,_,L,P,I,A,F,R,B,O,M,D,N,U,V,G,H,q];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Bo,Essentials as Oo,Alignment as Mo,FontSize as No,FontFamily as Uo,FontColor as Vo,FontBackgroundColor as Ko,Autoformat as Go,Bold as Ho,Italic as qo,Strikethrough as Qo,Underline as Xo,BlockQuote as zo,CKBox as Wo,EasyImage as jo,Heading as Jo,Image as Yo,ImageCaption as $o,ImageResize as Zo,ImageStyle as ea,ImageToolbar as ta,ImageUpload as oa,PictureEditing as aa,Indent as ra,IndentBlock as ia,Link as la,List as sa,ListProperties as na,MediaEmbed as da,Paragraph as ca,PasteFromOffice as pa,Table as ma,TableToolbar as ga,TextTransformation as fa,CloudServices as ua}from"ckeditor5";import{InlineEditor as xa,Essentials as ka,CKFinderUploadAdapter as Ta,Autoformat as wa,Bold as Ia,Italic as Sa,BlockQuote as Ea,CKBox as Ca,CKFinder as va,EasyImage as _a,Heading as La,Image as Pa,ImageCaption as Da,ImageStyle as Aa,ImageToolbar as Fa,ImageUpload as Ra,PictureEditing as Ba,Indent as Oa,Link as Ma,List as Na,MediaEmbed as Ua,Paragraph as Va,PasteFromOffice as Ka,Table as Ga,TableToolbar as Ha,TextTransformation as qa,CloudServices as Qa}from"ckeditor5";import{MultiRootEditor as ja,Essentials as Ja,CKFinderUploadAdapter as Ya,Autoformat as $a,Bold as Za,Italic as er,BlockQuote as tr,CKBox as or,CKFinder as ar,EasyImage as rr,Heading as ir,Image as lr,ImageCaption as sr,ImageStyle as nr,ImageToolbar as dr,ImageUpload as cr,PictureEditing as pr,Indent as mr,Link as gr,List as fr,MediaEmbed as ur,Paragraph as br,PasteFromOffice as hr,Table as yr,TableToolbar as xr,TextTransformation as kr,CloudServices as Tr}from"ckeditor5";var r="19.25mm",i="16mm",a=class extends o{static builtinPlugins=[...o.builtinPlugins,Be,Pe,Q,ee,X,J,z,Y,$,Le,ie,ne,de,ce,ge,fe,le,W,be,he,ke,Se,ve,Ae,Fe,Re,re,ae,oe,te,se,ue,pe,me,ye,xe,Te,we,Ie,De,Ce,Ee,_e,j,Z,Oe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:g=>({html:g,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:s,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:i,margin_bottom:i,margin_right:r,margin_left:r,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:i,bottom:i,right:r,left:r}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:l,ui:{viewportOffset:{top:n()}}}},d=document.createElement("link");d.rel="stylesheet";d.href="../assets/spa.css";document.head.appendChild(d);var c=document.createElement("meta");c.name="x-cke-crawler-ignore-patterns";c.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(c);var p=`
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
				</figure>`}}];var Me={initialPreviewMode:"78900",previewModes:["$dataSets"],dataSets:m};a.create(document.querySelector("#snippet-merge-fields-variables"),{mergeFields:{...a.defaultConfig.mergeFields,...Me},toolbar:{items:["insertMergeField"].concat(a.defaultConfig.toolbar.items)},initialData:p}).then(t=>{window.editor=t,window.preventPasteFromOfficeNotification=!0}).catch(t=>{console.error(t.stack)});
