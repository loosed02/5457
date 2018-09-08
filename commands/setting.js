const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    if(message.author.id !== '392419670915022848') {
    const Error = new Discord.RichEmbed()
    var serversettinglists = new db.table('setting12')
    let messagess = await serversettinglists.get(`pFooterMessage${message.guild.id}`) 
    .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
    .setColor("#87CEEB")
    .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$announce <message>```")
    .setFooter(`${messagess}`, "https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png");
    message.channel.send(Error);
}
//Set args
if(`${args[0]}` == `set`){
    if(`${args[1]}` == `channel`) {
        try {
            let mentionEmbed = new Discord.RichEmbed()
            .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
            .setColor("#87CEEB")
            .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$settings set channel #channel```")
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mentionEmbed) 
                     var serversettinglists = new db.table('setting12')
                     let messagess = await serversettinglists.get(`pFooterMessage${message.guild.id}`) 
                     let mentionEmbed1 = new Discord.RichEmbed()
                     .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
                     .setColor("#87CEEB")
                     .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$settings set channel #channel```")
                     .setFooter(`${messagess}`, "https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png");
                     if (!args[2]) return message.channel.send(mentionEmbed1)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) 
                     const errorReport = client.channels.get(`474432463989637122`)
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = '' 
                     else newMessage = args.slice(2, 1000, args[2]).join(' ') 
                     if(`${message.mentions.channels.first()}` == `undefined`) return
                     let channelEmbed = new Discord.RichEmbed()
                     .setAuthor("Updating..","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
                     .setColor("#87CEEB")
                     .addField("Update completed!", `New channel set: ${message.mentions.channels.first()}\nAll moderator settings will be bound to this channel!`)
                    // Update Channel
                    var serversettinglist = new db.table('setting1')
                    serversettinglist.set(`${message.guild.id}`, `${message.mentions.channels.first().id}`)
                    message.channel.send(channelEmbed) 
                    message.delete();     
                }catch(err) {console.log(`Error with setting channel\n${err}`)};
            } else if (`${args[1]}` == `footer`) {
                try {
                    let mentionEmbed = new Discord.RichEmbed()
                    .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
                    .setColor("#87CEEB")
                    .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$settings set channel #channel```")
                             if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mentionEmbed) 
                             var serversettinglists = new db.table('setting12')
                             let messagess = await serversettinglists.get(`pFooterMessage${message.guild.id}`) 
                             let mentionEmbed1 = new Discord.RichEmbed()
                             .setAuthor("Error","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
                             .setColor("#87CEEB")
                             .setDescription("Oops, there was an error while processing the command. Seems like you have forgotten something.\nUsage:```$settings set footer <message>```")
                             .setFooter(`${messagess}`, "https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png");
                             if (!args[2]) return message.channel.send(mentionEmbed1)
                             if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) 
                             let newfooter;
                             if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = '' 
                             else newfooter = args.slice(2, 1000, args[2]).join(' ') 
                             let channelEmbed = new Discord.RichEmbed()
                             .setAuthor("Updating..","https://cdn.discordapp.com/attachments/478761922569961505/485623295618842625/h_iconnnnn64x64_by_katiefhk-dckc3ne.png")
                             .setColor("#87CEEB")
                             .addField("Update completed!", `New footer for announcement ${newfooter}`)
                            // Update Channel
                            var serversettinglists = new db.table('setting12')
                            serversettinglists.set(`pFooterMessage${message.guild.id}`, newfooter)
                            message.channel.send(channelEmbed) 
                            message.delete();     
                        }catch(err) {console.log(`Error with setting channel\n${err}`)}
                } 
        }
    }
}
