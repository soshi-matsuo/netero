const Training = require('../../domain/training');
const AchievementsAggregate = require('../../domain/achievementsAggregate');
const trainingService = require('../service/trainingService');
const achievementService = require('../service/achievementService');

class DetailPageUsecase {
    async createTrainingDetailData(trainingId) {
        const trainingDocPromise = trainingService.findById(trainingId);
        const achievementsPromise = achievementService.find({ trainingId });
        const [trainingDoc, achievements] = await Promise.all([trainingDocPromise, achievementsPromise]);

        const training = new Training(trainingDoc.id, trainingDoc.name, trainingDoc.velocity, trainingDoc.unit);
        const achievementsAggregate = new AchievementsAggregate(training, achievements);
        return { training, aggregateVelocity: achievementsAggregate.aggregateVelocity()};
    }
}

module.exports = new DetailPageUsecase();
