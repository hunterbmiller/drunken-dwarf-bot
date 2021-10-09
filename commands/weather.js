const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { DateTime } = require("luxon");
const { c_to_f } = require('../utils/conversions.js');

const constructUrl = (location) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
};

const getWeather = (location) => {
    return axios.get(constructUrl(location)).then((resp) => {
        return resp;
    })
}

const timeFormat = (epoch) => {
    const dt = DateTime.fromMillis(epoch * 1000, { zone: 'America/New_York' })
    return `${dt.toLocaleString(DateTime.TIME_SIMPLE)} est`;
}

const formatWeather = (data) => {
    const embed = new MessageEmbed();
    embed.setColor('#0099ff');
    embed.setTitle('Weather');
    embed.setThumbnail('https://i.imgur.com/WPB06Bz.png');
    embed.setDescription(data.name);
    embed.addField(`${data.main.temp} °C  (${c_to_f(data.main.temp)} °F)`, data.weather[0].main);
    embed.addField(':sunrise_over_mountains: Sunrise', timeFormat(data.sys.sunrise), true);
    embed.addField(':city_sunset: Sunset', timeFormat(data.sys.sunset), true);
    return embed;
};

const genericErrorEmbed = () => {
    const embed = new MessageEmbed();
    embed.setColor('#E74C3C');
    embed.setTitle('Oops.. :poop:');
    embed.setThumbnail('https://i.imgur.com/LjIho3a.png')
    embed.setDescription('Something went wrong, we\'re sorry about that.');
    return embed;
};

module.exports = function(message, args) {
    getWeather(encodeURIComponent(args.join(' '))).then((resp) => {
        message.channel.send({ embeds: [formatWeather(resp.data)] });
    }).catch(() => {
        message.channel.send({ embeds: [genericErrorEmbed()]});
    });
};
