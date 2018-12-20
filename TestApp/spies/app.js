

module.exports.handleSignup = (email,password) => {

    db.saveUser({
        email: email,
        password: password
    });

};