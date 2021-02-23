// DEPENDENCIES //
import querystring from "query-string";
var config = require('../../config/config.json');


module.exports = class SetList {
  async getVenueByArtistName(artistName: string) {
    var response = await fetch(config.SeatGeek.baseUrl + 'events?' + querystring.stringify({ client_id: config.SeatGeek.ClientId, "performers.slug": artistName }), this.buildHeadersRequestObject());
    var data = await response;
    return data.json();
  }

  async getArtistMusicBrainzIdByName(artistName: string) {
    var response = fetch(config.SetList.baseUrl + 'search/artists' + querystring.stringify({ artistName: artistName, sort: "relevance" }), this.buildHeadersRequestObject());
    var data = await response;
    return data.json;
  }

  buildHeadersRequestObject(): RequestInit {
    const headers = new Headers();
    headers.append('Content-Type', `application/json`);
    headers.append('x-api-key', config.SetList.ClientId);
    return {
      method: 'GET',
      headers: headers
    }
  }


}
