var linter = require('../lib/cibot-lint');

var res = linter.verify('var a = 1');
console.log(res);
