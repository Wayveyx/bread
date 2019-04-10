const Discord = require('discord.js');
const fsn = require('fs-nextra');

exports.run = (bot, message, args) => {
fsn.readJSON('./jsons/react.json')
    .then((reacttf) => {
    let answer = "";
    if(!args.join()) return;
    if(args.join() === "1" || "t") {
    answer = "true";
    }
    if(args.join() === "2" || "f") {
    answer = "false";
    }
      if(!reacttf[message.author.id]) reacttf[message.author.id] = {
      'userID': message.author.id
      'qreact': answer
      }
       fsn.writeJSON('./jsons/react.json', reacttf, {
            replacer: null,
            spaces: 2
          })
    })
}
