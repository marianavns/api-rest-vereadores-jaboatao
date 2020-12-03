const mongoose = require('mongoose')

const ideasSchema = new mongoose.Schema({
    idea: String,
    scope: Array,
    name: String,
    age: String,
    neighborhood: Array,
    genre: String,
    email: String,
    othersContacts: String,
    observations: String,
},{
    versionKey: false
})

const ideas = mongoose.model('ideas', ideasSchema)

module.exports = ideas

