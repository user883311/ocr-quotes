/* This modules acquires an image file, stores it in a folder (assets), 
and returns the image's relative path. */ 

// For now, we'll just take a file from our assets folder. 
const imageSource = "img/i04.jpg"; // this will be called from index.html

// Eventually, we'll want to have a proper image capture process, 
// from the device's camera. 
module.exports = imageSource;