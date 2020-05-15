const img = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
];

let count = img.length;
const cover = document.querySelector('.cover');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function createImages() {
    shuffle(img);
    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = `url('./images/${img[i]}')`;
        card.style.backgroundSize = 'cover';
        card.style.transform = `rotate(${randomInteger(-10, 25)}deg) translate(${randomInteger(-20, 35)}px, ${randomInteger(-5, 65)}px)`;
        cover.append(card);
    }    
}

createImages();

cover.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        event.target.classList.add('go');
        count--; 
    }

    if (count == 0) {
        cover.innerHTML = '';
        createImages();
        count = img.length;
    }    
});