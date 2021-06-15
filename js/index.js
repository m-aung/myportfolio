const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// add nav-open class
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// remove the nav open class to all nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
