/**
 * Kell ez nekem: (opus)
 * npm install discord.js ffmpeg fluent-ffmpeg @discordjs/opus ytdl-core
 */
let musicbot = require('./../library/musicbot');
const opts = {
    maxResults: 1,
    key: 'AIzaSyBFRGoQ9241XbOlVyK6470G8Wscg-c-_wI'
};

module.exports = {
    name: 'play',
    description: 'play!',
    execute(message, args) {
        //ez nem DM üzenet?
        if (message.channel.name == undefined) {
            message.reply('Not accept DM message. Reason: not playing audio to direct message.')
            .then(msg => {
                setTimeout(() => {
                    msg.edit("Connect voice channel before try it!");
                }, 4500);
            })
            .catch(error => console.error)
            return;
        }

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) { //van joga a channelhez?
            message.reply('You need to be in a voice channel to play music!')
            .then(msg => {
                message.delete({ "timeout": 4500 });
                msg.delete({ "timeout": 4000 });
            })
            .catch(error => console.error)
            return;
        }


        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) { //van joga a channelhez?
            message.reply('I need the permissions to join and speak in your voice channel!')
            .then(msg => {
                message.delete({ "timeout": 4500 });
                msg.delete({ "timeout": 4000 });
            })
            .catch(error => console.error)
            return;
        }
        let title = '';
        for (let i = 0; i < args.length; i++) {
            if( (i !== (args.length-1)) ) {
                title += args[i] + ' ';
            } else {
                title += args[i];
            }
        }
        musicbot.play(message, 'Abba - Mama mia', voiceChannel);         
    }
}