
var opl = require('../');

module.exports.interface = {};

module.exports.interface.decodeStream = function(test, common) {
  test('decodeStream()', function(t) {
    t.equal(typeof opl.decodeStream, 'function', 'stream factory');
    t.end();
  });
}

module.exports.interface.encodeStream = function(test, common) {
  test('encodeStream()', function(t) {
    t.equal(typeof opl.encodeStream, 'function', 'stream factory');
    t.end();
  });
}

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('external interface: ' + name, testFunction)
  }

  for( var testCase in module.exports.interface ){
    module.exports.interface[testCase](test, common);
  }
}
