var w="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",I="https://33333.cke-cs.com/easyimage/upload/",S="33333.cke-cs.com/ws",d={tokenUrl:w,uploadUrl:I,webSocketUrl:S};var c="https://api.ckbox.io/token/demo";import{Plugin as et}from"@ckeditor/ckeditor5-core";import{Essentials as ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as it}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as lt}from"@ckeditor/ckeditor5-block-quote";import{Bold as nt,Italic as dt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as pt}from"@ckeditor/ckeditor5-heading";import{Image as gt,ImageCaption as ft,ImageStyle as ut,ImageToolbar as bt}from"@ckeditor/ckeditor5-image";import{Indent as yt}from"@ckeditor/ckeditor5-indent";import{Link as kt}from"@ckeditor/ckeditor5-link";import{List as wt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as St}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ct}from"@ckeditor/ckeditor5-paragraph";import{Table as _t,TableToolbar as Lt}from"@ckeditor/ckeditor5-table";function p({id:e,target:t,text:a,editor:i,tippyOptions:h}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:a});return}let y=window.umberto.Tooltip.create({id:e,text:a,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...h?.placement&&{position:h.placement}});for(let k of i.editing.view.document.roots)k.once("change:isFocused",(ze,We,T)=>{T&&y.destroy()});return y}function m(e,t){let a=e.items,i;return typeof t=="function"?i=a.find(t):i=a.get(t),i?i.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Rt,Essentials as Ot,CKFinderUploadAdapter as Mt,Autoformat as Nt,BlockToolbar as Ut,Bold as Vt,Italic as Kt,BlockQuote as Gt,CKBox as Ht,CKFinder as qt,EasyImage as Qt,Heading as Xt,Image as zt,ImageCaption as Wt,ImageStyle as jt,ImageToolbar as Jt,ImageUpload as $t,PictureEditing as Yt,Indent as Zt,Link as eo,List as to,MediaEmbed as oo,Paragraph as ao,PasteFromOffice as io,Table as ro,TableToolbar as lo,TextTransformation as so,CloudServices as no}from"ckeditor5";import{BalloonEditor as go,Essentials as fo,CKFinderUploadAdapter as uo,Autoformat as bo,Bold as ho,Italic as yo,BlockQuote as xo,CKBox as ko,CKFinder as To,EasyImage as wo,Heading as Io,Image as So,ImageCaption as Eo,ImageStyle as Co,ImageToolbar as vo,ImageUpload as _o,PictureEditing as Lo,Indent as Po,Link as Do,List as Ao,MediaEmbed as Fo,Paragraph as Bo,PasteFromOffice as Ro,Table as Oo,TableToolbar as Mo,TextTransformation as No,CloudServices as Uo}from"ckeditor5";import{ClassicEditor as E,Essentials as C,Autoformat as v,Bold as _,Italic as L,BlockQuote as P,CKBox as D,EasyImage as A,Heading as F,Image as B,ImageCaption as R,ImageStyle as O,ImageToolbar as M,ImageUpload as N,PictureEditing as U,Indent as V,Link as K,List as G,MediaEmbed as H,Paragraph as q,PasteFromOffice as Q,Table as X,TableToolbar as z,TextTransformation as W,CloudServices as j,AutoImage as J,ImageInsert as $,Bookmark as Y}from"ckeditor5";var r=class extends E{static builtinPlugins=[C,v,_,L,P,j,A,F,B,R,O,M,N,D,V,K,G,H,q,Q,U,X,z,W,J,$,Y];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Xo,Essentials as zo,Alignment as Wo,FontSize as jo,FontFamily as Jo,FontColor as $o,FontBackgroundColor as Yo,Autoformat as Zo,Bold as ea,Italic as ta,Strikethrough as oa,Underline as aa,BlockQuote as ia,CKBox as ra,EasyImage as la,Heading as sa,Image as na,ImageCaption as da,ImageResize as ca,ImageStyle as pa,ImageToolbar as ma,ImageUpload as ga,PictureEditing as fa,Indent as ua,IndentBlock as ba,Link as ha,List as ya,ListProperties as xa,MediaEmbed as ka,Paragraph as Ta,PasteFromOffice as wa,Table as Ia,TableToolbar as Sa,TextTransformation as Ea,CloudServices as Ca}from"ckeditor5";import{InlineEditor as Pa,Essentials as Da,CKFinderUploadAdapter as Aa,Autoformat as Fa,Bold as Ba,Italic as Ra,BlockQuote as Oa,CKBox as Ma,CKFinder as Na,EasyImage as Ua,Heading as Va,Image as Ka,ImageCaption as Ga,ImageStyle as Ha,ImageToolbar as qa,ImageUpload as Qa,PictureEditing as Xa,Indent as za,Link as Wa,List as ja,MediaEmbed as Ja,Paragraph as $a,PasteFromOffice as Ya,Table as Za,TableToolbar as ei,TextTransformation as ti,CloudServices as oi}from"ckeditor5";import{MultiRootEditor as li,Essentials as si,CKFinderUploadAdapter as ni,Autoformat as di,Bold as ci,Italic as pi,BlockQuote as mi,CKBox as gi,CKFinder as fi,EasyImage as ui,Heading as bi,Image as hi,ImageCaption as yi,ImageStyle as xi,ImageToolbar as ki,ImageUpload as Ti,PictureEditing as wi,Indent as Ii,Link as Si,List as Ei,MediaEmbed as Ci,Paragraph as vi,PasteFromOffice as _i,Table as Li,TableToolbar as Pi,TextTransformation as Di,CloudServices as Ai}from"ckeditor5";import{Alignment as Z,Autoformat as ee,Bold as te,Italic as oe,Underline as ae,BlockQuote as ie,CKBox as re,CKBoxImageEdit as le,CloudServices as se,Essentials as ne,FontBackgroundColor as de,FontColor as ce,FontFamily as pe,FontSize as me,Heading as ge,Indent as fe,IndentBlock as ue,PictureEditing as be,Image as he,ImageCaption as ye,ImageInsert as xe,ImageResize as ke,ImageStyle as Te,ImageToolbar as we,ImageUpload as Ie,Link as Se,List as Ee,MediaEmbed as Ce,PageBreak as ve,Paragraph as _e,PasteFromOffice as Le,SpecialCharacters as Pe,SpecialCharactersEssentials as De,Table as Ae,TableCellProperties as Fe,TableProperties as Be,TableToolbar as Re,TextTransformation as Oe,CodeBlock as Me,Mention as Ne,Plugin as ar}from"ckeditor5";import{SourceEditingEnhanced as Ue,ExportPdf as Ve,ExportWord as Ke,ImportWord as Ge,MergeFields as He,Template as qe}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",l=class extends r{static builtinPlugins=[...r.builtinPlugins,He,Ne,Z,ne,ee,ie,te,re,le,Me,ge,be,he,ye,Te,we,fe,oe,Se,Ee,_e,Ae,Re,Ve,Ke,Ge,me,pe,ce,de,ue,Ie,xe,ke,Ce,ve,Le,Pe,De,Ue,Be,Fe,Oe,ae,se,qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
				</figure>`}}];var Qe={previewModes:["$dataSets"],initialPreviewMode:b[0].id,dataSets:b},Xe={definitions:[{title:"Discount information",description:"Simple footer with discount information",data:"<p><em>P.S. Mention this email to receive {{discount}} off your first spa treatment!</em></p>"}]};l.create(document.querySelector("#snippet-merge-fields-template"),{mergeFields:{...l.defaultConfig.mergeFields,...Qe},toolbar:{items:["insertMergeField","previewMergeFields","|","insertTemplate"].concat(l.defaultConfig.toolbar.items)},initialData:x,template:Xe}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert template"),text:"Click to add a template containing a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
