const dataSource = require('../infrastructure/trainingDataSource');
const Training = require('../domain/training');

class TrainingService {
    constructor() {

    }

    save(formData) {
        console.log(formData);
        const training = new Training(1, formData.name, formData.velocity, formData.unit);
        dataSource.save(training);
    }
}

module.exports = new TrainingService();
