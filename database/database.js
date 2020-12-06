/*
cannot enqueue handshake after invoking quit
Cannot enqueue Quit after invoking quit
*/
const mysql = require('mysql');
let db;
class database {
    constructor() {
        if (database.instance) {
            return database.instance;
        }
        database.instance = this;

        return this;
    }

    //GET METHODS

    async dbopen() {
        db = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });

        if(db.state === 'disconnected') {
            //console.log("DISCONNECTED. TRY DBCONNECT")
            await db.connect();
        }
    }

    async dbclose() {
        //console.log("DISCONNECT DATABASE CONNECTION");
        await db.end();
    }

    query(query) {
        this.dbopen();
        let promise = new Promise(function(resolve, reject) {
        
            db.query(query, function (err, rows, fields) {
                // Call reject on error states,
                // call resolve with results
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
        this.dbclose();
        return promise;
    }
}

module.exports = database;