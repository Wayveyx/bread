const Discord = require('discord.js');

exports.run = (bot, message, args, cmd) => {
delete require.cache[require.resolve(`./commands/${cmd}.js`)]
}
