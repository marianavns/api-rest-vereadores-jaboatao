const councilors = require( '../model/councilors.js' )

const fs = require('fs')

const create = (req, res) => {

    criticalData1 = req.body.firstName
    criticalData2 = req.body.inActivity

    if (criticalData1 == undefined || criticalData2 == undefined ) {
        return res.status(200).send({ err : `knowing councilor's first name and whether he is active is critical. please enter both information correctly.`})
    }

    if (criticalData1.length <= 2) {
        return res.status(200).send({ err : `added councilor name has less than three letters. please check this information.`})
    }

    let councilor = new councilors(req.body)
    councilor.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message : `councilor [${criticalData1}] was added successfully.`})
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
        '-_id firstName campaignName fullName mandateRemuneration lastCampaignExpenses campaignExpensesLink', 
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