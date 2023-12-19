

document.addEventListener("DOMContentLoaded", () => {

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
