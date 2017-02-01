/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* jshint browser: false, node: true, strict: true */

'use strict';

const path = require( 'path' );
const BabiliPlugin = require( 'babili-webpack-plugin' );

module.exports = {
	context: __dirname,
	target: 'web',

	entry: './js/app',

	output: {
		path: './js',
		filename: 'app.bundle.js'
	},

	module: {
		rules: [
			{
				// test: **/ckeditor5-*/theme/icons/*.svg
				test: /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				// test: **/ckeditor5-*/theme/**/*.scss
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},

	resolve: {
		modules: [
			path.resolve( __dirname, 'packages' ),
			'node_modules'
		]
	},

	plugins: [
		new BabiliPlugin()
	],

	devtool: 'source-map',
	stats: true
};
