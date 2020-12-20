const express = require('express');
const router = express.Router();

const trainingUsecase = require('../application/usecase/trainingUsecase');

router.post('/', (req, res, next) => {
    trainingUsecase.save(req.body);
    res.redirect('/');
});

module.exports = router;
