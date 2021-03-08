import { Progress } from './progress.js';

const progressBar = document.querySelector('.component__storage__progress');
const used = document.querySelector('.component__storage__used');
const modal = document.querySelector('.component__storage__modal__num');
const max = document.querySelector('.component__storage__max');

const updateProgressBar = () => {
    progressBar.style.width = `${storage.getProportionUsed()*100}%`;
    used.textContent = `${storage.getCurrent()} GB`;
    modal.textContent = `${storage.getRemaining()}`;
    max.textContent = `${storage.getMax()}`;
    if (storage.getCurrent() >= storage.getMax()) {
        used.style.color = `hsl(335, 100%, 65%)`;
        modal.style.color = `hsl(335, 100%, 65%)`;
    } else {
        used.style.color = `#DBD9FF`;
        modal.style.color = `#0F1B3D`; 
    }
}

const storage = new Progress(1000,815);
storage.onChange = updateProgressBar







updateProgressBar();

// const increase = setInterval(() => {
    
//     storage.add(100);
//     if (storage.current === storage.max) {
//         clearInterval(increase);
//     }
    
//     updateProgressBar();
// }, 1000)