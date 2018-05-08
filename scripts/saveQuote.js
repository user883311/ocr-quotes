/* This module establishes a data Schema for future saves. It 
returns : the Schema. The save can be either local or on the server (cloud) 
-- this is handled by other modules. */


// DATABASE MODEL
//---------------

// Create a schema
// xx
// xx
// xx


// SAVE
// ----
let saveMode = "local";
if (saveMode = "local") {
    const saveQuotesLocal =
        import ("./saveQuotesLocal");
} else if (saveMode = "cloud") {
    const saveQuotesLocal =
        import ("./saveQuotesCloud");
}