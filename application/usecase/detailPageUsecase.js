const AchievementsAggregate = require('../../domain/achievementsAggregate');
const trainingService = require('../service/trainingService');
const achievementService = require('../service/achievementService');

class DetailPageUsecase {
    async createTrainingDetailData(trainingId, year, month) {
        const trainingPromise = trainingService.findById(trainingId);
        const achievementsPromise = achievementService.find({ trainingId });
        const [training, achievements] = await Promise.all([trainingPromise, achievementsPromise]);

        const achievementsAggregate = new AchievementsAggregate(training, achievements);
        return { training, totalVelocity: achievementsAggregate.sumUpVelocities(), achievements: achievementsAggregate.extractAchievementsByMonth(year, month)};
    }
}

module.exports = new DetailPageUsecase();
