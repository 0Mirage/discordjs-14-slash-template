const Command = require("../structures/Command");
const { SlashCommandBuilder } = require("discord.js");

module.exports = new Command(
    new SlashCommandBuilder()
        .setName("exemple")
        .setDescription("Commande qui sert d'exemple sur comment créer des slash commandes avec cette template"), {

        runCommand: async (client, interaction) => {
            await interaction.reply("Commande d'exemple");
        }
    }
)