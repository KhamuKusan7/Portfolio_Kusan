function countUp(element, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 60); // speed control

  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

// Call it on page load
countUp(document.querySelector('.experience-number'), 1);
countUp(document.querySelector('.projects-number'), 5);