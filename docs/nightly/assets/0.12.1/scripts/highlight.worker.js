onmessage = function( event ) {
	if ( !self.hljs ) {
		importScripts( 'highlight.pack.js' );
	}
	const data = JSON.parse( event.data );
	var result = hljs.highlightAuto( data.payload, [ 'javascript', 'js', 'sh', 'html', 'xml' ] );
	postMessage( JSON.stringify( { index: data.index, payload: result.value } ) );
}
