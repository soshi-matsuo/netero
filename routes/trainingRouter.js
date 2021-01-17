const express = require('express');
const router = express.Router();

const trainingRegistrationUsecase = require('../application/usecase/trainingRegistrationUsecase');
const detailPageUsecase = require('../application/usecase/detailPageUsecase');
const date = require('../date');
const logger = require('../logger');

router.post('/', (req, res) => {
    trainingRegistrationUsecase.save(req.body);
    res.redirect('/');
});

router.get('/:trainingId', async (req, res) => {
    console.log(req.params.trainingId);
    let { year, month } = req.query; 
    if (!year || !month) {
        const defaultDate = date().tz('Asia/Tokyo').format('YYYY-MM');
        [year, month] = defaultDate.split('-');
    }
    const detailData = await detailPageUsecase.createTrainingDetailData(req.params.trainingId, year, month);
    logger.info('/training/:trainingId returns: %j', detailData);
    res.render('detail', detailData);
});

module.exports = router;
