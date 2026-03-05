var T="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",I="33333.cke-cs.com/ws",m={tokenUrl:T,uploadUrl:w,webSocketUrl:I};var g="https://api.ckbox.io/token/demo";import{Plugin as tt}from"@ckeditor/ckeditor5-core";import{Essentials as at}from"@ckeditor/ckeditor5-essentials";import{Autoformat as it}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as st}from"@ckeditor/ckeditor5-block-quote";import{Bold as dt,Italic as ct}from"@ckeditor/ckeditor5-basic-styles";import{Heading as mt}from"@ckeditor/ckeditor5-heading";import{Image as ut,ImageCaption as ft,ImageStyle as bt,ImageToolbar as ht}from"@ckeditor/ckeditor5-image";import{Indent as xt}from"@ckeditor/ckeditor5-indent";import{Link as Tt}from"@ckeditor/ckeditor5-link";import{List as It}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Ct}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as vt}from"@ckeditor/ckeditor5-paragraph";import{Table as _t,TableToolbar as Lt}from"@ckeditor/ckeditor5-table";function u({id:e,target:t,text:a,editor:r,tippyOptions:p}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:a});return}let s=window.umberto.Tooltip.create({id:e,text:a,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...p?.placement&&{position:p.placement}});for(let x of r.editing.view.document.roots)x.once("change:isFocused",(We,je,k)=>{k&&s.destroy()});return s}function f(e,t){let a=e.items,r;return typeof t=="function"?r=a.find(t):r=a.get(t),r?r.element:void 0}function b(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ot,Essentials as Nt,CKFinderUploadAdapter as Mt,Autoformat as Vt,BlockToolbar as Ut,Bold as Kt,Italic as Gt,BlockQuote as Ht,CKBox as qt,CKFinder as Qt,EasyImage as Xt,Heading as zt,Image as Wt,ImageCaption as jt,ImageStyle as Jt,ImageToolbar as $t,ImageUpload as Yt,PictureEditing as Zt,Indent as eo,IndentBlock as to,Link as oo,List as ao,MediaEmbed as ro,Paragraph as io,PasteFromOffice as lo,Table as so,TableToolbar as no,TextTransformation as co,CloudServices as po}from"ckeditor5";import{BalloonEditor as fo,Essentials as bo,CKFinderUploadAdapter as ho,Autoformat as yo,Bold as xo,Italic as ko,BlockQuote as To,CKBox as wo,CKFinder as Io,EasyImage as So,Heading as Co,Image as Eo,ImageCaption as vo,ImageStyle as Po,ImageToolbar as _o,ImageUpload as Lo,PictureEditing as Bo,Indent as Do,IndentBlock as Fo,Link as Ro,List as Ao,MediaEmbed as Oo,Paragraph as No,PasteFromOffice as Mo,Table as Vo,TableToolbar as Uo,TextTransformation as Ko,CloudServices as Go}from"ckeditor5";import{ClassicEditor as S,Essentials as C,Autoformat as E,Bold as v,Italic as P,BlockQuote as _,CKBox as L,EasyImage as B,Heading as D,Image as F,ImageCaption as R,ImageStyle as A,ImageToolbar as O,ImageUpload as N,PictureEditing as M,Indent as V,IndentBlock as U,Link as K,List as G,MediaEmbed as H,Paragraph as q,PasteFromOffice as Q,Table as X,TableToolbar as z,TextTransformation as W,CloudServices as j,AutoImage as J,ImageInsert as $,Bookmark as Y}from"ckeditor5";var i=class extends S{static builtinPlugins=[C,E,v,P,_,j,B,D,F,R,A,O,N,L,V,U,K,G,H,q,Q,M,X,z,W,J,$,Y];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as jo,Essentials as Jo,Alignment as $o,FontSize as Yo,FontFamily as Zo,FontColor as ea,FontBackgroundColor as ta,Autoformat as oa,Bold as aa,Italic as ra,Strikethrough as ia,Underline as la,BlockQuote as sa,CKBox as na,EasyImage as da,Heading as ca,Image as pa,ImageCaption as ma,ImageResize as ga,ImageStyle as ua,ImageToolbar as fa,ImageUpload as ba,PictureEditing as ha,Indent as ya,IndentBlock as xa,Link as ka,List as Ta,ListProperties as wa,MediaEmbed as Ia,Paragraph as Sa,PasteFromOffice as Ca,Table as Ea,TableToolbar as va,TextTransformation as Pa,CloudServices as _a}from"ckeditor5";import{InlineEditor as Fa,Essentials as Ra,CKFinderUploadAdapter as Aa,Autoformat as Oa,Bold as Na,Italic as Ma,BlockQuote as Va,CKBox as Ua,CKFinder as Ka,EasyImage as Ga,Heading as Ha,Image as qa,ImageCaption as Qa,ImageStyle as Xa,ImageToolbar as za,ImageUpload as Wa,PictureEditing as ja,Indent as Ja,IndentBlock as $a,Link as Ya,List as Za,MediaEmbed as er,Paragraph as tr,PasteFromOffice as or,Table as ar,TableToolbar as rr,TextTransformation as ir,CloudServices as lr}from"ckeditor5";import{MultiRootEditor as cr,Essentials as pr,CKFinderUploadAdapter as mr,Autoformat as gr,Bold as ur,Italic as fr,BlockQuote as br,CKBox as hr,CKFinder as yr,EasyImage as xr,Heading as kr,Image as Tr,ImageCaption as wr,ImageStyle as Ir,ImageToolbar as Sr,ImageUpload as Cr,PictureEditing as Er,Indent as vr,IndentBlock as Pr,Link as _r,List as Lr,MediaEmbed as Br,Paragraph as Dr,PasteFromOffice as Fr,Table as Rr,TableToolbar as Ar,TextTransformation as Or,CloudServices as Nr}from"ckeditor5";import{Alignment as Z,Autoformat as ee,Bold as te,Italic as oe,Underline as ae,BlockQuote as re,CKBox as ie,CKBoxImageEdit as le,CloudServices as se,Essentials as ne,FontBackgroundColor as de,FontColor as ce,FontFamily as pe,FontSize as me,Heading as ge,Indent as ue,IndentBlock as fe,PictureEditing as be,Image as he,ImageCaption as ye,ImageInsert as xe,ImageResize as ke,ImageStyle as Te,ImageToolbar as we,ImageUpload as Ie,Link as Se,List as Ce,MediaEmbed as Ee,PageBreak as ve,Paragraph as Pe,PasteFromOffice as _e,SpecialCharacters as Le,SpecialCharactersEssentials as Be,Table as De,TableCellProperties as Fe,TableProperties as Re,TableToolbar as Ae,TextTransformation as Oe,CodeBlock as Ne,Mention as Me,Plugin as Ve}from"ckeditor5";import{SourceEditingEnhanced as Ue,ExportPdf as Ke,ExportWord as Ge,ImportWord as He,MergeFields as qe,Template as Qe}from"ckeditor5-premium-features";var n="19.25mm",d="16mm",l=class extends i{static builtinPlugins=[...i.builtinPlugins,qe,Me,Z,ne,ee,re,te,ie,le,Ne,ge,be,he,ye,Te,we,ue,oe,Se,Ce,Pe,De,Ae,Ke,Ge,He,me,pe,ce,de,fe,Ie,xe,ke,Ee,ve,_e,Le,Be,Ue,Re,Fe,Oe,ae,se,Qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:d,margin_bottom:d,margin_right:n,margin_left:n,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:d,bottom:d,right:n,left:n}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:m,ui:{viewportOffset:{top:b()}}}},h=document.createElement("link");h.rel="stylesheet";h.href="../assets/spa.css";document.head.appendChild(h);var Xe="https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",c=class extends Ve{static get pluginName(){return"IntervalFetcher"}mergeFieldsData={};init(){this._updateMergeFieldsData(),setInterval(()=>this._updateMergeFieldsData(),5e3)}async _updateMergeFieldsData(){try{let a=await(await fetch(Xe)).json(),r=new Date(a.closeTime),s={bitcoinRate:"$"+Number(a.lastPrice).toFixed(2)+" - "+r.toLocaleString()};this.mergeFieldsData=s,this.editor.plugins.get("MergeFieldsEditing").refreshMergeFields()}catch(t){console.error(t)}}},y=document.createElement("meta");y.name="x-cke-crawler-ignore-patterns";y.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(y);var ci=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var ze={previewModes:["$defaultValues"],initialPreviewMode:"$defaultValues",definitions:[{id:"bitcoinRate",label:"Bitcoin rate",defaultValue:e=>e.plugins.has("IntervalFetcher")?e.plugins.get("IntervalFetcher").mergeFieldsData.bitcoinRate||"Fetching data...":"Data not available."}]};l.create(document.querySelector("#snippet-merge-fields-refresh-values"),{mergeFields:{...l.defaultConfig.mergeFields,...ze},toolbar:{items:["insertMergeField"].concat(l.defaultConfig.toolbar.items)},extraPlugins:[c]}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,u({target:f(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:'"Bitcoin rate" merge field value refreshes every 5 seconds.',editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
