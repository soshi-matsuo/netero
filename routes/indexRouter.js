const express = require('express');
const router = express.Router();

const logger = require('../logger');
const trainingUsecase = require('../application/usecase/trainingUsecase');

router.get('/', async (req, res) => {
    logger.info('request GET to /');
    const trainings = await trainingUsecase.getAll();
    res.render('index', {title: 'NETERO', trainings});
});

module.exports = router;