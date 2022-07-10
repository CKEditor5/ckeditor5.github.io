/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-table-caption"),{extraPlugins:[CKEditorPlugins.TableCaption,CKEditorPlugins.Superscript],table:{contentToolbar:["toggleTableCaption","|","tableColumn","tableRow","mergeTableCells"]},image:{toolbar:["imageStyle:block","imageStyle:side","|","imageTextAlternative"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editorCaption=e})).catch((e=>{console.error(e.stack)}));