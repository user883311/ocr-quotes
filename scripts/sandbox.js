// Penteract: does not work properly on macs
// tesseract.js: issues with the local installation WebWorker
// Try tesseractocr

const tesseract = require('tesseractocr')
const photo = "../assets/images/i04.jpg";

const recognize = tesseract.withOptions({
    configfile: "hocr"
})

recognize(photo, (err, text) => {
    if (err)
        throw err
    else
        console.log('Yay! Text recognized!', text)
});