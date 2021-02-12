const date = require('../../date');
const trainingService = require("../service/trainingService");
const achievementService = require("../service/achievementService");

class IndexPageUsecase {
    createIndexData(userId) {
        console.log(userId);
        return Promise.all([this.getAllTrainingsForUser(userId), this.findTodayAchievements()]);
    }

    async findTodayAchievements() {
        const option = {
            date: date().tz('Asia/Tokyo').format('YYYY-MM-DD')
        };
        return await achievementService.find(option);
    }

    async getAllTrainingsForUser(userId) {
        return await trainingService.findByUserId(userId);
    }
}

module.exports = new IndexPageUsecase();