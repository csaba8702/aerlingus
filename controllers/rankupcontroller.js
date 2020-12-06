const _rankmodel = require('./../models/rankmodel');
const rankmodel = new _rankmodel();
//const rankmodel = new rankmodel();

class rankupcontroller {
    constructor(message = '') {
        if (rankupcontroller.instance) {
            return rankupcontroller.instance;
        }

        rankupcontroller.instance = this;

        return this;
    }

    getrank(message) {
        console.log('hello getrank in rankupcontroller');
    }



    async setrank() {

    }

    async delrank() {
        
    }


    async setdefaultrank(message) {

        let data = await rankmodel.getrankbyuserid(1)
        .then(function(rows) {
            return rows;
        })
        .catch(error => console.log(error));
        //a kijött adatok. Itt még hibakezelni kell, egyátalán van e adat!
        //console.log(data);
        /*
        let data = await db.query("SELECT * FROM phpvms_pilots WHERE email='andreboll@outlook.de'").then(function(rows) {
        //let data = await db.query("SELECT COUNT(pilotid) AS pilotid FROM phpvms_pilots").then(function(rows) {
            return rows[0];
        }).catch((err) => setImmediate(() => { throw err; }));
        
        console.log(data);
        */


        return 's';

        const defaultranks = process.env.defaultranks.split(",");
        const member = message.member;
        const userRoleIDs = message.member._roles;
        let addedranks = '';

        //console.log(typeof defaultranks[0]);
        for (let i = 0; i < defaultranks.length; i++) {
            const role = message.guild.roles.cache.find(role => role.name === defaultranks[i].trim());

            if (!userRoleIDs.includes(role.id)) {
                member.roles.add(role);
                addedranks += defaultranks[i] + ' '
            }
        }


        if (addedranks !== '') {
            return `Megkaptad a következő rangokat: ${addedranks}`;
        } else {
            return `Már megkaptad az alap rangokat`;
        }
    }
}

module.exports = rankupcontroller;