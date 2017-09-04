/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ArticlePreset from '@ckeditor/ckeditor5-presets/src/article';

try {
	ClassicEditor.create( document.querySelector( '#editor' ), {
		plugins: [
			ArticlePreset
		],
		toolbar: [
			'headings',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'blockQuote',
			'undo',
			'redo'
		],
		image: {
			toolbar: [ 'imageStyleFull', 'imageStyleSide', '|' , 'imageTextAlternative' ]
		}
	} ).then( ( editor ) => {
		window.editor = editor;
	} )
	.catch( ( err ) => {
		console.error( err.stack );
	} );
} catch ( err ) {
	console.error( err.stack );
	showCompatibilityMessage();
}

function showCompatibilityMessage() {
	const editorElement = document.querySelector( '#editor' );
	const message = document.createElement( 'p' );

	message.innerHTML = `
		<h2>That's a shame...</h2>
		<p>We're not proud of this but this developer preview does not work in your web browser.</p>
		<p>If you think that this is inacceptable, please <a href="https://github.com/ckeditor/ckeditor5/issues/new">report this to us</a>.</p>
	`;

	message.classList.add( 'message' );

	editorElement.style.display = 'none';
	editorElement.parentNode.insertBefore( message, editorElement );
}
