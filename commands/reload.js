const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if(message.author.id !== "363474941523263518") return;
const cmd = args.shift().toLowerCase();
delete require.cache[require.resolve(`./${cmd}.js`)]
message.channel.send(`${cmd} was reloaded.`);
}
