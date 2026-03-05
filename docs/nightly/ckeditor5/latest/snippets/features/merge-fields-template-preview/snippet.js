var w="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",I="https://33333.cke-cs.com/easyimage/upload/",S="33333.cke-cs.com/ws",d={tokenUrl:w,uploadUrl:I,webSocketUrl:S};var c="https://api.ckbox.io/token/demo";import{Plugin as tt}from"@ckeditor/ckeditor5-core";import{Essentials as at}from"@ckeditor/ckeditor5-essentials";import{Autoformat as rt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as st}from"@ckeditor/ckeditor5-block-quote";import{Bold as dt,Italic as ct}from"@ckeditor/ckeditor5-basic-styles";import{Heading as mt}from"@ckeditor/ckeditor5-heading";import{Image as ft,ImageCaption as ut,ImageStyle as bt,ImageToolbar as ht}from"@ckeditor/ckeditor5-image";import{Indent as xt}from"@ckeditor/ckeditor5-indent";import{Link as Tt}from"@ckeditor/ckeditor5-link";import{List as It}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Et}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as vt}from"@ckeditor/ckeditor5-paragraph";import{Table as Lt,TableToolbar as Pt}from"@ckeditor/ckeditor5-table";function p({id:e,target:t,text:a,editor:i,tippyOptions:h}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:a});return}let y=window.umberto.Tooltip.create({id:e,text:a,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...h?.placement&&{position:h.placement}});for(let k of i.editing.view.document.roots)k.once("change:isFocused",(We,je,T)=>{T&&y.destroy()});return y}function m(e,t){let a=e.items,i;return typeof t=="function"?i=a.find(t):i=a.get(t),i?i.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ot,Essentials as Mt,CKFinderUploadAdapter as Nt,Autoformat as Ut,BlockToolbar as Vt,Bold as Kt,Italic as Gt,BlockQuote as Ht,CKBox as qt,CKFinder as Qt,EasyImage as Xt,Heading as zt,Image as Wt,ImageCaption as jt,ImageStyle as Jt,ImageToolbar as $t,ImageUpload as Yt,PictureEditing as Zt,Indent as eo,IndentBlock as to,Link as oo,List as ao,MediaEmbed as io,Paragraph as ro,PasteFromOffice as lo,Table as so,TableToolbar as no,TextTransformation as co,CloudServices as po}from"ckeditor5";import{BalloonEditor as uo,Essentials as bo,CKFinderUploadAdapter as ho,Autoformat as yo,Bold as xo,Italic as ko,BlockQuote as To,CKBox as wo,CKFinder as Io,EasyImage as So,Heading as Eo,Image as Co,ImageCaption as vo,ImageStyle as _o,ImageToolbar as Lo,ImageUpload as Po,PictureEditing as Do,Indent as Bo,IndentBlock as Ao,Link as Fo,List as Ro,MediaEmbed as Oo,Paragraph as Mo,PasteFromOffice as No,Table as Uo,TableToolbar as Vo,TextTransformation as Ko,CloudServices as Go}from"ckeditor5";import{ClassicEditor as E,Essentials as C,Autoformat as v,Bold as _,Italic as L,BlockQuote as P,CKBox as D,EasyImage as B,Heading as A,Image as F,ImageCaption as R,ImageStyle as O,ImageToolbar as M,ImageUpload as N,PictureEditing as U,Indent as V,IndentBlock as K,Link as G,List as H,MediaEmbed as q,Paragraph as Q,PasteFromOffice as X,Table as z,TableToolbar as W,TextTransformation as j,CloudServices as J,AutoImage as $,ImageInsert as Y,Bookmark as Z}from"ckeditor5";var r=class extends E{static builtinPlugins=[C,v,_,L,P,J,B,A,F,R,O,M,N,D,V,K,G,H,q,Q,X,U,z,W,j,$,Y,Z];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as jo,Essentials as Jo,Alignment as $o,FontSize as Yo,FontFamily as Zo,FontColor as ea,FontBackgroundColor as ta,Autoformat as oa,Bold as aa,Italic as ia,Strikethrough as ra,Underline as la,BlockQuote as sa,CKBox as na,EasyImage as da,Heading as ca,Image as pa,ImageCaption as ma,ImageResize as ga,ImageStyle as fa,ImageToolbar as ua,ImageUpload as ba,PictureEditing as ha,Indent as ya,IndentBlock as xa,Link as ka,List as Ta,ListProperties as wa,MediaEmbed as Ia,Paragraph as Sa,PasteFromOffice as Ea,Table as Ca,TableToolbar as va,TextTransformation as _a,CloudServices as La}from"ckeditor5";import{InlineEditor as Aa,Essentials as Fa,CKFinderUploadAdapter as Ra,Autoformat as Oa,Bold as Ma,Italic as Na,BlockQuote as Ua,CKBox as Va,CKFinder as Ka,EasyImage as Ga,Heading as Ha,Image as qa,ImageCaption as Qa,ImageStyle as Xa,ImageToolbar as za,ImageUpload as Wa,PictureEditing as ja,Indent as Ja,IndentBlock as $a,Link as Ya,List as Za,MediaEmbed as ei,Paragraph as ti,PasteFromOffice as oi,Table as ai,TableToolbar as ii,TextTransformation as ri,CloudServices as li}from"ckeditor5";import{MultiRootEditor as ci,Essentials as pi,CKFinderUploadAdapter as mi,Autoformat as gi,Bold as fi,Italic as ui,BlockQuote as bi,CKBox as hi,CKFinder as yi,EasyImage as xi,Heading as ki,Image as Ti,ImageCaption as wi,ImageStyle as Ii,ImageToolbar as Si,ImageUpload as Ei,PictureEditing as Ci,Indent as vi,IndentBlock as _i,Link as Li,List as Pi,MediaEmbed as Di,Paragraph as Bi,PasteFromOffice as Ai,Table as Fi,TableToolbar as Ri,TextTransformation as Oi,CloudServices as Mi}from"ckeditor5";import{Alignment as ee,Autoformat as te,Bold as oe,Italic as ae,Underline as ie,BlockQuote as re,CKBox as le,CKBoxImageEdit as se,CloudServices as ne,Essentials as de,FontBackgroundColor as ce,FontColor as pe,FontFamily as me,FontSize as ge,Heading as fe,Indent as ue,IndentBlock as be,PictureEditing as he,Image as ye,ImageCaption as xe,ImageInsert as ke,ImageResize as Te,ImageStyle as we,ImageToolbar as Ie,ImageUpload as Se,Link as Ee,List as Ce,MediaEmbed as ve,PageBreak as _e,Paragraph as Le,PasteFromOffice as Pe,SpecialCharacters as De,SpecialCharactersEssentials as Be,Table as Ae,TableCellProperties as Fe,TableProperties as Re,TableToolbar as Oe,TextTransformation as Me,CodeBlock as Ne,Mention as Ue,Plugin as nr}from"ckeditor5";import{SourceEditingEnhanced as Ve,ExportPdf as Ke,ExportWord as Ge,ImportWord as He,MergeFields as qe,Template as Qe}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",l=class extends r{static builtinPlugins=[...r.builtinPlugins,qe,Ue,ee,de,te,re,oe,le,se,Ne,fe,he,ye,xe,we,Ie,ue,ae,Ee,Ce,Le,Ae,Oe,Ke,Ge,He,ge,me,pe,ce,be,Se,ke,Te,ve,_e,Pe,De,Be,Ve,Re,Fe,Me,ie,ne,Qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:d,ui:{viewportOffset:{top:g()}}}},f=document.createElement("link");f.rel="stylesheet";f.href="../assets/spa.css";document.head.appendChild(f);var u=document.createElement("meta");u.name="x-cke-crawler-ignore-patterns";u.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(u);var x=`
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
`,b=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Xe={previewModes:["$dataSets"],initialPreviewMode:b[0].id,dataSets:b},ze={definitions:[{title:"Discount information",description:"Simple footer with discount information",data:"<p><em>P.S. Mention this email to receive {{discount}} off your first spa treatment!</em></p>"}]};l.create(document.querySelector("#snippet-merge-fields-template"),{mergeFields:{...l.defaultConfig.mergeFields,...Xe},toolbar:{items:["insertMergeField","previewMergeFields","|","insertTemplate"].concat(l.defaultConfig.toolbar.items)},initialData:x,template:ze}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert template"),text:"Click to add a template containing a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
