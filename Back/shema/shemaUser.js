// Import
const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

// 
const userShema = mongoose.shema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: [true, 'Please enter Email Address'],
        },
        password: {
            type: String,
            required: [true, 'Please enter a Password'],
        }

    },
    { timestamps : {createdAt : "created_at"} }
);

userShema.methods = {

    authenticate: (password) => {
        return passwordHash.verify(password, this.password);
    },

    getToken : () => {
        return jwt.encode(this, config.secret);
    }


}

// Export
module.exports = mongoose.model('User', userShema);