# temp-dir

> Get the real path of the system temp directory

[The `os.tmpdir()` built-in doesn't return the real path.](https://github.com/nodejs/node/issues/11422) That can cause problems when the returned path is a symlink, which is the case on macOS. Use this module to get the resolved path.


## Install

```
$ npm install temp-dir
```


## Usage

```js
import temporaryDirectory from 'temp-dir';

console.log(temporaryDirectory);
//=> '/private/var/folders/3x/jf5977fn79jbglr7rk0tq4d00000gn/T'
```

```js
import os from 'node:os';

console.log(os.tmpdir());
//=> '/var/folders/3x/jf5977fn79jbglr7rk0tq4d00000gn/T' // <= Symlink
```


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-temp-dir?utm_source=npm-temp-dir&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
