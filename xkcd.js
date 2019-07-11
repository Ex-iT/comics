#!/usr/bin/env node
const https = require('https');

const url = 'https://xkcd.com/info.0.json';

const get = https.get(url, response => {
	let data = '';

	response.on('data', chunk => {
		data += chunk;
	});

	response.on('end', () => {
		const json = JSON.parse(data);

		console.log(json.img);
		console.log(json.alt);
	})
});

get.on('error', error => console.error(error));
