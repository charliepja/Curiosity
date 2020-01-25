require('dotenv').config();
const Discord = require('discord.js');
const schedule = require('./schedule.js');
const client = new Discord.Client();

client.on('ready', async () => {
	console.log('Ready to Serve!');
	schedule.nasaPicture(client);
});

client.login(process.env.TOKEN);
