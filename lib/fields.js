
var keymap = require('./keymap');

var expand = function( line ){
  var obj = {};

  line.split(' ').forEach( function( field ){
    var key = field[0];
    key = keymap.expand[key] || key;
    obj[ key ] = field.substr(1);
  });

  return obj;
}

var collapse = function( obj ){

  var lineParts = [];

  for( var attr in obj ){
    var key = attr;
    if( keymap.collapse.hasOwnProperty( attr ) ) key = keymap.collapse[ attr ];
    lineParts.push( key + obj[attr] )
  }

  return lineParts.join(' ');
}

module.exports.expand = expand;
module.exports.collapse = collapse;
