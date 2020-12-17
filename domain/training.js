class Training {
    #id;
    #name;
    #velocity;
    #unit;

    constructor(id, name, velocity, unit) {
        this.#id = id;
        this.#name = name;
        this.#velocity = velocity;
        this.#unit = unit;
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
}

module.exports = Training;
