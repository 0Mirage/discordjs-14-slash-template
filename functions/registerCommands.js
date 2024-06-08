const { REST, Routes } = require("discord.js");
const { readdir } = require("fs/promises");

module.exports = async function registerCommands(client) {
    const commands = [];

    const commandFolder = await readdir(`${process.cwd()}/commands`);
    for (const file of commandFolder) {
        const newCommand = require(`../commands/${file}`);
        const command = newCommand;
        commands.push(command.builder.toJSON());
    }

    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
        } catch (err) {
            return console.error(`${err}`);
        }
    })();
}