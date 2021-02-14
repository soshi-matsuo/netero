const express = require('express');
const router = express.Router();

const trainingRegistrationUsecase = require('../application/usecase/trainingRegistrationUsecase');
const detailPageUsecase = require('../application/usecase/detailPageUsecase');
const date = require('../date');
const logger = require('../logger');

router.post('/', (req, res) => {
    trainingRegistrationUsecase.save(req.body, req.user.id);
    res.redirect(303, '/index');
});

const generateNextYear = (year, month) => {
    const nextMonth = parseInt(month) % 12 + 1; 
    const nextYear = nextMonth == 1 ? parseInt(year) + 1 : parseInt(year);
    return {
        nextYear: `${nextYear}`,
        nextMonth: nextMonth < 10 ? `0${nextMonth}` : `${nextMonth}`
    };
};
const generatePreviousYear = (year, month) => {
    const previousMonth = parseInt(month) - 1 <= 0 ? 12 : parseInt(month) - 1;
    const previousYear = previousMonth == 12 ? parseInt(year) - 1 : parseInt(year);
    return {
        previousYear: `${previousYear}`,
        previousMonth: previousMonth < 10 ? `0${previousMonth}` : `${previousMonth}`
    };
};
router.get('/:trainingId', async (req, res) => {
    console.log(req.params.trainingId);
    let { year, month } = req.query; 
    if (!year || !month) {
        const defaultDate = date().tz('Asia/Tokyo').format('YYYY-MM');
        [year, month] = defaultDate.split('-');
    }
    const detailData = await detailPageUsecase.createTrainingDetailData(req.params.trainingId, year, month);
    detailData.achievements = detailData.achievements.map(a => a.date());
    detailData.year = year;
    detailData.month = month;
    detailData.next = generateNextYear(year, month);
    detailData.previous = generatePreviousYear(year, month);
    logger.info('/training/:trainingId returns: %j', detailData);
    res.json(detailData);
});

module.exports = router;