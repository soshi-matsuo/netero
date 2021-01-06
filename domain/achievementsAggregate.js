class AchievementsAggregate {
    #training;
    #achievements;

    constructor(training, achievements) {
        this.#training = training;
        this.#achievements = achievements;
    }

    aggregateVelocity() {
        return this.#training.velocity() * this.#achievements.length;
    }
}

module.exports = AchievementsAggregate;
