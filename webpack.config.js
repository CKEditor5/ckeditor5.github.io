/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* jshint browser: false, node: true, strict: true */

'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler } = require( '@ckeditor/ckeditor5-dev-utils' );

const BabiliPlugin = require( 'babili-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
	target: 'web',

	entry: [
		'./js/app'
	],

	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'app.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [
								[
									require( 'babel-preset-env' ),
									{
										targets: {
											browsers: [
												'last 2 Chrome versions',
												'last 2 Firefox versions',
												'last 2 Edge versions',
												'last 2 Opera versions',
												// 'last 1 Safari versions',
												// 'last 2 ChromeAndroid versions',
												// 'last 2 iOS versions',
												// 'last 2 FirefoxAndroid versions'
											]
										}
									}
								]
							]
						}
					}
				]
			},
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
			path.resolve( __dirname, 'packages' ),
			'node_modules'
		]
	},

	plugins: [
        new ExtractTextPlugin( 'styles.css' ),
		new BabiliPlugin( null, {
			comments: false
		} ),
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	devtool: 'source-map',
	stats: true
};
