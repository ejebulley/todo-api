import express from "express";

// create an express app
const app = express();

// define route
app.get("/hello",(req, res, next) => {
    console.log(req.headers);
    res.json("You visited the hello end point!"); 
});

app.get("/goodbye", function(req, res, next){
    console.log(req.query);
    res.json("Same to you");
});


// listen for incoming requests

app.listen(3000, function () {
    console.log("App is listeninng on port 3000");

});


