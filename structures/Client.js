const loadCommands = require("../handlers/loadCommands");
const loadEvents = require("../handlers/loadEvents");
const Discord = require("discord.js");

module.exports = class Client extends Discord.Client {
    constructor(options) {
        super(options);
        this.commands = new Discord.Collection();
    }

    async start() {
        try {
            this.login(process.env.TOKEN);
            await loadEvents(this);
            await loadCommands(this);
        } catch (err) {
            return console.error(`${err}`);
        }
    }
}