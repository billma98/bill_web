let currentIndex = 0;

function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex <= 0) {
        // max out case
        currentIndex = 0;
    }
    else {
        // currentIndex > 0, just scoll left
        currentIndex--;
    }
    updateCarouselPosition(carousel, items);
}

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex >= (items.length - 1)) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    updateCarouselPosition(carousel, items);
}

function updateCarouselPosition(carousel, items) {
    const itemWidth = items[0].offsetWidth + 20; // Include margin
    carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}

let autoRoll = setInterval(scrollRightAuto, 2500);

function scrollRightAuto() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarouselPosition(carousel, items);
}

document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoRoll);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    autoRoll = setInterval(scrollRightAuto, 5000);
});

document.querySelector('.left-btn').addEventListener('click', scrollLeft);
document.querySelector('.right-btn').addEventListener('click', scrollRight);
