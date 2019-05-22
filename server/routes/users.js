const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.get('/:id', UserController.get)

router.post('/', UserController.create)

router.put('/', UserController.update)

router.delete('/:id', UserController.remove)

module.exports = router
