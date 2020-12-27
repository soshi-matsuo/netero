const uuid = require('uuid');
const trainingService = require('../service/trainingService');
const Training = require('../../domain/training');

class TrainingUsecase {
    async getAll() {
        return await trainingService.getAll();
    }

    save(formData) {
        const training = new Training(uuid.v4(), formData.name, formData.velocity, formData.unit);
        trainingService.save(training);
    }
}

module.exports = new TrainingUsecase();