// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
const isHidden = getComputedStyle(nav).display === 'none';
nav.style.display = isHidden ? 'flex' : 'none';
});


// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();


// Smooth in-page scrolling (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', function(e){
const target = document.querySelector(this.getAttribute('href'));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth', block:'start'});
// close mobile nav after click
if(window.innerWidth <= 720 && nav.style.display === 'flex') nav.style.display = 'none';
}
});
});


// Small accessibility: allow ESC to close mobile nav
window.addEventListener('keydown', (e) => {
if(e.key === 'Escape' && window.innerWidth <= 720) nav.style.display = 'none';
});
