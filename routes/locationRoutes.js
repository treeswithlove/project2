const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location')

//location controller routes
router.get('/', locationController.index)
router.post('/', locationController.create)
router.get('/new', locationController.new)
router.get('/:locationId',locationController.show)
router.put('/:locationId',locationController.update)
router.delete('/:locationId', locationController.delete)

module.exports = router