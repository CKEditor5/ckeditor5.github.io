/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#editor"),{toolbar:{items:["heading","|","bold","italic","underline","link","insertTable","|","undo","redo","|","selectAll"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.label&&"Select all"===e.label)),text:"Click to select everything.",editor:e})})).catch((e=>{console.error(e.stack)}));