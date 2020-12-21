const dataSource = require('../../infrastructure/trainingDataSource');
const trainingDataSource = require('../../infrastructure/trainingDataSource');

class TrainingService {
    constructor() {

    }

    async getAll() {
        return await trainingDataSource.getAll();
    }

    save(training) {
        dataSource.save(training);
    }
}

module.exports = new TrainingService();
