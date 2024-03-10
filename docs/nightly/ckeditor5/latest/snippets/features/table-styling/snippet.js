/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-table-styling"),{extraPlugins:[CKEditorPlugins.TableProperties,CKEditorPlugins.TableCellProperties],table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","toggleImageCaption","imageTextAlternative","|","ckboxImageEdit"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},ckbox:{allowExternalImagesEditing:[/^data:/,"origin"],forceDemoLabel:!0}}).then((e=>{window.editorStyling=e})).catch((e=>{console.error(e.stack)}));
//# sourceMappingURL=snippet.js.map