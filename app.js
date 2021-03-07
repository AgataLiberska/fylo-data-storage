const progress = {
    max: 1000,
    current: 815,

    getMax() {
        return this.max;
    },

    getCurrent() {
        return this.current;
    },
    
    add(size) {
        this.current += size;
    },

    remove(size) {
        this.current -= size;
    },

    getRemaining() {
        return this.max - this.current;
    },

    getProportionUsed() {
        return this.current/this.max;
    }
}

const progressBar = document.querySelector('.component__storage__progress');

const modal = document.querySelector('.component__storage__modal__num');

const updateProgressBar = () => {
    progressBar.style.width = `${progress.getProportionUsed()*100}%`;

    modal.textContent = `${progress.getRemaining()}`;
}

updateProgressBar();