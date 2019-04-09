const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
let createChan = await message.guild.createChannel('jamerusalem');
message.channel.send(":check_mark: Have fun capturing.")
}
