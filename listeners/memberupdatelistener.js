const loader = require('./../core/loader');
const client = loader.client;

module.exports = {
    name: 'memberupdatelistener',
    description: 'help!',
    methods: ["newuser"],
    newuser() {
        console.log("event hozzáadva!");
        client.on("guildMemberUpdate", function(oldMember, newMember){
            //console.error(`a guild member changes - i.e. new role, removed role, nickname.`);
            console.log(oldMember + ' ' + newMember);
        });
    }
}