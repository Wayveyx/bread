const Discord = require('discord.js')

exports.run = (bot, message, args) => {
if(message.author.id !== "452301414689931275") return;
if(message.channel.name !== "jamerusalem") return;
message.channel.delete();
}
