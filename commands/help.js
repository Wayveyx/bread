const Discord = require('discord.js')

exports.run = (bot, message, args) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Commands')
.setDescription('**b!gluten** - Gluten\n**b!longliveragnor** - Do you see Jamerusalem?'));
if(message.author.id !== "452301414689931275") return;
message.channel.send(new Discord.RichEmbed()
.setTitle('Ragnor Commands')
.setDescription('**b!consume** - Consume Jamrusalem.'));
}
