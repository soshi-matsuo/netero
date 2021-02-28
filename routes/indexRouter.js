const express = require('express');
const router = express.Router();

const logger = require('../logger');
const indexPageUsecase = require('../application/usecase/indexPageUsecase');

const toRenderableData = (indexData) => {
    const [trainings, achievements] = indexData;
    const renderableTrainings = trainings.map(tr => {
        return {
            id: tr.id(),
            name: tr.name(),
            velocity: tr.velocity(),
            unit: tr.unit()
        };
    });
    const achievedSet = new Set();
    achievements.forEach(achievement => achievedSet.add(achievement.trainingId()));
    return {trainings: renderableTrainings, achievedSet};
}

router.get('/', async (req, res) => {
    logger.info('request GET to /');
    const indexData = await indexPageUsecase.createIndexData('');
    res.json(toRenderableData(indexData));
});

module.exports = router;