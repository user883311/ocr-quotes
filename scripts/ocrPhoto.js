/* This module returns a HOCR XML file for a given image file (local) */

// Tried the following: 
// penteract: does not work properly on macs
// tesseract.js: issues with the local installation WebWorker
// tesseractocr works, source https://github.com/schwarzkopfb/tesseract-ocr/blob/HEAD/docs.md

const tesseract = require('tesseractocr')
const photo = "../assets/images/i04.jpg"; // should be imported from the acquirePhoto module

const recognize = tesseract.withOptions({
    configfile: "hocr"
});

module.exports = recognize(photo);