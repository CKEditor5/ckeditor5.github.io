/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard.js';
import Enter from '@ckeditor/ckeditor5-enter/src/enter.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Typing from '@ckeditor/ckeditor5-typing/src/typing.js';
import Undo from '@ckeditor/ckeditor5-undo/src/undo.js';

try {
	ClassicEditor.create( document.querySelector( '#editor' ), {
		plugins: [
			Bold,
			Clipboard,
			Enter,
			Heading,
			Image,
			ImageStyle,
			ImageToolbar,
			Italic,
			Link,
			List,
			Paragraph,
			Typing,
			Undo
		],
		toolbar: [ 'headings', 'bold', 'italic', 'link', 'unlink', 'bulletedList', 'numberedList', 'undo', 'redo' ]
	} ).then( function( editor ) {
		window.editor = editor;
	} )
	.catch( function( err ) {
		console.error( err.stack );
	} );
} catch ( e ) {
	showCompatibilityMessage();
}

function showCompatibilityMessage() {
	var editorElement = document.querySelector( '#editor' );
	var message = document.createElement( 'p' );

	message.innerHTML = `
		<h2>That's a shame...</h2>
		<p>We're not proud of this but this early developer preview does not work in your web browser.</p>
		<p>Please consider using <a href="https://www.google.com/chrome/">Google Chrome</a> instead.</p>
		<p>We're terribly sorry.</p>
	`;

	message.classList.add( 'message' );

	editorElement.style.display = 'none';
	editorElement.parentNode.insertBefore( message, editorElement );
}
