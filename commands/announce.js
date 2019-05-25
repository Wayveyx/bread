const Discord = require('discord.js');

exports.run = (bot, message, args) => {
if(!message.content.includes("t ")) return message.channel.send("Please provide a title.").then(m => {
                                                                                                m.delete(5000)});
if(!message.content.includes("b ")) return message.channel.send("Please provide a body.").then(m => {
                                                                                                m.delete(5000)});
if(!message.content.includes("@")) return message.channel.send("Please provide a ping type.").then(m => {
                                                                                                m.delete(5000)});
message.channel.send(new Discord.RichEmbed()
.setTitle(args.slice(10, "b").replace("b", ""))
.setDescription(args.slice("b").replace("b", "").replace("@e", "\n@everyone").replace("@h", "\n@here"))
.setFooter(`Announced by ${message.author.tag}`));
}
