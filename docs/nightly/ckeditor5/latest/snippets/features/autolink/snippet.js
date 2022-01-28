/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-autolink"),{cloudServices:{tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/",webSocketUrl:"33333.cke-cs.com/ws"},extraPlugins:[CKEditorPlugins.AutoLink],ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e})).catch((e=>{console.error(e.stack)}));