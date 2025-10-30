// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const projectDescriptionInput = document.getElementById('project-description');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!nameInput.value || !emailInput.value || !projectDescriptionInput.value) {
    alert('Please fill in all the required fields.');
    return;
  }

  // Submit the form or perform other actions
  console.log('Form submitted successfully!');
  form.reset();
});

// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});