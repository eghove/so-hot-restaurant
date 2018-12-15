var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

var reservation = ["foo", "foo2"];
var waitlist = ["foo3", "foo4"]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  console.log("home page")
  res.sendFile(path.join(__dirname, "/html/home.html"));
})


  app.get("/reservations", function(req, res){
    console.log("reservations page")
    res.sendFile(path.join(__dirname, "/html/reservation.h tml"));
})


app.get("/tables", function(req, res){
    console.log("tables page")
    res.sendFile(path.join(__dirname, "/html/tables.html"));
})

app.get("/api/tables", function(req, res) {
  return res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.post("/reservations", function(req, res){
  var newReservation = req.body;
  
  if (reservation.length < 5) {
    reservation.push(newReservation)
    console.log("added to the table!")
    return res.json(reservation)
  } else {
    waitlist.push(newReservation)
    console.log("added to waitlist!")
    return res.json(waitlist)
  }
})