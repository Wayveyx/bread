const Discord = require('discord.js');

exports.run = (bot, message, args) => {
if(!message.content.includes("@")) return message.channel.send("Please provide a ping type.").then(m => {
                                                                                                m.delete(5000)});
message.channel.send(new Discord.RichEmbed()
.setTitle("Announcement")
.setDescription(args.join().replace("@e", "\n@everyone").replace("@h", "\n@here"))
.setFooter(`Announced by ${message.author.tag}`));
}
