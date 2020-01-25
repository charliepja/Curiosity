require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const schedule = require('node-schedule');

module.exports.nasaPicture = (client) => {
	schedule.scheduleJob('4 23 * * *', function() {
		const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=';
		const apiKey = process.env.NASA;

		fetch(baseURL + apiKey)
			.then(res => res.json())
			.then(json => {
				const pictureUrl = json.url;
				const pictureTitle = json.title;
				const embed = new Discord.RichEmbed()
					.setColor('#c5cbe1')
					.setTitle(pictureTitle)
					.setImage(pictureUrl)
					.setTimestamp();
				client.channels.get(process.env.CHANNEL).send({ embed: embed });
			})
	});
};
