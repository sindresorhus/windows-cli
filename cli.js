#!/usr/bin/env node
'use strict';
const meow = require('meow');
const activeWin = require('active-win');

const cli = meow(`
	Usage
	  $ active-win [property]

	  Returns title, id, app, pid, or the specified property

	Examples
	  $ active-win
	  npm install
	  54
	  Terminal
	  368
	  $ active-win app
	  Terminal
`);

const ret = activeWin.sync();
const validProps = ['title', 'id', 'app', 'pid'];
const prop = cli.input[0];

if (prop) {
	if (validProps.indexOf(prop) === -1) {
		console.error(`Specify a valid property: ${validProps.join(', ')}`);
		process.exit(1);
	}

	console.log(ret[prop]);
	process.exit();
}

console.log(`${ret.title}\n${ret.id}\n${ret.app}\n${ret.pid}`);
