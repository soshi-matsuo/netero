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
        if ((await achievementService.find({trainingId, date})).length > 0) return false;

        achievementService.save(new Achievement(trainingId, date));
        return true;
    }
}

module.exports = new AchievementRegistrationUsecase();
