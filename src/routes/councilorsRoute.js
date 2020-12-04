require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/councilorsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/contas', controller.readBills)
router.get('/buscaNome', controller.readByName)
router.patch('/:firstName', controller.updateItemsByName)
router.delete('/:_id', controller.deleteByDocID)

module.exports = router
