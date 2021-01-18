require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/councilorsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/contas', controller.readAllBills)
router.get('/nome', controller.readByName)
router.get('/contasindividuais', controller.readBillsByName)
router.get('/cnpj', controller.readByCNPJ)
router.patch('/', controller.updateByName)
router.delete('/:_id', controller.deleteByDocID)

module.exports = router
