const replies = ['Im a intellectual robot!🤖', 'Hello!', 'Its a great weather we are having today! ☁️']
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = function (msg, args) {
    helloEmbed = new Discord.MessageEmbed()
    const index = Math.floor(Math.random() * replies.length);
    helloEmbed
    .setTitle(replies[index])
    .setColor("#E74C3C")
    msg.channel.send({embed: helloEmbed})
  }
