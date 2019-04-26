const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.index)
router.get('/', userController.new)
router.post('/', userController.new)
router.get('/:id',userController.show)
// router.delete('/:id', userController.delete)

module.exports = router