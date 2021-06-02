require("dotenv").config();


const Discord = require('discord.js');
const keepAlive = require("./server");
const client = new Discord.Client();
require('discord-buttons')(client);
keepAlive()
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("Its working!");
}

const commandHandler = require("./commands");
client.on('message', commandHandler);
client.on('error', error => {
    if (error && error.message === 'uWs client connection error') {
    this.reconnect();
    return;
    }
    });

  


