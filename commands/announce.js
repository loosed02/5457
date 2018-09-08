const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run= async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR"));
    var serversettinglists = new db.table('setting12')
    let messagess = await serversettinglists.get(`pFooterMessage${message.guild.id}`) 

    const Error = new Discord.RichEmbed()
    .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
    .setColor("#87CEEB")
    .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$announce <message>```")
    .setFooter(`${messagess}`, "https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png");
    if (args.length < 1) return message.reply(Error);
    args = args.join(' ');
    const announcemnetEmbed = new Discord.RichEmbed()
    .setAuthor(`Message by ${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#87CEEB")
    .setDescription(args) 
    .setFooter(`${messagess}`, "https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png");
    message.delete().catch(O_o = {});
    message.channel.send(announcemnetEmbed);
};