#intro
cibot-jslint 는 node.js 기반으로 동작하는 [jslint][1]로 cibot 프로젝트의 일부 모듈로 사용되기 위에 작성되었습니다.

#module
https://github.com/douglascrockford/JSLint

#install

```
--$ npm install cibot-jslint--

or

$ git clone git@github.com:rhiokim/cibot-jslint.git
$ git submodule update --init
```

#usage

*app.js*

```js
var linter = require('cibot-jslint');

var res = linter.verify('var foo = 1');
console.log(res);


/* result
{ functions: [],
  errors: 
   [ { id: '(error)',
       raw: 'Expected \'{a}\' and instead saw \'{b}\'.',
       evidence: 'var foo = 1',
       line: 1,
       character: 12,
       a: ';',
       b: '(end)',
       c: undefined,
       d: undefined,
       reason: 'Expected \';\' and instead saw \'(end)\'.' } ],
  globals: [ 'foo' ],
  ok: [Circular],
  options: { node: true, es5: true } }
*/
```

[1]:http://www.jslint.com/
