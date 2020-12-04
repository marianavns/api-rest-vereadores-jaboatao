require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/ideasController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/vozdosbairros', controller.readNeighborhoodIdeas)

module.exports = router