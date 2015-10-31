var zlib = require("zlib");
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('../demo_files/zlib_file.js');
var outFile = fs.createWriteStream('../demo_files/zlib_file.gz');
inFile.pipe(gzip).pipe(outFile);
setTimeout(function(){
  var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
  var inFile = fs.createReadStream('../demo_files/zlib_file.gz');
  var outFile = fs.createWriteStream('../demo_files/zlib_file.unzipped');
  inFile.pipe(gunzip).pipe(outFile);
}, 3000);