import path from 'node:path';
import {promises as fs} from 'node:fs';
import test from 'ava';
import quibble from 'quibble';

test.serial('ensure the returned filepath is not a symlink', async t => {
	await quibble.esm('os', {}, {
		tmpdir: () => path.resolve('fixture-symlink'),
	});

	const {default: temporaryDirectory} = await import('./index.js');

	const filePath = path.join(temporaryDirectory, 'unicorn');
	await fs.writeFile(filePath, '🦄');

	t.is(filePath, await fs.realpath(filePath));
	t.is(await fs.readFile(filePath, {encoding: 'utf8'}), '🦄');

	await fs.unlink(filePath);

	await quibble.reset();
});

test.serial('main', async t => {
	const {default: temporaryDirectory} = await import('./index.js');

	t.true(path.isAbsolute(temporaryDirectory));
});
