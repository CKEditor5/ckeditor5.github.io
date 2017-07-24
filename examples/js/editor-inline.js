/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import ImageUpload from '@ckeditor/ckeditor5-upload/src/imageupload';
import CKFinderAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import ArticlePreset from '@ckeditor/ckeditor5-presets/src/article';

export class InlineEditor extends InlineEditorBase {}

InlineEditor.build = {
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
