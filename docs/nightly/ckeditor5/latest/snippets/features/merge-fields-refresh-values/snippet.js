var I="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",w="https://33333.cke-cs.com/easyimage/upload/",S="33333.cke-cs.com/ws",p={tokenUrl:I,uploadUrl:w,webSocketUrl:S};var g="https://api.ckbox.io/token/demo";import{Plugin as tt}from"@ckeditor/ckeditor5-core";import{Essentials as at}from"@ckeditor/ckeditor5-essentials";import{Autoformat as it}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as st}from"@ckeditor/ckeditor5-block-quote";import{Bold as dt,Italic as ct}from"@ckeditor/ckeditor5-basic-styles";import{Heading as gt}from"@ckeditor/ckeditor5-heading";import{Image as ut,ImageCaption as ft,ImageStyle as bt,ImageToolbar as ht}from"@ckeditor/ckeditor5-image";import{Indent as xt}from"@ckeditor/ckeditor5-indent";import{Link as Tt}from"@ckeditor/ckeditor5-link";import{List as wt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Et}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as vt}from"@ckeditor/ckeditor5-paragraph";import{Table as Lt,TableToolbar as Pt}from"@ckeditor/ckeditor5-table";function m({target:e,text:t,editor:r,tippyOptions:a}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let y=`
		<div class="tippy-content__message">${t}</div>
		<button class="ck ck-button tippy-content__close-button ck-off" title="Close"></button>
	`,c=Object.assign({},{placement:"bottom",trigger:"manual",hideOnClick:!1,allowHTML:!0,maxWidth:280,showOnCreate:!0,interactive:!0,theme:"light-border",zIndex:1,appendTo:()=>document.body},a),x=window.umberto.createTooltip(e,y,c);for(let k of r.editing.view.document.roots)k.once("change:isFocused",(qe,je,T)=>{T&&x.hide()});return x}function u(e,t){let r=e.items,a;return typeof t=="function"?a=r.find(t):a=r.get(t),a?a.element:void 0}function f(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ot,Essentials as Nt,CKFinderUploadAdapter as Mt,Autoformat as Vt,BlockToolbar as Ut,Bold as Kt,Italic as Gt,BlockQuote as Ht,CKBox as Xt,CKFinder as Qt,EasyImage as zt,Heading as Wt,Image as qt,ImageCaption as jt,ImageStyle as Jt,ImageToolbar as $t,ImageUpload as Yt,PictureEditing as Zt,Indent as eo,Link as to,List as oo,MediaEmbed as ao,Paragraph as ro,PasteFromOffice as io,Table as lo,TableToolbar as so,TextTransformation as no,CloudServices as co}from"ckeditor5";import{BalloonEditor as uo,Essentials as fo,CKFinderUploadAdapter as bo,Autoformat as ho,Bold as yo,Italic as xo,BlockQuote as ko,CKBox as To,CKFinder as Io,EasyImage as wo,Heading as So,Image as Eo,ImageCaption as Co,ImageStyle as vo,ImageToolbar as _o,ImageUpload as Lo,PictureEditing as Po,Indent as Do,Link as Fo,List as Bo,MediaEmbed as Ro,Paragraph as Ao,PasteFromOffice as Oo,Table as No,TableToolbar as Mo,TextTransformation as Vo,CloudServices as Uo}from"ckeditor5";import{ClassicEditor as E,Essentials as C,Autoformat as v,Bold as _,Italic as L,BlockQuote as P,CKBox as D,EasyImage as F,Heading as B,Image as R,ImageCaption as A,ImageStyle as O,ImageToolbar as N,ImageUpload as M,PictureEditing as V,Indent as U,Link as K,List as G,MediaEmbed as H,Paragraph as X,PasteFromOffice as Q,Table as z,TableToolbar as W,TextTransformation as q,CloudServices as j,AutoImage as J,ImageInsert as $,Bookmark as Y}from"ckeditor5";var i=class extends E{static builtinPlugins=[C,v,_,L,P,j,F,B,R,A,O,N,M,D,U,K,G,H,X,Q,V,z,W,q,J,$,Y];static defaultConfig={toolbar:{items:["undo","redo","|","heading","|","bold","italic","|","link","uploadImage","insertTable","blockQuote","mediaEmbed","|","bulletedList","numberedList","outdent","indent"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}};import{DecoupledEditor as Wo,Essentials as qo,Alignment as jo,FontSize as Jo,FontFamily as $o,FontColor as Yo,FontBackgroundColor as Zo,Autoformat as ea,Bold as ta,Italic as oa,Strikethrough as aa,Underline as ra,BlockQuote as ia,CKBox as la,EasyImage as sa,Heading as na,Image as da,ImageCaption as ca,ImageResize as pa,ImageStyle as ga,ImageToolbar as ma,ImageUpload as ua,PictureEditing as fa,Indent as ba,IndentBlock as ha,Link as ya,List as xa,ListProperties as ka,MediaEmbed as Ta,Paragraph as Ia,PasteFromOffice as wa,Table as Sa,TableToolbar as Ea,TextTransformation as Ca,CloudServices as va}from"ckeditor5";import{InlineEditor as Da,Essentials as Fa,CKFinderUploadAdapter as Ba,Autoformat as Ra,Bold as Aa,Italic as Oa,BlockQuote as Na,CKBox as Ma,CKFinder as Va,EasyImage as Ua,Heading as Ka,Image as Ga,ImageCaption as Ha,ImageStyle as Xa,ImageToolbar as Qa,ImageUpload as za,PictureEditing as Wa,Indent as qa,Link as ja,List as Ja,MediaEmbed as $a,Paragraph as Ya,PasteFromOffice as Za,Table as er,TableToolbar as tr,TextTransformation as or,CloudServices as ar}from"ckeditor5";import{MultiRootEditor as sr,Essentials as nr,CKFinderUploadAdapter as dr,Autoformat as cr,Bold as pr,Italic as gr,BlockQuote as mr,CKBox as ur,CKFinder as fr,EasyImage as br,Heading as hr,Image as yr,ImageCaption as xr,ImageStyle as kr,ImageToolbar as Tr,ImageUpload as Ir,PictureEditing as wr,Indent as Sr,Link as Er,List as Cr,MediaEmbed as vr,Paragraph as _r,PasteFromOffice as Lr,Table as Pr,TableToolbar as Dr,TextTransformation as Fr,CloudServices as Br}from"ckeditor5";import{Alignment as Z,Autoformat as ee,Bold as te,Italic as oe,Underline as ae,BlockQuote as re,CKBox as ie,CKBoxImageEdit as le,CloudServices as se,Essentials as ne,FontBackgroundColor as de,FontColor as ce,FontFamily as pe,FontSize as ge,Heading as me,Indent as ue,IndentBlock as fe,PictureEditing as be,Image as he,ImageCaption as ye,ImageInsert as xe,ImageResize as ke,ImageStyle as Te,ImageToolbar as Ie,ImageUpload as we,Link as Se,List as Ee,MediaEmbed as Ce,PageBreak as ve,Paragraph as _e,PasteFromOffice as Le,SpecialCharacters as Pe,SpecialCharactersEssentials as De,Table as Fe,TableCellProperties as Be,TableProperties as Re,TableToolbar as Ae,TextTransformation as Oe,CodeBlock as Ne,Mention as Me,Plugin as Ve}from"ckeditor5";import{SourceEditingEnhanced as Ue,ExportPdf as Ke,ExportWord as Ge,ImportWord as He,MergeFields as Xe,Template as Qe}from"ckeditor5-premium-features";var s="19.25mm",n="16mm",l=class extends i{static builtinPlugins=[...i.builtinPlugins,Xe,Me,Z,ne,ee,re,te,ie,le,Ne,me,be,he,ye,Te,Ie,ue,oe,Se,Ee,_e,Fe,Ae,Ke,Ge,He,ge,pe,ce,de,fe,we,xe,ke,Ce,ve,Le,Pe,De,Ue,Re,Be,Oe,ae,se,Qe];static defaultConfig={mergeFields:{prefix:"{{",suffix:"}}",previewHtmlValues:!0,sanitizeHtml:t=>({html:t,hasChanged:!1}),definitions:[{groupId:"guestInformation",groupLabel:"Guest information",definitions:[{id:"guestTitle",label:"Title",defaultValue:"Mr./Mrs."},{id:"guestName",label:"Name",defaultValue:"John"},{id:"guestLastName",label:"Last name",defaultValue:"Doe"},{id:"discount",label:"Guest discount",defaultValue:"0%"},{id:"hotelRoomPhoto",label:"Hotel room photo",type:"image",width:600,height:400,defaultValue:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg"}]},{groupId:"reservationInformation",groupLabel:"Reservation information",definitions:[{id:"reservationNumber",label:"Reservation number",defaultValue:"0000"},{id:"arrivalDate",label:"Arrival date",defaultValue:()=>new Date().toLocaleDateString()},{id:"numberOfNights",label:"Number of nights",defaultValue:"0"},{id:"numberOfGuests",label:"Number of guests",defaultValue:"0"},{id:"roomType",label:"Room type",defaultValue:"Single room"},{id:"complimentaryDuration",label:"Complimentary duration",defaultValue:"60 min"},{id:"reservationDetails",label:"Reservation details",defaultValue:`
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
									</figure>`,type:"block"}]},{groupId:"resortInformation",groupLabel:"Resort information",definitions:[{id:"resortPhone",label:"Resort phone",defaultValue:"555-232-2334-23"},{id:"feedbackSurvey",label:"Feedback survey",defaultValue:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">Feedback survey</a>'}]}]},toolbar:{items:["|","exportPdf","exportWord","importWord","|","sourceEditingEnhanced","|","heading","|","bold","italic","underline","|","alignment","|","bulletedList","numberedList","|","insertImage"]},menuBar:{isVisible:!0},ckbox:{tokenUrl:g,allowExternalImagesEditing:[/^data:/,"origin",/^([^/]+\.)?cksource\.com\//],forceDemoLabel:!0},fontFamily:{supportAllValues:!0},fontSize:{options:[9,10,11,12,"default",14,15],supportAllValues:!0},exportPdf:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-pdf-demo.pdf",appID:"cke5-docs",converterOptions:{format:"A4",margin_top:n,margin_bottom:n,margin_right:s,margin_left:s,page_orientation:"portrait"},tokenUrl:!1},exportWord:{stylesheets:["EDITOR_STYLES","../assets/spa-export.css"],fileName:"export-word-demo.docx",appID:"cke5-docs",converterOptions:{document:{size:"A4",orientation:"portrait",margins:{top:n,bottom:n,right:s,left:s}}},tokenUrl:!1},importWord:{tokenUrl:!1,defaultStyles:!0},image:{toolbar:["imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},cloudServices:p,ui:{viewportOffset:{top:f()}}}},b=document.createElement("link");b.rel="stylesheet";b.href="../assets/spa.css";document.head.appendChild(b);var ze="https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",d=class extends Ve{static get pluginName(){return"IntervalFetcher"}mergeFieldsData={};init(){this._updateMergeFieldsData(),setInterval(()=>this._updateMergeFieldsData(),5e3)}async _updateMergeFieldsData(){try{let r=await(await fetch(ze)).json(),a=new Date(r.closeTime),c={bitcoinRate:"$"+Number(r.lastPrice).toFixed(2)+" - "+a.toLocaleString()};this.mergeFieldsData=c,this.editor.plugins.get("MergeFieldsEditing").refreshMergeFields()}catch(t){console.error(t)}}},h=document.createElement("meta");h.name="x-cke-crawler-ignore-patterns";h.content=JSON.stringify({"console-error":["Access to fetch at","Failed to fetch"]});document.head.appendChild(h);var ri=[{id:"78900",label:"David Lee",values:{guestTitle:"Mr.",guestName:"David",guestLastName:"Lee",hotelRoomPhoto:"https://ckeditor.com/assets/images/ckdemo/merge-fields/hotel-room2.jpg",reservationNumber:"Y2JKH5G1Z",arrivalDate:new Date(2024,7,22).toLocaleDateString(),numberOfGuests:"2",numberOfNights:"6",roomType:"Double Room",discount:"20%",complimentaryDuration:"15 min",feedbackSurvey:'<a href="https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html">quick survey</a>',resortPhone:"555-232-2334-23",reservationDetails:`
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
				</figure>`}}];var We={previewModes:["$defaultValues"],initialPreviewMode:"$defaultValues",definitions:[{id:"bitcoinRate",label:"Bitcoin rate",defaultValue:e=>e.plugins.has("IntervalFetcher")?e.plugins.get("IntervalFetcher").mergeFieldsData.bitcoinRate||"Fetching data...":"Data not available."}]};l.create(document.querySelector("#snippet-merge-fields-refresh-values"),{mergeFields:{...l.defaultConfig.mergeFields,...We},toolbar:{items:["insertMergeField"].concat(l.defaultConfig.toolbar.items)},extraPlugins:[d]}).then(e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,m({target:u(e.ui.view.toolbar,t=>t.buttonView&&t.buttonView.label==="Insert merge field"),text:'"Bitcoin rate" merge field value refreshes every 5 seconds.',editor:e,tippyOptions:{placement:"bottom-start"}})}).catch(e=>{console.error(e.stack)});
