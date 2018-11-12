var markdownpdf = require("markdown-pdf");
var fs = require("fs");
var path = require("path");

console.log(__dirname);

markdownpdf().from(__dirname+"/book").to( __dirname+"/book" , function () {
    console.log("Done")
})