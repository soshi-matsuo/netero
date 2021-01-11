const AchievementModel = require('./models/achievementSchema');
const logger = require('../logger');
const Achievement = require('../domain/achievement');

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
        const achievementDoc = await AchievementModel.findOne({
            trainingId: achievement.trainingId(),
            date: achievement.date()
        });
        return new Achievement(achievementDoc.id, achievementDoc.date)
    }

    async find(option) {
        const achievements = await AchievementModel.find(option);
        return achievements.map(achievement => new Achievement(achievement.trainingId, achievement.date))
    }
}

module.exports = new AchievementDataSource();
