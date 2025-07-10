var w="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",S="https://33333.cke-cs.com/easyimage/upload/",E="33333.cke-cs.com/ws",d={tokenUrl:w,uploadUrl:S,webSocketUrl:E};var c="https://api.ckbox.io/token/demo";import{Plugin as et}from"@ckeditor/ckeditor5-core";import{Essentials as ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as it}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as lt}from"@ckeditor/ckeditor5-block-quote";import{Bold as nt,Italic as dt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as pt}from"@ckeditor/ckeditor5-heading";import{Image as gt,ImageCaption as ft,ImageStyle as ut,ImageToolbar as bt}from"@ckeditor/ckeditor5-image";import{Indent as yt}from"@ckeditor/ckeditor5-indent";import{Link as kt}from"@ckeditor/ckeditor5-link";import{List as It}from"@ckeditor/ckeditor5-list";import{MediaEmbed as St}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ct}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as Lt}from"@ckeditor/ckeditor5-table";function p({target:e,text:t,editor:l,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let x=`
		<div class="tippy-content__message">${t}</div>
		<button class="ck ck-button tippy-content__close-button ck-off" title="Close"></button>
	`,k=Object.assign({},{placement:"bottom",trigger:"manual",hideOnClick:!1,allowHTML:!0,maxWidth:280,showOnCreate:!0,interactive:!0,theme:"light-border",zIndex:1,appendTo:()=>document.body},a),b=window.umberto.createTooltip(e,x,k);for(let T of l.editing.view.document.roots)T.once("change:isFocused",(We,qe,I)=>{I&&b.hide()});return b}function m(e,t){let l=e.items,a;return typeof t=="function"?a=l.find(t):a=l.get(t),a?a.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Bt,Essentials as Ot,CKFinderUploadAdapter as Mt,Autoformat as Nt,BlockToolbar as Ut,Bold as Vt,Italic as Kt,BlockQuote as Gt,CKBox as Ht,CKFinder as Xt,EasyImage as Qt,Heading as zt,Image as Wt,ImageCaption as qt,ImageStyle as jt,ImageToolbar as Jt,ImageUpload as $t,PictureEditing as Yt,Indent as Zt,Link as eo,List as to,MediaEmbed as oo,Paragraph as ao,PasteFromOffice as io,Table as ro,TableToolbar as lo,TextTransformation as so,CloudServices as no}from"ckeditor5";import{BalloonEditor as go,Essentials as fo,CKFinderUploadAdapter as uo,Autoformat as bo,Bold as ho,Italic as yo,BlockQuote as xo,CKBox as ko,CKFinder as To,EasyImage as Io,Heading as wo,Image as So,ImageCaption as Eo,ImageStyle as Co,ImageToolbar as _o,ImageUpload as vo,PictureEditing as Lo,Indent as Po,Link as Do,List as Fo,MediaEmbed as Ao,Paragraph as Ro,PasteFromOffice as Bo,Table as Oo,TableToolbar as Mo,TextTransformation as No,CloudServices as Uo}from"ckeditor5";import{ClassicEditor as C,Essentials as _,Autoformat as v,Bold as L,Italic as P,BlockQuote as D,CKBox as F,EasyImage as A,Heading as R,Image as B,ImageCaption as O,ImageStyle as M,ImageToolbar as N,ImageUpload as U,PictureEditing as V,Indent as K,Link as G,List as H,MediaEmbed as X,Paragraph as Q,PasteFromOffice as z,Table as W,TableToolbar as q,TextTransformation as j,CloudServices as J,AutoImage as $,ImageInsert as Y,Bookmark as Z}from"ckeditor5";var i=class extends C{static builtinPlugins=[_,v,L,P,D,J,A,R,B,O,M,N,U,F,K,G,H,X,Q,z,V,W,q,j,$,Y,Z];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as zo,Essentials as Wo,Alignment as qo,FontSize as jo,FontFamily as Jo,FontColor as $o,FontBackgroundColor as Yo,Autoformat as Zo,Bold as ea,Italic as ta,Strikethrough as oa,Underline as aa,BlockQuote as ia,CKBox as ra,EasyImage as la,Heading as sa,Image as na,ImageCaption as da,ImageResize as ca,ImageStyle as pa,ImageToolbar as ma,ImageUpload as ga,PictureEditing as fa,Indent as ua,IndentBlock as ba,Link as ha,List as ya,ListProperties as xa,MediaEmbed as ka,Paragraph as Ta,PasteFromOffice as Ia,Table as wa,TableToolbar as Sa,TextTransformation as Ea,CloudServices as Ca}from"ckeditor5";import{InlineEditor as Pa,Essentials as Da,CKFinderUploadAdapter as Fa,Autoformat as Aa,Bold as Ra,Italic as Ba,BlockQuote as Oa,CKBox as Ma,CKFinder as Na,EasyImage as Ua,Heading as Va,Image as Ka,ImageCaption as Ga,ImageStyle as Ha,ImageToolbar as Xa,ImageUpload as Qa,PictureEditing as za,Indent as Wa,Link as qa,List as ja,MediaEmbed as Ja,Paragraph as $a,PasteFromOffice as Ya,Table as Za,TableToolbar as ei,TextTransformation as ti,CloudServices as oi}from"ckeditor5";import{MultiRootEditor as li,Essentials as si,CKFinderUploadAdapter as ni,Autoformat as di,Bold as ci,Italic as pi,BlockQuote as mi,CKBox as gi,CKFinder as fi,EasyImage as ui,Heading as bi,Image as hi,ImageCaption as yi,ImageStyle as xi,ImageToolbar as ki,ImageUpload as Ti,PictureEditing as Ii,Indent as wi,Link as Si,List as Ei,MediaEmbed as Ci,Paragraph as _i,PasteFromOffice as vi,Table as Li,TableToolbar as Pi,TextTransformation as Di,CloudServices as Fi}from"ckeditor5";import{Alignment as ee,Autoformat as te,Bold as oe,Italic as ae,Underline as ie,BlockQuote as re,CKBox as le,CKBoxImageEdit as se,CloudServices as ne,Essentials as de,FontBackgroundColor as ce,FontColor as pe,FontFamily as me,FontSize as ge,Heading as fe,Indent as ue,IndentBlock as be,PictureEditing as he,Image as ye,ImageCaption as xe,ImageInsert as ke,ImageResize as Te,ImageStyle as Ie,ImageToolbar as we,ImageUpload as Se,Link as Ee,List as Ce,MediaEmbed as _e,PageBreak as ve,Paragraph as Le,PasteFromOffice as Pe,SpecialCharacters as De,SpecialCharactersEssentials as Fe,Table as Ae,TableCellProperties as Re,TableProperties as Be,TableToolbar as Oe,TextTransformation as Me,CodeBlock as Ne,Mention as Ue,Plugin as tr}from"ckeditor5";import{SourceEditingEnhanced as Ve,ExportPdf as Ke,ExportWord as Ge,ImportWord as He,MergeFields as Xe,Template as Qe}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",r=class extends i{static builtinPlugins=[...i.builtinPlugins,Xe,Ue,ee,de,te,re,oe,le,se,Ne,fe,he,ye,xe,Ie,we,ue,ae,Ee,Ce,Le,Ae,Oe,Ke,Ge,He,ge,me,pe,ce,be,Se,ke,Te,_e,ve,Pe,De,Fe,Ve,Be,Re,Me,ie,ne,Qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:d,ui:{viewportOffset:{top:g()}}}},f=document.createElement("link");f.rel="stylesheet";f.href="../assets/spa.css";document.head.appendChild(f);var u=document.createElement("meta");u.name="x-cke-crawler-ignore-patterns";u.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(u);var h=`
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
				</figure>`}}];var ze={dataSets:y,previewModes:["$labels","$dataSets"]};r.create(document.querySelector("#snippet-merge-fields-datasets"),{mergeFields:{...r.defaultConfig.mergeFields,...ze},toolbar:{items:["insertMergeField","previewMergeFields"].concat(r.defaultConfig.toolbar.items)},initialData:h}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Merge fields preview"),text:"Click to change preview mode.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
