var express = require('express');
var router = express.Router();
var user =  require('../controller/userLogin');
router.post('/login', user.userLogin);

module.exports = router;