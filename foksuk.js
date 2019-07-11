#!/usr/bin/env node
const http = require('http');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'http://www.foksuk.nl/';

const get = http.get(url, response => {
	let data = '';

	response.on('data', chunk => {
		data += chunk;
	});

	response.on('end', () => {
        const dom = new JSDOM(data);
        const img = dom.window.document.querySelector('.cartoon > img');
        const src = img.src;
        const alt = img.alt;
		console.log(src);
		console.log(alt);
	})
});

get.on('error', error => console.error(error));
