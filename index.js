const Discord = require('discord.js');
const randomLine = require('./images/randomImage.js');
var CronJob = require('cron').CronJob;

require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    job.start();
});

var job = new CronJob('*/30 * * * *', function () {
    try {
        var randomImage = randomLine.line('./images/images.txt');
        client.user.setAvatar(randomImage);
        console.log(`Avatar changed changed to ${randomImage}`);
    }
    catch (error) {
        console.log(error);
    };
});

client.login(process.env.TOKEN)