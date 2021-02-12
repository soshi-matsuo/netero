const uuid = require('uuid');
const trainingService = require('../service/trainingService');
const Training = require('../../domain/training');

class TrainingRegistrationUsecase {
    save(formData, userId) {
        const training = new Training(uuid.v4(), formData.name, formData.velocity, formData.unit, userId);
        trainingService.save(training);
    }
}

module.exports = new TrainingRegistrationUsecase();