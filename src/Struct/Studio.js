const Image = require("./Image.js");

class Studio {
  constructor(Client, raw) {
    this._client = Client;

    this.id = raw.id;
    this.title = raw.title;
    this.owner = raw.owner;
    this.description = raw.description;
    this.image = new Image(raw.image);

    this.createdTimestamp = raw.history.created;
    this.lsatModifiedTimestamp = raw.history.modified;

    this.followerCount = raw.stats.followers;
  }
}

module.exports = Studio;