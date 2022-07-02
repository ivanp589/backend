const mongoose = require('mongoose')

const Schema = mongoose.Schema
/**
 * 
 * "name":"Push Pull Legs"
"musclegroup":"Legs"
"difficulty":"Intermediate"
"completed":true
 */

// schema posts to mongodb in the order it is below
const workoutsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    musclegroup: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    }
}, { versionKey: false })
// ,{ timestamp: true }

// the name you send below is the name that the collection will be called
var collectionName = 'Workouts'
module.exports = mongoose.model('Workout',workoutsSchema,collectionName)

