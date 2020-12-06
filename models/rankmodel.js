const _database = require('./../database/database');
const db = new _database();

class rank {
    constructor() {
        if (rank.instance) {
            return rank.instance;
        }

        rank.instance = this;

        return this;
    }

    //GET METHODS

    async getrankbyuserid(id) {
        return await db.query("SELECT * FROM phpvms_pilots WHERE email='csaba87021@gmail.com'").then(function (rows) {
            return rows[0];
        }).catch((err) => setImmediate(() => { throw err; }));
    }
}

module.exports = rank;