const dataSource = require('../../infrastructure/trainingDataSource');

class TrainingService {
    async getAll() {
        return await dataSource.getAll();
    }

    save(training) {
        dataSource.save(training);
    }

    async findById(trainingId) {
        return await dataSource.findById(trainingId);
    }
}

module.exports = new TrainingService();
