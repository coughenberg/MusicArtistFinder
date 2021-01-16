var express = require('express');
var router = express.Router();
var Seatgeek = require ('../api/SeatGeek')

router.get('/', function(req, res, next) {
  var seatgeek = new Seatgeek();
  seatgeek.getVenueByArtistName(req.query.artist).then(data=>
    console.log(data)
    )
});

module.exports = router;
