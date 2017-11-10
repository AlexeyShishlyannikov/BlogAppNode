const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req,res) => {
	res.send('auth');
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
	passport.authenticate('google', { failureRedirect: '/' }),
	function (req, res) {
		// Successful authentication, redirect to dash
		res.redirect('/dashboard');
	});





module.exports = router;
