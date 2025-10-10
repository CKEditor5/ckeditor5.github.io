var T="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",I="33333.cke-cs.com/ws",d={tokenUrl:T,uploadUrl:w,webSocketUrl:I};var c="https://api.ckbox.io/token/demo";import{Plugin as Ze}from"@ckeditor/ckeditor5-core";import{Essentials as tt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as at}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as rt}from"@ckeditor/ckeditor5-block-quote";import{Bold as st,Italic as nt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ct}from"@ckeditor/ckeditor5-heading";import{Image as mt,ImageCaption as gt,ImageStyle as ft,ImageToolbar as ut}from"@ckeditor/ckeditor5-image";import{Indent as ht}from"@ckeditor/ckeditor5-indent";import{Link as xt}from"@ckeditor/ckeditor5-link";import{List as Tt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as It}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Et}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as _t}from"@ckeditor/ckeditor5-table";function p({target:e,text:t,editor:l,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let h=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...a?.placement&&{position:a.placement}});for(let x of l.editing.view.document.roots)x.once("change:isFocused",(Xe,ze,k)=>{k&&h.destroy()});return h}function m(e,t){let l=e.items,a;return typeof t=="function"?a=l.find(t):a=l.get(t),a?a.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Bt,Essentials as Rt,CKFinderUploadAdapter as Ot,Autoformat as Mt,BlockToolbar as Nt,Bold as Ut,Italic as Vt,BlockQuote as Kt,CKBox as Gt,CKFinder as Ht,EasyImage as qt,Heading as Qt,Image as Xt,ImageCaption as zt,ImageStyle as Wt,ImageToolbar as jt,ImageUpload as Jt,PictureEditing as $t,Indent as Yt,Link as Zt,List as eo,MediaEmbed as to,Paragraph as oo,PasteFromOffice as ao,Table as io,TableToolbar as ro,TextTransformation as lo,CloudServices as so}from"ckeditor5";import{BalloonEditor as mo,Essentials as go,CKFinderUploadAdapter as fo,Autoformat as uo,Bold as bo,Italic as ho,BlockQuote as yo,CKBox as xo,CKFinder as ko,EasyImage as To,Heading as wo,Image as Io,ImageCaption as So,ImageStyle as Eo,ImageToolbar as Co,ImageUpload as vo,PictureEditing as _o,Indent as Lo,Link as Po,List as Do,MediaEmbed as Ao,Paragraph as Fo,PasteFromOffice as Bo,Table as Ro,TableToolbar as Oo,TextTransformation as Mo,CloudServices as No}from"ckeditor5";import{ClassicEditor as S,Essentials as E,Autoformat as C,Bold as v,Italic as _,BlockQuote as L,CKBox as P,EasyImage as D,Heading as A,Image as F,ImageCaption as B,ImageStyle as R,ImageToolbar as O,ImageUpload as M,PictureEditing as N,Indent as U,Link as V,List as K,MediaEmbed as G,Paragraph as H,PasteFromOffice as q,Table as Q,TableToolbar as X,TextTransformation as z,CloudServices as W,AutoImage as j,ImageInsert as J,Bookmark as $}from"ckeditor5";var i=class extends S{static builtinPlugins=[E,C,v,_,L,W,D,A,F,B,R,O,M,P,U,V,K,G,H,q,N,Q,X,z,j,J,$];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Qo,Essentials as Xo,Alignment as zo,FontSize as Wo,FontFamily as jo,FontColor as Jo,FontBackgroundColor as $o,Autoformat as Yo,Bold as Zo,Italic as ea,Strikethrough as ta,Underline as oa,BlockQuote as aa,CKBox as ia,EasyImage as ra,Heading as la,Image as sa,ImageCaption as na,ImageResize as da,ImageStyle as ca,ImageToolbar as pa,ImageUpload as ma,PictureEditing as ga,Indent as fa,IndentBlock as ua,Link as ba,List as ha,ListProperties as ya,MediaEmbed as xa,Paragraph as ka,PasteFromOffice as Ta,Table as wa,TableToolbar as Ia,TextTransformation as Sa,CloudServices as Ea}from"ckeditor5";import{InlineEditor as La,Essentials as Pa,CKFinderUploadAdapter as Da,Autoformat as Aa,Bold as Fa,Italic as Ba,BlockQuote as Ra,CKBox as Oa,CKFinder as Ma,EasyImage as Na,Heading as Ua,Image as Va,ImageCaption as Ka,ImageStyle as Ga,ImageToolbar as Ha,ImageUpload as qa,PictureEditing as Qa,Indent as Xa,Link as za,List as Wa,MediaEmbed as ja,Paragraph as Ja,PasteFromOffice as $a,Table as Ya,TableToolbar as Za,TextTransformation as ei,CloudServices as ti}from"ckeditor5";import{MultiRootEditor as ri,Essentials as li,CKFinderUploadAdapter as si,Autoformat as ni,Bold as di,Italic as ci,BlockQuote as pi,CKBox as mi,CKFinder as gi,EasyImage as fi,Heading as ui,Image as bi,ImageCaption as hi,ImageStyle as yi,ImageToolbar as xi,ImageUpload as ki,PictureEditing as Ti,Indent as wi,Link as Ii,List as Si,MediaEmbed as Ei,Paragraph as Ci,PasteFromOffice as vi,Table as _i,TableToolbar as Li,TextTransformation as Pi,CloudServices as Di}from"ckeditor5";import{Alignment as Y,Autoformat as Z,Bold as ee,Italic as te,Underline as oe,BlockQuote as ae,CKBox as ie,CKBoxImageEdit as re,CloudServices as le,Essentials as se,FontBackgroundColor as ne,FontColor as de,FontFamily as ce,FontSize as pe,Heading as me,Indent as ge,IndentBlock as fe,PictureEditing as ue,Image as be,ImageCaption as he,ImageInsert as ye,ImageResize as xe,ImageStyle as ke,ImageToolbar as Te,ImageUpload as we,Link as Ie,List as Se,MediaEmbed as Ee,PageBreak as Ce,Paragraph as ve,PasteFromOffice as _e,SpecialCharacters as Le,SpecialCharactersEssentials as Pe,Table as De,TableCellProperties as Ae,TableProperties as Fe,TableToolbar as Be,TextTransformation as Re,CodeBlock as Oe,Mention as Me,Plugin as or}from"ckeditor5";import{SourceEditingEnhanced as Ne,ExportPdf as Ue,ExportWord as Ve,ImportWord as Ke,MergeFields as Ge,Template as He}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",r=class extends i{static builtinPlugins=[...i.builtinPlugins,Ge,Me,Y,se,Z,ae,ee,ie,re,Oe,me,ue,be,he,ke,Te,ge,te,Ie,Se,ve,De,Be,Ue,Ve,Ke,pe,ce,de,ne,fe,we,ye,xe,Ee,Ce,_e,Le,Pe,Ne,Fe,Ae,Re,oe,le,He];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:d,ui:{viewportOffset:{top:g()}}}},f=document.createElement("link");f.rel="stylesheet";f.href="../assets/spa.css";document.head.appendChild(f);var u=document.createElement("meta");u.name="x-cke-crawler-ignore-patterns";u.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(u);var y=`
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
				</figure>`}}];var qe={previewModes:["$dataSets"],initialPreviewMode:b[0].id,dataSets:b},Qe={definitions:[{title:"Discount information",description:"Simple footer with discount information",data:"<p><em>P.S. Mention this email to receive {{discount}} off your first spa treatment!</em></p>"}]};r.create(document.querySelector("#snippet-merge-fields-template"),{mergeFields:{...r.defaultConfig.mergeFields,...qe},toolbar:{items:["insertMergeField","previewMergeFields","|","insertTemplate"].concat(r.defaultConfig.toolbar.items)},initialData:y,template:Qe}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert template"),text:"Click to add a template containing a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
