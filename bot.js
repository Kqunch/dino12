const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

 client.on("MessageReactionAdd", function(users) {
if (message.content === "!verify") {
  users.addRole(users.guild.roles.find("Verified✔️", setup.verify))
} else if (!message.content === "role1") {
  user.removeRole(users.guild.role.find("Verified✔️", setup.default))
}
});

client.login(process.env.BOT_TOKEN);
