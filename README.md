## Installation

```bash
$ npm install opl-stream
```

[![NPM](https://nodei.co/npm/opl-stream.png?downloads=true&stars=true)](https://nodei.co/npm/opl-stream)

Note: you will need `node` and `npm` installed first.

The easiest way to install `node.js` is with [nave.sh](https://github.com/isaacs/nave) by executing `[sudo] ./nave.sh usemain stable`

## Usage

You can extract the .opl data from any stream, including stdin:

```javascript
// example.js

var opl = require('opl-stream'),
    through = require('through2'),
    split = require('split');

process.stdin
  .pipe( split() )
  .pipe( opl.decodeStream() )
  .pipe( through.obj( function( obj, _, next ){
    console.error( JSON.stringify( obj ) );
    next( null, obj );
  }))
  .pipe( opl.encodeStream() )
  .pipe( process.stdout );
```

```bash
$> cat in.opl | node example.js 2> parsed.json 1> out.opl
```

## Example

```bash
$ echo -e "n204648 v37 dV c32514672 t2015-07-09T09:46:58Z i3043782 uDK_VJCS Tname=Wellington,is_in=North%20%Island%2c%%20%New%20%Zealand x174.7772239 y-41.2887639\n" | node example.js 1>/dev/null
{
  "node_id": "204648",
  "version": "37",
  "deleted": "V",
  "changeset": "32514672",
  "timestamp": "2015-07-09T09:46:58Z",
  "user_id": "3043782",
  "username": "DK_VJCS",
  "tags": {
    "name": "Wellington",
    "is_in": "North Island, New Zealand"
  },
  "longitude": "174.7772239",
  "latitude": "-41.2887639"
}
```

## NPM Module

The `opl-stream` npm module can be found here:

[https://npmjs.org/package/opl-stream](https://npmjs.org/package/opl-stream)

## Contributing

Please fork and pull request against upstream master on a feature branch.

Pretty please; provide unit tests and script fixtures in the `test` directory.

### Running Unit Tests

```bash
$ npm test
```

### Continuous Integration

Travis tests every release against node version `0.10`

[![Build Status](https://travis-ci.org/geopipes/opl-stream.png?branch=master)](https://travis-ci.org/geopipes/opl-stream)
