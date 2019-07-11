#!/usr/bin/env node
const https = require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = 'https://www.volkskrant.nl/columns-opinie/gummbah~bb64201f/';

const get = https.get(url, response => {
	let data = '';

	response.on('data', chunk => {
		data += chunk;
	});

	response.on('end', () => {
		const dom = new JSDOM(data);
		const src = dom.window.document.querySelector('figure.artstyle__figure > img.artstyle__image').src;
		console.log(src);
	})
});

get.on('error', error => console.error(error));
