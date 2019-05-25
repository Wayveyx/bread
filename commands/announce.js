const Discord = require('discord.js');

exports.run = (bot, message, args) => {
if(!message.content.includes("p-")) return message.channel.send("Please provide a ping type.").then(m => {
                                                                                                m.delete(5000)});
message.delete();
message.channel.send(args.join(" ").slice(args.length-1).replace("p-e", "@everyone").replace("p-h", "@here").replace("p-n", " "));
message.channel.send(new Discord.RichEmbed()
.setTitle("Announcement " + args.length)
.setDescription(args.join(" ").replace("p-e", "").replace("p-h", "").replace("p-n", ""))
.setFooter(`Announced by ${message.author.tag}`));
}
