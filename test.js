import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const ret = await execa('./cli.js', {cwd: __dirname});
	t.is(ret.stdout.split('\n').length, 4);
});

test('prop', async t => {
	const ret = await execa('./cli.js', ['app'], {cwd: __dirname});
	t.true(ret.stdout.length > 0);
});
