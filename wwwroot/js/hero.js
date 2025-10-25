document.addEventListener("DOMContentLoaded", () => {

    const heroWrapper = document.querySelector('.hero-wrapper');
    if (!heroWrapper) return;

    const carousel = heroWrapper.querySelector('.hero-carousel');
    const backgrounds = carousel.querySelectorAll('.hero-bg');
    let index = 0;

    const showBg = (i) => {
        index = (i + backgrounds.length) % backgrounds.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        showBg(index + 1);
        console.log(index);
    }, 4000);

})