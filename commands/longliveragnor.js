const Discord = require('discord.js');
//i hate this command
exports.run = async (bot, message, args) => {
if(message.channel.id !== "468138282279108638") {
 bot.channels.get("468138282279108638").send(`${message.author.username} has claimed to see Jamerusalem, type \`b!longliveragnor\` to confirm.`); 
 return;
}
let createChan = await message.guild.createChannel('jamerusalem');
message.channel.send("<:check_mark:565315921736892428> Have fun capturing.")
}
