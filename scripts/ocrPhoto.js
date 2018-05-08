/* This module returns a HOCR XML file for a given image file (local) */

// Tried the following: 
// Penteract: does not work properly on macs
// tesseract.js: issues with the local installation WebWorker
// tesseractocr works

const tesseract = require('tesseractocr')
const photo = "../assets/images/i04.jpg"; // should be imported from the acquirePhoto module

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