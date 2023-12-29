

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
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
    }
    
    

    function focusFormInput () {
        const inputElement = document.getElementById('firstName');
        if (inputElement) {
            inputElement.focus();
        }
    }

    let navLink = document.getElementById('navLink');
    if (navLink) {
        navLink.addEventListener('click', () => focusFormInput());
    }

    let heroLink = document.getElementById('heroLink');
    if (heroLink) {
        heroLink.addEventListener('click', () => focusFormInput());
    }

    let signUp = document.getElementById('signUpLink');
    if (signUp) {
        signUp.addEventListener('click', () => focusFormInput());
    }

    let startHere = document.getElementById('getStartedLink');
    if (startHere) {
        startHere.addEventListener('click', () => focusFormInput());
    }

    let learnMore = document.getElementById('learnMoreLink');
    if (learnMore) {
        learnMore.addEventListener('click', () => focusFormInput());
    }
    
    let contactLink = document.getElementById('ctaLink');
    if (contactLink) {
        contactLink.addEventListener('click', () => focusFormInput());
    }
    // target date
    const countDownDate = new Date("March 23, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    let distance = countDownDate - now;        
    // const countdownInterval = setInterval(() => {
    //     updateCountdown();
    //     distance -= 1000;
    //     if (distance < 0) {
    //         distance = 0; // Asegura que diff no sea negativo
    //     }
    // }, 1000);
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

        days.innerHTML = remainingDays.toString() + ' days -';
        hours.innerHTML = remainingHours < 10 ? '0' + remainingHours.toString() + ' hours -' : remainingHours.toString() + ' hours -';
        minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes.toString() + ' min -' : remainingMinutes.toString() + ' min -';
        seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds.toString() + ' sec': remainingSeconds.toString() + ' sec';
    }

    // updateCountdown();




    // Get image scroll elements
    const imageScroll = document.getElementById("imageScroll");
    const scrollLeftButton = document.getElementById("image-scroll-left");
    const scrollRightButton = document.getElementById("image-scroll-right");

    if (scrollLeftButton && imageScroll) {
        // Set up event listeners
        scrollLeftButton.addEventListener("click", function () {
            console.log('click left');
            // Scroll to the left by the width of the container
            imageScroll.scrollLeft -= imageScroll.clientWidth;
        });
    }
    
    if (scrollRightButton && imageScroll) {
        scrollRightButton.addEventListener("click", function () {
            console.log('click right');
            // Scroll to the right by the width of the container
            imageScroll.scrollLeft += imageScroll.clientWidth;
        });
    }
    
        // Get video slider elements
        const videoScroll = document.getElementById("videos");
        const videoLeftButton = document.getElementById("video-scroll-left");
        const videoRightButton = document.getElementById("video-scroll-right");
    
        if (videoLeftButton && videoScroll) {
            // Set up event listeners
            videoLeftButton.addEventListener("click", function () {
                console.log('click left');
                // Scroll to the left by the width of the container
                videoScroll.scrollLeft -= videoScroll.clientWidth;
            });
        }
        
        if (videoRightButton && videoScroll) {
            videoRightButton.addEventListener("click", function () {
                console.log('click right');
                // Scroll to the right by the width of the container
                videoScroll.scrollLeft += videoScroll.clientWidth;
            });
        }

});
