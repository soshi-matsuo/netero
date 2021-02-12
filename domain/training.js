class Training {
    #id;
    #name;
    #velocity;
    #unit;
    #userId;

    constructor(id, name, velocity, unit, userId) {
        this.#id = id;
        this.#name = name;
        this.#velocity = velocity;
        this.#unit = unit;
        this.#userId = userId;
    }

    id() {
        return this.#id;
    }

    name() {
        return this.#name;
    }

    velocity() {
        return this.#velocity;
    }

    unit() {
        return this.#unit;
    }

    userId() {
        return this.#userId;
    }
}

module.exports = Training;
