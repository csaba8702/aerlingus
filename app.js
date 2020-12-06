const fs = require('fs');

const loader = require('./core/loader');
const prefix = process.env.prefix;
const client = loader.client;
const registerevents = require('./core/registerevents');

new registerevents('memberupdatelistener');


const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
let commands = {};

if ( Object.keys(commands).length === 0 && commands.constructor === Object ) {
    commandFiles.forEach( (file) => {
        const command = require(`./commands/${file}`);
        commands[command.name] = command;
    });   
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!(command in commands)) return;
    
    try {
        commands[command].execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});
client.login(process.env.token);