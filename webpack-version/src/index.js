import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());




/* This modules renders the HOCR file in a canvas in the browser, 
and manages the interactions with the user. 
It does not return anything. */ 

const xmlParser = require("./xmlparser");
const canvas = document.getElementById("canvas");
// const imageSource = "./assets/images/i04.jpg";
const photoPath = require("./acquirePhoto");

let w, h; // resized canvas image adjustment ratios
let highlightColor = "red";
let nonHighlightColor = "blue";
var highlightedWordElements = []; // collection of objects

window.onload = renderAll;
window.onresize = renderAll;

function renderAll() {
    resizeCanvas();
    draw();
}

function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function draw() {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        const imgRatio = img.width / img.height;
        const cvsRatio = canvas.width / canvas.height;
        if (imgRatio > cvsRatio) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.width / imgRatio)
            w = canvas.width / img.width;
            h = canvas.width / imgRatio / img.height;
        } else {
            ctx.drawImage(img, 0, 0, canvas.height * imgRatio, canvas.height);
            w = canvas.height * imgRatio / img.width;
            h = canvas.height / img.height;
        }
        // console.log("draw() image rendered..");
        drawAllWordBoxes(xmlParser.wordObjectsList, w, h);
        renderClickable();
    };
    img.src = photoPath;
}

function renderClickable() {
    canvas.onclick = clickWords;
}

function clickWords(event) {
    const x = getCursorPosition(canvas, event).x / w; // w to adjust for canvas resizing
    const y = getCursorPosition(canvas, event).y / h; // h to adjust for canvas resizing
    const word = xmlParser.wordForCoordinates(x, y);
    console.log("highlightedWordElements", highlightedWordElements);
    if (word === undefined) {
        console.log("No word in click coordinates..");
        return undefined;
    };

    if (highlightedWordElements.length === 0 && word.highlighted === false) {
        highlightWord(word.word_id, w, h, highlightColor);
        word.highlighted = true;
        highlightedWordElements.push(word);
    } else if (highlightedWordElements.length === 1 && word.highlighted === false) {
        console.log("a 2nd word has been selected here... ");
        highlightWord(word.word_id, w, h, highlightColor);
        word.highlighted = true;
        xmlParser.wordsElementsBetween(highlightedWordElements[0].word_id + 1, word.word_id).forEach(element => {
            highlightedWordElements.push(element);
            highlightWord(element.word_id, w, h, highlightColor);
        });
        console.log("list is", highlightedWordElements);
    } else if (highlightedWordElements.length > 1 || word.highlighted === true) {
        console.log("this is a new selection starting here... ");
        word.highlighted = false;
        highlightWord(word.word_id, w, h, nonHighlightColor);
        // take the highlight off all words
        xmlParser.wordsElementsBetween(highlightedWordElements[0].word_id, word.word_id).forEach(element => {
            highlightWord(element.word_id, w, h, nonHighlightColor);
        });
        highlightedWordElements = []; // reset
        console.log("list is", highlightedWordElements);
    }
}

function drawAllWordBoxes(wList, W_adjustment, H_adjustment, color) {
    /* This function highlights all the word boxes on the canvas. */
    const w = W_adjustment;
    const h = H_adjustment;
    const ctx = canvas.getContext('2d');
    wList.forEach(word => {
        highlightWord(word.word_id, w, h, "blue");
    });
}

function highlightWord(word_id, W_adjustment, H_adjustment, color) {
    /* This function highlights a specific word's box on the canvas, 
    based on this word's id. */
    // const w = W_adjustment;
    // const h = H_adjustment;
    const ctx = canvas.getContext('2d');
    let el;
    for (i = 0; i < xmlParser.wordObjectsList.length; i++) {
        // console.log("Looking at word", xmlParser.wordObjectsList[i].word_id);
        if (xmlParser.wordObjectsList[i].word_id === word_id) {
            // console.log("found the word....");
            ctx.strokeStyle = color || "black";
            el = xmlParser.wordObjectsList[i];
            ctx.strokeRect(el.xA * w, el.yA * h, (el.xB - el.xA) * w, (el.yB - el.yA) * h);
            break;
        }
    }
}

function getCursorPosition(canvas, event) {
    // Source: patrique @ https://stackoverflow.com/a/18053642/2168164 
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    return {
        x: x,
        y: y
    };
}