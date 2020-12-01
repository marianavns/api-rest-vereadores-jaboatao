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
    const name = req.params.campaignName
    councilors.find({ campaignName : name }, function (err, result) {
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
   

module.exports = {
    create,
    readAll,
    readByName,
    readBySearch
}