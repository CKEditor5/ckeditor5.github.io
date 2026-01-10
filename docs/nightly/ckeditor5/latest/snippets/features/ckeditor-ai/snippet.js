import{DecoupledEditor as _,Alignment as B,Autoformat as f,BalloonToolbar as L,BlockQuote as P,Bold as y,Code as F,Italic as x,Underline as U,Strikethrough as O,Subscript as M,Superscript as D,Bookmark as R,CKBox as z,CKBoxImageEdit as N,CloudServices as H,CodeBlock as K,Essentials as q,Font as Q,Heading as j,HorizontalLine as G,Image as V,ImageCaption as W,ImageInsert as $,ImageResize as J,ImageStyle as Y,ImageToolbar as X,ImageUpload as Z,AutoImage as ee,PictureEditing as te,Indent as ie,IndentBlock as oe,AutoLink as ae,Link as re,LinkImage as ne,List as se,ListProperties as le,Mention as de,Paragraph as me,PasteFromOffice as ce,Plugin as ge,RemoveFormat as pe,SpecialCharacters as ue,SpecialCharactersEssentials as he,Table as be,TableCaption as fe,TableCellProperties as ye,TableColumnResize as xe,TableProperties as ke,TableToolbar as Ie,TextTransformation as we,TodoList as Te,FindAndReplace as Ce,MediaEmbed as ve,Emoji as Se,uid as Ee,SpecialCharactersArrows as Ae,SpecialCharactersCurrency as _e,SpecialCharactersLatin as Be,SpecialCharactersMathematical as Le,SpecialCharactersText as Pe}from"ckeditor5";var v="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",S="https://33333.cke-cs.com/easyimage/upload/",E="33333.cke-cs.com/ws",n={tokenUrl:v,uploadUrl:S,webSocketUrl:E};var d="https://api.ckbox.io/token/demo";import{Plugin as tt}from"@ckeditor/ckeditor5-core";import{Essentials as ot}from"@ckeditor/ckeditor5-essentials";import{Autoformat as rt}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as st}from"@ckeditor/ckeditor5-block-quote";import{Bold as dt,Italic as mt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as gt}from"@ckeditor/ckeditor5-heading";import{Image as ut,ImageCaption as ht,ImageStyle as bt,ImageToolbar as ft}from"@ckeditor/ckeditor5-image";import{Indent as xt}from"@ckeditor/ckeditor5-indent";import{Link as It}from"@ckeditor/ckeditor5-link";import{List as Tt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as vt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Et}from"@ckeditor/ckeditor5-paragraph";import{Table as _t,TableToolbar as Bt}from"@ckeditor/ckeditor5-table";function s({id:i,target:e,text:t,editor:o,tippyOptions:r}){if(!e){console.warn("[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.",{text:t});return}if(!e.offsetParent){console.warn("[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.",{target:e,text:t});return}let l=window.umberto.Tooltip.create({id:i,text:t,trigger:e,mode:"click",variant:"dark",icon:"bulb",disableOnMobile:!1,showCloseButton:!0,showAfterMount:!0,hideOnOutsideClick:!1,destroyOnHide:!0,...r?.placement&&{position:r.placement}});for(let T of o.editing.view.document.roots)T.once("change:isFocused",(Ge,Ve,C)=>{C&&l.destroy()});return l}function m(i,e){let t=i.items,o;return typeof e=="function"?o=t.find(e):o=t.get(e),o?o.element:void 0}function c(){let i=document.documentElement;return parseInt(window.getComputedStyle(i).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Mt,Essentials as Dt,CKFinderUploadAdapter as Rt,Autoformat as zt,BlockToolbar as Nt,Bold as Ht,Italic as Kt,BlockQuote as qt,CKBox as Qt,CKFinder as jt,EasyImage as Gt,Heading as Vt,Image as Wt,ImageCaption as $t,ImageStyle as Jt,ImageToolbar as Yt,ImageUpload as Xt,PictureEditing as Zt,Indent as ei,Link as ti,List as ii,MediaEmbed as oi,Paragraph as ai,PasteFromOffice as ri,Table as ni,TableToolbar as si,TextTransformation as li,CloudServices as di}from"ckeditor5";import{BalloonEditor as pi,Essentials as ui,CKFinderUploadAdapter as hi,Autoformat as bi,Bold as fi,Italic as yi,BlockQuote as xi,CKBox as ki,CKFinder as Ii,EasyImage as wi,Heading as Ti,Image as Ci,ImageCaption as vi,ImageStyle as Si,ImageToolbar as Ei,ImageUpload as Ai,PictureEditing as _i,Indent as Bi,Link as Li,List as Pi,MediaEmbed as Fi,Paragraph as Ui,PasteFromOffice as Oi,Table as Mi,TableToolbar as Di,TextTransformation as Ri,CloudServices as zi}from"ckeditor5";import{ClassicEditor as qi,Essentials as Qi,Autoformat as ji,Bold as Gi,Italic as Vi,BlockQuote as Wi,CKBox as $i,EasyImage as Ji,Heading as Yi,Image as Xi,ImageCaption as Zi,ImageStyle as eo,ImageToolbar as to,ImageUpload as io,PictureEditing as oo,Indent as ao,Link as ro,List as no,MediaEmbed as so,Paragraph as lo,PasteFromOffice as mo,Table as co,TableToolbar as go,TextTransformation as po,CloudServices as uo,AutoImage as ho,ImageInsert as bo,Bookmark as fo}from"ckeditor5";import{DecoupledEditor as Io,Essentials as wo,Alignment as To,FontSize as Co,FontFamily as vo,FontColor as So,FontBackgroundColor as Eo,Autoformat as Ao,Bold as _o,Italic as Bo,Strikethrough as Lo,Underline as Po,BlockQuote as Fo,CKBox as Uo,EasyImage as Oo,Heading as Mo,Image as Do,ImageCaption as Ro,ImageResize as zo,ImageStyle as No,ImageToolbar as Ho,ImageUpload as Ko,PictureEditing as qo,Indent as Qo,IndentBlock as jo,Link as Go,List as Vo,ListProperties as Wo,MediaEmbed as $o,Paragraph as Jo,PasteFromOffice as Yo,Table as Xo,TableToolbar as Zo,TextTransformation as ea,CloudServices as ta}from"ckeditor5";import{InlineEditor as ra,Essentials as na,CKFinderUploadAdapter as sa,Autoformat as la,Bold as da,Italic as ma,BlockQuote as ca,CKBox as ga,CKFinder as pa,EasyImage as ua,Heading as ha,Image as ba,ImageCaption as fa,ImageStyle as ya,ImageToolbar as xa,ImageUpload as ka,PictureEditing as Ia,Indent as wa,Link as Ta,List as Ca,MediaEmbed as va,Paragraph as Sa,PasteFromOffice as Ea,Table as Aa,TableToolbar as _a,TextTransformation as Ba,CloudServices as La}from"ckeditor5";import{MultiRootEditor as Oa,Essentials as Ma,CKFinderUploadAdapter as Da,Autoformat as Ra,Bold as za,Italic as Na,BlockQuote as Ha,CKBox as Ka,CKFinder as qa,EasyImage as Qa,Heading as ja,Image as Ga,ImageCaption as Va,ImageStyle as Wa,ImageToolbar as $a,ImageUpload as Ja,PictureEditing as Ya,Indent as Xa,Link as Za,List as er,MediaEmbed as tr,Paragraph as ir,PasteFromOffice as or,Table as ar,TableToolbar as rr,TextTransformation as nr,CloudServices as sr}from"ckeditor5";import{AIChat as Fe,AIQuickActions as Ue,AIReviewMode as Oe,PasteFromOfficeEnhanced as Me,TrackChanges as De,Comments as Re,FormatPainter as ze,LineHeight as Ne,SlashCommand as He,AIEditorIntegration as Ke}from"ckeditor5-premium-features";import{uid as A}from"ckeditor5";function u(){let i=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],e=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],t=A(),o=i[Math.floor(Math.random()*i.length)],r=e[Math.floor(Math.random()*e.length)];return{name:o+" "+r,id:t}}function h(i,e=u()){return`${i}?`+Object.keys(e).filter(o=>e[o]).map(o=>`user.${o}=${e[o]}`).join("&")}function b(i){i.commands.get("aiQuickAction").on("execute",(e,t)=>{t[0].type==="CHAT"&&(i.commands.get("toggleAi").value||i.execute("toggleAi"))},{priority:"high"})}var qe=w("channelId"),k=w("userId"),g={name:je(),id:k,role:"writer"},p=class extends ge{static get requires(){return["Users","CommentsRepository"]}init(){let e=this.editor.plugins.get("Users"),t=this.editor.plugins.get("CommentsRepository");e.addUser(g),e.defineMe(g.id),t.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let o={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:k,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(o)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:e.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Qe=`
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
`;function I(i=()=>{}){let e={initialData:Qe,ui:{viewportOffset:{top:c()}},placeholder:"Type or paste your content here!",plugins:[Fe,Ue,Oe,f,L,P,y,R,j,V,W,Y,X,ie,x,re,se,me,be,Ie,B,ee,ae,z,N,H,F,K,q,Q,G,$,J,Z,oe,ne,le,de,ce,Me,te,pe,fe,ye,xe,ke,we,U,O,M,D,ue,Ae,_e,he,Be,Le,Pe,Te,Ce,ve,Se,ze,Ne,De,Re,p,He,Ke],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:d,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:qe},cloudServices:{...n,tokenUrl:h(n.tokenUrl,g)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[y,x,f]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return i(e),_.create(document.querySelector("#snippet-ckeditor-ai"),e).then(t=>(window.editor=t,document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),b(t),t.plugins.get("Annotations").refreshVisibility(),t)).catch(t=>{console.error(t)})}function w(i){let e=location.search.match(new RegExp(`${i}=([^&]+)`)),t=e?decodeURIComponent(e[1]):null;if(!t){t=Ee();let o=new URL(window.location.href);o.searchParams.set(i,t),window.history.replaceState({},document.title,o.toString())}return t}function je(){let i=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],e=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],t=i[Math.floor(Math.random()*i.length)],o=e[Math.floor(Math.random()*e.length)];return`${t} ${o}`}I().then(i=>{window.editor=i,s({target:m(i.ui.view.toolbar,t=>t&&t.buttonView&&t.buttonView.label==="AI Quick Actions"),text:"Click to see AI-powered Quick Actions.",editor:i,tippyOptions:{placement:"bottom-start"}});let e=document.querySelector(".ck-ai-chat__prompt-input textarea");e&&s({target:e,text:"You can talk with the AI chat here! Ask questions or request help with your content.",editor:i,tippyOptions:{placement:"top"}})});
