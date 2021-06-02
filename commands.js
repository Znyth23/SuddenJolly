

const gif = require("./commands/gif.js");
const bot = require("./commands/discordbot.js");
const reactionRoles = require("./commands/reactionRoles.js");
const resources = require("./commands/buttons.js");
const ping = require("./commands/ping.js");
const ball = require("./commands/8ball.js");

const commands = { bot, gif, reactionRoles, resources, ping, ball };


module.exports = async function (msg){
    if(msg.channel.id == process.env.MSGCHANNELID){
        let tokens = msg.content.split(' ');
        let command = tokens.shift();
        if(command.charAt(0) === "!"){
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
};

  


