const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = function (msg, args) {
  if(!args[0]) return msg.reply("Please ask a full question!")
  let replies = ["Yes.", "No.", "I don't see it happening anytime soon.", "Maybe.", "Maybe....... Not.", "The future looks bright.", "Definitely Yes.", "Please ask again later.", "C'mon man don't put me on the spot like that."];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice().join(" ");

  let Hembed = new Discord.MessageEmbed()
  .setAuthor(`🎱 ${msg.author.username}`)
  .setColor("#E74C3C")
  .addField("Question", question)
  .addField("Answer", replies[result])

  msg.channel.send(Hembed)
  }
