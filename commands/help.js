const Discord = require('discord.js')

exports.run = (bot, message, args) => {
let test = new Discord.RichEmbed();
if(message.author.id === "452301414689931275") {
test.setDescription('**b!gluten** - Gluten\n**b!longliveragnor** - Do you see Jamerusalem?\n**b!consume** - Consume Jamrusalem.');
test.setTimestamp();
} else {
test.setDescription('**b!gluten** - Gluten\n**b!longliveragnor** - Do you see Jamerusalem?');
test.setTimestamp();
}
}
