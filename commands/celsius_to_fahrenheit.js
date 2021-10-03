module.exports = function(message, args) {
    const celsius = parseFloat(args[0]);
    const fahrenheit = celsius * 1.8 + 32;
	message.reply(`${celsius} °C is ${fahrenheit} °F.`);
}