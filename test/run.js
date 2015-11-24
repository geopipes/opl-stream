
var tape = require('tape');

var common = {};

var tests = [
  require('./interface.js'),
  require('./decodeStream.js'),
  require('./encodeStream.js')
];

tests.map(function(t) {
  t.all(tape, common)
});
