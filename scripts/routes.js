/* This modules manages the API routes (GET, POST) for an 
application, based on the Express module. */ 

const express = require("express");
const router = express.Router();

/* What sort of routes do I want? 
POST a new Quote
GET the full list of quotes
GET a specific quote
*/

router.post("/:userid/newquote/:quote", async (req, res) => {
    console.log(`router.get(/newQuote/${req.params['0']} called...`);
    console.log("path:", req.path);
    console.log("req.params:", req.params);
    res.send("This is the response to the POST method"); // an object
});
router.get("/:userid/allquotes", async (req, res) => {
    // const id = req.params.id;
    // if (!getSpecificUrl(id)) {
    //     console.log("!getSpecificUrl");
    //     return res.status(404).send("This micro URL is not in our database.");
    // }
    console.log("req.params:", req.params.userid);
    // Success:
    res.status(200).send("This is the response to the GET method, with id:");
});
router.get("/:userid/:quoteid", async (req, res) => {
    // Success:
    res.status(200).send("This is the response to the GET method.");
});

module.exports = router;