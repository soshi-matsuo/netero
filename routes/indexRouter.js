const express = require('express');
const router = express.Router();

const trainingUsecase = require('../application/usecase/trainingUsecase');

router.get('/', async (req, res, next) => {
    const trainings = await trainingUsecase.getAll();
    res.render('index', {title: 'NETERO', trainings});
});

module.exports = router;