// Highlights the current section's name in the navbar when scrolled or clicked
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links ul li a');

function setActiveLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset for navbar
      const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');  // adds active to current section link
    }
  });
}

window.addEventListener('scroll', setActiveLink); //runs on scroll
setActiveLink(); //runs on page load


// counter up animation for hero section
function countUp(element, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 60); // speed control

  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + "+";
    }
  }, 16);
}

// Call it on page load
countUp(document.querySelector(".experience-number"), 1);
countUp(document.querySelector(".projects-number"), 5);


