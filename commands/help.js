module.exports = {
    name: 'help',
    description: 'help!',
    execute(message, args) {
        message.reply(`This is the help, args: [${args.join(',')}]`);
    }
}