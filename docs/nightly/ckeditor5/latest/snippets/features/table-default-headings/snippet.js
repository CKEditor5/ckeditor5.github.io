/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";ClassicEditor.create(document.querySelector("#snippet-table-default-headings"),{table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"],defaultHeadings:{rows:1,columns:1}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},ckbox:{tokenUrl:"https://api.ckbox.io/token/demo",allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0}}).then((e=>{window.editorDefaultHeadings=e})).catch((e=>{console.error(e.stack)}))})();
//# sourceMappingURL=snippet.js.map