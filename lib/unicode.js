
// the .opl format encodes unicode and reserved characters in a format such as
// %aa% (leading and trailing %).

// @see 3.4 Text in user names, tags, and roles
// @ref: http://docs.osmcode.org/opl-file-format-manual/

function unescape( text ){
  return text.replace( /%([a-f0-9]{2,6})%/g, function( _, code ){
    return String.fromCharCode( parseInt( code, 16 ) );
  });
}

// eg. "@".charCodeAt(0)
// space: 32
// newline: 10
// comma: 44
// equals: 61
// at:  64
// percent: 37
// backspace: 127
// nbs: 160

function escape( text ){

  for( var i=0, code=text.charCodeAt(0); i<text.length; code=text.charCodeAt(++i) ){
    if( code === 32 || code === 10 || code === 44 || code === 61 || code === 64 ||
        code === 37 || code === 127 || code === 160 || code > 1535 ){
      var escaped = codeToHexString( code );
      text = text.substr( 0, i ) + escaped + text.substr( i+1 );
      i += ( escaped.length -1 );
    }
  }

  return text;
}

// convert js character codes in to .opl formatted unicode values
var CACHE = {}; // perf optimisation
function codeToHexString( code ){
  var esc = CACHE[ code ];
  if( !esc ){
    var str = code.toString(16);
    esc = '%' + ( str.length % 2 ? '0': '' ) + str + '%';
    CACHE[ code ] = esc;
  }
  return esc;
}

module.exports.unescape = unescape;
module.exports.escape = escape;
module.exports.codeToHexString = codeToHexString;
