import{Alignment as X,Autoformat as z,Bold as W,Italic as j,Underline as J,BlockQuote as $,CKBox as Y,CKBoxImageEdit as Z,CloudServices as ee,Essentials as te,FontBackgroundColor as oe,FontColor as ae,FontFamily as re,FontSize as ie,Heading as le,Indent as se,IndentBlock as ne,PictureEditing as de,Image as ce,ImageCaption as pe,ImageInsert as me,ImageResize as ge,ImageStyle as ue,ImageToolbar as fe,ImageUpload as be,Link as he,List as ye,MediaEmbed as xe,PageBreak as ke,Paragraph as Te,PasteFromOffice as we,SpecialCharacters as Ie,SpecialCharactersEssentials as Se,Table as Ee,TableCellProperties as Ce,TableProperties as ve,TableToolbar as _e,TextTransformation as Le,CodeBlock as Pe,Mention as De,Plugin as Zr}from"ckeditor5";import{SourceEditingEnhanced as Be,ExportPdf as Ae,ExportWord as Fe,ImportWord as Re,MergeFields as Oe,Template as Me}from"ckeditor5-premium-features";var u="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",f="https://33333.cke-cs.com/easyimage/upload/",b="33333.cke-cs.com/ws",l={tokenUrl:u,uploadUrl:f,webSocketUrl:b};var s="https://api.ckbox.io/token/demo";import{Plugin as qe}from"@ckeditor/ckeditor5-core";import{Essentials as Xe}from"@ckeditor/ckeditor5-essentials";import{Autoformat as We}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as Je}from"@ckeditor/ckeditor5-block-quote";import{Bold as Ye,Italic as Ze}from"@ckeditor/ckeditor5-basic-styles";import{Heading as tt}from"@ckeditor/ckeditor5-heading";import{Image as at,ImageCaption as rt,ImageStyle as it,ImageToolbar as lt}from"@ckeditor/ckeditor5-image";import{Indent as nt}from"@ckeditor/ckeditor5-indent";import{Link as ct}from"@ckeditor/ckeditor5-link";import{List as mt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as ut}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as bt}from"@ckeditor/ckeditor5-paragraph";import{Table as yt,TableToolbar as xt}from"@ckeditor/ckeditor5-table";function n(){let t=document.documentElement;return parseInt(window.getComputedStyle(t).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Et,Essentials as Ct,CKFinderUploadAdapter as vt,Autoformat as _t,BlockToolbar as Lt,Bold as Pt,Italic as Dt,BlockQuote as Bt,CKBox as At,CKFinder as Ft,EasyImage as Rt,Heading as Ot,Image as Mt,ImageCaption as Nt,ImageStyle as Ut,ImageToolbar as Vt,ImageUpload as Kt,PictureEditing as Gt,Indent as Ht,IndentBlock as qt,Link as Qt,List as Xt,MediaEmbed as zt,Paragraph as Wt,PasteFromOffice as jt,Table as Jt,TableToolbar as $t,TextTransformation as Yt,CloudServices as Zt}from"ckeditor5";import{BalloonEditor as ao,Essentials as ro,CKFinderUploadAdapter as io,Autoformat as lo,Bold as so,Italic as no,BlockQuote as co,CKBox as po,CKFinder as mo,EasyImage as go,Heading as uo,Image as fo,ImageCaption as bo,ImageStyle as ho,ImageToolbar as yo,ImageUpload as xo,PictureEditing as ko,Indent as To,IndentBlock as wo,Link as Io,List as So,MediaEmbed as Eo,Paragraph as Co,PasteFromOffice as vo,Table as _o,TableToolbar as Lo,TextTransformation as Po,CloudServices as Do}from"ckeditor5";import{ClassicEditor as h,Essentials as y,Autoformat as x,Bold as k,Italic as T,BlockQuote as w,CKBox as I,EasyImage as S,Heading as E,Image as C,ImageCaption as v,ImageStyle as _,ImageToolbar as L,ImageUpload as P,PictureEditing as D,Indent as B,IndentBlock as A,Link as F,List as R,MediaEmbed as O,Paragraph as M,PasteFromOffice as N,Table as U,TableToolbar as V,TextTransformation as K,CloudServices as G,AutoImage as H,ImageInsert as q,Bookmark as Q}from"ckeditor5";var o=class extends h{static builtinPlugins=[y,x,k,T,w,G,S,E,C,v,_,L,P,I,B,A,F,R,O,M,N,D,U,V,K,H,q,Q];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as No,Essentials as Uo,Alignment as Vo,FontSize as Ko,FontFamily as Go,FontColor as Ho,FontBackgroundColor as qo,Autoformat as Qo,Bold as Xo,Italic as zo,Strikethrough as Wo,Underline as jo,BlockQuote as Jo,CKBox as $o,EasyImage as Yo,Heading as Zo,Image as ea,ImageCaption as ta,ImageResize as oa,ImageStyle as aa,ImageToolbar as ra,ImageUpload as ia,PictureEditing as la,Indent as sa,IndentBlock as na,Link as da,List as ca,ListProperties as pa,MediaEmbed as ma,Paragraph as ga,PasteFromOffice as ua,Table as fa,TableToolbar as ba,TextTransformation as ha,CloudServices as ya}from"ckeditor5";import{InlineEditor as wa,Essentials as Ia,CKFinderUploadAdapter as Sa,Autoformat as Ea,Bold as Ca,Italic as va,BlockQuote as _a,CKBox as La,CKFinder as Pa,EasyImage as Da,Heading as Ba,Image as Aa,ImageCaption as Fa,ImageStyle as Ra,ImageToolbar as Oa,ImageUpload as Ma,PictureEditing as Na,Indent as Ua,IndentBlock as Va,Link as Ka,List as Ga,MediaEmbed as Ha,Paragraph as qa,PasteFromOffice as Qa,Table as Xa,TableToolbar as za,TextTransformation as Wa,CloudServices as ja}from"ckeditor5";import{MultiRootEditor as Za,Essentials as er,CKFinderUploadAdapter as tr,Autoformat as or,Bold as ar,Italic as rr,BlockQuote as ir,CKBox as lr,CKFinder as sr,EasyImage as nr,Heading as dr,Image as cr,ImageCaption as pr,ImageStyle as mr,ImageToolbar as gr,ImageUpload as ur,PictureEditing as fr,Indent as br,IndentBlock as hr,Link as yr,List as xr,MediaEmbed as kr,Paragraph as Tr,PasteFromOffice as wr,Table as Ir,TableToolbar as Sr,TextTransformation as Er,CloudServices as Cr}from"ckeditor5";var r="19.25mm",i="16mm",a=class extends o{static builtinPlugins=[...o.builtinPlugins,Oe,De,X,te,z,$,W,Y,Z,Pe,le,de,ce,pe,ue,fe,se,j,he,ye,Te,Ee,_e,Ae,Fe,Re,ie,re,ae,oe,ne,be,me,ge,xe,ke,we,Ie,Se,Be,ve,Ce,Le,J,ee,Me];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:g=>({html:g,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:s,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:i,margin_bottom:i,margin_right:r,margin_left:r,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:i,bottom:i,right:r,left:r}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:l,ui:{viewportOffset:{top:n()}}}},d=document.createElement("link");d.rel="stylesheet";d.href="../assets/spa.css";document.head.appendChild(d);var c=document.createElement("meta");c.name="x-cke-crawler-ignore-patterns";c.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(c);var p=`
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
				</figure>`}}];var Ne={initialPreviewMode:"78900",previewModes:["$dataSets"],dataSets:m};a.create(document.querySelector("#snippet-merge-fields-variables"),{mergeFields:{...a.defaultConfig.mergeFields,...Ne},toolbar:{items:["insertMergeField"].concat(a.defaultConfig.toolbar.items)},initialData:p}).then(t=>{window.editor=t,window.preventPasteFromOfficeNotification=!0}).catch(t=>{console.error(t.stack)});
