/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

// Display the message of shame.
if ( navigator.userAgent.toLowerCase().indexOf( 'chrome' ) === -1 ) {
	document.addEventListener( 'DOMContentLoaded', function() {
		var editorElement = document.querySelector( '#editor' );
		var message = document.createElement( 'p' );

		message.innerHTML = [
			'<h2>That\'s a shame...</h2>',
			'<p>We\'re not proud of this but this early developer preview of the editor<br/> ',
			'works in <a href="https://www.google.com/chrome/">Google Chrome</a> only.</p>',
			'<p>We\'re terribly sorry.</p>'
		].join( '' );

		message.classList.add( 'message' );

		editorElement.style.display = 'none';
		editorElement.parentNode.insertBefore( message, editorElement );
	} );
}