const TrainingModel = require('./models/trainingSchema');

class TrainingDataSource {
    constructor() {
    }

    save(training) {
        const msg = new TrainingModel({
            id: training.id(),
            name: training.name(),
            velocity: training.velocity(),
            unit: training.unit()
        });
        msg.save()
            .then(doc => {
                console.log(doc);
            })
            .catch(err => {
                console.error(err);
            });
    }

    async getAll() {
        return await TrainingModel.find({});
    }
}

module.exports = new TrainingDataSource();
