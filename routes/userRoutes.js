const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

//user controllers routes
router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:userId',userController.show)
router.put('/:userId',userController.update)
router.delete('/:userId', userController.delete)

module.exports = router