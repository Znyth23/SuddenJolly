
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = async function (msg, args, client){
    if (msg.author !== null && msg.author.bot) return;
    if (msg.toString().toLowerCase().includes('start reaction roles')) {
        msg.delete()
    }
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Pick your roles for the class!")
    .setURL('https://classroom.google.com/')
    .setAuthor('Resources', 'https://imgur.com/jSSlNJV.png', 'https://sites.google.com/psd202.org/pshsmrb/resources')
    .setDescription(` Choose the class that you are assigned with 🗯️`)  
    .setThumbnail('https://imgur.com/N4SF0Vc.png')
	.addFields(
		{ name: 'Select the appropriate icon', value: '🟦 = Programming 2\n\n 🟪 = APCS Principles\n\n 🟥 = APCSA\n\n 🟧 = Algebra 2'  },
	)
	.setTimestamp()
	.setFooter('Mr. Brzuszkiewicz', 'https://imgur.com/1Sxtewp.png');
    msg.channel.send(embed).then(sentMessage => {
        sentMessage.react("🟦").then(() => sentMessage.react("🟪")).then(() => sentMessage.react("🟥")).then(() => sentMessage.react("🟧")).then(() => {
            const filter = (reaction, user) => {
                return true;
            }
        const collector = sentMessage.createReactionCollector(filter);
        collector.on('collect', (reaction, user) => {
            if (reaction.emoji.name === '🟦'){
                role = msg.guild.roles.cache.find(role => role.name === "programming 2");
                msg.member.roles.add(role);
            }
            else if (reaction.emoji.name === '🟪'){
                role = msg.guild.roles.cache.find(role => role.name === "APCS Principles");
                msg.member.roles.add(role);
            }
            else if (reaction.emoji.name === '🟥'){
                role = msg.guild.roles.cache.find(role => role.name === "APCSA");
                msg.member.roles.add(role);
            }
            else if (reaction.emoji.name === '🟧'){
                role = msg.guild.roles.cache.find(role => role.name === "Algebra 2");
                msg.member.roles.add(role);
            }
        })
    })
    .catch(() => console.error('One of the emojis failed to react.'));
})
}

