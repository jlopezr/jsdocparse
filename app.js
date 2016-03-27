var parse = require("jsdoc-parse");

/**
 * Esta funcion no esta canela
 * @meInventoEsto pork yo lo valgo
 */
function x() {
}

/**
 * Gerard como mola
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
*/
function gerard_como_mola() {
	console.log("Gerard como molo");
}

/**
 * Lo vamos a petar
 * @param String pet
 * @param int ar
 */
function lo_vamos_a_petar(pet,ar) {
	console.log("Gerard como molo");
}


var Writable = require('stream').Writable,
    util = require('util');
/*
var WriteStream = function() {
  Writable.call(this, {objectMode: true});
};

util.inherits(WriteStream, Writable);

WriteStream.prototype._write = function(chunk, encoding, callback) {
  console.log('write            : ' + JSON.stringify(chunk));
  callback();
};
*/
var ParseStream = function() {
  Writable.call(this, {objectMode: true});
};

util.inherits(ParseStream, Writable);

ParseStream.prototype._write = function(chunk, encoding, callback) {
  var result = JSON.parse(chunk);
  //console.dir(result);
  func(result);
  callback();
};

console.log("My documentation:");
console.log(__filename);
var p = new ParseStream();
parse({ src: __filename}).pipe(p);

function func(result) {
    result.forEach(function(item) {
        console.dir(item);
        console.log("--------------------");
    });    
}
