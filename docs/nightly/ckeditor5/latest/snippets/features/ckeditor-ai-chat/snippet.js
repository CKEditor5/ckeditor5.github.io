import{WideSidebar as Ge}from"ckeditor5-premium-features";import{DecoupledEditor as B,Alignment as P,Autoformat as f,BalloonToolbar as L,BlockQuote as O,Bold as y,Code as F,Italic as x,Underline as U,Strikethrough as M,Subscript as z,Superscript as D,Bookmark as R,CKBox as N,CKBoxImageEdit as H,CloudServices as K,CodeBlock as q,Essentials as j,Font as Q,Heading as W,HorizontalLine as G,Image as V,ImageCaption as $,ImageInsert as J,ImageResize as Y,ImageStyle as X,ImageToolbar as Z,ImageUpload as ee,AutoImage as te,PictureEditing as oe,Indent as ie,IndentBlock as ae,AutoLink as re,Link as ne,LinkImage as se,List as le,ListProperties as de,Mention as ce,Paragraph as me,PasteFromOffice as pe,Plugin as ge,RemoveFormat as ue,SpecialCharacters as he,SpecialCharactersEssentials as be,Table as fe,TableCaption as ye,TableCellProperties as xe,TableColumnResize as ke,TableProperties as Ie,TableToolbar as we,TextTransformation as ve,TodoList as Te,FindAndReplace as Ce,MediaEmbed as Se,Emoji as Ee,uid as Ae,SpecialCharactersArrows as _e,SpecialCharactersCurrency as Be,SpecialCharactersLatin as Pe,SpecialCharactersMathematical as Le,SpecialCharactersText as Oe}from"ckeditor5";var S="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",E="https://33333.cke-cs.com/easyimage/upload/",A="33333.cke-cs.com/ws",s={tokenUrl:S,uploadUrl:E,webSocketUrl:A};var l="https://api.ckbox.io/token/demo";import{Plugin as rt}from"@ckeditor/ckeditor5-core";import{Essentials as st}from"@ckeditor/ckeditor5-essentials";import{Autoformat as dt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as mt}from"@ckeditor/ckeditor5-block-quote";import{Bold as gt,Italic as ut}from"@ckeditor/ckeditor5-basic-styles";import{Heading as bt}from"@ckeditor/ckeditor5-heading";import{Image as yt,ImageCaption as xt,ImageStyle as kt,ImageToolbar as It}from"@ckeditor/ckeditor5-image";import{Indent as vt}from"@ckeditor/ckeditor5-indent";import{Link as Ct}from"@ckeditor/ckeditor5-link";import{List as Et}from"@ckeditor/ckeditor5-list";import{MediaEmbed as _t}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Pt}from"@ckeditor/ckeditor5-paragraph";import{Table as Ot,TableToolbar as Ft}from"@ckeditor/ckeditor5-table";function r({target:e,text:t,editor:o,tippyOptions:i}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let n=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...i?.placement&&{position:i.placement}});for(let g of o.editing.view.document.roots)g.once("change:isFocused",(Ve,$e,C)=>{C&&n.destroy()});return n}function d(e,t){let o=e.items,i;return typeof t=="function"?i=o.find(t):i=o.get(t),i?i.element:void 0}function c(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Nt,Essentials as Ht,CKFinderUploadAdapter as Kt,Autoformat as qt,BlockToolbar as jt,Bold as Qt,Italic as Wt,BlockQuote as Gt,CKBox as Vt,CKFinder as $t,EasyImage as Jt,Heading as Yt,Image as Xt,ImageCaption as Zt,ImageStyle as eo,ImageToolbar as to,ImageUpload as oo,PictureEditing as io,Indent as ao,Link as ro,List as no,MediaEmbed as so,Paragraph as lo,PasteFromOffice as co,Table as mo,TableToolbar as po,TextTransformation as go,CloudServices as uo}from"ckeditor5";import{BalloonEditor as yo,Essentials as xo,CKFinderUploadAdapter as ko,Autoformat as Io,Bold as wo,Italic as vo,BlockQuote as To,CKBox as Co,CKFinder as So,EasyImage as Eo,Heading as Ao,Image as _o,ImageCaption as Bo,ImageStyle as Po,ImageToolbar as Lo,ImageUpload as Oo,PictureEditing as Fo,Indent as Uo,Link as Mo,List as zo,MediaEmbed as Do,Paragraph as Ro,PasteFromOffice as No,Table as Ho,TableToolbar as Ko,TextTransformation as qo,CloudServices as jo}from"ckeditor5";import{ClassicEditor as Vo,Essentials as $o,Autoformat as Jo,Bold as Yo,Italic as Xo,BlockQuote as Zo,CKBox as ei,EasyImage as ti,Heading as oi,Image as ii,ImageCaption as ai,ImageStyle as ri,ImageToolbar as ni,ImageUpload as si,PictureEditing as li,Indent as di,Link as ci,List as mi,MediaEmbed as pi,Paragraph as gi,PasteFromOffice as ui,Table as hi,TableToolbar as bi,TextTransformation as fi,CloudServices as yi,AutoImage as xi,ImageInsert as ki,Bookmark as Ii}from"ckeditor5";import{DecoupledEditor as Ci,Essentials as Si,Alignment as Ei,FontSize as Ai,FontFamily as _i,FontColor as Bi,FontBackgroundColor as Pi,Autoformat as Li,Bold as Oi,Italic as Fi,Strikethrough as Ui,Underline as Mi,BlockQuote as zi,CKBox as Di,EasyImage as Ri,Heading as Ni,Image as Hi,ImageCaption as Ki,ImageResize as qi,ImageStyle as ji,ImageToolbar as Qi,ImageUpload as Wi,PictureEditing as Gi,Indent as Vi,IndentBlock as $i,Link as Ji,List as Yi,ListProperties as Xi,MediaEmbed as Zi,Paragraph as ea,PasteFromOffice as ta,Table as oa,TableToolbar as ia,TextTransformation as aa,CloudServices as ra}from"ckeditor5";import{InlineEditor as da,Essentials as ca,CKFinderUploadAdapter as ma,Autoformat as pa,Bold as ga,Italic as ua,BlockQuote as ha,CKBox as ba,CKFinder as fa,EasyImage as ya,Heading as xa,Image as ka,ImageCaption as Ia,ImageStyle as wa,ImageToolbar as va,ImageUpload as Ta,PictureEditing as Ca,Indent as Sa,Link as Ea,List as Aa,MediaEmbed as _a,Paragraph as Ba,PasteFromOffice as Pa,Table as La,TableToolbar as Oa,TextTransformation as Fa,CloudServices as Ua}from"ckeditor5";import{MultiRootEditor as Ra,Essentials as Na,CKFinderUploadAdapter as Ha,Autoformat as Ka,Bold as qa,Italic as ja,BlockQuote as Qa,CKBox as Wa,CKFinder as Ga,EasyImage as Va,Heading as $a,Image as Ja,ImageCaption as Ya,ImageStyle as Xa,ImageToolbar as Za,ImageUpload as er,PictureEditing as tr,Indent as or,Link as ir,List as ar,MediaEmbed as rr,Paragraph as nr,PasteFromOffice as sr,Table as lr,TableToolbar as dr,TextTransformation as cr,CloudServices as mr}from"ckeditor5";import{AIChat as Fe,AIQuickActions as Ue,AIReviewMode as Me,PasteFromOfficeEnhanced as ze,TrackChanges as De,Comments as Re,FormatPainter as Ne,LineHeight as He,SlashCommand as Ke,AIEditorIntegration as qe}from"ckeditor5-premium-features";import{uid as _}from"ckeditor5";function u(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],o=_(),i=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:i+" "+n,id:o}}function h(e,t=u()){return`${e}?`+Object.keys(t).filter(i=>t[i]).map(i=>`user.${i}=${t[i]}`).join("&")}function b(e){e.commands.get("aiQuickAction").on("execute",(t,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var je=w("channelId"),k=w("userId"),m={name:We(),id:k,role:"writer"},p=class extends ge{static get requires(){return["Users","CommentsRepository"]}init(){let t=this.editor.plugins.get("Users"),o=this.editor.plugins.get("CommentsRepository");t.addUser(m),t.defineMe(m.id),o.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let i={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:k,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(i)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Qe=`
<h2>Mind-Blowing AI Facts</h1>

<p>Artificial Intelligence has evolved from science fiction fantasy to an integral part of our daily lives. Behind the scenes, <strong>fascinating developments</strong> are happening at breakneck speed, reshaping industries and challenging our understanding of what machines can accomplish. From <em>detecting diseases faster than doctors</em> to composing symphonies that move audiences to tears, AI continues to surprise us with its capabilities.</p>

<h3>Shocking AI Statistics</h3>

<p>The numbers behind artificial intelligence are truly staggering. Consider this: every minute, AI processes more data than the entire human civilization created in the first 5,000 years of recorded history!</p>

<ul>
	<li>\u{1F4B0} <strong>$15.7 trillion</strong> - predicted AI contribution to global economy by <comment-start name="thread-1"></comment-start>2030<comment-end name="thread-1"></comment-end></li>
	<li>\u{1F50D} <strong>97%</strong> accuracy in medical image diagnosis (beating human radiologists)</li>
	<li>\u26A1 <strong>0.3 seconds</strong> - time needed to analyze a chess position with 35 pieces</li>
	<li>\u{1F3B5} <strong>1 million songs</strong> composed by AI every day across various platforms</li>
	<li>\u{1F30D} <strong>40+ languages</strong> can be translated in real-time with 95% accuracy</li>
</ul>

<blockquote>
	<p>"By 2025, machines will be capable of learning faster than a 5-year-old child. By 2030, they might surpass the learning speed of university graduates." <em>- MIT Technology Review</em></p>
</blockquote>

<h3>AI in Creative Industries</h3>

<figure class="table">
	<table>
		<thead>
			<tr>
				<th>Industry</th>
				<th>AI Achievement</th>
				<th>Human vs AI</th>
				<th>Year Achieved</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>\u{1F3AC} Film</td>
				<td>Entire movie script generated</td>
				<td>AI: 72h, Human: 6 months</td>
				<td>2023</td>
			</tr>
			<tr>
				<td>\u{1F5BC}\uFE0F Art</td>
				<td>Painting sold for $432,500</td>
				<td>AI artwork at Christie's</td>
				<td>2018</td>
			</tr>
			<tr>
				<td>\u{1F4DA} Literature</td>
				<td>Novel passed literary contest</td>
				<td>Fooled human judges</td>
				<td>2022</td>
			</tr>
			<tr>
				<td>\u{1F3B5} Music</td>
				<td>Symphony performed by orchestra</td>
				<td>Indistinguishable from Bach</td>
				<td>2021</td>
			</tr>
		</tbody>
	</table>
</figure>

<h3>Scientific Breakthroughs</h3>

<p>AI's impact on scientific discovery is nothing short of revolutionary. Here are some game-changing achievements:</p>

<ol>
	<li>\u{1F9EC} <strong>Protein folding solved</strong> - AlphaFold predicted 200M+ protein structures</li>
	<li>\u{1F30C} <strong>Dark matter detected</strong> - AI found patterns invisible to human astronomers</li>
	<li>\u{1F48A} <strong>Drug discovery accelerated</strong> - 10 years reduced to 6 months</li>
	<li>\u{1F321}\uFE0F <strong>Climate modeling enhanced</strong> - 1000x more accurate weather predictions</li>
	<li>\u{1F52C} <strong>Materials science revolution</strong> - new compounds discovered weekly</li>
</ol>

<h3>Bizarre AI Capabilities</h3>

<p>Some AI achievements sound like they belong in a sci-fi movie, but they're happening right now:</p>

<ul>
	<li>\u{1F415} <strong>Pet emotion recognition</strong> - AI can tell if your dog is happy or stressed</li>
	<li>\u{1F476} <strong>Baby cry translation</strong> - determines if infant needs food, sleep, or diaper change</li>
	<li>\u{1FAB4} <strong>Plant health diagnosis</strong> - identifies diseases from a single leaf photo</li>
	<li>\u{1F3AD} <strong>Emotion synthesis</strong> - generates facial expressions that don't exist in nature</li>
	<li>\u{1F9E0} <strong>Dream interpretation</strong> - reconstructs images from brain activity during sleep</li>
</ul>

<blockquote>
	<p><strong>Fun Fact:</strong> GPT-3 has <em>175 billion parameters</em> - that's roughly equivalent to having 175,000 copies of the entire English Wikipedia stored in its neural pathways! \u{1F913}</p>
</blockquote>

<h3>The Future is Closer Than You Think</h3>

<p>What seemed impossible yesterday becomes reality tomorrow. AI is not just changing technology\u2014it's <strong>redefining human potential</strong> and opening doors to possibilities we never imagined. From curing rare diseases to exploring distant galaxies, artificial intelligence continues to push the boundaries of what's achievable.</p>

<p>The most exciting part? We're only at the beginning of this incredible journey. Every day brings new discoveries, breakthrough innovations, and mind-bending applications that make the future feel wonderfully unpredictable! \u{1F31F}\u2728</p>
`;function I(e=()=>{}){let t={initialData:Qe,ui:{viewportOffset:{top:c()}},placeholder:"Type or paste your content here!",plugins:[Fe,Ue,Me,f,L,O,y,R,W,V,$,X,Z,ie,x,ne,le,me,fe,we,P,te,re,N,H,K,F,q,j,Q,G,J,Y,ee,ae,se,de,ce,pe,ze,oe,ue,ye,xe,ke,Ie,ve,U,M,z,D,he,_e,Be,be,Pe,Le,Oe,Te,Ce,Se,Ee,Ne,He,De,Re,p,Ke,qe],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:l,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:je},cloudServices:{...s,tokenUrl:h(s.tokenUrl,m)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[y,x,f]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(t),B.create(document.querySelector("#snippet-ckeditor-ai"),t).then(o=>(window.editor=o,document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),b(o),o.plugins.get("Annotations").refreshVisibility(),o)).catch(o=>{console.error(o)})}function w(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),o=t?decodeURIComponent(t[1]):null;if(!o){o=Ae();let i=new URL(window.location.href);i.searchParams.set(e,o),window.history.replaceState({},document.title,i.toString())}return o}function We(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return`${o} ${i}`}function v(){let e=()=>{let t=document.querySelector(".ck-ai-tabs"),i=document.querySelector("header").getBoundingClientRect();t.style.setProperty("--ck-tabs-overlay-top-position",`${i.bottom}px`)};window.addEventListener("resize",e),window.addEventListener("scroll",e),e()}function T(e){let t;e.commands.get("toggleAi").on("execute",()=>{if(!e.commands.get("toggleAi").value){t?.destroy();return}let o=document.querySelector(".ck-ai-chat__prompt-input textarea");o&&(t=r({target:o,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:e,tippyOptions:{placement:"top"}}))},{priority:"low"})}I(e=>{e.ai.container={type:"overlay",side:"right",visibleByDefault:!1},e.sidebar={container:document.querySelector("#annotations-sidebar-container"),preventScrollOutOfView:!0},e.plugins.push(Ge)}).then(e=>{window.editor=e,r({target:d(e.ui.view.toolbar,t=>t&&t.label==="AI"),text:"Click to see the AI chat interface.",editor:e,tippyOptions:{placement:"bottom-start"}}),T(e),v()});
