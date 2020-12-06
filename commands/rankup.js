const _rankupcontroller = require('./../controllers/rankupcontroller');
const rankupcontroller = new _rankupcontroller();

module.exports = {
    name: 'rankup',
    description: 'rankup!',
    usage: '!rankup RANK (/DEFAULT IF NEW USER ON DISCORD',
    async execute(message, args, client) {
        //if (message.channel.name == undefined) { message.reply('Not accept DM message. Reason: not find roles'); return; }
        if (message.channel.name == undefined) {
            message.reply('Not accept DM message. Reason: not find roles.')
            .then(msg => {
                console.log(message);
                msg.delete({"timeout":3000});
            })
            .catch(error => console.error)
            return;
        }

        if (args.length === 0) {
            message.channel.send(await rankupcontroller.setdefaultrank(message))
                .then(msg => {
                    message.delete({ "timeout": 4500 });
                    msg.delete({ "timeout": 4000 });
                })
                .catch(error => console.error)
            return;
        }
        /*else
        {
            const mentions = message.mentions.members;

            for (let mention of mentions) {
                if(mention[1].user.username) {
                    message.reply();
                }
            }
        }*/
    }
}