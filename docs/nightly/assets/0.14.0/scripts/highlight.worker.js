onmessage = function( event ) {
	if ( !self.hljs ) {
		importScripts( 'highlight.pack.js' );
	}

	var data = JSON.parse( event.data ),
		result,
		lang;
	if ( data.language ) {
		lang = data.language.split( ' ' )[ 0 ]
		result = hljs.highlight( lang, data.payload );
	} else {
		result = hljs.highlightAuto( data.payload, [ 'js', 'html', 'xml', 'plaintext' ] );
	}
	postMessage( JSON.stringify( { index: data.index, payload: result.value } ) );
}
