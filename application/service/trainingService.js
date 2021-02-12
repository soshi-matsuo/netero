const dataSource = require('../../infrastructure/trainingDataSource');

class TrainingService {
    async findByUserId(userId) {
        return await dataSource.findByUserId(userId);
    }

    save(training) {
        dataSource.save(training);
    }

    async findById(trainingId) {
        return await dataSource.findById(trainingId);
    }
}

module.exports = new TrainingService();
