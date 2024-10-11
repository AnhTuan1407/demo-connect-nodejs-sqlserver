const userController = require('../app/controllers/UserController');
const express = require('express');
const router = express.Router();

const validate = require('../validate/user');

router.get('/register', userController.register);
router.post('/register', validate.registerPost, userController.doRegister)
router.get('/findAll', userController.findAllUsers);
router.get('/login', userController.login);
router.post('/login', validate.loginPost, userController.doLogin);

module.exports = router;