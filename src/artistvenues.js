var express = require('express');
var router = express.Router();
var Seatgeek = require ('../api/SeatGeek')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var seatgeek = new Seatgeek();
  var data = seatgeek.getVenueByArtistName(req.query.artist).then(data =>{
  console.log(data);
  res.send(data);
})
});

module.exports = router;
