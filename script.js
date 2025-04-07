// Simple animations and interactions for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Simple form validation
    const emailForms = document.querySelectorAll('.email-signup');
    
    emailForms.forEach(form => {
      const input = form.querySelector('input');
      const button = form.querySelector('button');
      
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
          showFormError(input, 'Please enter your email');
        } else if (!emailRegex.test(email)) {
          showFormError(input, 'Please enter a valid email');
        } else {
          // Success - would normally submit to server
          input.style.borderColor = '#56ff8a';
          input.value = '';
          
          // Show success message
          const successMessage = document.createElement('p');
          successMessage.textContent = 'Thanks! We\'ll be in touch soon.';
          successMessage.style.color = '#56ff8a';
          successMessage.style.marginTop = '8px';
          
          // Remove any existing messages
          const existingMessage = form.querySelector('p');
          if (existingMessage) {
            form.removeChild(existingMessage);
          }
          
          form.appendChild(successMessage);
        }
      });
      
      // Reset validation on input
      input.addEventListener('input', function() {
        input.style.borderColor = '';
        const errorMessage = form.querySelector('p');
        if (errorMessage) {
          form.removeChild(errorMessage);
        }
      });
    });
    
    function showFormError(input, message) {
      input.style.borderColor = '#ff5c5c';
      
      // Create error message
      const errorMessage = document.createElement('p');
      errorMessage.textContent = message;
      errorMessage.style.color = '#ff5c5c';
      errorMessage.style.marginTop = '8px';
      
      // Remove any existing messages
      const existingMessage = input.parentNode.querySelector('p');
      if (existingMessage) {
        input.parentNode.removeChild(existingMessage);
      }
      
      input.parentNode.appendChild(errorMessage);
    }
  
    // Simple animation for feature sections
    const featureSections = document.querySelectorAll('.feature');
    
    // Simple scroll reveal effect
    window.addEventListener('scroll', function() {
      featureSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    });
    
    // Initialize sections with starting styles
    featureSections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial check
    window.dispatchEvent(new Event('scroll'));
  });

  