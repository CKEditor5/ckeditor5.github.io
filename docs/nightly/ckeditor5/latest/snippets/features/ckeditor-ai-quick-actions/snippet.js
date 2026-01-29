import{WideSidebar as $e}from"ckeditor5-premium-features";import{DecoupledEditor as P,Alignment as L,Autoformat as f,BalloonToolbar as O,BlockQuote as F,Bold as y,Code as U,Italic as x,Underline as M,Strikethrough as z,Subscript as D,Superscript as R,Bookmark as N,CKBox as H,CKBoxImageEdit as K,CloudServices as q,CodeBlock as Q,Essentials as j,Font as W,Heading as G,HorizontalLine as V,Image as $,ImageCaption as J,ImageInsert as Y,ImageResize as X,ImageStyle as Z,ImageToolbar as ee,ImageUpload as te,AutoImage as oe,PictureEditing as ie,Indent as ae,IndentBlock as re,AutoLink as ne,Link as se,LinkImage as le,List as de,ListProperties as ce,Mention as me,Paragraph as pe,PasteFromOffice as ge,Plugin as ue,RemoveFormat as he,SpecialCharacters as be,SpecialCharactersEssentials as fe,Table as ye,TableCaption as xe,TableCellProperties as ke,TableColumnResize as Ie,TableProperties as we,TableToolbar as ve,TextTransformation as Te,TodoList as Ce,FindAndReplace as Se,MediaEmbed as Ae,Emoji as Ee,uid as _e,SpecialCharactersArrows as Be,SpecialCharactersCurrency as Pe,SpecialCharactersLatin as Le,SpecialCharactersMathematical as Oe,SpecialCharactersText as Fe}from"ckeditor5";var A="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",E="https://33333.cke-cs.com/easyimage/upload/",_="33333.cke-cs.com/ws",s={tokenUrl:A,uploadUrl:E,webSocketUrl:_};var d="https://api.ckbox.io/token/demo";import{Plugin as st}from"@ckeditor/ckeditor5-core";import{Essentials as dt}from"@ckeditor/ckeditor5-essentials";import{Autoformat as mt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as gt}from"@ckeditor/ckeditor5-block-quote";import{Bold as ht,Italic as bt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as yt}from"@ckeditor/ckeditor5-heading";import{Image as kt,ImageCaption as It,ImageStyle as wt,ImageToolbar as vt}from"@ckeditor/ckeditor5-image";import{Indent as Ct}from"@ckeditor/ckeditor5-indent";import{Link as At}from"@ckeditor/ckeditor5-link";import{List as _t}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Pt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Ot}from"@ckeditor/ckeditor5-paragraph";import{Table as Ut,TableToolbar as Mt}from"@ckeditor/ckeditor5-table";function r({id:e,target:t,text:o,editor:i,tippyOptions:n}){if(!t){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:o});return}if(!t.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:t,text:o});return}let l=window.umberto.Tooltip.create({id:e,text:o,trigger:t,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...n?.placement&&{position:n.placement}});for(let C of i.editing.view.document.roots)C.once("change:isFocused",(Je,Ye,S)=>{S&&l.destroy()});return l}function c(e,t){let o=e.items,i;return typeof t=="function"?i=o.find(t):i=o.get(t),i?i.element:void 0}function m(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Kt,Essentials as qt,CKFinderUploadAdapter as Qt,Autoformat as jt,BlockToolbar as Wt,Bold as Gt,Italic as Vt,BlockQuote as $t,CKBox as Jt,CKFinder as Yt,EasyImage as Xt,Heading as Zt,Image as eo,ImageCaption as to,ImageStyle as oo,ImageToolbar as io,ImageUpload as ao,PictureEditing as ro,Indent as no,Link as so,List as lo,MediaEmbed as co,Paragraph as mo,PasteFromOffice as po,Table as go,TableToolbar as uo,TextTransformation as ho,CloudServices as bo}from"ckeditor5";import{BalloonEditor as ko,Essentials as Io,CKFinderUploadAdapter as wo,Autoformat as vo,Bold as To,Italic as Co,BlockQuote as So,CKBox as Ao,CKFinder as Eo,EasyImage as _o,Heading as Bo,Image as Po,ImageCaption as Lo,ImageStyle as Oo,ImageToolbar as Fo,ImageUpload as Uo,PictureEditing as Mo,Indent as zo,Link as Do,List as Ro,MediaEmbed as No,Paragraph as Ho,PasteFromOffice as Ko,Table as qo,TableToolbar as Qo,TextTransformation as jo,CloudServices as Wo}from"ckeditor5";import{ClassicEditor as Jo,Essentials as Yo,Autoformat as Xo,Bold as Zo,Italic as ei,BlockQuote as ti,CKBox as oi,EasyImage as ii,Heading as ai,Image as ri,ImageCaption as ni,ImageStyle as si,ImageToolbar as li,ImageUpload as di,PictureEditing as ci,Indent as mi,Link as pi,List as gi,MediaEmbed as ui,Paragraph as hi,PasteFromOffice as bi,Table as fi,TableToolbar as yi,TextTransformation as xi,CloudServices as ki,AutoImage as Ii,ImageInsert as wi,Bookmark as vi}from"ckeditor5";import{DecoupledEditor as Ai,Essentials as Ei,Alignment as _i,FontSize as Bi,FontFamily as Pi,FontColor as Li,FontBackgroundColor as Oi,Autoformat as Fi,Bold as Ui,Italic as Mi,Strikethrough as zi,Underline as Di,BlockQuote as Ri,CKBox as Ni,EasyImage as Hi,Heading as Ki,Image as qi,ImageCaption as Qi,ImageResize as ji,ImageStyle as Wi,ImageToolbar as Gi,ImageUpload as Vi,PictureEditing as $i,Indent as Ji,IndentBlock as Yi,Link as Xi,List as Zi,ListProperties as ea,MediaEmbed as ta,Paragraph as oa,PasteFromOffice as ia,Table as aa,TableToolbar as ra,TextTransformation as na,CloudServices as sa}from"ckeditor5";import{InlineEditor as ma,Essentials as pa,CKFinderUploadAdapter as ga,Autoformat as ua,Bold as ha,Italic as ba,BlockQuote as fa,CKBox as ya,CKFinder as xa,EasyImage as ka,Heading as Ia,Image as wa,ImageCaption as va,ImageStyle as Ta,ImageToolbar as Ca,ImageUpload as Sa,PictureEditing as Aa,Indent as Ea,Link as _a,List as Ba,MediaEmbed as Pa,Paragraph as La,PasteFromOffice as Oa,Table as Fa,TableToolbar as Ua,TextTransformation as Ma,CloudServices as za}from"ckeditor5";import{MultiRootEditor as Ha,Essentials as Ka,CKFinderUploadAdapter as qa,Autoformat as Qa,Bold as ja,Italic as Wa,BlockQuote as Ga,CKBox as Va,CKFinder as $a,EasyImage as Ja,Heading as Ya,Image as Xa,ImageCaption as Za,ImageStyle as er,ImageToolbar as tr,ImageUpload as or,PictureEditing as ir,Indent as ar,Link as rr,List as nr,MediaEmbed as sr,Paragraph as lr,PasteFromOffice as dr,Table as cr,TableToolbar as mr,TextTransformation as pr,CloudServices as gr}from"ckeditor5";import{AIChat as Ue,AIQuickActions as Me,AIReviewMode as ze,AITranslate as De,PasteFromOfficeEnhanced as Re,TrackChanges as Ne,Comments as He,FormatPainter as Ke,LineHeight as qe,SlashCommand as Qe,AIEditorIntegration as je}from"ckeditor5-premium-features";import{uid as B}from"ckeditor5";function u(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],o=B(),i=e[Math.floor(Math.random()*e.length)],n=t[Math.floor(Math.random()*t.length)];return{name:i+" "+n,id:o}}function h(e,t=u()){return`${e}?`+Object.keys(t).filter(i=>t[i]).map(i=>`user.${i}=${t[i]}`).join("&")}function b(e){e.commands.get("aiQuickAction").on("execute",(t,o)=>{o[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var We=w("channelId"),k=w("userId"),p={name:Ve(),id:k,role:"writer"},g=class extends ue{static get requires(){return["Users","CommentsRepository"]}init(){let t=this.editor.plugins.get("Users"),o=this.editor.plugins.get("CommentsRepository");t.addUser(p),t.defineMe(p.id),o.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let i={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:k,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(i)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Ge=`
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
`;function I(e=()=>{}){let t={initialData:Ge,ui:{viewportOffset:{top:m()}},placeholder:"Type or paste your content here!",plugins:[Ue,Me,ze,De,f,O,F,y,N,G,$,J,Z,ee,ae,x,se,de,pe,ye,ve,L,oe,ne,H,K,q,U,Q,j,W,V,Y,X,te,re,le,ce,me,ge,Re,ie,he,xe,ke,Ie,we,Te,M,z,D,R,be,Be,Pe,fe,Le,Oe,Fe,Ce,Se,Ae,Ee,Ke,qe,Ne,He,g,Qe,je],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:d,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:We},cloudServices:{...s,tokenUrl:h(s.tokenUrl,p)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[y,x,f]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(t),P.create(document.querySelector("#snippet-ckeditor-ai"),t).then(o=>(window.editor=o,document.querySelector(".toolbar-container").appendChild(o.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),b(o),o)).catch(o=>{console.error(o)})}function w(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),o=t?decodeURIComponent(t[1]):null;if(!o){o=_e();let i=new URL(window.location.href);i.searchParams.set(e,o),window.history.replaceState({},document.title,i.toString())}return o}function Ve(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],o=e[Math.floor(Math.random()*e.length)],i=t[Math.floor(Math.random()*t.length)];return`${o} ${i}`}function v(){let e=()=>{let t=document.querySelector(".ck-ai-tabs"),i=document.querySelector("header").getBoundingClientRect();t.style.setProperty("--ck-tabs-overlay-top-position",`${i.bottom}px`)};window.addEventListener("resize",e),window.addEventListener("scroll",e),e()}function T(e){let t;e.commands.get("toggleAi").on("execute",()=>{if(!e.commands.get("toggleAi").value){t?.destroy();return}let o=document.querySelector(".ck-ai-chat__prompt-input textarea");o&&(t=r({id:"ai-chat-overlay-input-tooltip",target:o,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:e,tippyOptions:{placement:"top"}}))},{priority:"low"})}I(e=>{e.ai.container={type:"overlay",side:"right",visibleByDefault:!1},e.sidebar={container:document.querySelector("#annotations-sidebar-container"),preventScrollOutOfView:!0};let t=e.toolbar.items.indexOf("aiQuickActions");e.toolbar.items.splice(t+1,0,"ask-ai","improve-writing","translate"),e.plugins.push($e)}).then(e=>{window.editor=e,r({target:c(e.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="AI Quick Actions"),text:"Click to access the AI Quick Actions menu.",editor:e,tippyOptions:{placement:"bottom-start"}}),T(e),v()});
