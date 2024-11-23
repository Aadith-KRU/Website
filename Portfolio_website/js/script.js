
window.addEventListener('scroll', function() {
    const fadeInSections = document.querySelectorAll('.fade-in');
    
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        let isValid = true;
        let errorMessage = "";

        
        if (nameInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your name.\n";
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your email.\n";
        } else if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        
        if (subjectInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter the subject.\n";
        }

        
        if (messageInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your message.\n";
        }

        if (!isValid) {
            
            alert(errorMessage);
        } else {
            
            alert("Your message has been sent successfully!");
        }
    });
});






