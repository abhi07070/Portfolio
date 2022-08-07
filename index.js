AOS.init({
    offset:200,
    duration:1000
});

window.addEventListener('scroll', () => {
    NavHeader.classList.toggle('scrolling-active', window.scrollY > 20);
})
let mobileNav = document.querySelector('.mobile-navbar-btn');
let NavHeader = document.querySelector('.header');

let toggleNavbar = () => {
    NavHeader.classList.toggle("active");
};
mobileNav.addEventListener('click', () => toggleNavbar());

const bars = document.querySelectorAll('.progress-bar');
bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';
})