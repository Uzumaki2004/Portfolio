//Navigation bar 
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Form validation and submission
function handleSubmit(event) {
    event.preventDefault();
            
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
            
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
        };
            
        let isValid = true;
            
        // Validation
        if (!formData.name) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }
            
        if (!formData.email) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }
            
        if (!formData.subject) {
            document.getElementById('subject-error').textContent = 'Subject is required';
            isValid = false;
        }
            
        if (!formData.message) {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        } else if (formData.message.length < 10) {
            document.getElementById('message-error').textContent = 'Message must be at least 10 characters long';
            isValid = false;
        }
            
        if (isValid) {
        // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
                
        // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
                
        // Simulate network delay
            setTimeout(() => {
        // Reset form
            document.getElementById('contactForm').reset();
                    
        // Show success message
            document.getElementById('successMessage').style.display = 'block';
                    
        // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
                    
        // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
                }, 5000);
                }, 1500);
            }
        }
        
        // Email validation helper function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }