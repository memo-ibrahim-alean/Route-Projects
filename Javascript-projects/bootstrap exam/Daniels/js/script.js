// Setup and start animation!

var typed = new Typed('#element', {
  strings: ['Larry Daniels', 'Developer', 'Designer'],
  typeSpeed: 150,
  backSpeed: 82,
  // backDelay: 1000,
  loop: true,
});

// Get all the links in the navbar
const links = document.querySelectorAll('.navbar li a ');

// Add a click event listener to each link
links.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove the "active" class from the previously active link
    const activeLink = document.querySelector('.active');
    activeLink.classList.remove('active');

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});

var navbar = document.querySelector('nav');
var logoLink = document.querySelector('nav a');
var navbarLinks = document.querySelectorAll('.nav-item a');
const tabButtons = document.querySelectorAll('.nav-link');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

