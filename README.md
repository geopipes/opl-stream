## Installation

```bash
$ npm install opl-stream
```

[![NPM](https://nodei.co/npm/opl-stream.png?downloads=true&stars=true)](https://nodei.co/npm/opl-stream)

Note: you will need `node` and `npm` installed first.

The easiest way to install `node.js` is with [nave.sh](https://github.com/isaacs/nave) by executing `[sudo] ./nave.sh usemain stable`

## Usage

You can extract the .opl data from stdin:

```javascript
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
