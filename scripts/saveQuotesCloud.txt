/* This module connect to a MongoDB database, establishes a data Schema. 
It returns : the Schema, several functions to count, create and get records. */ 

const Joi = require('joi'); // Object schema validation
const config = require("config"); // configuration JSON management
const dbDebugger = require("debug")("app:db"); // debugger message management

const herokuURI = "https://url-shortener-883311.herokuapp.com";
const hostname = config.get("hostname") || herokuURI;
const port = process.env.PORT || config.get("default_port");

const mongoose = require('mongoose');
MONGOLAB_URI = "mongodb://username:0000@ds113799.mlab.com:13799/playground";
const db_url = MONGOLAB_URI || "mongodb://localhost/playground";
console.log(`db_url = ${db_url}`);

mongoose.connect(db_url, function () {})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => console.error("Could not connect to MongoDB.", err));

// DATABASE MODEL
//---------------
const urlSchema = new mongoose.Schema({
    id: Number,
    url: String
});
const Url = mongoose.model("url", urlSchema); // class


// SUPPORTING FUNCTIONS
//---------------------
async function countUrls() {
    try {
        const l = await Url.count();
        console.log(l);
        return l
    } catch (err) {
        console.log("countUrls() error:", err);
    }
};

async function getEntireUrlList() {
    try {
        const r = await Url.find();
        return r;
    } catch (err) {
        console.log("getEntireUrlList() error:", err);
    }
};

async function createUrl(index, longUrl) {
    try {
        const url = new Url({
            id: index,
            url: longUrl
        });
        const r = await url.save(); // asynchronous
    } catch (err) {
        console.log("createUrl() error:", err);
    }
};

async function getSpecificUrl(i) {
    try {
        i = i.toString();
        const filter = new Object({
            "id": i
        })
        const r = await Url.find(filter);
        return r;
    } catch (err) {
        console.log("getSpecificUrl() error:", err);
        return 1;
    }
};

// module.exports = {};