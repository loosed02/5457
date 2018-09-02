const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    //Users ID that can access this command
    if(message.author.id !== '392419670915022848', '466826989739835403') {
        //No Permission
              let error = new Discord.RichEmbed()
              .setAuthor("Error")
              .addField("Not enough permission!", "You currently don't have enough permission! If you think this an error please contact the guild owner.\nCurrently missing ``DEVELOPER_OWNER`` permission.")
              .setColor("#e10ef6");
              message.channel.send(error)
          }
          else {
              message.channel.send(args.join(' '));
              message.delete();
          }
        };
    module.exports.help = {
      name: "say"
   }
    