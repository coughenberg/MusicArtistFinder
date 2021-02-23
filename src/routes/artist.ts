import express, { Request, Response } from "express";
var router = express.Router();
var Seatgeek = require ('../api/SeatGeek')

/* GET users listing. */
router.get("/", async (req : Request, res : Response) => {
  var seatgeek = new Seatgeek();
  var data = await seatgeek.getArtistByName(req.params.artistName);
});

module.exports = router;
