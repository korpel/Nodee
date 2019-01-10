const mongoose = require('mongoose');
const validator = require('validator');

var userSchema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            minlength: 1,
            trim: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email!'
            }
        },
        password : {
            type: String,
            required: true,
            minlength: 6
        },
        tokens : [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
    
        }]
});

var User = mongoose.model('Users', userSchema);

module.exports = {User};
