var k="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",T="https://33333.cke-cs.com/easyimage/upload/",w="33333.cke-cs.com/ws",m={tokenUrl:k,uploadUrl:T,webSocketUrl:w};var g="https://api.ckbox.io/token/demo";import{Plugin as Ze}from"@ckeditor/ckeditor5-core";import{Essentials as tt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as at}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as it}from"@ckeditor/ckeditor5-block-quote";import{Bold as st,Italic as nt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ct}from"@ckeditor/ckeditor5-heading";import{Image as mt,ImageCaption as gt,ImageStyle as ut,ImageToolbar as ft}from"@ckeditor/ckeditor5-image";import{Indent as ht}from"@ckeditor/ckeditor5-indent";import{Link as xt}from"@ckeditor/ckeditor5-link";import{List as Tt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as It}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Et}from"@ckeditor/ckeditor5-paragraph";import{Table as vt,TableToolbar as Pt}from"@ckeditor/ckeditor5-table";function u({target:e,text:t,editor:r,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let c=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...a?.placement&&{position:a.placement}});for(let p of r.editing.view.document.roots)p.once("change:isFocused",(Xe,ze,x)=>{x&&c.destroy()});return c}function f(e,t){let r=e.items,a;return typeof t=="function"?a=r.find(t):a=r.get(t),a?a.element:void 0}function b(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Rt,Essentials as At,CKFinderUploadAdapter as Ot,Autoformat as Nt,BlockToolbar as Mt,Bold as Vt,Italic as Ut,BlockQuote as Kt,CKBox as Gt,CKFinder as Ht,EasyImage as qt,Heading as Qt,Image as Xt,ImageCaption as zt,ImageStyle as Wt,ImageToolbar as jt,ImageUpload as Jt,PictureEditing as $t,Indent as Yt,Link as Zt,List as eo,MediaEmbed as to,Paragraph as oo,PasteFromOffice as ao,Table as ro,TableToolbar as io,TextTransformation as lo,CloudServices as so}from"ckeditor5";import{BalloonEditor as mo,Essentials as go,CKFinderUploadAdapter as uo,Autoformat as fo,Bold as bo,Italic as ho,BlockQuote as yo,CKBox as xo,CKFinder as ko,EasyImage as To,Heading as wo,Image as Io,ImageCaption as So,ImageStyle as Eo,ImageToolbar as Co,ImageUpload as vo,PictureEditing as Po,Indent as _o,Link as Lo,List as Do,MediaEmbed as Fo,Paragraph as Bo,PasteFromOffice as Ro,Table as Ao,TableToolbar as Oo,TextTransformation as No,CloudServices as Mo}from"ckeditor5";import{ClassicEditor as I,Essentials as S,Autoformat as E,Bold as C,Italic as v,BlockQuote as P,CKBox as _,EasyImage as L,Heading as D,Image as F,ImageCaption as B,ImageStyle as R,ImageToolbar as A,ImageUpload as O,PictureEditing as N,Indent as M,Link as V,List as U,MediaEmbed as K,Paragraph as G,PasteFromOffice as H,Table as q,TableToolbar as Q,TextTransformation as X,CloudServices as z,AutoImage as W,ImageInsert as j,Bookmark as J}from"ckeditor5";var i=class extends I{static builtinPlugins=[S,E,C,v,P,z,L,D,F,B,R,A,O,_,M,V,U,K,G,H,N,q,Q,X,W,j,J];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Qo,Essentials as Xo,Alignment as zo,FontSize as Wo,FontFamily as jo,FontColor as Jo,FontBackgroundColor as $o,Autoformat as Yo,Bold as Zo,Italic as ea,Strikethrough as ta,Underline as oa,BlockQuote as aa,CKBox as ra,EasyImage as ia,Heading as la,Image as sa,ImageCaption as na,ImageResize as da,ImageStyle as ca,ImageToolbar as pa,ImageUpload as ma,PictureEditing as ga,Indent as ua,IndentBlock as fa,Link as ba,List as ha,ListProperties as ya,MediaEmbed as xa,Paragraph as ka,PasteFromOffice as Ta,Table as wa,TableToolbar as Ia,TextTransformation as Sa,CloudServices as Ea}from"ckeditor5";import{InlineEditor as _a,Essentials as La,CKFinderUploadAdapter as Da,Autoformat as Fa,Bold as Ba,Italic as Ra,BlockQuote as Aa,CKBox as Oa,CKFinder as Na,EasyImage as Ma,Heading as Va,Image as Ua,ImageCaption as Ka,ImageStyle as Ga,ImageToolbar as Ha,ImageUpload as qa,PictureEditing as Qa,Indent as Xa,Link as za,List as Wa,MediaEmbed as ja,Paragraph as Ja,PasteFromOffice as $a,Table as Ya,TableToolbar as Za,TextTransformation as er,CloudServices as tr}from"ckeditor5";import{MultiRootEditor as ir,Essentials as lr,CKFinderUploadAdapter as sr,Autoformat as nr,Bold as dr,Italic as cr,BlockQuote as pr,CKBox as mr,CKFinder as gr,EasyImage as ur,Heading as fr,Image as br,ImageCaption as hr,ImageStyle as yr,ImageToolbar as xr,ImageUpload as kr,PictureEditing as Tr,Indent as wr,Link as Ir,List as Sr,MediaEmbed as Er,Paragraph as Cr,PasteFromOffice as vr,Table as Pr,TableToolbar as _r,TextTransformation as Lr,CloudServices as Dr}from"ckeditor5";import{Alignment as $,Autoformat as Y,Bold as Z,Italic as ee,Underline as te,BlockQuote as oe,CKBox as ae,CKBoxImageEdit as re,CloudServices as ie,Essentials as le,FontBackgroundColor as se,FontColor as ne,FontFamily as de,FontSize as ce,Heading as pe,Indent as me,IndentBlock as ge,PictureEditing as ue,Image as fe,ImageCaption as be,ImageInsert as he,ImageResize as ye,ImageStyle as xe,ImageToolbar as ke,ImageUpload as Te,Link as we,List as Ie,MediaEmbed as Se,PageBreak as Ee,Paragraph as Ce,PasteFromOffice as ve,SpecialCharacters as Pe,SpecialCharactersEssentials as _e,Table as Le,TableCellProperties as De,TableProperties as Fe,TableToolbar as Be,TextTransformation as Re,CodeBlock as Ae,Mention as Oe,Plugin as Ne}from"ckeditor5";import{SourceEditingEnhanced as Me,ExportPdf as Ve,ExportWord as Ue,ImportWord as Ke,MergeFields as Ge,Template as He}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",l=class extends i{static builtinPlugins=[...i.builtinPlugins,Ge,Oe,$,le,Y,oe,Z,ae,re,Ae,pe,ue,fe,be,xe,ke,me,ee,we,Ie,Ce,Le,Be,Ve,Ue,Ke,ce,de,ne,se,ge,Te,he,ye,Se,Ee,ve,Pe,_e,Me,Fe,De,Re,te,ie,He];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:m,ui:{viewportOffset:{top:b()}}}},h=document.createElement("link");h.rel="stylesheet";h.href="../assets/spa.css";document.head.appendChild(h);var qe="https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",d=class extends Ne{static get pluginName(){return"IntervalFetcher"}mergeFieldsData={};init(){this._updateMergeFieldsData(),setInterval(()=>this._updateMergeFieldsData(),5e3)}async _updateMergeFieldsData(){try{let r=await(await fetch(qe)).json(),a=new Date(r.closeTime),p={bitcoinRate:"$"+Number(r.lastPrice).toFixed(2)+" - "+a.toLocaleString()};this.mergeFieldsData=p,this.editor.plugins.get("MergeFieldsEditing").refreshMergeFields()}catch(t){console.error(t)}}},y=document.createElement("meta");y.name="x-cke-crawler-ignore-patterns";y.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(y);var ri=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var Qe={previewModes:["$defaultValues"],initialPreviewMode:"$defaultValues",definitions:[{id:"bitcoinRate",label:"Bitcoin rate",defaultValue:e=>e.plugins.has("IntervalFetcher")?e.plugins.get("IntervalFetcher").mergeFieldsData.bitcoinRate||"Fetching data...":"Data not available."}]};l.create(document.querySelector("#snippet-merge-fields-refresh-values"),{mergeFields:{...l.defaultConfig.mergeFields,...Qe},toolbar:{items:["insertMergeField"].concat(l.defaultConfig.toolbar.items)},extraPlugins:[d]}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,u({target:f(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:'"Bitcoin rate" merge field value refreshes every 5 seconds.',editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
