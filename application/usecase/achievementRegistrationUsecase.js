const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const achievementService = require('../service/achievementService');
const Achievement = require('../../domain/achievement');

class AchievementRegistrationUsecase {
    async save(trainingId) {
        const date = dayjs().tz('Asia/Tokyo').format('YYYY-MM-DD');
        const achievement = new Achievement(trainingId, date);
        const foundDoc = await achievementService.findOne(achievement);
        if (foundDoc) return false;

        achievementService.save(achievement);
        return true;
    }
}

module.exports = new AchievementRegistrationUsecase();
