const dataSource = require('../../infrastructure/trainingDataSource');

class TrainingService {
    async getAll() {
        return await dataSource.getAll();
    }

    save(training) {
        dataSource.save(training);
    }
}

module.exports = new TrainingService();
