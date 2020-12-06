const ytdl = require("ytdl-core");
const loader = require('./../core/loader');
var ytsearch = require('youtube-search');
const client = loader.client;

async function play(message, title, voiceChannel) {
  console.log(getvideo(title));
  return;
  const song = {
    title: title,
    url: 'https://www.youtube.com/watch?v=unfzfe8f9NI',
  };

  const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
  }
  queueContruct.connection = await voiceChannel.join();
  console.log("va");
  if (!song) {
    //serverQueue.voiceChannel.leave();
    //queue.delete(message.guild.id);
    return;
  }

  const dispatcher = queueContruct.connection
    .play(ytdl(song.url))
    .on("finish", () => {
        //itt shifteljük el a tárolót, és a finish eventre lejátszuk a következőt.
        //serverQueue.songs.shift(); play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(queueContruct.volume / 5); //1/5 == leghalkabb
    queueContruct.textChannel.send(`Start playing: **${song.title}**`); //üzenet mit indít el lejátszásra
}



function getvideo(title) {
  const opts = {
    maxResults: 1,
    key: "AIzaSyBFRGoQ9241XbOlVyK6470G8Wscg-c-_wI"
  };

  ytsearch(title, opts, function(err, results) {
    if(err) return console.log(err);
    
    console.dir(results);
    return "van videó";
  });
}


function next() {

}

module.exports = {
  play: play
}