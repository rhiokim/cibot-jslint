var LINT = require('./lintvm');

/**
 * pre process
 */
function preProcess(options) {
   'use strict';

   options = options || {};
   delete options.argv;

   ['node', 'es5'].forEach(function(item) {
      if (!options.hasOwnProperty(item)) {
         options[item] = true;
      }
   });

   if (options.predef && !Array.isArray(options.predef)) {
      options.predef = option.predef.split(',').filter(function (n) { return !!n; });
   }
   
   return options;
}

exports.verify = function(source, options) {
   'use strict';

   var res;

   source = source.replace(/^\#\!.*/, '');
   options = preProcess(options);

   res = LINT(source, options);

   if (!res) {
      res = LINT.data();
      res.ok = res;
   } else {
      res = {
         ok: true,
         errors: []
      }
   }

   res.options = options;

   return res;
};
