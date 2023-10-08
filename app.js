// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         burger.classList.toggle('close');
//     });
// }
// navSlide();

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
    burger.classList.toggle('close');
    nav.classList.toggle('nav-active');
});