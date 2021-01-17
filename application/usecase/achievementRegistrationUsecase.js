const date = require('../../date');
const achievementService = require('../service/achievementService');
const Achievement = require('../../domain/achievement');

class AchievementRegistrationUsecase {
    async save(trainingId) {
        const achievedDate = date().tz('Asia/Tokyo').format('YYYY-MM-DD');
        if ((await achievementService.find({ trainingId, achievedDate})).length > 0) return false;

        achievementService.save(new Achievement(trainingId, achievedDate));
        return true;
    }
}

module.exports = new AchievementRegistrationUsecase();
