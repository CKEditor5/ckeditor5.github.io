import{DecoupledEditor as A,Alignment as _,Autoformat as f,BalloonToolbar as B,BlockQuote as L,Bold as y,Code as P,Italic as x,Underline as F,Strikethrough as U,Subscript as O,Superscript as M,Bookmark as D,CKBox as R,CKBoxImageEdit as z,CloudServices as N,CodeBlock as H,Essentials as K,Font as q,Heading as Q,HorizontalLine as j,Image as G,ImageCaption as V,ImageInsert as W,ImageResize as $,ImageStyle as J,ImageToolbar as Y,ImageUpload as X,AutoImage as Z,PictureEditing as ee,Indent as te,IndentBlock as ie,AutoLink as oe,Link as ae,LinkImage as re,List as ne,ListProperties as se,Mention as le,Paragraph as de,PasteFromOffice as me,Plugin as ce,RemoveFormat as ge,SpecialCharacters as pe,SpecialCharactersEssentials as ue,Table as he,TableCaption as be,TableCellProperties as fe,TableColumnResize as ye,TableProperties as xe,TableToolbar as ke,TextTransformation as Ie,TodoList as we,FindAndReplace as Te,MediaEmbed as Ce,Emoji as ve,uid as Se,SpecialCharactersArrows as Ee,SpecialCharactersCurrency as Ae,SpecialCharactersLatin as _e,SpecialCharactersMathematical as Be,SpecialCharactersText as Le}from"ckeditor5";var C="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",v="https://33333.cke-cs.com/easyimage/upload/",S="33333.cke-cs.com/ws",n={tokenUrl:C,uploadUrl:v,webSocketUrl:S};var l="https://api.ckbox.io/token/demo";import{Plugin as et}from"@ckeditor/ckeditor5-core";import{Essentials as it}from"@ckeditor/ckeditor5-essentials";import{Autoformat as at}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as nt}from"@ckeditor/ckeditor5-block-quote";import{Bold as lt,Italic as dt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as ct}from"@ckeditor/ckeditor5-heading";import{Image as pt,ImageCaption as ut,ImageStyle as ht,ImageToolbar as bt}from"@ckeditor/ckeditor5-image";import{Indent as yt}from"@ckeditor/ckeditor5-indent";import{Link as kt}from"@ckeditor/ckeditor5-link";import{List as wt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as Ct}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as St}from"@ckeditor/ckeditor5-paragraph";import{Table as At,TableToolbar as _t}from"@ckeditor/ckeditor5-table";function s({target:e,text:t,editor:i,tippyOptions:o}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let r=window.umberto.Tooltip.create({text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...o?.placement&&{position:o.placement}});for(let p of i.editing.view.document.roots)p.once("change:isFocused",(je,Ge,T)=>{T&&r.destroy()});return r}function d(e,t){let i=e.items,o;return typeof t=="function"?o=i.find(t):o=i.get(t),o?o.element:void 0}function m(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Ot,Essentials as Mt,CKFinderUploadAdapter as Dt,Autoformat as Rt,BlockToolbar as zt,Bold as Nt,Italic as Ht,BlockQuote as Kt,CKBox as qt,CKFinder as Qt,EasyImage as jt,Heading as Gt,Image as Vt,ImageCaption as Wt,ImageStyle as $t,ImageToolbar as Jt,ImageUpload as Yt,PictureEditing as Xt,Indent as Zt,Link as ei,List as ti,MediaEmbed as ii,Paragraph as oi,PasteFromOffice as ai,Table as ri,TableToolbar as ni,TextTransformation as si,CloudServices as li}from"ckeditor5";import{BalloonEditor as gi,Essentials as pi,CKFinderUploadAdapter as ui,Autoformat as hi,Bold as bi,Italic as fi,BlockQuote as yi,CKBox as xi,CKFinder as ki,EasyImage as Ii,Heading as wi,Image as Ti,ImageCaption as Ci,ImageStyle as vi,ImageToolbar as Si,ImageUpload as Ei,PictureEditing as Ai,Indent as _i,Link as Bi,List as Li,MediaEmbed as Pi,Paragraph as Fi,PasteFromOffice as Ui,Table as Oi,TableToolbar as Mi,TextTransformation as Di,CloudServices as Ri}from"ckeditor5";import{ClassicEditor as Ki,Essentials as qi,Autoformat as Qi,Bold as ji,Italic as Gi,BlockQuote as Vi,CKBox as Wi,EasyImage as $i,Heading as Ji,Image as Yi,ImageCaption as Xi,ImageStyle as Zi,ImageToolbar as eo,ImageUpload as to,PictureEditing as io,Indent as oo,Link as ao,List as ro,MediaEmbed as no,Paragraph as so,PasteFromOffice as lo,Table as mo,TableToolbar as co,TextTransformation as go,CloudServices as po,AutoImage as uo,ImageInsert as ho,Bookmark as bo}from"ckeditor5";import{DecoupledEditor as ko,Essentials as Io,Alignment as wo,FontSize as To,FontFamily as Co,FontColor as vo,FontBackgroundColor as So,Autoformat as Eo,Bold as Ao,Italic as _o,Strikethrough as Bo,Underline as Lo,BlockQuote as Po,CKBox as Fo,EasyImage as Uo,Heading as Oo,Image as Mo,ImageCaption as Do,ImageResize as Ro,ImageStyle as zo,ImageToolbar as No,ImageUpload as Ho,PictureEditing as Ko,Indent as qo,IndentBlock as Qo,Link as jo,List as Go,ListProperties as Vo,MediaEmbed as Wo,Paragraph as $o,PasteFromOffice as Jo,Table as Yo,TableToolbar as Xo,TextTransformation as Zo,CloudServices as ea}from"ckeditor5";import{InlineEditor as aa,Essentials as ra,CKFinderUploadAdapter as na,Autoformat as sa,Bold as la,Italic as da,BlockQuote as ma,CKBox as ca,CKFinder as ga,EasyImage as pa,Heading as ua,Image as ha,ImageCaption as ba,ImageStyle as fa,ImageToolbar as ya,ImageUpload as xa,PictureEditing as ka,Indent as Ia,Link as wa,List as Ta,MediaEmbed as Ca,Paragraph as va,PasteFromOffice as Sa,Table as Ea,TableToolbar as Aa,TextTransformation as _a,CloudServices as Ba}from"ckeditor5";import{MultiRootEditor as Ua,Essentials as Oa,CKFinderUploadAdapter as Ma,Autoformat as Da,Bold as Ra,Italic as za,BlockQuote as Na,CKBox as Ha,CKFinder as Ka,EasyImage as qa,Heading as Qa,Image as ja,ImageCaption as Ga,ImageStyle as Va,ImageToolbar as Wa,ImageUpload as $a,PictureEditing as Ja,Indent as Ya,Link as Xa,List as Za,MediaEmbed as er,Paragraph as tr,PasteFromOffice as ir,Table as or,TableToolbar as ar,TextTransformation as rr,CloudServices as nr}from"ckeditor5";import{AIChat as Pe,AIQuickActions as Fe,AIReviewMode as Ue,PasteFromOfficeEnhanced as Oe,TrackChanges as Me,Comments as De,FormatPainter as Re,LineHeight as ze,SlashCommand as Ne,AIEditorIntegration as He}from"ckeditor5-premium-features";import{uid as E}from"ckeditor5";function u(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=E(),o=e[Math.floor(Math.random()*e.length)],r=t[Math.floor(Math.random()*t.length)];return{name:o+" "+r,id:i}}function h(e,t=u()){return`${e}?`+Object.keys(t).filter(o=>t[o]).map(o=>`user.${o}=${t[o]}`).join("&")}function b(e){e.commands.get("aiQuickAction").on("execute",(t,i)=>{i[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var Ke=w("channelId"),k=w("userId"),c={name:Qe(),id:k,role:"writer"},g=class extends ce{static get requires(){return["Users","CommentsRepository"]}init(){let t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");t.addUser(c),t.defineMe(c.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let o={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:k,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(o)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},qe=`
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
`;function I(e=()=>{}){let t={initialData:qe,ui:{viewportOffset:{top:m()}},placeholder:"Type or paste your content here!",plugins:[Pe,Fe,Ue,f,B,L,y,D,Q,G,V,J,Y,te,x,ae,ne,de,he,ke,_,Z,oe,R,z,N,P,H,K,q,j,W,$,X,ie,re,se,le,me,Oe,ee,ge,be,fe,ye,xe,Ie,F,U,O,M,pe,Ee,Ae,ue,_e,Be,Le,we,Te,Ce,ve,Re,ze,Me,De,g,Ne,He],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:l,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Ke},cloudServices:{...n,tokenUrl:h(n.tokenUrl,c)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[y,x,f]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(t),A.create(document.querySelector("#snippet-ckeditor-ai"),t).then(i=>(window.editor=i,document.querySelector(".toolbar-container").appendChild(i.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),b(i),i.plugins.get("Annotations").refreshVisibility(),i)).catch(i=>{console.error(i)})}function w(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),i=t?decodeURIComponent(t[1]):null;if(!i){i=Se();let o=new URL(window.location.href);o.searchParams.set(e,i),window.history.replaceState({},document.title,o.toString())}return i}function Qe(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],o=t[Math.floor(Math.random()*t.length)];return`${i} ${o}`}I().then(e=>{window.editor=e,s({target:d(e.ui.view.toolbar,i=>i&&i.buttonView&&i.buttonView.label==="AI Quick Actions"),text:"Click to see AI-powered Quick Actions.",editor:e,tippyOptions:{placement:"bottom-start"}});let t=document.querySelector(".ck-ai-chat__prompt-input textarea");t&&s({target:t,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:e,tippyOptions:{placement:"top"}})});
