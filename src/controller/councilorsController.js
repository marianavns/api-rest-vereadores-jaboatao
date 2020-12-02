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

const readByName = (req, res) => {
    const name = req.params.firstName
    councilors.find({ firstName : name }, function (err, result) {
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
   

module.exports = {
    create,
    readAll,
    readByName,
    readBySearch,
    updateItemsByName
}