const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toLowerCase();
    if (msg === 'd!tea') {
      message.reply(':tea:');
    } else if (msg === 'd!blendscharacters') {
      message.reply('https://goo.gl/images/zdC8DT');
    } else if (msg === 'd!re:zero') {
      message.reply('https://www.watchcartoononline.io/anime/re-zero-kara-hajimeru-isekai-seikatsu-english-subbed');
    } else if (msg === '^help') {
      message.reply('To use this bot please enter the name of an anime with ^ in front of it and if we have that anime link it will');
    } else if (msg === '^list') {
      message.reply('assassination classroom, blend s, re:zero ');
    } else if (msg === '^trash') {
      message.reply('https://www.watchcartoononline.io/anime/sword-art-online');
    }
});

client.login(process.env.BOT_TOKEN);
