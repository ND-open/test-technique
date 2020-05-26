// Import
const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');

// 
const userShema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        prenom: {
            type: String,
            required: true,
        },
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
        },
        administration: {
            type: Boolean,
            required: [true, 'Please, choose an option'],
        }

    },
    { timestamps : {createdAt : "created_at"} }
);

userShema.methods = {

    authenticate(password) {
        return passwordHash.verify(password, this.password);
    },

    getToken(){
        return jwt.encode(this, config.secret);
    }

}

// Export
module.exports = mongoose.model('User', userShema);