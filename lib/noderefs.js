
// expand / collapse noderefs. (ways only)

var expand = function( nodes ){
  if( !nodes.length ) return [];
  return nodes.split(',').map( function( node ){
    return node.substr(1);
  });
}

var collapse = function( arr ){
  if( !arr.length ) return '';
  return arr.map( function( node ){
    return 'n' + node;
  }).join(',');
}

module.exports.expand = expand;
module.exports.collapse = collapse;
