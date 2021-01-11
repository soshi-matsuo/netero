const Training = require('../../domain/training');
const AchievementsAggregate = require('../../domain/achievementsAggregate');
const trainingService = require('../service/trainingService');
const achievementService = require('../service/achievementService');

class DetailPageUsecase {
    async createTrainingDetailData(trainingId) {
        const trainingPromise = trainingService.findById(trainingId);
        const achievementsPromise = achievementService.find({ trainingId });
        const [training, achievements] = await Promise.all([trainingPromise, achievementsPromise]);

        const achievementsAggregate = new AchievementsAggregate(training, achievements);
        return { training, aggregateVelocity: achievementsAggregate.aggregateVelocity()};
    }
}

module.exports = new DetailPageUsecase();
