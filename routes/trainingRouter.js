const express = require('express');
const router = express.Router();

const trainingRegistrationUsecase = require('../application/usecase/trainingRegistrationUsecase');
const detailPageUsecase = require('../application/usecase/detailPageUsecase');

const logger = require('../logger');

router.post('/', (req, res) => {
    trainingRegistrationUsecase.save(req.body);
    res.redirect('/');
});

router.get('/:trainingId', async (req, res) => {
    const detailData = await detailPageUsecase.createTrainingDetailData(req.params.trainingId);
    logger.info('/training/:trainingId returns: %j', detailData);
    res.render('detail', detailData);
});

module.exports = router;
