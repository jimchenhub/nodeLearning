var stream = require('stream');
var util = require('util');

util.inherits(Answer, stream.Readable);

function Answer(opt){
    stream.Readable.call(this, opt);
    this.quotes=["yes", "no", "maybe"];
    this.index = 0;
}

Answer.prototype._read = function(){
    if (this.index > this.quotes.length){
        this.push(null);
    } else {
        this.push(this.quotes[this.index]);
        this.index++;
    }
}

var anw = new Answer();
console.log(anw.read().toString());
anw.on('data', function(data){
    console.log("receive data: "+ data);
}).on('end', function(data){
    console.log("no more answers");
})