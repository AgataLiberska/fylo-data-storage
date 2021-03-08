class Progress {

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
    }

    remove(size) {
        this.current -= size;
    }

    getRemaining() {
        return this.max - this.current;
    }

    getProportionUsed() {
        return this.current/this.max;
    }
}

const storage = new Progress(1000,815);

const progressBar = document.querySelector('.component__storage__progress');
const used = document.querySelector('.component__storage__used');
const modal = document.querySelector('.component__storage__modal__num');

const updateProgressBar = () => {
    progressBar.style.width = `${storage.getProportionUsed()*100}%`;
    used.textContent = `${storage.getCurrent()} GB`;
    modal.textContent = `${storage.getRemaining()}`;
}

updateProgressBar();

// const increase = setInterval(() => {
    
//     storage.add(100);
//     if (storage.current === storage.max) {
//         clearInterval(increase);
//     }
    
//     updateProgressBar();
// }, 1000)