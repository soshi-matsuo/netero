const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const trainingService = require("../service/trainingService");
const achievementService = require("../service/achievementService");

class IndexUsecase {
    getIndexData() {
        return Promise.all([this.getAllTrainings(), this.findTodayAchievements()]);
    }

    async findTodayAchievements() {
        const option = {
            date: dayjs().tz('Asia/Tokyo').format('YYYY-MM-DD')
        };
        return await achievementService.find(option);
    }

    async getAllTrainings() {
        return await trainingService.getAll();
    }
}

module.exports = new IndexUsecase();