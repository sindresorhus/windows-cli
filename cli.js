#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {activeWindow} from 'get-windows';

const cli = meow(`
	Usage
	  $ active-window [property]

	  Returns title, id, app, pid, or the specified property

	Examples
	  $ active-window
	  npm install
	  54
	  Terminal
	  368
	  $ active-window app
	  Terminal
`, {
	importMeta: import.meta,
});

const returnValue = await activeWindow();
const validProperties = ['title', 'id', 'app', 'pid'];
const property = cli.input[0];

if (!returnValue) {
	console.log('Could not find an active window.');
	process.exit(1);
}

if (property) {
	if (!validProperties.includes(property)) {
		console.error(`Specify a valid property: ${validProperties.join(', ')}`);
		process.exit(1);
	}

	console.log(returnValue[property]);
	process.exit();
}

console.log(`${returnValue.title}\n${returnValue.id}\n${returnValue.app}\n${returnValue.pid}`);
