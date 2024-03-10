/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-table-caption"),{extraPlugins:[CKEditorPlugins.TableCaption,CKEditorPlugins.Superscript],table:{contentToolbar:["toggleTableCaption","|","tableColumn","tableRow","mergeTableCells"]},image:{toolbar:["imageStyle:block","imageStyle:wrapText","|","imageTextAlternative","|","ckboxImageEdit"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},ckbox:{allowExternalImagesEditing:[/^data:/,"origin"],forceDemoLabel:!0}}).then((e=>{window.editorCaption=e})).catch((e=>{console.error(e.stack)}));
//# sourceMappingURL=snippet.js.map