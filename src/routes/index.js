const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.status(200).send({
    title: "Central de Vereadores",
    version: "1.0.0",
    owner: "github.com/marianavns"
  })
})

module.exports = router
