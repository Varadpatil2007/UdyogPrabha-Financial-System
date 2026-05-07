const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // You can integrate Firebase or Google Sheets API here.
  
  alert('Thanks for contacting UDYOG PRABHA! We will get back to you soon.');
  form.reset();
});
