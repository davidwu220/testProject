'use strict';

function greeter() {
   var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'this works';

   return msg;
}

// Export greeter
module.exports = greeter;