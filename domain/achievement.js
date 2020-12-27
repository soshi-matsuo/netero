class Achievement {
    #trainingId;
    #date;

    constructor(trainingId, date) {
        this.#trainingId = trainingId;
        this.#date = date;
    }

    trainingId() {
        return this.#trainingId;
    }

    date() {
        return this.#date;
    }
}

module.exports = Achievement;
