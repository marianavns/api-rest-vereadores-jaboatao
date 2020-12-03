const mongoose = require('mongoose')

const councilorsSchema = new mongoose.Schema({
    firstName: String,
    campaignName: String,
    fullName: String,
    neighborhoodsIdentity: Array,
    scope: Array,
    yearOfBirth: Number,
    genre: String,
    skinColor: String,
    levelOfSchooling: String,
    lastCampaignNumber: String,
    lastCampaignVotes: Number,
    lastCampaignParty: String,
    governmentPosition: String,
    victoryYears: Array,
    inActivity: Boolean,
    actualRemuneration: Number,
    mandateRemuneration: Number,
    lastCampaignExpenses: Number,
    campaignExpensesLink: String,
    instagram: String,
    facebook: String,
    email: String,
    othersContacts: String,
    observations: String,
},{
    versionKey: false
})

const councilors = mongoose.model('councilors', councilorsSchema)

module.exports = councilors

