/* This module returns a HOCR XML file for a given image file (local) */

/* Tried the following: 
penteract: does not work properly on macs
tesseract.js: issues with the local installation WebWorker
tesseractocr: it works */
const tesseract = require('tesseractocr');
const photo = require("./acquirePhoto"); // should be imported from the acquirePhoto module

const recognize = tesseract.withOptions({
    configfile: "hocr"
});

module.exports = recognize(photo); // a promise
console.log("ocrPhoto.js passed. ");