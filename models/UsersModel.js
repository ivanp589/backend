const mongoose = require('mongoose')

const Schema = mongoose.Schema

//note first and last are not required to login
const usersSchema = new Schema({
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})// ,{ timestamp: true }

// the name you send below is the name that the collection will be called
var collectionName = 'Users'
module.exports = mongoose.model('User',usersSchema,collectionName)

