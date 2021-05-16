const express = require('express');
const router = express.Router();

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
    const achievedIds = achievements.map(achievement => achievement.trainingId());
    return {trainings: renderableTrainings, achievedIds};
}

router.get('/', async (req, res) => {
    const indexData = await indexPageUsecase.createIndexData(req.user.sub);
    res.json(toRenderableData(indexData));
});

module.exports = router;