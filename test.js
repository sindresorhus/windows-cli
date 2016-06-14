import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.is(stdout.split('\n').length, 4);
});

test('prop', async t => {
	const {stdout} = await execa('./cli.js', ['app']);
	t.true(stdout.length > 0);
});
