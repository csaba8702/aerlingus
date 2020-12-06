module.exports = {
    name: 'm',
    description: 'm!',
    execute(message, args) {
        if (args.length === 0) {
            message.reply(this.description);
            return;
        }

        const mentions = message.mentions.members;

        //message.reply(`This is the help, args: [${args.join(',')}]`);
    }
}