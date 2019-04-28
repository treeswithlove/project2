const express = require('express')
const router = express.Router()
const greenItemController = require('../controllers/greenItem')

//greenItem controller routes
router.get('/', greenItemController.index)
router.post('/', greenItemController.create)
router.get('/new', greenItemController.new)
router.get('/:greenItemId',greenItemController.show)
router.put('/:greenItemId',greenItemController.update)
router.delete('/:greenItemId', greenItemController.delete)

module.exports = router