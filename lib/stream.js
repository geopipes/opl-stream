
// http://docs.osmcode.org/opl-file-format-manual/

var through = require('through2'),
    tags = require('./tags'),
    noderefs = require('./noderefs'),
    unicode = require('./unicode'),
    fields = require('./fields');

var decodeStream = function( opts ){
  return through.obj( function( buf, _, next ){

    var line = buf.toString('utf8');
    if( !line.length ) return next();

    // expand fields
    var obj = fields.expand( line );

    // expand tags
    if( obj.hasOwnProperty('tags') ) obj.tags = tags.expand( obj.tags );

    // expand node refs (ways only)
    if( obj.hasOwnProperty('nodes') ) obj.nodes = noderefs.expand( obj.nodes );

    // unescape strings
    if( obj.hasOwnProperty('username') ) obj.username = unicode.unescape( obj.username );

    // extra info for debugging
    if( opts && opts.debug ){ obj.raw = line; }

    next( null, obj );
  });
}

var encodeStream = function(){
  return through.obj( function( obj, _, next ){

    // collapse tags
    if( obj.hasOwnProperty('tags') ) obj.tags = tags.collapse( obj.tags );

    // collapse node refs (ways only)
    if( obj.hasOwnProperty('nodes') ) obj.nodes = noderefs.collapse( obj.nodes );

    // escape strings
    if( obj.hasOwnProperty('username') ) obj.username = unicode.escape( obj.username );

    // remove any debugging info
    if( obj.raw ){ delete obj.raw; }

    // collapse fields
    var line = fields.collapse( obj ) + "\n";

    next( null, line );
  });
}


module.exports.decodeStream = decodeStream;
module.exports.encodeStream = encodeStream;
