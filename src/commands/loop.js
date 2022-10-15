
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("loop")
    .setDescription("🎵 You loop the song!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`There is no song on the list yet.`)
         client.distube.setRepeatMode(interaction, 1);
return interaction.followUp("The song was successfully looped.")

 }
}