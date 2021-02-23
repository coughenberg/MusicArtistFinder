import express, { Request, Response } from "express";
var router = express.Router();
var Seatgeek = require ('../api/SeatGeek')

/* GET users listing. */
router.get('/', function(req : Request, res : Response) {
  var seatgeek = new Seatgeek();
  var data = seatgeek.getVenueByArtistName(req.params.venue);
});

module.exports = router;
