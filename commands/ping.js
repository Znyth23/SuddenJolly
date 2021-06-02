const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = function (msg, args) {
   helloEmbed = new Discord.MessageEmbed()
    .setTitle('Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`')
    .setColor("#E74C3C")
    msg.channel.send({embed: helloEmbed})
  
    }

