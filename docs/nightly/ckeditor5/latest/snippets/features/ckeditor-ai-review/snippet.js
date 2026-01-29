import{DecoupledEditor as C,Alignment as v,Autoformat as p,BalloonToolbar as S,BlockQuote as E,Bold as u,Code as _,Italic as h,Underline as A,Strikethrough as L,Subscript as P,Superscript as B,Bookmark as F,CKBox as U,CKBoxImageEdit as O,CloudServices as M,CodeBlock as D,Essentials as R,Font as z,Heading as N,HorizontalLine as H,Image as K,ImageCaption as q,ImageInsert as Q,ImageResize as j,ImageStyle as G,ImageToolbar as W,ImageUpload as V,AutoImage as $,PictureEditing as J,Indent as X,IndentBlock as Y,AutoLink as Z,Link as ee,LinkImage as te,List as ie,ListProperties as oe,Mention as ae,Paragraph as re,PasteFromOffice as ne,Plugin as se,RemoveFormat as le,SpecialCharacters as de,SpecialCharactersEssentials as me,Table as ce,TableCaption as ge,TableCellProperties as pe,TableColumnResize as ue,TableProperties as he,TableToolbar as be,TextTransformation as fe,TodoList as ye,FindAndReplace as xe,MediaEmbed as ke,Emoji as Ie,uid as Te,SpecialCharactersArrows as we,SpecialCharactersCurrency as Ce,SpecialCharactersLatin as ve,SpecialCharactersMathematical as Se,SpecialCharactersText as Ee}from"ckeditor5";var k="https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",I="https://33333.cke-cs.com/easyimage/upload/",T="33333.cke-cs.com/ws",r={tokenUrl:k,uploadUrl:I,webSocketUrl:T};var n="https://api.ckbox.io/token/demo";import{Plugin as Je}from"@ckeditor/ckeditor5-core";import{Essentials as Ye}from"@ckeditor/ckeditor5-essentials";import{Autoformat as et}from"@ckeditor/ckeditor5-autoformat";import{BlockQuote as it}from"@ckeditor/ckeditor5-block-quote";import{Bold as at,Italic as rt}from"@ckeditor/ckeditor5-basic-styles";import{Heading as st}from"@ckeditor/ckeditor5-heading";import{Image as dt,ImageCaption as mt,ImageStyle as ct,ImageToolbar as gt}from"@ckeditor/ckeditor5-image";import{Indent as ut}from"@ckeditor/ckeditor5-indent";import{Link as bt}from"@ckeditor/ckeditor5-link";import{List as yt}from"@ckeditor/ckeditor5-list";import{MediaEmbed as kt}from"@ckeditor/ckeditor5-media-embed";import{Paragraph as Tt}from"@ckeditor/ckeditor5-paragraph";import{Table as Ct,TableToolbar as vt}from"@ckeditor/ckeditor5-table";function s(){let e=document.documentElement;return parseInt(window.getComputedStyle(e).getPropertyValue("--ck-snippet-viewport-top-offset"))}import{BalloonEditor as Pt,Essentials as Bt,CKFinderUploadAdapter as Ft,Autoformat as Ut,BlockToolbar as Ot,Bold as Mt,Italic as Dt,BlockQuote as Rt,CKBox as zt,CKFinder as Nt,EasyImage as Ht,Heading as Kt,Image as qt,ImageCaption as Qt,ImageStyle as jt,ImageToolbar as Gt,ImageUpload as Wt,PictureEditing as Vt,Indent as $t,Link as Jt,List as Xt,MediaEmbed as Yt,Paragraph as Zt,PasteFromOffice as ei,Table as ti,TableToolbar as ii,TextTransformation as oi,CloudServices as ai}from"ckeditor5";import{BalloonEditor as li,Essentials as di,CKFinderUploadAdapter as mi,Autoformat as ci,Bold as gi,Italic as pi,BlockQuote as ui,CKBox as hi,CKFinder as bi,EasyImage as fi,Heading as yi,Image as xi,ImageCaption as ki,ImageStyle as Ii,ImageToolbar as Ti,ImageUpload as wi,PictureEditing as Ci,Indent as vi,Link as Si,List as Ei,MediaEmbed as _i,Paragraph as Ai,PasteFromOffice as Li,Table as Pi,TableToolbar as Bi,TextTransformation as Fi,CloudServices as Ui}from"ckeditor5";import{ClassicEditor as Ri,Essentials as zi,Autoformat as Ni,Bold as Hi,Italic as Ki,BlockQuote as qi,CKBox as Qi,EasyImage as ji,Heading as Gi,Image as Wi,ImageCaption as Vi,ImageStyle as $i,ImageToolbar as Ji,ImageUpload as Xi,PictureEditing as Yi,Indent as Zi,Link as eo,List as to,MediaEmbed as io,Paragraph as oo,PasteFromOffice as ao,Table as ro,TableToolbar as no,TextTransformation as so,CloudServices as lo,AutoImage as mo,ImageInsert as co,Bookmark as go}from"ckeditor5";import{DecoupledEditor as bo,Essentials as fo,Alignment as yo,FontSize as xo,FontFamily as ko,FontColor as Io,FontBackgroundColor as To,Autoformat as wo,Bold as Co,Italic as vo,Strikethrough as So,Underline as Eo,BlockQuote as _o,CKBox as Ao,EasyImage as Lo,Heading as Po,Image as Bo,ImageCaption as Fo,ImageResize as Uo,ImageStyle as Oo,ImageToolbar as Mo,ImageUpload as Do,PictureEditing as Ro,Indent as zo,IndentBlock as No,Link as Ho,List as Ko,ListProperties as qo,MediaEmbed as Qo,Paragraph as jo,PasteFromOffice as Go,Table as Wo,TableToolbar as Vo,TextTransformation as $o,CloudServices as Jo}from"ckeditor5";import{InlineEditor as ea,Essentials as ta,CKFinderUploadAdapter as ia,Autoformat as oa,Bold as aa,Italic as ra,BlockQuote as na,CKBox as sa,CKFinder as la,EasyImage as da,Heading as ma,Image as ca,ImageCaption as ga,ImageStyle as pa,ImageToolbar as ua,ImageUpload as ha,PictureEditing as ba,Indent as fa,Link as ya,List as xa,MediaEmbed as ka,Paragraph as Ia,PasteFromOffice as Ta,Table as wa,TableToolbar as Ca,TextTransformation as va,CloudServices as Sa}from"ckeditor5";import{MultiRootEditor as La,Essentials as Pa,CKFinderUploadAdapter as Ba,Autoformat as Fa,Bold as Ua,Italic as Oa,BlockQuote as Ma,CKBox as Da,CKFinder as Ra,EasyImage as za,Heading as Na,Image as Ha,ImageCaption as Ka,ImageStyle as qa,ImageToolbar as Qa,ImageUpload as ja,PictureEditing as Ga,Indent as Wa,Link as Va,List as $a,MediaEmbed as Ja,Paragraph as Xa,PasteFromOffice as Ya,Table as Za,TableToolbar as er,TextTransformation as tr,CloudServices as ir}from"ckeditor5";import{AIChat as _e,AIQuickActions as Ae,AIReviewMode as Le,AITranslate as Pe,PasteFromOfficeEnhanced as Be,TrackChanges as Fe,Comments as Ue,FormatPainter as Oe,LineHeight as Me,SlashCommand as De,AIEditorIntegration as Re}from"ckeditor5-premium-features";import{uid as w}from"ckeditor5";function m(){let e=["Bo","Jo","Moe","Mex","Tex","Hex","Brick","Em","Plate","Zee","DJ","CJ","AJ"],t=["King","Egli","Zwart","Principe","Siddiqui","Ehlers","Coltrane","Grimes","Cavallaro","Croce","Haddox","Weatherspoon","Gilpatrick","Funderburk","Mustard","Enterline","Redden","Hayford","Hevey","Dey","Demaio","Chenard","Whalley","Light","Kleist","Huntsman","Drovin","Duenes","Weintraub","Mcbeath","Harden","Streicher","Nadel","Philbrick","Ramm","Byrge","Broce","Olivera","Hamm","Tweedie","Hershman","Hertzler","Fielding","Dao","Constante","Berens","Finks","Corvin","Lemmons","Cuenca"],i=w(),a=e[Math.floor(Math.random()*e.length)],x=t[Math.floor(Math.random()*t.length)];return{name:a+" "+x,id:i}}function c(e,t=m()){return`${e}?`+Object.keys(t).filter(a=>t[a]).map(a=>`user.${a}=${t[a]}`).join("&")}function g(e){e.commands.get("aiQuickAction").on("execute",(t,i)=>{i[0].type==="CHAT"&&(e.commands.get("toggleAi").value||e.execute("toggleAi"))},{priority:"high"})}var ze=y("channelId"),b=y("userId"),l={name:He(),id:b,role:"writer"},d=class extends se{static get requires(){return["Users","CommentsRepository"]}init(){let t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("CommentsRepository");t.addUser(l),t.defineMe(l.id),i.adapter={addComment:()=>Promise.resolve(),updateComment:()=>Promise.resolve(),removeComment:()=>Promise.resolve(),getCommentThread:()=>{let a={threadId:"thread-1",comments:[{commentId:"comment-1",authorId:b,content:"<p>Isn't 2028 more likely?</p>",createdAt:new Date}]};return Promise.resolve(a)},addCommentThread:()=>Promise.resolve({comments:[]}),updateCommentThread:()=>Promise.resolve(),resolveCommentThread:()=>Promise.resolve({resolvedAt:new Date,resolvedBy:t.me.id}),reopenCommentThread:()=>Promise.resolve(),removeCommentThread:()=>Promise.resolve()}}},Ne=`
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
`;function f(e=()=>{}){let t={initialData:Ne,ui:{viewportOffset:{top:s()}},placeholder:"Type or paste your content here!",plugins:[_e,Ae,Le,Pe,p,S,E,u,F,N,K,q,G,W,X,h,ee,ie,re,ce,be,v,$,Z,U,O,M,_,D,R,z,H,Q,j,V,Y,te,oe,ae,ne,Be,J,le,ge,pe,ue,he,fe,A,L,P,B,de,we,Ce,me,ve,Se,Ee,ye,xe,ke,Ie,Oe,Me,Fe,Ue,d,De,Re],toolbar:{items:["undo","redo","|","trackChanges","comment","|","toggleAi","aiQuickActions","|","removeFormat","|","heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","-","link","insertImage","ckbox","mediaEmbed","insertTable","blockQuote","codeBlock","specialCharacters","horizontalLine","|","alignment","lineHeight","|","bulletedList","numberedList","outdent","indent","|"],shouldNotGroupWhenFull:!0},balloonToolbar:{items:["aiQuickActions","ask-ai","|","bold","italic","|","link"]},fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},image:{styles:["alignCenter","alignLeft","alignRight"],resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:50",label:"50%",value:"50"},{name:"resizeImage:75",label:"75%",value:"75"}],toolbar:["imageTextAlternative","toggleImageCaption","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage","|","ckboxImageEdit"]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},link:{decorators:{addTargetToExternalLinks:!0,defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties","toggleTableCaption"]},ckbox:{tokenUrl:n,forceDemoLabel:!0,allowExternalImagesEditing:[/^data:/,"origin",/ckbox/]},collaboration:{channelId:ze},cloudServices:{...r,tokenUrl:c(r.tokenUrl,l)},ai:{container:{type:"sidebar",element:document.querySelector("#ai-sidebar-container")},chat:{context:{document:{enabled:!0},urls:{enabled:!0},files:{enabled:!0}}}},comments:{editorConfig:{extraPlugins:[u,h,p]}},emoji:{skinTone:"default",definitionsUrl:"cdn"}};return e(t),C.create(document.querySelector("#snippet-ckeditor-ai"),t).then(i=>(window.editor=i,document.querySelector(".toolbar-container").appendChild(i.ui.view.toolbar.element),document.querySelector(".live-snippet__loader").classList.add("fadeout"),document.querySelector(".live-snippet__container").classList.add("loaded"),g(i),i)).catch(i=>{console.error(i)})}function y(e){let t=location.search.match(new RegExp(`${e}=([^&]+)`)),i=t?decodeURIComponent(t[1]):null;if(!i){i=Te();let a=new URL(window.location.href);a.searchParams.set(e,i),window.history.replaceState({},document.title,a.toString())}return i}function He(){let e=["Alex","Jordan","Taylor","Casey","Morgan","Riley","Avery","Quinn","Sage","River"],t=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez"],i=e[Math.floor(Math.random()*e.length)],a=t[Math.floor(Math.random()*t.length)];return`${i} ${a}`}f().then(e=>{window.editor=e,e.plugins.get("AITabs").view.activateTab("reviewMode")});
