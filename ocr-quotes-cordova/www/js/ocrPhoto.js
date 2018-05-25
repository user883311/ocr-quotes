/* This module returns a HOCR XML file for a given image file (local) */

/* Tried the following: 
penteract: does not work properly on macs
tesseract.js: issues with the local installation WebWorker
tesseractocr: works */

const tesseract = require('tesseractocr')
const photo = require("./acquirePhoto");

const recognize = tesseract.withOptions({
    configfile: "hocr"
})

const result;
recognize(photo, (err, res) => {
    if (err) {
        throw err;
    } else {
        result = res;
        // console.log('Yay! Text recognized!', result);
    }
});

module.exports = result; 