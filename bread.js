const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const pfix = 'b!';

bot.on("ready", () => {
bot.channels.get('564951236487675914').send('Bready.');
bot.user.setActivity("Bread <3", {type: "LISTENING"});
});

bot.on("message", async message => {
let msg = message.content.toLowerCase();
let args = message.content.slice(pfix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
try { 
 let commandFile = require(`./commands/${cmd}.js`)
 commandFile.run(bot, message, args);
} catch(err) {
 bot.channels.get('565011678203215892').send(new Discord.RichEmbed()
.setTitle("Error")
.setAuthor(message.author.tag)
.setColor([255, 0, 0])
.setDescription(err.message)
.setTimestamp());
}
});

bot.login(process.env.TOKEN)
