//Packages
const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const config = require('./settings/config.json');
//Client
const client = new Discord.Client({
    disableEveryone: false,
    autoRecconect: true
});
//Command Handler
client.aliases = new Enmap();
client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if(err) return console.error(err);
  files.forEach(file => {
  if (!file.endsWith(".js")) return;
  let props = require(`./commands/${file}`);
  let commandName = file.split(".")[0];
  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, props);
  });
});
client.on('message', message => require('./events/message.js')(client, message));

client.login(process.env.TOKEN);
