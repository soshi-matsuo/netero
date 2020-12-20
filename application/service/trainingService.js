const dataSource = require('../../infrastructure/trainingDataSource');
const Training = require('../../domain/training');
const trainingDataSource = require('../../infrastructure/trainingDataSource');

class TrainingService {
    constructor() {

    }

    async getAll() {
        return await trainingDataSource.getAll();
    }

    save(id, formData) {
        const training = new Training(id, formData.name, formData.velocity, formData.unit);
        dataSource.save(training);
    }
}

module.exports = new TrainingService();
