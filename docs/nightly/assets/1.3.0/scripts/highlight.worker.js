onmessage = function( event ) {
	if ( !self.hljs ) {
		importScripts( 'highlight.pack.js' );
	}

	var data = JSON.parse( event.data ),
		result,
		lang;
	if ( data.language ) {
		lang = data.language.split( ' ' )[ 0 ]
		try {
			result = hljs.highlight( lang, data.payload );
		} catch ( e ) {
			console.warn( `Language "${ lang }" in codeblock section is not supported. Autohighlight was used instead!` );
			result = hljs.highlightAuto( data.payload, [ 'js', 'html', 'xml', 'plaintext' ] );
		}
	} else {
		result = hljs.highlightAuto( data.payload, [ 'js', 'html', 'xml', 'plaintext' ] );
	}
	postMessage( JSON.stringify( { index: data.index, payload: result.value } ) );
}
