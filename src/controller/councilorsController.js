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
    councilors.find(function (err, councilor) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(councilor)
        }
    })
}

module.exports = {
    create,
    readAll
}