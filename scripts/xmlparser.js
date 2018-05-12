/* This module parses an input XML file and returns 
a collection of function to navigate that XML. 
---------------------------------------------------*/
const et = require('elementtree');
const xml = require("./ocrPhoto"); // it's a promise

let wordObjectsList;
xml.then(text => {
    const etree = et.parse(text);;
    const wordElements = etree.findall(".//span/[@class='ocrx_word']"); // collection
    wordObjectsList = buildWordObjectsList(wordElements); // ok
    console.log(wordForCoordinates(813, 69)); // 'values'
}, err => {
    console.log(err);
});

function buildWordObjectsList(wordElements) {
    /* Returns collection of objects in the form 
    [{
        xA: 392,
        yA: 229,
        xB: 629,
        yB: 311,
        word_id: 24,
        confidence: 82,
        word: "souls.",
        highlighted: false
    }] */
    let res = [];
    wordElements.map(el => {
        let titleNumbers = el.attrib.title.match(/\d+/g); // get all the numbers in the "title" property
        res.push({
            xA: parseInt(titleNumbers[0]),
            yA: parseInt(titleNumbers[1]),
            xB: parseInt(titleNumbers[2]),
            yB: parseInt(titleNumbers[3]),
            word_id: parseInt(el.attrib.id.match(/\d+$/)[0]),
            confidence: parseInt(titleNumbers[4]),
            word: el.text,
            highlighted: false
        })
    }); // array
    return res;
}
function wordForCoordinates(x, y) {
    /* Input: [x, y] coordinates
    Output: corresponding word element (an object) */
    const wordCount = wordObjectsList.length;
    if (wordCount === 0) {
        return undefined;
    };

    // SIMPLE ENUMERATION METHOD
    let el;
    for (i = 0; i < wordCount; i++) {
        el = wordObjectsList[i];
        let xA = el.xA,
            yA = el.yA,
            xB = el.xB,
            yB = el.yB;

        // if x, y are within the bbox
        if (x >= xA && x <= xB && y >= yA && y <= yB) {
            // console.log("The word corresponding to these coordinates x", x, "and y", y, "is: ", el);
            return el;
        }
    }
    // else if there is no match
    // console.log("There was no word corresponding to coordinates x", x, "and y", y);
    return undefined;

    // BISECTION METHOD (faster)
}
function wordsElementsBetween(startWordId, endWordId) {
    /* this function returns all the words objects for words between
    the startWord and the endWord */
    let res = [];
    wordObjectsList.forEach(wordEl => {
        if (wordEl.word_id >= startWordId && wordEl.word_id <= endWordId) {
            res.push(wordEl);
        }
    });
    return res;
}

module.exports = {
    wordObjectsList,
    wordForCoordinates,
    wordsElementsBetween
};
console.log("xmlparser.js passed. ");