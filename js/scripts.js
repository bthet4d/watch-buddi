

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let formData = {};
        for (element of contactForm.elements) {
            // Check if the element is an input/select/textarea and not a button
            if (element.tagName !== 'BUTTON' && element.name) {
                // For select elements, handle multiple options
                if (element.type === 'select-multiple') {
                    formData[element.name] = Array.from(element.selectedOptions).map(option => option.value);
                } else {
                    formData[element.name] = element.value;
                }
            }
        }
        console.log('Form Data ', formData);
        contactForm.reset(); 
        try {
            
            const response = await fetch('/server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Server Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    });
    

    function focusFormInput () {
        const inputElement = document.getElementById('firstName');
        if (inputElement) {
            inputElement.focus();
        }
    }
    
    let learnMore = document.getElementById('learnMoreLink');
    learnMore.addEventListener('click', () => focusFormInput());
    
    let clickHereLink = document.getElementById('clickHereLink');
    clickHereLink.addEventListener('click', () => focusFormInput());
    
    let navLink = document.getElementById('navLink');
    navLink.addEventListener('click', () => focusFormInput());
    
    let heroLink = document.getElementById('heroLink');
    heroLink.addEventListener('click', () => focusFormInput());
    
    let contactLink = document.getElementById('ctaLink');
    contactLink.addEventListener('click', () => focusFormInput());
    // target date
    const countDownDate = new Date("March 23, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    let distance = countDownDate - now;        
    const countdownInterval = setInterval(() => {
        updateCountdown();
        distance -= 1000;
        if (distance < 0) {
            distance = 0; // Asegura que diff no sea negativo
        }
    }, 1000);
    // Get the current date and time
    const updateCountdown = () => {
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.innerHTML = remainingDays.toString() + ' days - ';
        hours.innerHTML = remainingHours < 10 ? '0' + remainingHours.toString() + ' hours - ' : remainingHours.toString() + ' hours - ';
        minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes.toString() + ' min - ' : remainingMinutes.toString() + ' min - ';
        seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds.toString() + ' sec': remainingSeconds.toString() + ' sec';
    }

    updateCountdown();

});
