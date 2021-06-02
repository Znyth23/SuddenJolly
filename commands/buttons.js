const { MessageButton } = require("discord-buttons");
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = async function (msg, args, client){
        const button1 = new MessageButton()
        .setStyle('url')
        .setLabel('resources')
        .setEmoji(`📚`)
        .setURL('https://sites.google.com/psd202.org/pshsmrb/resources')
        msg.channel.send('Click this button to get resources', button1);
        
    };