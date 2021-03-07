const progress = {
    max: 1000,
    current: 100,

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

const progressBar = document.querySelector('.storage-progress');

const updateProgressBar = () => {
    progressBar.style.width = `${progress.getProportionUsed()*100}%`;
}

updateProgressBar();