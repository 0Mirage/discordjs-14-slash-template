const Event = require("../structures/Event");
const { Events } = require("discord.js");

module.exports = new Event(Events.InteractionCreate, false, {
    runEvent: async (client, interaction) => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        try {
            command.runCommand(client, interaction);
        } catch (err) {
            return console.error(`${err}`);
        }
    }
})