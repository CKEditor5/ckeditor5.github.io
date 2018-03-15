/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const BabiliPlugin = require( 'babel-minify-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
	devtool: 'source-map',

	entry: path.resolve( __dirname, 'js', 'app.js' ),

	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'app.js',
	},

	plugins: [
		new ExtractTextPlugin( 'styles.css' ),
		new BabiliPlugin( null, {
			comments: false
		} ),
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} ),
		new webpack.optimize.ModuleConcatenationPlugin()
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{

				test: /\.css$/,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: [
						// {
						// 	loader: 'style-loader',
						// 	options: {
						// 		singleton: true
						// 	}
						// },
						{
							loader: 'postcss-loader',
							options: styles.getPostCssConfig( {
								themeImporter: {
									themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
								},
								minify: true
							} )
						}
					]
				} )
			}
		]
	}
};
