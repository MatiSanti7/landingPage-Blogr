const connectButton = document.querySelector('.li-connect');
const contactToggleDesk = document.querySelector('.contacts-desktop');
const hambIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const contactsToggleMobile = document.querySelector('.contacts');
const connectMobile = document.querySelector('.li-connect__mobile');

connectButton.addEventListener('click', contactDesk);
hambIcon.addEventListener('click', menuToggle);
connectMobile.addEventListener('click', connectButtonMobile);

function contactDesk () {
    contactToggleDesk.classList.toggle('inactive');
}
function menuToggle () {
    mobileMenu.classList.toggle('inactive');
}
function connectButtonMobile () {
    contactsToggleMobile.classList.toggle('inactive');
}