const loader = require('./../core/loader');
const client = loader.client;

class abstractlistener {
    constructor() {
        if (abstractlistener.instance) {
            return abstractlistener.instance;
        }
        
        this.events = {};
        this.registerevents();
        abstractlistener.instance = this;
        return this;
    }

    registerevents() {
        setTimeout(() => {
            console.log(this.events);
        }, 2000);
        
        /*
        for (let events in this.events) {
            console.log(events);
        }
        */
    }
}

module.exports = abstractlistener;