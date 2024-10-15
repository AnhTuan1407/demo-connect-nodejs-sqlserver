const express = require('express');
const router = express.Router();
const roleController = require('../app/controllers/RoleController');
router.get('/findAll', roleController.showAllRole);

module.exports = router;