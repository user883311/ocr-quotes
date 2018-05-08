/* This modules applies the Tesseract OCR algorithm to a image file, 
based on this image file address. 
It returns an HOCR file (XML type). */ 
// @ts-check

const Tesseract = require('tesseract.js');
// const photo = require("./acquirePhoto");
const photo = "../assets/images/i04.jpg";


// TEXT DETECTION: Identify text areas / ignore images, 
// using SWT (Stroke Width Transform) 
// https://github.com/liuliu/ccv/blob/stable/doc/swt.md 


// ## Local Installation

// In the browser, `tesseract.js` simply provides the API layer. Internally, it opens a WebWorker to handle requests. That worker itself loads code from the Emscripten-built `tesseract.js-core` which itself is hosted on a CDN. Then it dynamically loads language files hosted on another CDN. 

// Because of this we recommend loading `tesseract.js` from a CDN. But if you really need to have all your files local, you can use the `Tesseract.create` function which allows you to specify custom paths for workers, languages, and core. 

// ```javascript
// window.Tesseract = Tesseract.create({
//     workerPath: '/path/to/worker.js',
//     langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
//     corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
// })
// ```

const tessLocal = Tesseract.create({
    workerPath: '/Users/accountname/Dropbox/projects/others/ocr-quotes/node_modules/tesseract.js/dist/worker.js',
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
    corePath: '/Users/accountname/Dropbox/projects/others/ocr-quotes/node_modules/tesseract.js-core/index.js'
});

// ### corePath
// A string specifying the location of the [tesseract.js-core library]
// (https://github.com/naptha/tesseract.js-core), with default value 
// 'https://cdn.rawgit.com/naptha/tesseract.js-core/master/index.js'. 
// Set this string before calling `Tesseract.recognize` and `Tesseract.detect` 
// if you want Tesseract.js to use a different file.

// ### workerPath
// A string specifying the location of the [tesseract.worker.js](./dist/tesseract.worker.js) 
// file. Set this string before calling `Tesseract.recognize` and `Tesseract.detect` if you want 
// Tesseract.js to use a different file.

// ### langPath
// A string specifying the location of the tesseract language files, with default value 
// 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/'. Language file urls are 
// calculated according to the formula `langPath + langCode + '.traineddata.gz'`. Set this 
// string before calling `Tesseract.recognize` and `Tesseract.detect` if you want Tesseract.js 
// to use different language files.


// ==============================
// OCR: Process OCR on text areas
reco2(photo);

function reco1(image) {
    Tesseract.recognize(image)
        .then(data => {
            console.log('then\n', data.text)
        })
        .catch(err => {
            console.log('catch\n', err);
        })
        .finally(e => {
            console.log('finally\n');
            process.exit();
        });
}

function reco2(image) {
    tessLocal.recognize(image)
        .progress(message => console.log(message))
        .catch(err => console.error(err))
        .then(result => console.log(result))
        .finally(resultOrError => { // fired no matter what
            console.log(resultOrError);
            const result = resultOrError;
        })
}

// module.exports = result;