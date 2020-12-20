const trainingService = require('../service/trainingService');
const uuid = require('uuid');

class TrainingUsecase {
    constructor() {

    }

    async getAll() {
        return await trainingService.getAll();
    }

    save(formData) {
        const id = uuid.v4();
        trainingService.save(id, formData);
    }
}

module.exports = new TrainingUsecase();