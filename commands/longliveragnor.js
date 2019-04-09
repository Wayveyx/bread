const Discord = require('discord.js');
//i hate this command
exports.run = async (bot, message, args) => {
let createChan = await message.guild.createChannel('jamerusalem');
message.channel.send("<:check_mark:565315921736892428> Have fun capturing.")
}
