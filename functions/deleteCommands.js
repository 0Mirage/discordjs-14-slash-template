const { REST, Routes } = require("discord.js");

module.exports = async function deleteCommands(client) {
    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(client.user.id), { body: [] });
        } catch (err) {
            return console.error(`${err}`);
        }
    })();
}