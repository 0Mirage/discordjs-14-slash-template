const registerCommands = require("../functions/registerCommands");
const deleteCommands = require("../functions/deleteCommands");
const Event = require("../structures/Event");
const { Events } = require("discord.js");

module.exports = new Event(Events.ClientReady, true, {
    runEvent: async (client) => {
        console.log(`${client.user.username} : connecté`);

        // Register global slash commandes
        await registerCommands(client);

        // Delete global slash commandes
        // await deleteCommands(client);
    }
})