/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

const csConfig = require( '../scripts/presets/production.json' );
const { execSync } = require( 'child_process' );
const path = require( 'path' );
const CKEDITOR5_ROOT_DIRECTORY = path.join( __dirname, '..', '..', '..' );

module.exports = {
	LICENSE_KEY: generateInternalLicenseKey(),
	CS_CONFIG: {
		tokenUrl: csConfig.CLOUD_SERVICE_TOKEN_URL,
		uploadUrl: csConfig.CLOUD_SERVICE_UPLOAD_URL,
		webSocketUrl: csConfig.CLOUD_SERVICE_WEBSOCKET_URL
	}
};

/**
 * Returns the license key (a string) which can be used to authenticate
 * commercial features used in the docs snippets.
 *
 * @returns {String}
 */
function generateInternalLicenseKey() {
	return execSync(
		'yarn --silent ckeditor5-dev-private-generate-license-key ' +
		'--name "Collaboration documentation" ' +
		'--no-trial ' +
		'--internal',
		{
			cwd: CKEDITOR5_ROOT_DIRECTORY,
			encoding: 'utf8'
		}
	).toString().trim();
}
