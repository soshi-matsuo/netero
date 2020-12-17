const express = require('express');
const router = express.Router();

const trainingService = require('../application/trainingService');

router.post('/', (req, res, next) => {
    trainingService.save(req.body);
    res.redirect('/');
});

module.exports = router;
