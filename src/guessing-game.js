class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let res = Math.ceil((this.min + this.max) / 2);
        this.try = res;
        return res;
    }

    lower() {
        this.max = this.try;
    }

    greater() {
        this.min = this.try;
    }
}

module.exports = GuessingGame;
