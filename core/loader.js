//https://www.npmjs.com/package/dotenv-json
require("dotenv-json")();

const Discord = require('discord.js');
const client = new Discord.Client();

let events = {};

module.exports = {
    client: client,
    events: events
}