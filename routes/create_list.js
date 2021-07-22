const express =require('express');
const router = express.Router();

const createLisController = require('../controllers/create_list_controller');

router.get('/',createLisController.home);


module.exports = router;