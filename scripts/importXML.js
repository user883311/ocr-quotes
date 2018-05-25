
const fs = require("fs");
const xmlFilePath = "../assets/hocr/";
const xmlFileName = "i04.hocr";
// console.log(__dirname + "/../assets/hocr/i04.hocr");
// Import the XML file
// const xmlFile = fs.readFileSync(xmlFilePath + xmlFileName, {
//     encoding: "utf-8"
// });
const xmlFile = fs.readFileSync(__dirname + "/../assets/hocr/i04.hocr", {
    encoding: "utf-8"
});
// console.log(xmlFile);

module.exports.endPoint = xmlFile;