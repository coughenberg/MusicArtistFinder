// DEPENDENCIES //
var fetch = require('node-fetch');
var querystring = require('query-string');
var config = require('../config');


module.exports = class SeatGeek{
   getVenueByArtistName = async function (artistName){
    console.log(querystring.stringify({client_id:config.SeatGeek.ClientId,"performers.slug":artistName}))
    var response = await fetch(config.SeatGeek.baseUrl+ 'events?' + querystring.stringify({client_id:config.SeatGeek.ClientId,"performers.slug":artistName}))
    var data = await response.json();
    return data;
  }
}
