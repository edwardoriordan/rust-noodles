var ffi = require('ffi');

var lib = ffi.Library('embed/target/release/libembed.dylib', {
  'process': [ 'void', []  ]
});

console.log("starting!");

lib.process();

console.log("done!");