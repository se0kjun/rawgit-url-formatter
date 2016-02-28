#rawgit-url-formatter

This repository is modified from [this code](https://github.com/rgrove/rawgit/blob/master/public/js/url-formatter.js) to use on npm.

##Install

	npm install rawgit-url-formatter --save

##Usage

	var rawgitUrl = require('rawgit-url-formatter');

	var result = rawgitUrl('https://github.com/se0kjun/rawgit-url-formatter/blob/master/index.js');
	console.log(result);

	> { dev: 'https://rawgit.com/se0kjun/rawgit-url-formatter/master/index.js',
  	cdn: 'https://cdn.rawgit.com/se0kjun/rawgit-url-formatter/master/index.js' }

##LICENSE

MIT © [Seokjun Hong](https://github.com/se0kjun)