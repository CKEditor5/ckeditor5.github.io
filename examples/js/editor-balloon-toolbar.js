/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import BalloonToolbarEditorBase from '@ckeditor/ckeditor5-editor-balloon-toolbar/src/balloontoolbareditor';
import ImageUpload from '@ckeditor/ckeditor5-upload/src/imageupload';
import CKFinderAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import ArticlePreset from '@ckeditor/ckeditor5-presets/src/article';

export class BalloonToolbarEditor extends BalloonToolbarEditorBase {}

BalloonToolbarEditor.build = {
	plugins: [
		ArticlePreset,
		ImageUpload,
		CKFinderAdapter
	],
	config: {
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
			toolbar: [
				'imageStyleFull',
				'imageStyleSide',
				'|',
				'imageTextAlternative'
			]
		},
		ckfinder: {
			uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
		}
	}
};
