const Writable = require("stream").Writable;
const util = require("util");

function Logger() {
    Writable.call(this);
}

util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk) {
    console.log(chunk.toString());
};
// Usage, same as any other Writable stream

const logger = new Logger();

let  readStream = require("fs").createReadStream("message.txt");
readStream.pipe(logger);

