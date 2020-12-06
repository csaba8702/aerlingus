const fs = require('fs');
const path = require('path');
const { methods } = require('../listeners/memberupdatelistener');
const loader = require('./../core/loader');
const client = loader.client;
const commandFiles = fs.readdirSync("./listeners").filter((file) => file.endsWith(".js"));

class registerevents {
    constructor(event) {
        if (registerevents.instance) {
            return registerevents.instance;
        }
        this.registerevents(event);

        registerevents.instance = this;
        return this;
    }

    registerevents(event) {
        try {
            //if ( fs.existsSync( path.resolve(__dirname + '/../listeners/' +event + '.js') ) ) {
            if ( fs.existsSync( path.resolve(__dirname + '/../listeners/' +event + '.js') ) && !(event in loader.events) ) {
                let eventfile = require('./../listeners/'+ event + '.js');
                loader.events[event] = eventfile;
                this.runevents();
            }
        } catch (error) {
            console.log(error);
        }
    }

    runevents() {
        for (const [events, file] of Object.entries(loader.events)) {

            
            for (let i = 0; i < file.methods.length; i++) {
                const func = file.methods[i];
                file[methods[i]]();


                //file.newuser();
            }

            //console.log(file);
            //console.log( file.newuser() );
        }
    }
}

module.exports = registerevents;