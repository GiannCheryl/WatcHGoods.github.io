document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var countryRegion = document.getElementById('country-region').value;
    var message = document.getElementById('message').value;
    var agreement = document.getElementById('agreement').checked;
  
    if (fullName.trim() === '') {
      alert('Please enter your full name');
    } else if (email.trim() === '') {
      alert('Please enter your email');
    } else if (countryRegion.trim() === '') {
      alert('Please enter your country/region');
    } else if (message.trim() === '') {
      alert('Please enter your message');
    } else if (!agreement) {
      alert('Please agree to receive a copy of your message');
    } else {
      // Form is valid, submit the form or perform further actions
      document.getElementById('contact-form').submit();
    }
  }