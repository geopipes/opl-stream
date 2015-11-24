
var unicode = require('./unicode');

function expand( block ){

  var obj = {};
  if( !block ) return obj;

  block.split(',').forEach( function( tag ){

    var firstIndex = tag.indexOf('='),
        tagKey = tag.substr(0, firstIndex),
        tagValue = tag.substr(firstIndex +1);

    if( !tagKey ){
      tagKey = tagValue;
      tagValue = '';
    }

    obj[ tagKey ] = unicode.unescape( tagValue );
  });

  return obj;
}

function collapse( tags ){

  if( !tags ) return '';

  var tagList = [];
  for( var key in tags ){
    var value = tags[key];
    tagList.push( key + '=' + unicode.escape( value || '' ) );
  }

  return tagList.join(',');
}

module.exports.expand = expand;
module.exports.collapse = collapse;
