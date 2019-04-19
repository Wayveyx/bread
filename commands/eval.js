const Discord = require("discord.js")

exports.run = (bot, message, args) => {
if(message.author.id !== "363474941523263518") return;
const code = args;
				var evaled = eval(code);
				evaled = functions.clean(evaled);
				if (typeof evaled !== 'string')
					evaled = require('util').inspect(evaled);
				message.channel.send(new Discord.RichEmbed()
					.setColor([255, 0, 0])
					.setTitle('Evaled')
					.setDescription(${clean(evaled)}));
			} catch (err) {
				message.channel.send(new Discord.RichEmbed()
					.setTitle('Error')
					.setColor([255, 0, 0])
					.setDescription(`${clean(err)}`));
			}
  function clean(text) {
		if (typeof (text) == 'string')
			return text
				.replace(token, 'Sorry, but token is undefined')
		else
			return text;
	}
}
