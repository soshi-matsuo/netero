const dataSource = require('../../infrastructure/achievementDataSource');

class AchievementService {
    save(achievement) {
        dataSource.save(achievement);
    }

    async findOne(achievement) {
        return await dataSource.findOne(achievement);
    }
}

module.exports = new AchievementService();
