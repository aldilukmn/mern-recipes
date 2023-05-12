const express = require('express');
const user = require('../controllers/users')

const router = express.Router();

router.post('/register', user.registerUser);

router.post('/login', user.loginUser);

module.exports = router;    