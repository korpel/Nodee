const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('Users', {
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
        
    }]
});

module.exports = {User};
