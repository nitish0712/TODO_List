const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/create_list',require('./create_list'));



module.exports = router;

