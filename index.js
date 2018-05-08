// @ts-check

const express = require("express"); 
const app = express();

app.use(express.static("public"));
// require("./startup/prod")(app);

// The list of routes is stored under : 
const routesModule = require("./scripts/routes.js");
app.use("/", routesModule);
// app.use(error);

// ADDRESSES
//----------
const hostname = "localhost";
const port = process.env.PORT || 3000;

// PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}... `)
});