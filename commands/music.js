module.exports = {
    name: 'm',
    description: 'm!',
    execute(message, args) {
        message.reply(`This is the help, args: [${args.join(',')}]`);
    }
}