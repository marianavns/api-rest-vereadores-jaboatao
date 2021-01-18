const mongoose = require('mongoose')

const ideasSchema = new mongoose.Schema({
    scope: {
        type: String,
        enum: ['educação', 'saneamento', 'saúde', 'habitação', 'outros'],
    },
    idea: {
        type: String,
        required: true
    },
    neighborhood: Array,
    nameCollaborator: {
        type: String,
        required: true
    },
    ageCollaborator: Number,
    genreCollaborator: String,
    emailCollaborator: {
        type: String,
        required: true
    },
    othersContacts: String,
    observations: String,
},{
    versionKey: false
})

const ideas = mongoose.model('ideas', ideasSchema)

module.exports = ideas

