const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const greenItemController = require('../controllers/greenItem')
const locationController = require('../controllers/location')

//user controllers routes
router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:userId',userController.show)
router.put('/:userId',userController.update)
router.delete('/:userId', userController.delete)

// //greenItem controller routes
// router.get('/:userId', greenItemController.index)
// router.post('/:userId', greenItemController.create)
// router.get('/:userId/new', greenItemController.new)
// router.get('/:userId/:greenItemId',greenItemController.show)
// router.put('/:userId/:greenItemId',greenItemController.update)
// router.delete('/:userId/:greenItemId', greenItemController.delete)

// //location controller routes
// router.get('/:userId/:greenItemId', locationController.index)
// router.post('/:userId/:greenItemId', locationController.create)
// router.get('/:userId/:greenItemId/new', locationController.new)
// router.get('/:userId/:greenItemId/:locationId',locationController.show)
// router.put('/:userId/:greenItemId/:locationId',locationController.update)
// router.delete('/:userId/:greenItemId/:locationId', locationController.delete)

module.exports = router