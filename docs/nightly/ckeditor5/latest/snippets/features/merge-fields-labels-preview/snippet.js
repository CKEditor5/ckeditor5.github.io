var T="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",I="33333.cke-cs.com/ws",d={tokenUrl:T,uploadUrl:w,webSocketUrl:I};var c="https://api.ckbox.io/token/demo";import{Plugin as Ze}from"@ckeditor/ckeditor5-core";import{Essentials as tt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as at}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as it}from"@ckeditor/ckeditor5-block-quote";import{Bold as st,Italic as nt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ct}from"@ckeditor/ckeditor5-heading";import{Image as mt,ImageCaption as gt,ImageStyle as ut,ImageToolbar as ft}from"@ckeditor/ckeditor5-image";import{Indent as ht}from"@ckeditor/ckeditor5-indent";import{Link as xt}from"@ckeditor/ckeditor5-link";import{List as Tt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as It}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ct}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as _t}from"@ckeditor/ckeditor5-table";function p({id:e,target:t,text:a,editor:r,tippyOptions:b}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:a});return}let h=window.umberto.Tooltip.create({id:e,text:a,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...b?.placement&&{position:b.placement}});for(let x of r.editing.view.document.roots)x.once("change:isFocused",(Xe,We,k)=>{k&&h.destroy()});return h}function m(e,t){let a=e.items,r;return typeof t=="function"?r=a.find(t):r=a.get(t),r?r.element:void 0}function g(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as At,Essentials as Rt,CKFinderUploadAdapter as Ot,Autoformat as Nt,BlockToolbar as Mt,Bold as Ut,Italic as Vt,BlockQuote as Kt,CKBox as Gt,CKFinder as Ht,EasyImage as qt,Heading as Qt,Image as Xt,ImageCaption as Wt,ImageStyle as zt,ImageToolbar as jt,ImageUpload as Jt,PictureEditing as $t,Indent as Yt,IndentBlock as Zt,Link as eo,List as to,MediaEmbed as oo,Paragraph as ao,PasteFromOffice as ro,Table as io,TableToolbar as lo,TextTransformation as so,CloudServices as no}from"ckeditor5";import{BalloonEditor as go,Essentials as uo,CKFinderUploadAdapter as fo,Autoformat as bo,Bold as ho,Italic as yo,BlockQuote as xo,CKBox as ko,CKFinder as To,EasyImage as wo,Heading as Io,Image as So,ImageCaption as Co,ImageStyle as Eo,ImageToolbar as vo,ImageUpload as _o,PictureEditing as Lo,Indent as Po,IndentBlock as Do,Link as Bo,List as Fo,MediaEmbed as Ao,Paragraph as Ro,PasteFromOffice as Oo,Table as No,TableToolbar as Mo,TextTransformation as Uo,CloudServices as Vo}from"ckeditor5";import{ClassicEditor as S,Essentials as C,Autoformat as E,Bold as v,Italic as _,BlockQuote as L,CKBox as P,EasyImage as D,Heading as B,Image as F,ImageCaption as A,ImageStyle as R,ImageToolbar as O,ImageUpload as N,PictureEditing as M,Indent as U,IndentBlock as V,Link as K,List as G,MediaEmbed as H,Paragraph as q,PasteFromOffice as Q,Table as X,TableToolbar as W,TextTransformation as z,CloudServices as j,AutoImage as J,ImageInsert as $,Bookmark as Y}from"ckeditor5";var i=class extends S{static builtinPlugins=[C,E,v,_,L,j,D,B,F,A,R,O,N,P,U,V,K,G,H,q,Q,M,X,W,z,J,$,Y];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Wo,Essentials as zo,Alignment as jo,FontSize as Jo,FontFamily as $o,FontColor as Yo,FontBackgroundColor as Zo,Autoformat as ea,Bold as ta,Italic as oa,Strikethrough as aa,Underline as ra,BlockQuote as ia,CKBox as la,EasyImage as sa,Heading as na,Image as da,ImageCaption as ca,ImageResize as pa,ImageStyle as ma,ImageToolbar as ga,ImageUpload as ua,PictureEditing as fa,Indent as ba,IndentBlock as ha,Link as ya,List as xa,ListProperties as ka,MediaEmbed as Ta,Paragraph as wa,PasteFromOffice as Ia,Table as Sa,TableToolbar as Ca,TextTransformation as Ea,CloudServices as va}from"ckeditor5";import{InlineEditor as Da,Essentials as Ba,CKFinderUploadAdapter as Fa,Autoformat as Aa,Bold as Ra,Italic as Oa,BlockQuote as Na,CKBox as Ma,CKFinder as Ua,EasyImage as Va,Heading as Ka,Image as Ga,ImageCaption as Ha,ImageStyle as qa,ImageToolbar as Qa,ImageUpload as Xa,PictureEditing as Wa,Indent as za,IndentBlock as ja,Link as Ja,List as $a,MediaEmbed as Ya,Paragraph as Za,PasteFromOffice as er,Table as tr,TableToolbar as or,TextTransformation as ar,CloudServices as rr}from"ckeditor5";import{MultiRootEditor as nr,Essentials as dr,CKFinderUploadAdapter as cr,Autoformat as pr,Bold as mr,Italic as gr,BlockQuote as ur,CKBox as fr,CKFinder as br,EasyImage as hr,Heading as yr,Image as xr,ImageCaption as kr,ImageStyle as Tr,ImageToolbar as wr,ImageUpload as Ir,PictureEditing as Sr,Indent as Cr,IndentBlock as Er,Link as vr,List as _r,MediaEmbed as Lr,Paragraph as Pr,PasteFromOffice as Dr,Table as Br,TableToolbar as Fr,TextTransformation as Ar,CloudServices as Rr}from"ckeditor5";import{Alignment as Z,Autoformat as ee,Bold as te,Italic as oe,Underline as ae,BlockQuote as re,CKBox as ie,CKBoxImageEdit as le,CloudServices as se,Essentials as ne,FontBackgroundColor as de,FontColor as ce,FontFamily as pe,FontSize as me,Heading as ge,Indent as ue,IndentBlock as fe,PictureEditing as be,Image as he,ImageCaption as ye,ImageInsert as xe,ImageResize as ke,ImageStyle as Te,ImageToolbar as we,ImageUpload as Ie,Link as Se,List as Ce,MediaEmbed as Ee,PageBreak as ve,Paragraph as _e,PasteFromOffice as Le,SpecialCharacters as Pe,SpecialCharactersEssentials as De,Table as Be,TableCellProperties as Fe,TableProperties as Ae,TableToolbar as Re,TextTransformation as Oe,CodeBlock as Ne,Mention as Me,Plugin as li}from"ckeditor5";import{SourceEditingEnhanced as Ue,ExportPdf as Ve,ExportWord as Ke,ImportWord as Ge,MergeFields as He,Template as qe}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",l=class extends i{static builtinPlugins=[...i.builtinPlugins,He,Me,Z,ne,ee,re,te,ie,le,Ne,ge,be,he,ye,Te,we,ue,oe,Se,Ce,_e,Be,Re,Ve,Ke,Ge,me,pe,ce,de,fe,Ie,xe,ke,Ee,ve,Le,Pe,De,Ue,Ae,Fe,Oe,ae,se,qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:c,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:d,ui:{viewportOffset:{top:g()}}}},u=document.createElement("link");u.rel="stylesheet";u.href="../assets/spa.css";document.head.appendChild(u);var f=document.createElement("meta");f.name="x-cke-crawler-ignore-patterns";f.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(f);var y=`
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
`,di=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Qe={previewModes:["$labels"]};l.create(document.querySelector("#snippet-merge-fields-labels"),{mergeFields:{...l.defaultConfig.mergeFields,...Qe},toolbar:{items:["insertMergeField"].concat(l.defaultConfig.toolbar.items),shouldNotGroupWhenFull:!0},initialData:y}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,p({target:m(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:"Click to add a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
