//const _rankupmodel = require('./../models/rankupmodel');
//const rankupmodel = new _rankupmodel();

class usermodel {
    constructor() {
        if (usermodel.instance) {
            return usermodel.instance;
        }

        usermodel.instance = this;

        return this;
    }

    //GET METHODS

    getuserbyid(message) {
        console.log('hello getrank in usermodel');
    }

    getuserbyname(message) {
        console.log('hello getrank in usermodel');
    }
}

module.exports = usermodel;