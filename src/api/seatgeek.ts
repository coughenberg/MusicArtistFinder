// DEPENDENCIES //
import querystring from "query-string";
var config = require('../../config/config.json');


module.exports = class SeatGeek{
   async getVenueByArtistName (artistName : String){
    var response = await fetch(config.SeatGeek.baseUrl+ 'events?' + querystring.stringify({client_id:config.SeatGeek.ClientId,"performers.slug":artistName}))
    var data = await response.json();
    return data;
  }

  async getArtistByName (artistName : string){
    var response = await fetch(config.SeatGeek.baseUrl+ 'performers?' + querystring.stringify({client_id:config.SeatGeek.ClientId,"slug":artistName}))
    var data = await response.json();
    return data;
  }

}
