const AchievementModel = require('./models/achievementSchema');
const logger = require('../logger');

class AchievementDataSource {
    save(achievement) {
        const msg = new AchievementModel({
            trainingId: achievement.trainingId(),
            date: achievement.date()
        });
        msg.save()
            .then(doc => {
                logger.info('saved achievement: %j', doc);
            })
            .catch(err => {
                logger.error('error while saving achievement: %j', err);
            });
    }

    async findOne(achievement) {
        return await AchievementModel.findOne({
            trainingId: achievement.trainingId(),
            date: achievement.date()
        });
    }
}

module.exports = new AchievementDataSource();
