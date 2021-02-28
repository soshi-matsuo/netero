const TrainingModel = require('./models/trainingSchema');
const logger = require('../logger');
const Training = require('../domain/training');

class TrainingDataSource {
    save(training) {
        const msg = new TrainingModel({
            id: training.id(),
            name: training.name(),
            velocity: training.velocity(),
            unit: training.unit(),
            userId: training.userId()
        });
        msg.save()
            .then(doc => {
                logger.info('saved training: %j', doc);
            })
            .catch(err => {
                logger.error('error while saving training: %j', err);
            });
    }

    async findByUserId(userId) {
        const trainings = await TrainingModel.find({ userId });
        return trainings.map(training => new Training(training.id, training.name, training.velocity, training.unit, userId));
    }

    async findById(trainingId) {
        const training = await TrainingModel.findOne({ id: trainingId });
        return new Training(
            training.id,
            training.name,
            training.velocity,
            training.unit,
            training.userId
        );
    }

    async getAll() {
        const trainings = await TrainingModel.find({});
        return trainings.map(training => new Training(training.id, training.name, training.velocity, training.unit));
    }
}

module.exports = new TrainingDataSource();
