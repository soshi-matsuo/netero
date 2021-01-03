class AchievementAggregate {
    #trainingId;
    #achievements;

    constructor(trainingId, achievements) {
        this.#trainingId = trainingId;
        this.#achievements = achievements;
    }
}

module.exports = AchievementAggregate;
