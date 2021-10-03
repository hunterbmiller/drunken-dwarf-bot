module.exports = function(message, args) {
    const fahrenheit = parseFloat(args[0]);
    const celsius = (fahrenheit - 32) / 1.8;
	message.reply(`${fahrenheit} °F is ${celsius} °C.`);
}