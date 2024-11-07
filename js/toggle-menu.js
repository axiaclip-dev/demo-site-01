// toggle-menu.js
const toggleButton = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav a');

toggleButton.addEventListener('click', () => {
    const isVisible = navMenu.classList.toggle('is-visible');
    toggleButton.setAttribute('aria-expanded', isVisible);
    toggleButton.innerHTML = isVisible 
        ? '<i class="fa-solid fa-xmark fa-2x"></i>' 
        : '<i class="fa-solid fa-bars fa-2x"></i>';
});

// メニューリストをクリックした際にメニューを閉じる
navMenu.addEventListener('click', () => {
    if (navMenu.classList.contains('is-visible')) {
        navMenu.classList.remove('is-visible');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>';
    }
});