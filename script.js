const faqToggle = document.querySelectorAll('.faqs')
for (let i = 0; i < faqToggle.length; i++) {
    faqToggle[i].addEventListener("click", function() { this.classList.toggle('faq-open') });
}

const images = document.querySelectorAll('.image');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxContent = document.querySelector('.lightbox-content');

images.forEach(image => {
    image.addEventListener('click', function() {
        lightboxContent.src = this.src;
        lightboxContainer.style.display = 'block';
    });
});

document.querySelector('.close-light').addEventListener('click', function() {
    lightboxContainer.style.display = 'none';
});

function darkMode() {
    const aDark = document.querySelectorAll('a')
    for (let i = 0; i < aDark.length; i++) {
        aDark[i].classList.toggle('a-darkmode');
    }
    const starDark = document.querySelectorAll('.star')
    for (let i = 0; i < starDark.length; i++) {
        starDark[i].classList.toggle('star-dark-mode');
    }
    // const closeDark = document.querySelectorAll('.close');
    // for (let i = 0; i < closeDark.length; i++) {
    //     closeDark[i].classList.toggle('close-dark-mode');
    // }
    const tskillsDark = document.querySelectorAll('.tskills')
    for (let i = 0; i < tskillsDark.length; i++) {
        tskillsDark[i].classList.toggle('tskills-dark-mode');
    }
    const imageDark = document.querySelectorAll('.image')
    for (let i = 0; i < imageDark.length; i++) {
        imageDark[i].classList.toggle('image-dark-mode');
    }
    const faqsDark = document.querySelectorAll('.faqs')
    for (let i = 0; i < faqsDark.length; i++) {
        faqsDark[i].classList.toggle('faqs-dark-mode');
    }
    const footerlinksDark = document.querySelectorAll('.footer-links')
    for (let i = 0; i < footerlinksDark.length; i++) {
        footerlinksDark[i].classList.toggle('footer-links-dark-mode');
    }
    document.getElementsByTagName('body')[0].classList.toggle('body-dark-mode');
    document.getElementsByClassName('darkmode')[0].classList.toggle('lightmode');
    document.getElementsByClassName('mobile-menu')[0].classList.toggle('mobile-menu-dark-mode');
    document.getElementById('main-nav').classList.toggle('main-nav-dark-mode');
    document.getElementsByClassName('home_button')[0].classList.toggle('home_button_dark_mode');
    document.getElementsByClassName('home_button')[1].classList.toggle('home_button_dark_mode');
    document.getElementsByClassName('mobile-menu-popout')[0].classList.toggle('mobile-menu-popout-dark-mode');
    document.getElementsByClassName('header')[0].classList.toggle('header-dark-mode');
    document.getElementsByClassName('hello_mh')[0].classList.toggle('hello_mh_dark_mode');
    document.getElementsByClassName('heidi_mh')[0].classList.toggle('heidi_mh_dark_mode');
    document.getElementsByClassName('aimage')[0].classList.toggle('aimage-dark-mode');
    document.getElementsByClassName('personal')[0].classList.toggle('personal-dark-mode');
    document.getElementById('gallery').classList.toggle('gallery-dark-mode');
    document.getElementById('gallery_star').classList.toggle('gallery-star-dark-mode');
    document.getElementById('name').classList.toggle('nem-darkmode');
    document.getElementById('email').classList.toggle('nem-darkmode');
    document.getElementById('message').classList.toggle('nem-darkmode');
    document.getElementsByClassName('button-primary')[0].classList.toggle('button-primary-dark-mode');
    document.getElementsByClassName('close')[0].classList.toggle('close-dark-mode');
}

function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menuButton').classList.toggle('close');
}

function menuclose() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menuButton').classList.remove('close');
}