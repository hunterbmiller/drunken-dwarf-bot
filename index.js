const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { config } = require('dotenv');
const { COMMAND_PREFIX } = require('./constants.js');
const commands = require('./commands/index.js');
config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  client.on("messageCreate", (message) => {
    if(isCommand(message.content)) {
      const args = parseArgs(message.content);
      const command = commands[sanitizeCommand(args[0])];
      command && command(message, args.slice(1));
    }
  });
});

client.login(process.env.BOT_TOKEN);

const isCommand = (input) => {
  return input.startsWith(COMMAND_PREFIX);
}

const parseArgs = (command) => {
  return command.slice(COMMAND_PREFIX.length).trim().split(' ');
}

const sanitizeCommand = (command) => {
  return command.toLowerCase().trim();
}
