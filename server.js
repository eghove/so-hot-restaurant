var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  
    var myHTML = "<html>" +
      "<body><h1>Home Page</h1>" +
      "<p>foo</p>" +
      "</body></html>";
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  });


  app.get("/reservations", function(req, res){
    console.log("reservations page")
    res.writeHead(200, { "Content-Type": "text/html" });
})


app.get("/tables", function(req, res){
    console.log("tables page")
    res.writeHead(200, { "Content-Type": "text/html" });
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });