const TrainingModel = require('./models/trainingSchema');
const logger = require('../logger');

class TrainingDataSource {
    save(training) {
        const msg = new TrainingModel({
            id: training.id(),
            name: training.name(),
            velocity: training.velocity(),
            unit: training.unit()
        });
        msg.save()
            .then(doc => {
                logger.info('saved training: %j', doc);
            })
            .catch(err => {
                logger.error('error while saving training: %j', err);
            });
    }

    async getAll() {
        return await TrainingModel.find({});
    }

    async findById(trainingId) {
        return await TrainingModel.findOne({ id: trainingId });
    }
}

module.exports = new TrainingDataSource();
