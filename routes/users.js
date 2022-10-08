const express = require('express');
const router = express.Router();

router.get('/users/login', (req, res) => {
	res.send('Sign in');
});

router.get('/users/signup', (req, res) => {
	res.send('Auntenticación');
});

module.exports = router;
