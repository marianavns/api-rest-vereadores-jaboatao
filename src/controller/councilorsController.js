const councilors = require( '../model/councilors.js' )

const fs = require('fs')

const create = (req, res) => {
    let councilor = new councilors(req.body)
    councilor.save(function(err){
        // if (err.name === 'MongoError' && err.code === 11000) {
            // return res.status(500).send({ message: "Este CNPJ de campanha já foi cadastrado." })
        // } 
        if (err) {
            return res.status(500).send({ message: err.message })
        } 
            return res.status(201).send({ message : `O(A) vereador(a) ${req.body.campaignName} foi adicionado com sucesso.`})
        
    })
}


const readAll = (req, res) => {
    councilors.find(function (err, results) {
        if (err) {
            return res.status(500).send({ message: err.message })
        } 
        return res.status(200).send(results)
    })
}


const readAllBills = (req, res) => {
    councilors.find(
        { inActivity : true }, 
        '-_id campaignName campaignCnpj lastCampaignParty monthlyBasisRemuneration totalRemuneration lastCampaignExpenses campaignExpensesLink email', 
        function (err, results) {
            if (err) {
               return res.status(500).send({ message: err.message })
            } 
            return res.status(200).send(results)
        }
    )
}


const readByName = (req, res) => {
    const inputName = req.query.nome
    councilors.find( 
        { $or: [ {firstName : inputName}, {campaignName : inputName}] }, 
        function (err, result) {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
        return res.status(200).send(result)
        }
    )
}


const readBillsByName = (req, res) => {
    const inputName = req.query.nome
    councilors.find(
        { $or: [ {firstName : inputName}, {campaignName : inputName}] }, 
        '-_id campaignName campaignCnpj lastCampaignParty monthlyBasisRemuneration totalRemuneration lastCampaignExpenses campaignExpensesLink email', 
        function (err, results) {
            if (err) {
               return res.status(500).send({ message: err.message })
            } 
            return res.status(200).send(results)
        }
    )
}


const readByCNPJ = (req, res) => {
    const inputCNPJ = req.query.cnpjdecampanha
    councilors.find(
        { campaignCnpj: inputCNPJ }, 
        function (err, result) {
            if (err) {
                return res.status(500).send({ message: err.message })
            } 
            return res.status(200).send(result)
        }
    )
}


const updateByName = (req, res) => {
    const firstName = req.query.nome
    const updateEntry = req.body
    councilors.updateMany(
        { firstName }, 
        { $set : updateEntry }, 
        { upsert : false  }, 
        function(err){
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            return res.status(200).send({ message : `Os atributos [ ${Object.keys(updateEntry)} ] foram atualizados com sucesso.`})
        }
    )
}

const deleteByDocID = (req, res) => {
    const id = req.params._id
    councilors.deleteMany({ _id : id }, function(err){
        if (err) {
            return res.status(500).send({ message: err.message })
        } 
           return res.status(200).send({ message : `O(A) vereador(a) com o ${id} foi deletado.`})
    })
}

module.exports = {
    create,
    readAll,
    readAllBills,
    readByName,
    readByCNPJ,
    readBillsByName,
    updateByName,
    deleteByDocID
}