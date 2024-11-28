const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');


router.post('/usercreate', userController.createUser);


router.get('/users', userController.getUsers);


router.get('/users/:id', userController.getUserById);


router.put('/users/:id', userController.updateUser);


router.delete('/users/:id', userController.deleteUser);

module.exports = router;
