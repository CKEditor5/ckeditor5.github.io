import{DecoupledEditor as C,Alignment as v,Autoformat as p,BalloonToolbar as S,BlockQuote as E,Bold as u,Code as _,Italic as h,Underline as A,Strikethrough as L,Subscript as P,Superscript as B,Bookmark as F,CKBox as U,CKBoxImageEdit as O,CloudServices as M,CodeBlock as D,Essentials as R,Font as z,Heading as N,HorizontalLine as H,Image as K,ImageCaption as q,ImageInsert as Q,ImageResize as j,ImageStyle as G,ImageToolbar as W,ImageUpload as V,AutoImage as $,PictureEditing as J,Indent as X,IndentBlock as Y,AutoLink as Z,Link as ee,LinkImage as te,List as ie,ListProperties as oe,Mention as ae,Paragraph as re,PasteFromOffice as ne,Plugin as se,RemoveFormat as le,SpecialCharacters as de,SpecialCharactersEssentials as me,Table as ce,TableCaption as ge,TableCellProperties as pe,TableColumnResize as ue,TableProperties as he,TableToolbar as be,TextTransformation as fe,TodoList as ye,FindAndReplace as xe,MediaEmbed as ke,Emoji as Ie,uid as Te,SpecialCharactersArrows as we,SpecialCharactersCurrency as Ce,SpecialCharactersLatin as ve,SpecialCharactersMathematical as Se,SpecialCharactersText as Ee}from"ckeditor5";var k="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",I="https://33333.cke-cs.com/easyimage/upload/",T="33333.cke-cs.com/ws",r={tokenUrl:k,uploadUrl:I,webSocketUrl:T};var n="https://api.ckbox.io/token/demo";import{Plugin as $e}from"@ckeditor/ckeditor5-core";import{Essentials as Xe}from"@ckeditor/ckeditor5-essentials";import{Autoformat as Ze}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as tt}from"@ckeditor/ckeditor5-block-quote";import{Bold as ot,Italic as at}from"@ckeditor/ckeditor5-basic-styles";import{Heading as nt}from"@ckeditor/ckeditor5-heading";import{Image as lt,ImageCaption as dt,ImageStyle as mt,ImageToolbar as ct}from"@ckeditor/ckeditor5-image";import{Indent as pt}from"@ckeditor/ckeditor5-indent";import{Link as ht}from"@ckeditor/ckeditor5-link";import{List as ft}from"@ckeditor/ckeditor5-list";import{MediaEmbed as xt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as It}from"@ckeditor/ckeditor5-paragraph";import{Table as wt,TableToolbar as Ct}from"@ckeditor/ckeditor5-table";function s(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Lt,Essentials as Pt,CKFinderUploadAdapter as Bt,Autoformat as Ft,BlockToolbar as Ut,Bold as Ot,Italic as Mt,BlockQuote as Dt,CKBox as Rt,CKFinder as zt,EasyImage as Nt,Heading as Ht,Image as Kt,ImageCaption as qt,ImageStyle as Qt,ImageToolbar as jt,ImageUpload as Gt,PictureEditing as Wt,Indent as Vt,Link as $t,List as Jt,MediaEmbed as Xt,Paragraph as Yt,PasteFromOffice as Zt,Table as ei,TableToolbar as ti,TextTransformation as ii,CloudServices as oi}from"ckeditor5";import{BalloonEditor as si,Essentials as li,CKFinderUploadAdapter as di,Autoformat as mi,Bold as ci,Italic as gi,BlockQuote as pi,CKBox as ui,CKFinder as hi,EasyImage as bi,Heading as fi,Image as yi,ImageCaption as xi,ImageStyle as ki,ImageToolbar as Ii,ImageUpload as Ti,PictureEditing as wi,Indent as Ci,Link as vi,List as Si,MediaEmbed as Ei,Paragraph as _i,PasteFromOffice as Ai,Table as Li,TableToolbar as Pi,TextTransformation as Bi,CloudServices as Fi}from"ckeditor5";import{ClassicEditor as Di,Essentials as Ri,Autoformat as zi,Bold as Ni,Italic as Hi,BlockQuote as Ki,CKBox as qi,EasyImage as Qi,Heading as ji,Image as Gi,ImageCaption as Wi,ImageStyle as Vi,ImageToolbar as $i,ImageUpload as Ji,PictureEditing as Xi,Indent as Yi,Link as Zi,List as eo,MediaEmbed as to,Paragraph as io,PasteFromOffice as oo,Table as ao,TableToolbar as ro,TextTransformation as no,CloudServices as so,AutoImage as lo,ImageInsert as mo,Bookmark as co}from"ckeditor5";import{DecoupledEditor as ho,Essentials as bo,Alignment as fo,FontSize as yo,FontFamily as xo,FontColor as ko,FontBackgroundColor as Io,Autoformat as To,Bold as wo,Italic as Co,Strikethrough as vo,Underline as So,BlockQuote as Eo,CKBox as _o,EasyImage as Ao,Heading as Lo,Image as Po,ImageCaption as Bo,ImageResize as Fo,ImageStyle as Uo,ImageToolbar as Oo,ImageUpload as Mo,PictureEditing as Do,Indent as Ro,IndentBlock as zo,Link as No,List as Ho,ListProperties as Ko,MediaEmbed as qo,Paragraph as Qo,PasteFromOffice as jo,Table as Go,TableToolbar as Wo,TextTransformation as Vo,CloudServices as $o}from"ckeditor5";import{InlineEditor as Zo,Essentials as ea,CKFinderUploadAdapter as ta,Autoformat as ia,Bold as oa,Italic as aa,BlockQuote as ra,CKBox as na,CKFinder as sa,EasyImage as la,Heading as da,Image as ma,ImageCaption as ca,ImageStyle as ga,ImageToolbar as pa,ImageUpload as ua,PictureEditing as ha,Indent as ba,Link as fa,List as ya,MediaEmbed as xa,Paragraph as ka,PasteFromOffice as Ia,Table as Ta,TableToolbar as wa,TextTransformation as Ca,CloudServices as va}from"ckeditor5";import{MultiRootEditor as Aa,Essentials as La,CKFinderUploadAdapter as Pa,Autoformat as Ba,Bold as Fa,Italic as Ua,BlockQuote as Oa,CKBox as Ma,CKFinder as Da,EasyImage as Ra,Heading as za,Image as Na,ImageCaption as Ha,ImageStyle as Ka,ImageToolbar as qa,ImageUpload as Qa,PictureEditing as ja,Indent as Ga,Link as Wa,List as Va,MediaEmbed as $a,Paragraph as Ja,PasteFromOffice as Xa,Table as Ya,TableToolbar as Za,TextTransformation as er,CloudServices as tr}from"ckeditor5";import{AIChat as _e,AIQuickActions as Ae,AIReviewMode as Le,PasteFromOfficeEnhanced as Pe,TrackChanges as Be,Comments as Fe,FormatPainter as Ue,LineHeight as Oe,SlashCommand as Me,AIEditorIntegration as De}from"ckeditor5-premium-features";import{uid as w}from"ckeditor5";function m(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],i=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],t=w(),a=e[Math.floor(Math.random()*e.length)],x=i[Math.floor(Math.random()*i.length)];return{name:a+" "+x,id:t}}function c(e,i=m()){return`${e}?`+Object.keys(i).filter(a=>i[a]).map(a=>`user.${a}=${i[a]}`).join("&")}function g(e){e.commands.get("aiQuickAction").on("execute",(i,t)=>{t[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var Re=y("channelId"),b=y("userId"),l={name:Ne(),id:b,role:"writer"},d=class extends se{static get requires(){return["Users","CommentsRepository"]}init(){let i=this.editor.plugins.get("Users"),t=this.editor.plugins.get("CommentsRepository");i.addUser(l),i.defineMe(l.id),t.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let a={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:b,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(a)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:i.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},ze=`
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
`;function f(e=()=>{}){let i={initialData:ze,ui:{viewportOffset:{top:s()}},placeholder:"Type or paste your content here!",plugins:[_e,Ae,Le,p,S,E,u,F,N,K,q,G,W,X,h,ee,ie,re,ce,be,v,$,Z,U,O,M,_,D,R,z,H,Q,j,V,Y,te,oe,ae,ne,Pe,J,le,ge,pe,ue,he,fe,A,L,P,B,de,we,Ce,me,ve,Se,Ee,ye,xe,ke,Ie,Ue,Oe,Be,Fe,d,Me,De],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:Re},cloudServices:{...r,tokenUrl:c(r.tokenUrl,l)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[u,h,p]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(i),C.create(document.querySelector("#snippet-ckeditor-ai"),i).then(t=>(window.editor=t,document.querySelector(".toolbar-container").appendChild(t.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),g(t),t.plugins.get("Annotations").refreshVisibility(),t)).catch(t=>{console.error(t)})}function y(e){let i=location.search.match(new RegExp(`${e}=([^&]+)`)),t=i?decodeURIComponent(i[1]):null;if(!t){t=Te();let a=new URL(window.location.href);a.searchParams.set(e,t),window.history.replaceState({},document.title,a.toString())}return t}function Ne(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],i=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],t=e[Math.floor(Math.random()*e.length)],a=i[Math.floor(Math.random()*i.length)];return`${t} ${a}`}f().then(e=>{window.editor=e,e.plugins.get("AITabs").view.activateTab("reviewMode")});
