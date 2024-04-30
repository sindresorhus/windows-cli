import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const {stdout} = await execa('./cli.js');
	t.is(stdout.split('\n').length, 4);
});

test('property', async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const {stdout} = await execa('./cli.js', ['app']);
	t.true(stdout.length > 0);
});
