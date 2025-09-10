var T="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",I="33333.cke-cs.com/ws",d={tokenUrl:T,uploadUrl:w,webSocketUrl:I};var c="https://api.ckbox.io/token/demo";import{Plugin as Ye}from"@ckeditor/ckeditor5-core";import{Essentials as et}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ot}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as rt}from"@ckeditor/ckeditor5-block-quote";import{Bold as lt,Italic as st}from"@ckeditor/ckeditor5-basic-styles";import{Heading as dt}from"@ckeditor/ckeditor5-heading";import{Image as pt,ImageCaption as mt,ImageStyle as gt,ImageToolbar as ut}from"@ckeditor/ckeditor5-image";import{Indent as bt}from"@ckeditor/ckeditor5-indent";import{Link as yt}from"@ckeditor/ckeditor5-link";import{List as kt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as wt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as St}from"@ckeditor/ckeditor5-paragraph";import{Table as Ct,TableToolbar as vt}from"@ckeditor/ckeditor5-table";function p({target:e,text:t,editor:l,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let b=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...a?.placement&&{position:a.placement}});for(let x of l.editing.view.document.roots)x.once("change:isFocused",(Qe,Xe,k)=>{k&&b.destroy()});return b}function m(e,t){let l=e.items,a;return typeof t=="function"?a=l.find(t):a=l.get(t),a?a.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ft,Essentials as Bt,CKFinderUploadAdapter as Rt,Autoformat as Ot,BlockToolbar as Mt,Bold as Nt,Italic as Ut,BlockQuote as Vt,CKBox as Kt,CKFinder as Gt,EasyImage as Ht,Heading as qt,Image as Qt,ImageCaption as Xt,ImageStyle as zt,ImageToolbar as Wt,ImageUpload as jt,PictureEditing as Jt,Indent as $t,Link as Yt,List as Zt,MediaEmbed as eo,Paragraph as to,PasteFromOffice as oo,Table as ao,TableToolbar as ro,TextTransformation as io,CloudServices as lo}from"ckeditor5";import{BalloonEditor as po,Essentials as mo,CKFinderUploadAdapter as go,Autoformat as uo,Bold as fo,Italic as bo,BlockQuote as ho,CKBox as yo,CKFinder as xo,EasyImage as ko,Heading as To,Image as wo,ImageCaption as Io,ImageStyle as So,ImageToolbar as Eo,ImageUpload as Co,PictureEditing as vo,Indent as _o,Link as Lo,List as Po,MediaEmbed as Do,Paragraph as Ao,PasteFromOffice as Fo,Table as Bo,TableToolbar as Ro,TextTransformation as Oo,CloudServices as Mo}from"ckeditor5";import{ClassicEditor as S,Essentials as E,Autoformat as C,Bold as v,Italic as _,BlockQuote as L,CKBox as P,EasyImage as D,Heading as A,Image as F,ImageCaption as B,ImageStyle as R,ImageToolbar as O,ImageUpload as M,PictureEditing as N,Indent as U,Link as V,List as K,MediaEmbed as G,Paragraph as H,PasteFromOffice as q,Table as Q,TableToolbar as X,TextTransformation as z,CloudServices as W,AutoImage as j,ImageInsert as J,Bookmark as $}from"ckeditor5";var r=class extends S{static builtinPlugins=[E,C,v,_,L,W,D,A,F,B,R,O,M,P,U,V,K,G,H,q,N,Q,X,z,j,J,$];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as qo,Essentials as Qo,Alignment as Xo,FontSize as zo,FontFamily as Wo,FontColor as jo,FontBackgroundColor as Jo,Autoformat as $o,Bold as Yo,Italic as Zo,Strikethrough as ea,Underline as ta,BlockQuote as oa,CKBox as aa,EasyImage as ra,Heading as ia,Image as la,ImageCaption as sa,ImageResize as na,ImageStyle as da,ImageToolbar as ca,ImageUpload as pa,PictureEditing as ma,Indent as ga,IndentBlock as ua,Link as fa,List as ba,ListProperties as ha,MediaEmbed as ya,Paragraph as xa,PasteFromOffice as ka,Table as Ta,TableToolbar as wa,TextTransformation as Ia,CloudServices as Sa}from"ckeditor5";import{InlineEditor as _a,Essentials as La,CKFinderUploadAdapter as Pa,Autoformat as Da,Bold as Aa,Italic as Fa,BlockQuote as Ba,CKBox as Ra,CKFinder as Oa,EasyImage as Ma,Heading as Na,Image as Ua,ImageCaption as Va,ImageStyle as Ka,ImageToolbar as Ga,ImageUpload as Ha,PictureEditing as qa,Indent as Qa,Link as Xa,List as za,MediaEmbed as Wa,Paragraph as ja,PasteFromOffice as Ja,Table as $a,TableToolbar as Ya,TextTransformation as Za,CloudServices as er}from"ckeditor5";import{MultiRootEditor as rr,Essentials as ir,CKFinderUploadAdapter as lr,Autoformat as sr,Bold as nr,Italic as dr,BlockQuote as cr,CKBox as pr,CKFinder as mr,EasyImage as gr,Heading as ur,Image as fr,ImageCaption as br,ImageStyle as hr,ImageToolbar as yr,ImageUpload as xr,PictureEditing as kr,Indent as Tr,Link as wr,List as Ir,MediaEmbed as Sr,Paragraph as Er,PasteFromOffice as Cr,Table as vr,TableToolbar as _r,TextTransformation as Lr,CloudServices as Pr}from"ckeditor5";import{Alignment as Y,Autoformat as Z,Bold as ee,Italic as te,Underline as oe,BlockQuote as ae,CKBox as re,CKBoxImageEdit as ie,CloudServices as le,Essentials as se,FontBackgroundColor as ne,FontColor as de,FontFamily as ce,FontSize as pe,Heading as me,Indent as ge,IndentBlock as ue,PictureEditing as fe,Image as be,ImageCaption as he,ImageInsert as ye,ImageResize as xe,ImageStyle as ke,ImageToolbar as Te,ImageUpload as we,Link as Ie,List as Se,MediaEmbed as Ee,PageBreak as Ce,Paragraph as ve,PasteFromOffice as _e,SpecialCharacters as Le,SpecialCharactersEssentials as Pe,Table as De,TableCellProperties as Ae,TableProperties as Fe,TableToolbar as Be,TextTransformation as Re,CodeBlock as Oe,Mention as Me,Plugin as ti}from"ckeditor5";import{SourceEditingEnhanced as Ne,ExportPdf as Ue,ExportWord as Ve,ImportWord as Ke,MergeFields as Ge,Template as He}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",i=class extends r{static builtinPlugins=[...r.builtinPlugins,Ge,Me,Y,se,Z,ae,ee,re,ie,Oe,me,fe,be,he,ke,Te,ge,te,Ie,Se,ve,De,Be,Ue,Ve,Ke,pe,ce,de,ne,ue,we,ye,xe,Ee,Ce,_e,Le,Pe,Ne,Fe,Ae,Re,oe,le,He];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:d,ui:{viewportOffset:{top:g()}}}},u=document.createElement("link");u.rel="stylesheet";u.href="../assets/spa.css";document.head.appendChild(u);var f=document.createElement("meta");f.name="x-cke-crawler-ignore-patterns";f.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(f);var h=`
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
`,y=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var qe={dataSets:y,previewModes:["$labels","$dataSets"]};i.create(document.querySelector("#snippet-merge-fields-datasets"),{mergeFields:{...i.defaultConfig.mergeFields,...qe},toolbar:{items:["insertMergeField","previewMergeFields"].concat(i.defaultConfig.toolbar.items)},initialData:h}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Merge fields preview"),text:"Click to change preview mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
