const Discord = require('discord.js');
const prefix = require(`../settings/config.json`)
const client = new Discord.Client();

module.exports = (client, message) => {
        if (message.author.bot || !message.guild) return;
        if (message.content.indexOf(prefix.prefix) !== 0) return;
        const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message, args);
    };