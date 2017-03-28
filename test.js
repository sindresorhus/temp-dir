import path from 'path';
import fs from 'fs';
import test from 'ava';
import proxyquire from 'proxyquire';

test.serial('ensure the returned filepath is not a symlink', t => {
	const m = proxyquire('.', {
		os: {
			tmpdir: () => path.resolve('fixture-symlink')
		}
	});

	const fp = path.join(m, 'unicorn');
	fs.writeFileSync(fp, '🦄');

	t.is(fp, fs.realpathSync(fp));
	t.is(fs.readFileSync(fp, 'utf8'), '🦄');

	fs.unlinkSync(fp);
});

test.serial('main', t => {
	const m = require('.');
	t.true(path.isAbsolute(m));
});
