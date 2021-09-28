const ping = require('./ping.js');
const { PING_COMMAND } = require('../constants.js');

module.exports = {
  [PING_COMMAND]: ping,
}