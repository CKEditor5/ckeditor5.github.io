/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */DecoupledEditor.create(document.querySelector("#mini-inspector-upcast-element"),{plugins:[Essentials,function(e){e.model.schema.register("example",{inheritAllFrom:"$block"}),e.conversion.elementToElement({view:{name:"div",classes:["example"]},model:"example"})}]}).then((e=>{MiniCKEditorInspector.attach(e,document.querySelector("#mini-inspector-upcast-element-container"))})).catch((e=>{console.error(e.stack)}));