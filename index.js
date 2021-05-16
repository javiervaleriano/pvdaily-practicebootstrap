let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function (e) {
        this.classList.toggle('animate__animated');
        this.classList.toggle('animate__shakeX');
    };
}

let otherTopics = document.querySelectorAll('.otherTopics-cols');
for (let i = 0; i < otherTopics.length; i++) {
    otherTopics[i].onclick = function (d) {
        this.classList.toggle('animate__animated');
        this.classList.toggle('animate__shakeY');
    };
}