import{WideSidebar as Ve}from"ckeditor5-premium-features";import{DecoupledEditor as P,Alignment as L,Autoformat as f,BalloonToolbar as O,BlockQuote as F,Bold as y,Code as U,Italic as x,Underline as M,Strikethrough as z,Subscript as D,Superscript as R,Bookmark as N,CKBox as H,CKBoxImageEdit as K,CloudServices as q,CodeBlock as j,Essentials as Q,Font as W,Heading as G,HorizontalLine as V,Image as $,ImageCaption as J,ImageInsert as Y,ImageResize as X,ImageStyle as Z,ImageToolbar as ee,ImageUpload as te,AutoImage as oe,PictureEditing as ie,Indent as ae,IndentBlock as re,AutoLink as ne,Link as se,LinkImage as le,List as de,ListProperties as ce,Mention as me,Paragraph as pe,PasteFromOffice as ge,Plugin as ue,RemoveFormat as he,SpecialCharacters as be,SpecialCharactersEssentials as fe,Table as ye,TableCaption as xe,TableCellProperties as ke,TableColumnResize as Ie,TableProperties as ve,TableToolbar as we,TextTransformation as Te,TodoList as Ce,FindAndReplace as Se,MediaEmbed as Ee,Emoji as Ae,uid as _e,SpecialCharactersArrows as Be,SpecialCharactersCurrency as Pe,SpecialCharactersLatin as Le,SpecialCharactersMathematical as Oe,SpecialCharactersText as Fe}from"ckeditor5";var E="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",A="https://33333.cke-cs.com/easyimage/upload/",_="33333.cke-cs.com/ws",s={tokenUrl:E,uploadUrl:A,webSocketUrl:_};var d="https://api.ckbox.io/token/demo";import{Plugin as nt}from"@ckeditor/ckeditor5-core";import{Essentials as lt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as ct}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as pt}from"@ckeditor/ckeditor5-block-quote";import{Bold as ut,Italic as ht}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ft}from"@ckeditor/ckeditor5-heading";import{Image as xt,ImageCaption as kt,ImageStyle as It,ImageToolbar as vt}from"@ckeditor/ckeditor5-image";import{Indent as Tt}from"@ckeditor/ckeditor5-indent";import{Link as St}from"@ckeditor/ckeditor5-link";import{List as At}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Bt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Lt}from"@ckeditor/ckeditor5-paragraph";import{Table as Ft,TableToolbar as Ut}from"@ckeditor/ckeditor5-table";function r({id:e,target:t,text:o,editor:i,tippyOptions:n}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let l=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...n?.placement&&{position:n.placement}});for(let C of i.editing.view.document.roots)C.once("change:isFocused",($e,Je,S)=>{S&&l.destroy()});return l}function c(e,t){let o=e.items,i;return typeof t=="function"?i=o.find(t):i=o.get(t),i?i.element:void 0}function m(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ht,Essentials as Kt,CKFinderUploadAdapter as qt,Autoformat as jt,BlockToolbar as Qt,Bold as Wt,Italic as Gt,BlockQuote as Vt,CKBox as $t,CKFinder as Jt,EasyImage as Yt,Heading as Xt,Image as Zt,ImageCaption as eo,ImageStyle as to,ImageToolbar as oo,ImageUpload as io,PictureEditing as ao,Indent as ro,Link as no,List as so,MediaEmbed as lo,Paragraph as co,PasteFromOffice as mo,Table as po,TableToolbar as go,TextTransformation as uo,CloudServices as ho}from"ckeditor5";import{BalloonEditor as xo,Essentials as ko,CKFinderUploadAdapter as Io,Autoformat as vo,Bold as wo,Italic as To,BlockQuote as Co,CKBox as So,CKFinder as Eo,EasyImage as Ao,Heading as _o,Image as Bo,ImageCaption as Po,ImageStyle as Lo,ImageToolbar as Oo,ImageUpload as Fo,PictureEditing as Uo,Indent as Mo,Link as zo,List as Do,MediaEmbed as Ro,Paragraph as No,PasteFromOffice as Ho,Table as Ko,TableToolbar as qo,TextTransformation as jo,CloudServices as Qo}from"ckeditor5";import{ClassicEditor as $o,Essentials as Jo,Autoformat as Yo,Bold as Xo,Italic as Zo,BlockQuote as ei,CKBox as ti,EasyImage as oi,Heading as ii,Image as ai,ImageCaption as ri,ImageStyle as ni,ImageToolbar as si,ImageUpload as li,PictureEditing as di,Indent as ci,Link as mi,List as pi,MediaEmbed as gi,Paragraph as ui,PasteFromOffice as hi,Table as bi,TableToolbar as fi,TextTransformation as yi,CloudServices as xi,AutoImage as ki,ImageInsert as Ii,Bookmark as vi}from"ckeditor5";import{DecoupledEditor as Si,Essentials as Ei,Alignment as Ai,FontSize as _i,FontFamily as Bi,FontColor as Pi,FontBackgroundColor as Li,Autoformat as Oi,Bold as Fi,Italic as Ui,Strikethrough as Mi,Underline as zi,BlockQuote as Di,CKBox as Ri,EasyImage as Ni,Heading as Hi,Image as Ki,ImageCaption as qi,ImageResize as ji,ImageStyle as Qi,ImageToolbar as Wi,ImageUpload as Gi,PictureEditing as Vi,Indent as $i,IndentBlock as Ji,Link as Yi,List as Xi,ListProperties as Zi,MediaEmbed as ea,Paragraph as ta,PasteFromOffice as oa,Table as ia,TableToolbar as aa,TextTransformation as ra,CloudServices as na}from"ckeditor5";import{InlineEditor as ca,Essentials as ma,CKFinderUploadAdapter as pa,Autoformat as ga,Bold as ua,Italic as ha,BlockQuote as ba,CKBox as fa,CKFinder as ya,EasyImage as xa,Heading as ka,Image as Ia,ImageCaption as va,ImageStyle as wa,ImageToolbar as Ta,ImageUpload as Ca,PictureEditing as Sa,Indent as Ea,Link as Aa,List as _a,MediaEmbed as Ba,Paragraph as Pa,PasteFromOffice as La,Table as Oa,TableToolbar as Fa,TextTransformation as Ua,CloudServices as Ma}from"ckeditor5";import{MultiRootEditor as Na,Essentials as Ha,CKFinderUploadAdapter as Ka,Autoformat as qa,Bold as ja,Italic as Qa,BlockQuote as Wa,CKBox as Ga,CKFinder as Va,EasyImage as $a,Heading as Ja,Image as Ya,ImageCaption as Xa,ImageStyle as Za,ImageToolbar as er,ImageUpload as tr,PictureEditing as or,Indent as ir,Link as ar,List as rr,MediaEmbed as nr,Paragraph as sr,PasteFromOffice as lr,Table as dr,TableToolbar as cr,TextTransformation as mr,CloudServices as pr}from"ckeditor5";import{AIChat as Ue,AIQuickActions as Me,AIReviewMode as ze,PasteFromOfficeEnhanced as De,TrackChanges as Re,Comments as Ne,FormatPainter as He,LineHeight as Ke,SlashCommand as qe,AIEditorIntegration as je}from"ckeditor5-premium-features";import{uid as B}from"ckeditor5";function u(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],o=B(),i=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:i+" "+n,id:o}}function h(e,t=u()){return`${e}?`+Object.keys(t).filter(i=>t[i]).map(i=>`user.${i}=${t[i]}`).join("&")}function b(e){e.commands.get("aiQuickAction").on("execute",(t,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var Qe=v("channelId"),k=v("userId"),p={name:Ge(),id:k,role:"writer"},g=class extends ue{static get requires(){return["Users","CommentsRepository"]}init(){let t=this.editor.plugins.get("Users"),o=this.editor.plugins.get("CommentsRepository");t.addUser(p),t.defineMe(p.id),o.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let i={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:k,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(i)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},We=`
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
`;function I(e=()=>{}){let t={initialData:We,ui:{viewportOffset:{top:m()}},placeholder:"Type or paste your content here!",plugins:[Ue,Me,ze,f,O,F,y,N,G,$,J,Z,ee,ae,x,se,de,pe,ye,we,L,oe,ne,H,K,q,U,j,Q,W,V,Y,X,te,re,le,ce,me,ge,De,ie,he,xe,ke,Ie,ve,Te,M,z,D,R,be,Be,Pe,fe,Le,Oe,Fe,Ce,Se,Ee,Ae,He,Ke,Re,Ne,g,qe,je],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:d,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Qe},cloudServices:{...s,tokenUrl:h(s.tokenUrl,p)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[y,x,f]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(t),P.create(document.querySelector("#snippet-ckeditor-ai"),t).then(o=>(window.editor=o,document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),b(o),o.plugins.get("Annotations").refreshVisibility(),o)).catch(o=>{console.error(o)})}function v(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),o=t?decodeURIComponent(t[1]):null;if(!o){o=_e();let i=new URL(window.location.href);i.searchParams.set(e,o),window.history.replaceState({},document.title,i.toString())}return o}function Ge(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return`${o} ${i}`}function w(){let e=()=>{let t=document.querySelector(".ck-ai-tabs"),i=document.querySelector("header").getBoundingClientRect();t.style.setProperty("--ck-tabs-overlay-top-position",`${i.bottom}px`)};window.addEventListener("resize",e),window.addEventListener("scroll",e),e()}function T(e){let t;e.commands.get("toggleAi").on("execute",()=>{if(!e.commands.get("toggleAi").value){t?.destroy();return}let o=document.querySelector(".ck-ai-chat__prompt-input textarea");o&&(t=r({id:"ai-chat-overlay-input-tooltip",target:o,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:e,tippyOptions:{placement:"top"}}))},{priority:"low"})}I(e=>{e.ai.container={type:"overlay",side:"right",visibleByDefault:!1},e.sidebar={container:document.querySelector("#annotations-sidebar-container"),preventScrollOutOfView:!0},e.plugins.push(Ve)}).then(e=>{window.editor=e,r({target:c(e.ui.view.toolbar,t=>t&&t.label==="AI"),text:"Click to see the AI chat interface.",editor:e,tippyOptions:{placement:"bottom-start"}}),T(e),w()});
