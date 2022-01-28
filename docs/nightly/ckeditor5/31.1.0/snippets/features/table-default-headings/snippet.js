/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-table-default-headings"),{table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"],defaultHeadings:{rows:1,columns:1}},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editorDefaultHeadings=e})).catch((e=>{console.error(e.stack)}));