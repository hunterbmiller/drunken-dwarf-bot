const ping = require('./ping.js');
const c_to_f = require('./celsius_to_fahrenheit.js');
const f_to_c = require('./fahrenheit_to_celsius.js');
const weather = require('./weather.js');
const { PING_COMMAND, C_TO_F_COMMAND, F_TO_C_COMMAND, WEATHER_COMMAND } = require('../constants.js');

module.exports = {
  [PING_COMMAND]: ping,
  [C_TO_F_COMMAND]: c_to_f,
  [F_TO_C_COMMAND]: f_to_c,
  [WEATHER_COMMAND]: weather
}