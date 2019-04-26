const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.index)
router.post('/', userController.new)
router.put('/:id',userController.update)
router.delete('/:id', userController.delete)

module.exports = router