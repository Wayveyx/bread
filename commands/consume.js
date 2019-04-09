const Discord = require('discord.js')

exports.run = (bot, message, args) => {
if(message.channel.name !== "jamerusalem") return;
message.channel.delete();
}
