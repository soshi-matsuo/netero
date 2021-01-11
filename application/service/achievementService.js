const dataSource = require('../../infrastructure/achievementDataSource');

class AchievementService {
    save(achievement) {
        dataSource.save(achievement);
    }

    async find(option) {
        return await dataSource.find(option);
    }
}

module.exports = new AchievementService();
