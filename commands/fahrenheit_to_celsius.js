const { f_to_c } = require('../utils/conversions.js');

module.exports = function(message, args) {
    const fahrenheit = parseFloat(args[0]);
	message.reply(`${fahrenheit} °F is ${f_to_c(fahrenheit)} °C.`);
}