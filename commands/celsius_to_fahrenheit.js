const { c_to_f } = require('../utils/conversions.js');

module.exports = function(message, args) {
    const celsius = parseFloat(args[0]);
	message.reply(`${celsius} °C is ${c_to_f(celsius)} °F.`);
}