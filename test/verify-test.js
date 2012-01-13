var linter = require('../lib/cibot-lint');

var res = linter.verify('var foo = 1');
console.log(res);
