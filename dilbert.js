#!/usr/bin/env node
const https = require('https');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const date = new Date();
const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const url = `https://dilbert.com/strip/${date.getFullYear()}-${month}-${date.getDate()}`;

const get = https.get(url, response => {
	let data = '';

	response.on('data', chunk => {
		data += chunk;
	});

	response.on('end', () => {
		const dom = new JSDOM(data);
		const img = dom.window.document.querySelector('.img-comic-container .img-comic');
		const src = `https:${img.src}`;
		const alt = img.alt;

		console.log(src);
		console.log(alt);
	})
});

get.on('error', error => console.error(error));
