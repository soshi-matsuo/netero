class AchievementsAggregate {
    #training;
    #achievements;

    constructor(training, achievements) {
        this.#training = training;
        this.#achievements = achievements;
    }

    sumUpVelocities() {
        return this.#training.velocity() * this.#achievements.length;
    }

    extractAchievementsByMonth(year, month) {
        return this.#achievements.filter(achievement => achievement.date().indexOf(`${year}-${month}`) !== -1);
    }
}

module.exports = AchievementsAggregate;
