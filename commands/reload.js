const Discord = require('discord.js');

exports.run = (bot, message, args) => {
const cmd = args.shift().toLowerCase();
delete require.cache[require.resolve(`./commands/${cmd}.js`)]
message.channel.send(`${cmd} was reloaded.`);
}
