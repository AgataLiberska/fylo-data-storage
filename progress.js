export class Progress {

    constructor(max, current = 0) {
        this.max = max;
        this.current = current;
    }

    getMax() {
        return this.max;
    }

    getCurrent() {
        return this.current;
    }
    
    add(size) {
        this.current += size;
        this.onChange();
    }

    remove(size) {
        this.current -= size;
        this.onChange();
    }

    getRemaining() {
        return this.max - this.current;
    }

    getProportionUsed() {
        return this.current/this.max;
    }

    changeMax(max) {
        this.max = max;
        this.onChange();
    }

    onChange() {

    }
}