const express = require('express');
const router = express.Router();

const logger = require('../logger');
const indexPageUsecase = require('../application/usecase/indexPageUsecase');

const toRenderableData = (indexData) => {
    const [trainings, achievements] = indexData;
    const achievedSet = new Set();
    achievements.forEach(achievement => achievedSet.add(achievement.trainingId()));
    return {title: 'NETERO', trainings, achievedSet};
}

router.get('/', async (req, res) => {
    logger.info('request GET to /');
    const indexData = await indexPageUsecase.createIndexData(req.user.id);
    res.json(toRenderableData(indexData));
});

module.exports = router;