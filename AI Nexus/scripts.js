// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const demoButtons = document.querySelectorAll('.interactive-demo');

    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Check our projects');
        });
    });
});

function toggleMenu() {
    const navList = document.querySelector('ul');
    navList.classList.toggle('show');
}