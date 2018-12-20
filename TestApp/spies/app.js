var db = require('./db');

module.exports.handleSignup = (email,password) => {

    db.saveUser({
        email,
        password
    });

};