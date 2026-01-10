var T="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",I="33333.cke-cs.com/ws",m={tokenUrl:T,uploadUrl:w,webSocketUrl:I};var g="https://api.ckbox.io/token/demo";import{Plugin as et}from"@ckeditor/ckeditor5-core";import{Essentials as ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as rt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as lt}from"@ckeditor/ckeditor5-block-quote";import{Bold as nt,Italic as dt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as pt}from"@ckeditor/ckeditor5-heading";import{Image as gt,ImageCaption as ut,ImageStyle as ft,ImageToolbar as bt}from"@ckeditor/ckeditor5-image";import{Indent as yt}from"@ckeditor/ckeditor5-indent";import{Link as kt}from"@ckeditor/ckeditor5-link";import{List as wt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as St}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Et}from"@ckeditor/ckeditor5-paragraph";import{Table as Pt,TableToolbar as _t}from"@ckeditor/ckeditor5-table";function u({id:e,target:t,text:a,editor:r,tippyOptions:p}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:a});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:a});return}let s=window.umberto.Tooltip.create({id:e,text:a,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...p?.placement&&{position:p.placement}});for(let x of r.editing.view.document.roots)x.once("change:isFocused",(ze,We,k)=>{k&&s.destroy()});return s}function f(e,t){let a=e.items,r;return typeof t=="function"?r=a.find(t):r=a.get(t),r?r.element:void 0}function b(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as At,Essentials as Ot,CKFinderUploadAdapter as Nt,Autoformat as Mt,BlockToolbar as Vt,Bold as Ut,Italic as Kt,BlockQuote as Gt,CKBox as Ht,CKFinder as qt,EasyImage as Qt,Heading as Xt,Image as zt,ImageCaption as Wt,ImageStyle as jt,ImageToolbar as Jt,ImageUpload as $t,PictureEditing as Yt,Indent as Zt,Link as eo,List as to,MediaEmbed as oo,Paragraph as ao,PasteFromOffice as ro,Table as io,TableToolbar as lo,TextTransformation as so,CloudServices as no}from"ckeditor5";import{BalloonEditor as go,Essentials as uo,CKFinderUploadAdapter as fo,Autoformat as bo,Bold as ho,Italic as yo,BlockQuote as xo,CKBox as ko,CKFinder as To,EasyImage as wo,Heading as Io,Image as So,ImageCaption as Co,ImageStyle as Eo,ImageToolbar as vo,ImageUpload as Po,PictureEditing as _o,Indent as Lo,Link as Do,List as Fo,MediaEmbed as Bo,Paragraph as Ro,PasteFromOffice as Ao,Table as Oo,TableToolbar as No,TextTransformation as Mo,CloudServices as Vo}from"ckeditor5";import{ClassicEditor as S,Essentials as C,Autoformat as E,Bold as v,Italic as P,BlockQuote as _,CKBox as L,EasyImage as D,Heading as F,Image as B,ImageCaption as R,ImageStyle as A,ImageToolbar as O,ImageUpload as N,PictureEditing as M,Indent as V,Link as U,List as K,MediaEmbed as G,Paragraph as H,PasteFromOffice as q,Table as Q,TableToolbar as X,TextTransformation as z,CloudServices as W,AutoImage as j,ImageInsert as J,Bookmark as $}from"ckeditor5";var i=class extends S{static builtinPlugins=[C,E,v,P,_,W,D,F,B,R,A,O,N,L,V,U,K,G,H,q,M,Q,X,z,j,J,$];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Xo,Essentials as zo,Alignment as Wo,FontSize as jo,FontFamily as Jo,FontColor as $o,FontBackgroundColor as Yo,Autoformat as Zo,Bold as ea,Italic as ta,Strikethrough as oa,Underline as aa,BlockQuote as ra,CKBox as ia,EasyImage as la,Heading as sa,Image as na,ImageCaption as da,ImageResize as ca,ImageStyle as pa,ImageToolbar as ma,ImageUpload as ga,PictureEditing as ua,Indent as fa,IndentBlock as ba,Link as ha,List as ya,ListProperties as xa,MediaEmbed as ka,Paragraph as Ta,PasteFromOffice as wa,Table as Ia,TableToolbar as Sa,TextTransformation as Ca,CloudServices as Ea}from"ckeditor5";import{InlineEditor as La,Essentials as Da,CKFinderUploadAdapter as Fa,Autoformat as Ba,Bold as Ra,Italic as Aa,BlockQuote as Oa,CKBox as Na,CKFinder as Ma,EasyImage as Va,Heading as Ua,Image as Ka,ImageCaption as Ga,ImageStyle as Ha,ImageToolbar as qa,ImageUpload as Qa,PictureEditing as Xa,Indent as za,Link as Wa,List as ja,MediaEmbed as Ja,Paragraph as $a,PasteFromOffice as Ya,Table as Za,TableToolbar as er,TextTransformation as tr,CloudServices as or}from"ckeditor5";import{MultiRootEditor as lr,Essentials as sr,CKFinderUploadAdapter as nr,Autoformat as dr,Bold as cr,Italic as pr,BlockQuote as mr,CKBox as gr,CKFinder as ur,EasyImage as fr,Heading as br,Image as hr,ImageCaption as yr,ImageStyle as xr,ImageToolbar as kr,ImageUpload as Tr,PictureEditing as wr,Indent as Ir,Link as Sr,List as Cr,MediaEmbed as Er,Paragraph as vr,PasteFromOffice as Pr,Table as _r,TableToolbar as Lr,TextTransformation as Dr,CloudServices as Fr}from"ckeditor5";import{Alignment as Y,Autoformat as Z,Bold as ee,Italic as te,Underline as oe,BlockQuote as ae,CKBox as re,CKBoxImageEdit as ie,CloudServices as le,Essentials as se,FontBackgroundColor as ne,FontColor as de,FontFamily as ce,FontSize as pe,Heading as me,Indent as ge,IndentBlock as ue,PictureEditing as fe,Image as be,ImageCaption as he,ImageInsert as ye,ImageResize as xe,ImageStyle as ke,ImageToolbar as Te,ImageUpload as we,Link as Ie,List as Se,MediaEmbed as Ce,PageBreak as Ee,Paragraph as ve,PasteFromOffice as Pe,SpecialCharacters as _e,SpecialCharactersEssentials as Le,Table as De,TableCellProperties as Fe,TableProperties as Be,TableToolbar as Re,TextTransformation as Ae,CodeBlock as Oe,Mention as Ne,Plugin as Me}from"ckeditor5";import{SourceEditingEnhanced as Ve,ExportPdf as Ue,ExportWord as Ke,ImportWord as Ge,MergeFields as He,Template as qe}from"ckeditor5-premium-features";var n="19.25mm",d="16mm",l=class extends i{static builtinPlugins=[...i.builtinPlugins,He,Ne,Y,se,Z,ae,ee,re,ie,Oe,me,fe,be,he,ke,Te,ge,te,Ie,Se,ve,De,Re,Ue,Ke,Ge,pe,ce,de,ne,ue,we,ye,xe,Ce,Ee,Pe,_e,Le,Ve,Be,Fe,Ae,oe,le,qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:d,margin_bottom:d,margin_right:n,margin_left:n,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["../assets/ckeditor5/ckeditor5.css","../assets/ckeditor5-premium-features/ckeditor5-premium-features.css","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:d,bottom:d,right:n,left:n}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:m,ui:{viewportOffset:{top:b()}}}},h=document.createElement("link");h.rel="stylesheet";h.href="../assets/spa.css";document.head.appendChild(h);var Qe="https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",c=class extends Me{static get pluginName(){return"IntervalFetcher"}mergeFieldsData={};init(){this._updateMergeFieldsData(),setInterval(()=>this._updateMergeFieldsData(),5e3)}async _updateMergeFieldsData(){try{let a=await(await fetch(Qe)).json(),r=new Date(a.closeTime),s={bitcoinRate:"$"+Number(a.lastPrice).toFixed(2)+" - "+r.toLocaleString()};this.mergeFieldsData=s,this.editor.plugins.get("MergeFieldsEditing").refreshMergeFields()}catch(t){console.error(t)}}},y=document.createElement("meta");y.name="x-cke-crawler-ignore-patterns";y.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(y);var ii=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Xe={previewModes:["$defaultValues"],initialPreviewMode:"$defaultValues",definitions:[{id:"bitcoinRate",label:"Bitcoin rate",defaultValue:e=>e.plugins.has("IntervalFetcher")?e.plugins.get("IntervalFetcher").mergeFieldsData.bitcoinRate||"Fetching data...":"Data not available."}]};l.create(document.querySelector("#snippet-merge-fields-refresh-values"),{mergeFields:{...l.defaultConfig.mergeFields,...Xe},toolbar:{items:["insertMergeField"].concat(l.defaultConfig.toolbar.items)},extraPlugins:[c]}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,u({target:f(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:'"Bitcoin rate" merge field value refreshes every 5 seconds.',editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
