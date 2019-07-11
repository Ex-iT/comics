#!/usr/bin/env node
const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'https://garfield.com/comic';

const get = https.get(url, response => {
	let data = '';

	response.on('data', chunk => {
		data += chunk;
	});

	response.on('end', () => {
		const dom = new JSDOM(data);
		const src = dom.window.document.querySelector('.comic-display img.img-responsive').src;

		console.log(src);
	})
});

get.on('error', error => console.error(error));
