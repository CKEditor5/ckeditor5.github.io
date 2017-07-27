/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
	target: 'web',

	entry: {
		// 'editor-classic': './js/editor-classic',
		'editor-inline': './js/editor-inline',
		// 'editor-balloon-toolbar': './js/editor-balloon-toolbar'
	},

	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
		libraryTarget: 'umd'
	},

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						'sass-loader'
					]
				} )
			}
		]
	},

	resolve: {
		modules: [
			path.resolve( __dirname, '../packages' ),
			'node_modules'
		]
	},

	plugins: [
		new ExtractTextPlugin( '[name].css' )
	],

	devtool: 'source-map',
	stats: true
};
