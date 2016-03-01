/*
* This package edit the url-formatter of rawgit.
* The original source code is https://github.com/rgrove/rawgit/blob/master/public/js/url-formatter.js
*/
"use strict";

var REGEX_GIST_URL = /^(https?):\/\/gist\.github(?:usercontent)?\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i;
var REGEX_RAW_URL  = /^(https?):\/\/raw\.github(?:usercontent)?\.com\/([^\/]+\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+\..+)/i;
var REGEX_REPO_URL = /^(https?):\/\/github\.com\/(.+?)\/(.+?)\/(?:(?:blob|raw)\/)?(.+?\/.+)/i;

var cdnDomain = 'cdn.rawgit.com';
var devDomain = 'rawgit.com';

module.exports = function(url) {
	var result = {};

	if (REGEX_RAW_URL.test(url)) {
		result.dev = url.replace(REGEX_RAW_URL, '$1://' + devDomain + '/$2/$3');
		result.cdn = url.replace(REGEX_RAW_URL, '$1://' + cdnDomain + '/$2/$3');
	} else if (REGEX_REPO_URL.test(url)) {
		result.dev = url.replace(REGEX_REPO_URL, '$1://' + devDomain + '/$2/$3/$4');
		result.cdn = url.replace(REGEX_REPO_URL, '$1://' + cdnDomain + '/$2/$3/$4');
	} else if (REGEX_GIST_URL.test(url)) {
		result.dev = url.replace(REGEX_GIST_URL, '$1://' + devDomain + '/$2');
		result.cdn = url.replace(REGEX_GIST_URL, '$1://' + cdnDomain + '/$2');
	} else {
		result.dev = url;
		result.cdn = url;
	}

	return result;
};
