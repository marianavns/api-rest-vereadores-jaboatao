const mongoose = require('mongoose')

const councilorsSchema = new mongoose.Schema({
    // Personal Datas
    campaignName: { type: String, required: [true, 'adicione o nome de campanha'] },
    firstName: { type: String, required: [true, 'adicione o primeiro nome']  },
    fullName: String,
    genre: { type: String, required: [true, 'adicione o gênero'] },
    yearOfBirth: Number,
    skinColor: String,
    levelOfSchooling: String,

    // Mandate Datas
    campaignCnpj: { type: Number, required: [true, 'adicione o CNPJ de campanha'] , unique: [true, 'Este CNPJ de campanha já foi cadastrado']},
    inActivity: { type: Boolean, required: [true, 'a pessoa a ser cadastrada está em atividade?'] },
    neighborhoodsIdentity: Array,
    scope: Array,
    lastCampaignNumber: String,
    lastCampaignVotes: Number,
    lastCampaignParty: String,
    governmentPosition: String,
    victoryYears: Array,

    // Financial Datas
    actualRemuneration: { type: String, required: [true, 'adicione a remuneração atual'] },
    mandateRemuneration: Number,
    lastCampaignExpenses: Number,
    campaignExpensesLink: String,

    // Social Media
    instagram: String,
    facebook: String,

    // Contacts
    email: { type: String, required: [true, 'adicione e-mail para contato'] },
    othersContacts: String,

    // Others
    observations: String,
},{
    versionKey: false
})

const councilors = mongoose.model('councilors', councilorsSchema)

module.exports = councilors

