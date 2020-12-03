const councilors = require( '../model/councilors.js' )

const fs = require('fs')

const create = (req, res) => {
    let councilor = new councilors(req.body)
    councilor.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message : "registro adicionado com sucesso."})
        }
    })
}

const readAll = (req, res) => {
    councilors.find(function (err, results) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(results)
        }
    })
}

const readBills = (req, res) => {
    councilors.find(
        { 
            inActivity : true 
        }, 
        '-_id campaignName fullName mandateRemuneration lastCampaignExpenses campaignExpensesLink', 
        function (err, results) {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send(results)
            }
        }
    )
}

const readByName = (req, res) => {
    councilors.find({ firstName }, function (err, result) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(result)
        }
    })
}

const readBySearch = (req, res) => {
    const search = req.query
    councilors.find(search, function (err, result) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(result)
        }
    })
}

const updateItemsByName = (req, res) => {
    const firstName = req.params.firstName
    const updateEntry = req.body
    councilors.updateMany({ firstName }, { $set : updateEntry }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : `Attributes: [${Object.keys(updateEntry)}] have been updated successfully.`})
        }
    })
}

const deleteByDocID = (req, res) => {
    const id = req.params._id
    councilors.deleteMany({ _id : id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : `ID Doc ${id} was been deleted.`})
        }
    })
}

module.exports = {
    create,
    readAll,
    readBills,
    readByName,
    readBySearch,
    updateItemsByName,
    deleteByDocID
}