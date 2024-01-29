var express = require('express');
var router = express.Router();
const Flight = require("../models/flgiht");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//this function render the view flights/index



async function showAll (req, res){
const flights = await Flight.find({});
res.render("flights/index" ,{flights})

}


function addFlightForm (req, res) {
  res.render("flights/new") //this redner the view flights/new

}


async function create (req, res){
  await Flight.create (req.body);

  res.redirect("/flights");

}
//get all flights

router.get("/", showAll);

//get new form

router.get("/new", addFlightForm);

router.post("/", create);


module.exports = router;
